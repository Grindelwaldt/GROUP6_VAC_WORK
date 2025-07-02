// src/pages/TeamSelectionLobbyPage.js
import React from 'react';

const TeamSelectionLobbyPage = ({
    hasSelectedTeam, selectedTeam, handleTeamSelect, handleLeaveLobby,
    currentTeamMembers, setCurrentPage,
    setWeaponSelectionTimer, setPurchasedWeapons, setEquippedWeapon,
    setPlayerPoints, setPlayerHealth, weaponsData
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Select Your Team</h1>
                <p className="text-lg text-gray-600 text-center mb-6">
                    {hasSelectedTeam ? `You have joined ${selectedTeam}.` : 'Choose a team to join the game.'}
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
                                setWeaponSelectionTimer(60);
                                const initialWeapons = [weaponsData[0], weaponsData[1]];
                                setPurchasedWeapons(initialWeapons.map(w => ({ ...w })));
                                setEquippedWeapon({ ...weaponsData[0] });
                                setPlayerPoints(1000);
                                setPlayerHealth(100);
                                setCurrentPage('weaponSelection');
                            }}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            Ready!
                        </button>
                        
                        {showWaitingMessage && (
                            <div className="mt-4 p-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md animate-fade-in">
                                Just waiting for other team.
                            </div>
                        )}
                        
                        <button
                            onClick={() => {
                                // Reset team selection state
                                handleTeamSelect(null);
                                setIsReadyClicked(false); 
                                setShowWaitingMessage(false); 
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