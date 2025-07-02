// src/pages/SpectatorGameFeedPage.js
import React from 'react';

const SpectatorGameFeedPage = ({
    currentLobbyName, watchingPlayerName, showDeathMessage, killedPlayerName,
    showLobbyDropdown, setShowLobbyDropdown, availableLobbies,
    handleSelectLobbyToSpectate, setCurrentPage, gameMode, teams, players,
    handleWatchPlayer, watchingPlayerId
}) => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black flex">
            <div className="flex-grow flex flex-col items-center justify-center p-4 relative">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Live Game Feed (Spectator)</h1>
                {currentLobbyName && (
                    <p className="text-xl font-bold text-purple-400 mb-4">
                        Currently viewing lobby: {currentLobbyName}
                    </p>
                )}
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xl font-bold flex-grow">
                    {watchingPlayerName ? (
                        <p>Watching: <span className="text-blue-600">{watchingPlayerName}&apos;s</span> Feed</p>
                    ) : (
                        <p>Select a player from the sidebar to view their live feed.</p>
                    )}
                </div>

                {showDeathMessage && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
                        <p className="font-bold text-lg">{killedPlayerName} was eliminated!</p>
                    </div>
                )}

                <div className="fixed top-4 right-4 z-50">
                    <button
                        onClick={() => setShowLobbyDropdown(!showLobbyDropdown)}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center gap-2"
                        title="Switch Lobby"
                    >
                        Switch Lobby
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    {showLobbyDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 max-h-60 overflow-y-auto custom-scrollbar">
                            {availableLobbies.length === 0 ? (
                                <p className="text-gray-500 px-4 py-2">No active lobbies</p>
                            ) : (
                                availableLobbies.map(lobby => (
                                    <a
                                        key={lobby.id}
                                        href="#"
                                        onClick={() => handleSelectLobbyToSpectate(lobby.id, lobby.lobbyName)}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {lobby.lobbyName}
                                    </a>
                                ))
                            )}
                            <div className="border-t border-gray-200 mt-1 pt-1">
                                <a
                                    href="#"
                                    onClick={() => { setCurrentPage('spectatorLobby'); setShowLobbyDropdown(false); }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold"
                                >
                                    Back to Lobbies
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-80 bg-white shadow-xl p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-3">Scores</h2>
                {gameMode === 'singlePlayer' ? (
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Individual Scores</h3>
                        {players.length === 0 ? (
                            <p className="text-gray-500">No players to display.</p>
                        ) : (
                            <ul className="space-y-2">
                                {players.map(player => (
                                    <li
                                        key={player.id}
                                        className={`flex justify-between items-center bg-gray-100 p-2 rounded-md cursor-pointer hover:bg-gray-200 transition duration-150 ease-in-out
                                            ${watchingPlayerId === player.id ? 'border-2 border-blue-500 bg-blue-100' : ''}`}
                                        onClick={() => handleWatchPlayer(player.id, player.name)}
                                    >
                                        <span className="font-medium text-gray-700">{player.name}</span>
                                        <span className="font-bold text-lg text-green-600">{player.score}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ) : (
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Team Scores</h3>
                        {teams.length === 0 ? (
                            <p className="text-gray-500">No teams to display.</p>
                        ) : (
                            <div className="space-y-4">
                                {teams.map(team => (
                                    <div key={team.id} className="bg-blue-50 p-3 rounded-lg shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-blue-800 text-lg">{team.name}</span>
                                            <span className="font-extrabold text-blue-800 text-xl">{team.score}</span>
                                        </div>
                                        <h4 className="text-sm font-medium text-gray-600 mb-1">Players:</h4>
                                        <ul className="space-y-1 pl-4">
                                            {team.players.map(player => (
                                                <li
                                                    key={player.id}
                                                    className={`flex justify-between text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out
                                                        ${watchingPlayerId === player.id ? 'font-bold text-blue-700' : ''}`}
                                                    onClick={() => handleWatchPlayer(player.id, player.name)}
                                                >
                                                    <span>{player.name}</span>
                                                    <span>{player.score}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpectatorGameFeedPage;