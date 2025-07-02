// utils/screen.js
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const getOrientation = () => {
  if (window.matchMedia("(orientation: portrait)").matches) {
    return "portrait";
  }
  return "landscape";
};

export const setupOrientationListener = (callback) => {
  const handleOrientationChange = () => {
    callback(getOrientation());
  };

  // Initial check
  handleOrientationChange();

  // Add event listener
  window.addEventListener("resize", handleOrientationChange);

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", handleOrientationChange);
  };
};

export const lockOrientation = async () => {
  if (screen.orientation && screen.orientation.lock) {
    try {
      await screen.orientation.lock('portrait');
    } catch (err) {
      console.warn('Orientation lock failed:', err);
    }
  }
};

export const unlockOrientation = () => {
  if (screen.orientation && screen.orientation.unlock) {
    screen.orientation.unlock();
  }
};