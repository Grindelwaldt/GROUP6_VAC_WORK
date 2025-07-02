// src/pages/SpectatorLobbyPage.js
import React from 'react';

const SpectatorLobbyPage = ({ setCurrentPage, loginMessage, handleLoadSpectatorExistingLobbies }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Spectator Lobby</h1>
                {/* <p className="text-lg text-gray-600 text-center mb-6">View live games without needing to log in.</p> */}

                <button
                    onClick={() => handleLoadSpectatorExistingLobbies()}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full mt-6"
                >
                    View Live Lobbies
                </button>

                {/* {loginMessage && (
                    <p className={`text-center mt-4 ${loginMessage.includes('Error') || loginMessage.includes('exists') ? 'text-red-600' : 'text-green-600'} font-semibold`}>
                        {loginMessage}
                    </p>
                )} */}

                <button
                    onClick={() => setCurrentPage('lobby')}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-4"
                >
                    Back to Lobby
                </button>
            </div>
        </div>
    );
};

export default SpectatorLobbyPage;