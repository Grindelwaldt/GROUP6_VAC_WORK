window.onload = () => {
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const output = document.getElementById('output');

  if (!window.AR || !AR.Detector) {
    output.textContent = 'Error: AR.Detector not found. Check script loading order.';
    return;
  }

  const detector = new AR.Detector();

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then(stream => {
      video.srcObject = stream;
      video.play();

      video.addEventListener('play', () => {
        const detectLoop = () => {
          if (video.paused || video.ended) return;

          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          let markers = detector.detect(imageData);
          let usedZoom = false;

          if (markers.length === 0) {
            const zoomScale = 0.5;
            const cropWidth = canvas.width * zoomScale;
            const cropHeight = canvas.height * zoomScale;
            const cropX = (canvas.width - cropWidth) / 2;
            const cropY = (canvas.height - cropHeight) / 2;

            const croppedImage = ctx.getImageData(cropX, cropY, cropWidth, cropHeight);
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = cropWidth;
            tempCanvas.height = cropHeight;
            const tempCtx = tempCanvas.getContext('2d');
            const tempImageData = new ImageData(croppedImage.data, cropWidth, cropHeight);
            tempCtx.putImageData(tempImageData, 0, 0);

            const upscaleCanvas = document.createElement('canvas');
            upscaleCanvas.width = canvas.width;
            upscaleCanvas.height = canvas.height;
            const upscaleCtx = upscaleCanvas.getContext('2d');
            upscaleCtx.drawImage(tempCanvas, 0, 0, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);

            const upscaledData = upscaleCtx.getImageData(0, 0, canvas.width, canvas.height);
            markers = detector.detect(upscaledData);

            markers.forEach(marker => {
              marker._fromZoom = true;
              marker._zoomScale = zoomScale;
              marker._cropX = cropX;
              marker._cropY = cropY;
            });

            usedZoom = true;
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          if (markers.length > 0) {
            output.textContent = 'Detected marker IDs: ' + markers.map(m => m.id).join(', ');

            markers.forEach(marker => {
              const corners = marker._fromZoom
                ? marker.corners.map(c => ({
                    x: c.x * marker._zoomScale + marker._cropX,
                    y: c.y * marker._zoomScale + marker._cropY
                  }))
                : marker.corners;

              ctx.beginPath();
              ctx.moveTo(corners[0].x, corners[0].y);
              for (let i = 1; i < corners.length; i++) {
                ctx.lineTo(corners[i].x, corners[i].y);
              }
              ctx.closePath();
              ctx.lineWidth = 3;
              ctx.strokeStyle = 'red';
              ctx.stroke();

              ctx.font = '18px Arial';
              ctx.fillStyle = 'yellow';
              ctx.fillText('ID: ' + marker.id, corners[0].x, corners[0].y - 10);
            });
          } else {
            output.textContent = 'No markers detected';
          }

          requestAnimationFrame(detectLoop);
        };

        detectLoop();
      });
    })
    .catch(err => {
      output.textContent = 'Error accessing camera: ' + err.message;
    });
};
