import React from 'react';

const LobbyPage = ({ usernameInput, setCurrentPage, setShowAboutModal, showAboutModal }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">What are you up for?</h1>
                {usernameInput && (
                    <p className="text-xl font-bold text-gray-700 mb-4">Logged in as: {usernameInput}</p>
                )}
                <p className="text-lg text-gray-600 text-center mb-6">Are you ready to win the battle or cheer for the victor!</p>
                <div className="flex flex-col gap-4 w-full">
                    <button
                        onClick={() => setCurrentPage('createJoinLobby')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                    >
                        Play
                    </button>
                    <button
                        onClick={() => { setCurrentPage('spectatorLobby'); }}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                        Spectating
                    </button>
                </div>
                <button
                    onClick={() => setShowAboutModal(true)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mt-8"
                >
                    Info
                </button>
            </div>

            {showAboutModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Some Rules</h2>
                        <p className="text-gray-700">
                            Shooters have the option to play solo against each other or in teams. Shooters can purchase weapons with their points.
                        </p>
                        <p className="text-gray-700">
                            Spectators can see the live feed of a game of players and what each players score is.
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowAboutModal(false)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LobbyPage;