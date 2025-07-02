// src/pages/NumberAssignmentPage.js
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { getNumFromImage } from './get_num_from_image';

const NumberAssignmentPage = ({
    handleLeaveLobby,
    handleScanId, // function to send the scanned id to the backend and continue
    numberAssignmentMessage,
    setCurrentPage
}) => {
    const webcamRef = useRef(null);
    const [scannedId, setScannedId] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanError, setScanError] = useState('');

    // Function to capture image and send to backend for ID extraction
    const handleScanBox = async () => {
        setIsScanning(true);
        setScanError('');
        if (webcamRef.current) {
            // Assume webcamRef.current is a <video> or <Webcam> component
            const video = webcamRef.current.video; // or .video if using react-webcam
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

            // Now pass imageData to getNumFromImage
            const markerIds = getNumFromImage(imageData);
            if (markerIds && markerIds.length > 0) {
                try {
                    // Call the backend with the first detected marker ID
                    const id = await handleScanId(markerIds[0]);
                    console.log('Scanned ID:', id);
                    setScannedId(id);
                } catch (err) {
                    setScanError('Failed to scan ID. Please try again.');
                }
            } else {
                setScanError('No marker detected. Please try again.');
            }
        }
        setIsScanning(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Scan Item ID</h1>
                <p className="text-lg text-gray-600 text-center mb-6">
                    Please align the item ID inside the box and tap Scan to continue.
                </p>

                <div className="w-full flex flex-col items-center gap-4">
                    <div className="relative w-64 h-48 bg-black rounded-lg overflow-hidden flex items-center justify-center">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className="w-full h-full object-cover"
                            videoConstraints={{ facingMode: 'environment' }}
                        />
                        {/* Visual scan box overlay */}
                        <div className="absolute inset-0 border-4 border-blue-500 rounded-lg pointer-events-none"></div>
                    </div>
                    <button
                        onClick={handleScanBox}
                        disabled={isScanning}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 mt-2"
                    >
                        {isScanning ? 'Scanning...' : 'Scan'}
                    </button>
                </div>

                {scanError && (
                    <p className="text-center mt-4 text-red-600 font-semibold">{scanError}</p>
                )}
                {scannedId && (
                    <p className="text-center mt-4 text-green-600 font-semibold">Scanned ID: {scannedId}</p>
                )}
                {numberAssignmentMessage && (
                    <p className={`text-center mt-4 ${numberAssignmentMessage.includes('Error') || numberAssignmentMessage.includes('Incorrect') ? 'text-red-600' : 'text-green-600'} font-semibold`}>
                        {numberAssignmentMessage}
                    </p>
                )}

                <button
                    onClick={handleLeaveLobby}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-4"
                >
                    Back to Lobby Selection
                </button>
            </div>
        </div>
    );
};

export default NumberAssignmentPage;