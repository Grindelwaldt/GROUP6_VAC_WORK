// // src/pages/PlayerGameFeedPage.js
// "use client";

// import React from 'react';
// import { getHealthColorClass, getTeamColorClass } from '../utils/gameData.js'; // Corrected import path and added getTeamColorClass

// const PlayerGameFeedPage = ({
//     selectedTeam, teams, gameTimer, playerHealth, maxPlayerHealth,
//     equippedWeapon, handleWeaponAction, isPlayerDead, isReloading,
//     needsReload, reloadMessage, showDeathMessage, killedPlayerName,
//     showDamageMessage, damageMessageText, showRedGlow, showHealMessage,
//     healMessageText, showGreenGlow, purchasedWeapons, handleSelectItem,
//     handleLeaveGame, showLeaveGameConfirmModal, savingProgress,
//     confirmLeaveGame, cancelLeaveGame, takeDamage, handleUsePowerUp,
//     handleReloadWeapon
// }) => {
//     // getTeamColorClass is now imported from gameData.js
//     const teamColors = getTeamColorClass(selectedTeam);

//     return (
//         <div className={`min-h-screen w-full bg-gradient-to-br from-gray-900 to-black flex flex-col ${showRedGlow ? 'screen-glow-red' : ''} ${showGreenGlow ? 'screen-glow-green' : ''}`}>
//             <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
//                 <div className="flex items-center gap-4">
//                     <div className="flex gap-4">
//                         {teams.map(team => (
//                             <span key={team.id} className="text-xl font-bold">
//                                 {team.name}: <span className="text-yellow-300">{team.score}</span>
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-700 text-white font-bold text-2xl px-4 py-2 rounded-full shadow-lg z-50">
//                     Game Time: {Math.floor(gameTimer / 60).toString().padStart(2, '0')}:{(gameTimer % 60).toString().padStart(2, '0')}
//                 </div>
//                 <div className="flex flex-col items-end gap-1">
//                     <div className="bg-gray-700 rounded-full h-8 w-48 overflow-hidden shadow-lg">
//                         <div
//                             className={`${getHealthColorClass(playerHealth, maxPlayerHealth)} h-full flex items-center justify-center transition-all duration-300`}
//                             style={{ width: `${(playerHealth / maxPlayerHealth) * 100}%` }}
//                         >
//                             <span className="text-white text-base font-bold">
//                                 Health: {playerHealth}/{maxPlayerHealth}
//                             </span>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
//                         <span>Ammo: {equippedWeapon ? `${equippedWeapon.currentAmmo}/${equippedWeapon.ammoCapacity === Infinity ? '∞' : equippedWeapon.ammoCapacity}` : 'N/A'}</span>
//                         <div className="bg-gray-500 rounded-full h-4 w-20 overflow-hidden">
//                             <div
//                                 className="bg-blue-400 h-full transition-all duration-300"
//                                 style={{ width: `${equippedWeapon ? (equippedWeapon.currentAmmo / equippedWeapon.ammoCapacity) * 100 : 0}%` }}
//                             ></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex-grow flex flex-col items-center justify-center p-4 relative">
//                 <p className="text-lg text-gray-600 text-center mb-6">
//                     <span className={`font-bold ${teamColors.text}`}>
//                         You are in Team Mode: {selectedTeam || 'Not Selected'}.
//                     </span>
//                 </p>
//                 <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xl font-bold flex-grow relative">
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                         <div className="relative w-8 h-8 flex items-center justify-center">
//                             <div className="absolute w-full h-0.5 bg-gray-400"></div>
//                             <div className="absolute h-full w-0.5 bg-gray-400"></div>
//                         </div>
//                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-400"
//                              style={{ width: '115.2px', height: '115.2px' }}></div>
//                     </div>
//                     Game Content Area
//                 </div>

//                 <button
//                     onClick={handleWeaponAction}
//                     disabled={!equippedWeapon || (equippedWeapon.ammoCapacity !== Infinity && equippedWeapon.currentAmmo <= 0) || isReloading}
//                     className={`fixed right-4 top-1/2 transform -translate-y-1/2 rounded-full w-20 h-20 flex items-center justify-center shadow-xl transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4
//                         ${!equippedWeapon || (equippedWeapon.ammoCapacity !== Infinity && equippedWeapon.currentAmmo <= 0) || isReloading ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : `${teamColors.bg} ${teamColors.hoverBg} text-white ${teamColors.focusRing}`} z-50`}
//                 >
//                     <span className="font-bold text-xl">
//                         FIRE!
//                     </span>
//                 </button>

//                 <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
//                     <button
//                         onClick={() => takeDamage(15)}
//                         disabled={isPlayerDead}
//                         className={`py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105
//                             ${isPlayerDead ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-red-700 hover:bg-red-800 text-white'}`}
//                     >
//                         Take 15 Damage
//                     </button>
//                     <button
//                         onClick={() => handleUsePowerUp(20)}
//                         disabled={isPlayerDead || playerHealth >= maxPlayerHealth}
//                         className={`py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105
//                             ${isPlayerDead || playerHealth >= maxPlayerHealth ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800 text-white'}`}
//                     >
//                         Use Powerup (+20 HP)
//                     </button>
//                 </div>

//                 <button
//                     onClick={handleReloadWeapon}
//                     disabled={isPlayerDead || !equippedWeapon || equippedWeapon.ammoCapacity === Infinity || isReloading || (equippedWeapon && equippedWeapon.currentAmmo === equippedWeapon.ammoCapacity)}
//                     className={`fixed left-4 top-1/2 transform translate-y-24 rounded-full w-20 h-20 flex items-center justify-center shadow-xl transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4
//                         ${isPlayerDead || !equippedWeapon || equippedWeapon.ammoCapacity === Infinity || isReloading || (equippedWeapon && equippedWeapon.currentAmmo === equippedWeapon.ammoCapacity) ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300'} z-50`}
//                 >
//                     <span className="font-bold text-xl">
//                         {isReloading ? '...' : 'RELOAD'}
//                     </span>
//                 </button>

//                 {reloadMessage && (
//                     <div className="absolute left-1/2 bottom-24 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50">
//                         {reloadMessage}
//                     </div>
//                 )}

//                 {showDeathMessage && (
//                     <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
//                         <p className="font-bold text-lg">{killedPlayerName} was eliminated!</p>
//                     </div>
//                 )}

//                 {showDamageMessage && (
//                     <div className="fixed bottom-4 left-4 bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-bold animate-fade-in-out-quick z-50">
//                         {damageMessageText}
//                     </div>
//                 )}

//                 {showHealMessage && (
//                     <div className="fixed bottom-20 left-4 bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-bold animate-fade-in-out-quick z-50">
//                         {healMessageText}
//                     </div>
//                 )}

//                 <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-end gap-4 z-50">
//                     {purchasedWeapons
//                         .filter(Boolean)
//                         .map(weapon => (
//                             <button
//                                 key={weapon.name}
//                                 onClick={() => handleSelectItem(weapon)}
//                                 disabled={isPlayerDead}
//                                 className={`py-2 px-4 rounded-lg shadow-md transition duration-300 font-semibold text-white
//                                     ${isPlayerDead ? 'bg-gray-500 cursor-not-allowed' :
//                                         equippedWeapon && equippedWeapon.name === weapon.name
//                                         ? `bg-black border-4 ${teamColors.bg}`
//                                         : 'bg-gray-600 hover:bg-gray-700'
//                                     }`}
//                             >
//                                 {weapon.name}
//                             </button>
//                         ))}
//                 </div>

//                 <button
//                     onClick={handleLeaveGame}
//                     className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300 z-50"
//                     title="Leave Game"
//                 >
//                     X
//                 </button>
//             </div>

//             {showLeaveGameConfirmModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//                     <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm flex flex-col gap-6">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Leave Game</h2>
//                         <p className="text-lg text-gray-700">
//                             Are you sure you want to leave the current game? Your progress will be saved.
//                         </p>
//                         {savingProgress && (
//                             <p className="text-blue-600 font-semibold text-center">Saving progress...</p>
//                         )}
//                         <div className="flex justify-end gap-4 mt-4">
//                             <button
//                                 onClick={cancelLeaveGame}
//                                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
//                                 disabled={savingProgress}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={confirmLeaveGame}
//                                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
//                                 disabled={savingProgress}
//                             >
//                                 Leave
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PlayerGameFeedPage;

// src/pages/PlayerGameFeedPage.js
import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { getHealthColorClass, getTeamColorClass } from '../utils/gameData.js';

//sound effects


const PlayerGameFeedPage = ({
    selectedTeam, teams, gameTimer, playerHealth, maxPlayerHealth,
    equippedWeapon, handleWeaponAction, isPlayerDead, isReloading,
    needsReload, reloadMessage, showDeathMessage, killedPlayerName,
    showDamageMessage, damageMessageText, showRedGlow, showHealMessage,
    healMessageText, showGreenGlow, purchasedWeapons, handleSelectItem,
    handleLeaveGame, showLeaveGameConfirmModal, savingProgress,
    confirmLeaveGame, cancelLeaveGame, takeDamage, handleUsePowerUp,
    handleReloadWeapon, playerPoints, playerName, handleShootExternal,
    handleDamageExternal, handleHealExternal, handleReloadExternal,
}) => {
    const teamColors = getTeamColorClass(selectedTeam);

    //sound effects
    // const shootSound = useRef(new Audio(shootSfx));
    // const reloadSound = useRef(new Audio(reloadSfx));
    // //const damageSound = useRef(new Audio(damageSfx));
    // const healSound = useRef(new Audio(healSfx));

    // Effect to play sound when showDamageMessage changes to true
    const webcamRef = useRef(null);

    const captureImage = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            // Do something with imageSrc (base64 string)
            console.log(imageSrc);
        }
    };

    useEffect(() => {
        if (showDamageMessage) {
            handleDamageExternal();
        }
    }, [showDamageMessage]);

    // Effect to play sound when showHealMessage changes to true
    useEffect(() => {
        if (showHealMessage) {
            handleHealExternal();
        }
    }, [showHealMessage]);

    // Enhanced handleWeaponAction to play shoot sound
    const handleShoot = () => {
        captureImage();
        if (!isPlayerDead && equippedWeapon && (equippedWeapon.ammoCapacity === Infinity || equippedWeapon.currentAmmo > 0) && !isReloading) {
            handleShootExternal();
            handleWeaponAction(); 
        }
    };

    // Enhanced handleReloadWeapon to play reload sound
    const handleReload = () => {
        if (!isPlayerDead && equippedWeapon && equippedWeapon.ammoCapacity !== Infinity && !isReloading && (equippedWeapon && equippedWeapon.currentAmmo !== equippedWeapon.ammoCapacity)) {
            handleReloadExternal();
            handleReloadWeapon(); // Call the original reload handler passed as prop
        }
    };

    return (
        <div className={`min-h-screen w-full bg-gradient-to-br from-gray-900 to-black flex flex-col ${showRedGlow ? 'screen-glow-red' : ''} ${showGreenGlow ? 'screen-glow-green' : ''}`}>
            <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-4">
                    <div className="flex gap-4">
                        {teams.map(team => (
                            <span key={team.id} className="text-xl font-bold">
                                {team.name}: <span className="text-yellow-300">{team.score}</span>
                            </span>
                        ))}
                        <span className="text-xl font-bold">
                         {playerName}: <span className="text-blue-400">{playerPoints}</span>
                        </span>
                    </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-700 text-white font-bold text-2xl px-4 py-2 rounded-full shadow-lg z-50">
                    Game Time: {Math.floor(gameTimer / 60).toString().padStart(2, '0')}:{(gameTimer % 60).toString().padStart(2, '0')}
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className="bg-gray-700 rounded-full h-8 w-48 overflow-hidden shadow-lg">
                        <div
                            className={`${getHealthColorClass(playerHealth, maxPlayerHealth)} h-full flex items-center justify-center transition-all duration-300`}
                            style={{ width: `${(playerHealth / maxPlayerHealth) * 100}%` }}
                        >
                            {/* <span className="text-white text-base font-bold">
                                Health: {playerHealth}/{maxPlayerHealth}
                            </span> */}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                        <span>Ammo: {equippedWeapon ? `${equippedWeapon.currentAmmo}/${equippedWeapon.ammoCapacity === Infinity ? '∞' : equippedWeapon.ammoCapacity}` : 'N/A'}</span>
                        <div className="bg-gray-500 rounded-full h-4 w-20 overflow-hidden">
                            <div
                                className="bg-blue-400 h-full transition-all duration-300"
                                style={{ width: `${equippedWeapon ? (equippedWeapon.currentAmmo / equippedWeapon.ammoCapacity) * 100 : 0}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center p-4 relative">
                <p className="text-lg text-gray-600 text-center mb-6">
                    <span className={`font-bold ${teamColors.text}`}>
                        You are in Team Mode: {selectedTeam || 'Not Selected'}.
                    </span>
                </p>
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xl font-bold flex-grow relative overflow-hidden">
                    {/* Camera preview using react-webcam */}
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="rounded-lg w-full h-full object-cover"
                        videoConstraints={{ facingMode: "environment" }}
                    />
                </div>

                <button
                    onClick={handleShoot}
                    disabled={!equippedWeapon || (equippedWeapon.ammoCapacity !== Infinity && equippedWeapon.currentAmmo <= 0) || isReloading}
                    className={`fixed right-4 top-1/2 transform -translate-y-1/2 rounded-full w-20 h-20 flex items-center justify-center shadow-xl transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4
                        ${isPlayerDead || !equippedWeapon || (equippedWeapon.ammoCapacity !== Infinity && equippedWeapon.currentAmmo <= 0) || isReloading ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : `${teamColors.bg} ${teamColors.hoverBg} text-white ${teamColors.focusRing}`} z-50`}
                >
                    <span className="font-bold text-xl">
                        FIRE!
                    </span>
                </button>

                {/* <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
                    <button
                        onClick={() => takeDamage(15)}
                        disabled={isPlayerDead}
                        className={`py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105
                            ${isPlayerDead ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-red-700 hover:bg-red-800 text-white'}`}
                    >
                        Take 15 Damage
                    </button>
                    <button
                        onClick={() => handleUsePowerUp(20)}
                        disabled={isPlayerDead || playerHealth >= maxPlayerHealth}
                        className={`py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105
                            ${isPlayerDead || playerHealth >= maxPlayerHealth ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800 text-white'}`}
                    >
                        Use Powerup (+20 HP)
                    </button>
                </div> */}

                <button
                    onClick={handleReload}
                    disabled={isPlayerDead || !equippedWeapon || equippedWeapon.ammoCapacity === Infinity || isReloading || (equippedWeapon && equippedWeapon.currentAmmo === equippedWeapon.ammoCapacity)}
                    className={`fixed left-4 top-1/2 transform translate-y-24 rounded-full w-20 h-20 flex items-center justify-center shadow-xl transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4
                        ${isPlayerDead || !equippedWeapon || equippedWeapon.ammoCapacity === Infinity || isReloading || (equippedWeapon && equippedWeapon.currentAmmo === equippedWeapon.ammoCapacity) ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300'} z-50`}
                >
                    <span className="font-bold text-xl">
                        {isReloading ? '...' : 'RELOAD'}
                    </span>
                </button>

                {reloadMessage && (
                    <div className="absolute left-1/2 bottom-24 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50">
                        {reloadMessage}
                    </div>
                )}

                {showDeathMessage && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
                        <p className="font-bold text-lg">{killedPlayerName} was eliminated!</p>
                    </div>
                )}

                {showDamageMessage && (
                    <div className="fixed bottom-4 left-4 bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-bold animate-fade-in-out-quick z-50">
                        {damageMessageText}
                    </div>
                )}

                {showHealMessage && (
                    <div className="fixed bottom-20 left-4 bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-bold animate-fade-in-out-quick z-50">
                        {healMessageText}
                    </div>
                )}

                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-end gap-4 z-50">
                    {purchasedWeapons
                        .filter(Boolean)
                        .map(weapon => (
                            <button
                                key={weapon.name}
                                onClick={() => handleSelectItem(weapon)}
                                disabled={isPlayerDead}
                                className={`py-2 px-4 rounded-lg shadow-md transition duration-300 font-semibold text-white
                                    ${isPlayerDead ? 'bg-gray-500 cursor-not-allowed' :
                                        equippedWeapon && equippedWeapon.name === weapon.name
                                        ? `bg-black border-4 ${teamColors.bg}`
                                        : 'bg-gray-600 hover:bg-gray-700'
                                    }`}
                            >
                                {weapon.name}
                            </button>
                        ))}
                </div>

                <button
                    onClick={handleLeaveGame}
                    className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300 z-50"
                    title="Leave Game"
                >
                    X
                </button>
            </div>

            {showLeaveGameConfirmModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm flex flex-col gap-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Leave Game</h2>
                        <p className="text-lg text-gray-700">
                            Are you sure you want to leave the current game? Your progress will be saved.
                        </p>
                        {savingProgress && (
                            <p className="text-blue-600 font-semibold text-center">Saving progress...</p>
                        )}
                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                onClick={cancelLeaveGame}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
                                disabled={savingProgress}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmLeaveGame}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                                disabled={savingProgress}
                            >
                                Leave
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlayerGameFeedPage;