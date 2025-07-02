
// aruco.js should be loaded in public/ and included as a script in your app.
// Use window.AR after the script is loaded.

let detector = null;
function getDetector() {
    if (!detector && window.AR) {
        detector = new window.AR.Detector();
    }
    return detector;
}

// imageData must be a Canvas ImageData object
export function getNumFromImage(imageData) {
    const detector = getDetector();
    if (!detector) {
        console.error('AR.Detector not loaded. Make sure aruco.js is loaded as a script.');
        return null;
    }
    const markers = detector.detect(imageData);
    if (markers.length > 0) {
        const numbers = [];
        for (let marker of markers) {
            numbers.push(marker.id);
        }
        return numbers; // Return the detected marker IDs as an array
    } else {
        return null; // No markers detected
    }
}