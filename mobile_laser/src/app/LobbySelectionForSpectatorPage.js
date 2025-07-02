// src/pages/LobbySelectionForSpectatorPage.js
import React from 'react';

const LobbySelectionForSpectatorPage = ({
    availableSpectatorLobbies, handleSelectLobbyToSpectate, setCurrentPage
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Select a Lobby to Spectate</h1>
                <p className="text-lg text-gray-600 text-center mb-6">Choose an active game lobby to view its live feed.</p>

                <div className="w-full">
                    {availableSpectatorLobbies.length === 0 ? (
                        <p className="text-gray-500 text-center">No active lobbies to spectate at the moment.</p>
                    ) : (
                        <ul className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar p-2 border border-gray-200 rounded-lg">
                            {availableSpectatorLobbies.map(lobby => (
                                <li
                                    key={lobby.id}
                                    className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out"
                                    onClick={() => handleSelectLobbyToSpectate(lobby.id, lobby.lobbyName)}
                                >
                                    <span className="font-semibold text-gray-800 text-lg">{lobby.lobbyName}</span>
                                    <span className="text-md text-gray-600">Players: {lobby.players_length}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button
                    onClick={() => setCurrentPage('spectatorLobby')}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-6"
                >
                    Back to Spectator Lobby
                </button>
            </div>
        </div>
    );
};

export default LobbySelectionForSpectatorPage;