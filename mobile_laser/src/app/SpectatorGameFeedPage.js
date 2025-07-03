// src/pages/SpectatorGameFeedPage.js
import React, { useEffect } from 'react';


const SpectatorGameFeedPage = ({
    currentLobbyName, watchingPlayerName, showDeathMessage, killedPlayerName,
    showLobbyDropdown, setShowLobbyDropdown, availableLobbies,
    handleSelectLobbyToSpectate, setCurrentPage, gameMode, spectTeams, players,
    handleWatchPlayer, watchingPlayerId, handleGetLobbyInfo
}) => {
    useEffect(() => {
        const interval = setInterval(() => {
            handleGetLobbyInfo();
        }, 1000 / 10); // 1/30 seconds = ~33.33 ms

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black flex">
            <div className="flex-grow flex flex-col items-center justify-center p-4 relative">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Live Game Feed (Spectator)</h1>
                {/* {currentLobbyName && (
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
                </div> */}

                {/* Team blocks displayed equally */}
                <div className="w-full flex flex-row gap-6 justify-center items-stretch mb-8">
                  {teams && teams.length > 0 ? (
                    teams.map(team => (
                      <div key={team.id} className="flex-1 bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col items-center min-w-[200px]">
                        <div className="flex flex-col items-center mb-2">
                          <span className="font-bold text-blue-800 text-2xl mb-1">{team.name}</span>
                          <span className="font-extrabold text-blue-800 text-3xl">{team.score}</span>
                        </div>
                        <h4 className="text-base font-medium text-gray-600 mb-2">Players:</h4>
                        <ul className="space-y-1 w-full">
                          {team.players.map(player => (
                            <li
                              key={player.id}
                              className={`flex justify-between text-base text-gray-700 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out ${watchingPlayerId === player.id ? 'font-bold text-blue-700' : ''}`}
                              onClick={() => handleWatchPlayer(player.id, player.name)}
                            >
                              <span>{player.name}</span>
                              <span>{player.score}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-xl font-bold w-full text-center">No teams to display.</p>
                  )}
                </div>

                {showDeathMessage && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
                        <p className="font-bold text-lg">{killedPlayerName} was eliminated!</p>
                    </div>
                )}

                <div className="fixed top-4 right-4 z-50">
                    <button
                        onClick={() => setCurrentPage('spectatorLobby')}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center gap-2"
                        title="Back to Lobby Selection"
                    >
                        Back to Lobby Selection
                    </button>
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
                        {spectTeams.length === 0 ? (
                            <p className="text-gray-500">No teams to display.</p>
                        ) : (
                            <div className="space-y-4">
                                {spectTeams.map(team => (
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
                                                    {/* <span>{player.score}</span> */}
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