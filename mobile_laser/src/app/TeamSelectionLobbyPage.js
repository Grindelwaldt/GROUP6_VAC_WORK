// src/pages/TeamSelectionLobbyPage.js
import React from 'react';

const TeamSelectionLobbyPage = ({
    hasSelectedTeam, selectedTeam, handleTeamSelect, handleLeaveLobby,
    currentTeamMembers, setCurrentPage,
    setWeaponSelectionTimer, setPurchasedWeapons, setEquippedWeapon,
    setPlayerPoints, setPlayerHealth, weaponsData, handlePlayerReady
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Select Your Team</h1>
                <p className="text-lg text-gray-600 text-center mb-6">
                    {hasSelectedTeam ? `You have joined ${selectedTeam}.` : ''}
                </p>

                {!hasSelectedTeam ? (
                    <div className="flex flex-col gap-4 w-full">
                        <button
                            onClick={() => handleTeamSelect('Team 1')}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
                        >
                            Join Team 1
                        </button>
                        <button
                            onClick={() => handleTeamSelect('Team 2')}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Join Team 2
                        </button>
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center gap-4">
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">Your Team: {selectedTeam}</h2>
                        <h3 className="text-xl font-semibold text-gray-700">Team Members:</h3>
                        <ul className="list-disc pl-5 text-gray-700 w-full max-w-xs text-left">
                            {currentTeamMembers.map(member => (
                                <li key={member.id} className="text-lg">{member.name}</li>
                            ))}
                        </ul>
                        <button
                            onClick={() => {
                                handlePlayerReady();
                            }}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            Ready!
                        </button>
                        {/* Pop up message for waiting */}
                        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-xs flex flex-col items-center">
                                <span className="text-lg font-bold text-gray-800 mb-2">Waiting for other players to join the game</span>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                // Reset team selection state
                                handleTeamSelect(null); // Pass null to clear selected team
                            }}
                            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 w-full mt-4"
                        >
                            Switch Team
                        </button>
                    </div>
                )}

                <button
                    onClick={() => { handleLeaveLobby(); }}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-8"
                >
                    Back to Lobby Selection
                </button>
            </div>
        </div>
    );
};

export default TeamSelectionLobbyPage;