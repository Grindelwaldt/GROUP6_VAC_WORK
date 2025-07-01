// src/pages/NumberAssignmentPage.js
import React, { useEffect } from 'react';

const NumberAssignmentPage = ({
    assignedPlayerNumber, setAssignedPlayerNumber, handleLeaveLobby,
    numberInput, setNumberInput,
    handleSubmitNumber,
    numberAssignmentMessage,
    setCurrentPage
}) => {
    // Effect to generate a number when entering the number assignment page
    useEffect(() => {
        if (assignedPlayerNumber === null) {
            const newNumber = Math.floor(Math.random() * 9000) + 1000;
            setAssignedPlayerNumber(newNumber);
        }
    }, [assignedPlayerNumber, setAssignedPlayerNumber]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Your Assigned Number</h1>
                <p className="text-lg text-gray-600 text-center mb-6">
                    Please enter the number displayed below to confirm your assignment.
                </p>

                {assignedPlayerNumber !== null && (
                    <div className="bg-blue-100 border-2 border-blue-500 text-blue-800 text-6xl font-bold p-8 rounded-lg shadow-inner mb-8">
                        {assignedPlayerNumber}
                    </div>
                )}

                <input
                    type="text"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className="w-full p-4 border-2 border-gray-300 rounded-lg text-center text-2xl font-bold text-black focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
                    placeholder="Enter your number here"
                    value={numberInput}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                            setNumberInput(value);
                        }
                    }}
                    onKeyPress={(e) => { if (e.key === 'Enter') handleSubmitNumber(); }}
                />

                <button
                    onClick={handleSubmitNumber}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 w-full mt-6"
                >
                    Submit Number
                </button>

                {numberAssignmentMessage && (
                    <p className={`text-center mt-4 ${numberAssignmentMessage.includes('Error') || numberAssignmentMessage.includes('Incorrect') ? 'text-red-600' : 'text-green-600'} font-semibold`}>
                        {numberAssignmentMessage}
                    </p>
                )}

                <button
                    onClick={() => {
                        handleLeaveLobby();
                        setAssignedPlayerNumber(null);
                        setNumberInput('');
                        // numberAssignmentMessage is cleared by App.js
                    }}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-4"
                >
                    Back to Lobby Selection
                </button>
            </div>
        </div>
    );
};

export default NumberAssignmentPage;