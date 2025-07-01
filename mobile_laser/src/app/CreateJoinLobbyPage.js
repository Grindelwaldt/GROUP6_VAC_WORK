// src/pages/CreateJoinLobbyPage.js
import React from 'react';

const CreateJoinLobbyPage = ({
    setCurrentPage, handleLoadExistingLobbies, 
    showCreateLobbySection, setShowCreateLobbySection,
    showJoinLobbySection, setShowJoinLobbySection,
    createLobby,
    availableLobbies,
    joinLobby,
    lobbyMessage,
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Game Lobbies</h1>
                <p className="text-lg text-gray-600 text-center mb-6">Choose an option to start or join a game.</p>

                {!showCreateLobbySection && !showJoinLobbySection && (
                    <div className="flex flex-col gap-4 w-full">
                        <button
                            onClick={() => { setShowCreateLobbySection(true); }}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            Create New Lobby
                        </button>
                        <button
                            onClick={() => { handleLoadExistingLobbies() }}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Join Existing Lobby
                        </button>
                    </div>
                )}

                {showCreateLobbySection && (
                    <div className="flex flex-col gap-4 w-full border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Create New Lobby</h2>
                        <button
                            onClick={createLobby}
                            className={`py-3 px-6 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105 bg-green-500 hover:bg-green-600 text-white`}
                        >
                            Create Lobby
                        </button>
                        <button
                            onClick={() => setShowCreateLobbySection(false)}
                            className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-2"
                        >
                            Back
                        </button>
                    </div>
                )}

                {showJoinLobbySection && (
                    <div className="flex flex-col gap-4 w-full border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Join Existing Lobby</h2>
                        <div className="w-full mt-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Available Lobbies (Waiting)</h3>
                            {availableLobbies.length === 0 ? (
                                <p className="text-gray-500 text-center">No lobbies currently waiting. Create one!</p>
                            ) : (
                                <ul className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar p-2 border border-gray-200 rounded-lg">
                                    {availableLobbies.map(lobby => (
                                        <li
                                            key={lobby.id}
                                            className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm cursor-pointer hover:bg-gray-200 transition duration-150"
                                            onClick={() => joinLobby(lobby.id)}
                                        >
                                            <span className="font-semibold text-gray-800">{lobby.lobbyName}</span>
                                            <span className="text-sm text-gray-600">Players: {lobby.players_length}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button
                            onClick={() => setShowJoinLobbySection(false)}
                            className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-2"
                        >
                            Back
                        </button>
                    </div>
                )}

                {lobbyMessage && (
                    <p className={`text-center mt-4 ${lobbyMessage.includes('Error') || lobbyMessage.includes('exists') ? 'text-red-600' : 'text-green-600'} font-semibold`}>
                        {lobbyMessage}
                    </p>
                )}

                <button
                    onClick={() => {
                        setCurrentPage('lobby');
                        setShowCreateLobbySection(false);
                        setShowJoinLobbySection(false);
                    }}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-6"
                >
                    Back to Main Menu
                </button>
            </div>
        </div>
    );
};

export default CreateJoinLobbyPage;