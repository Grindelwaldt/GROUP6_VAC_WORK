// src/pages/WeaponSelectionPage.js
import React from 'react';

const WeaponSelectionPage = ({
    weaponSelectionTimer,
    equippedWeapon, purchasedWeapons, handleSelectItem,
    playerPoints, showPurchaseConfirmModal, itemToPurchase,
    purchaseError, confirmPurchase, cancelPurchase,
    weaponSelectionError, handleStartGame, setCurrentPage,
    weaponsData
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex p-4 font-inter">
            <div className="fixed top-4 left-4 w-64 bg-white rounded-xl shadow-2xl p-4 z-40 overflow-y-auto max-h-[calc(100vh-32px)]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Your Selections</h2>
                {equippedWeapon ? (
                    <p className="text-gray-700 font-semibold">Equipped: {equippedWeapon.name}</p>
                ) : (
                    <p className="text-gray-500">No weapon equipped.</p>
                )}
                <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">Purchased Weapons</h3>
                {purchasedWeapons.length === 0 ? (
                    <p className="text-gray-500">No weapons purchased yet.</p>
                ) : (
                    <ul className="list-disc pl-6 text-gray-700" style={{ fontSize: '1.44rem', lineHeight: '2.52rem', width: '115%' }}>
                        {purchasedWeapons.map(weapon => (
                            <li key={weapon.name} style={{ fontSize: '1.44rem', marginBottom: '0.36rem', width: '115%' }}>
                                <button
                                    onClick={() => handleSelectItem(weapon)}
                                    className={`py-2.5 px-5 rounded-xl shadow-lg transition duration-300 font-semibold w-full text-left
                                        ${equippedWeapon && equippedWeapon.name === weapon.name ? 'bg-yellow-400 text-yellow-900 border-2 border-yellow-600' :
                                          purchasedWeapons.some(pw => pw.name === weapon.name) ? 'bg-green-400 text-white cursor-not-allowed' :
                                          'bg-green-200 text-green-800 hover:bg-green-300'}`}
                                    style={{ fontSize: '1.44rem', padding: '0.6rem 1.2rem', width: '115%' }}
                                >
                                    {weapon.name} (Ammo: {weapon.ammoCapacity === Infinity ? '∞' : weapon.currentAmmo})
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="flex-grow ml-72 flex flex-col items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8 relative">
                    {/* <div className="fixed top-4 right-4 bg-gray-800 text-white font-bold text-2xl px-4 py-2 rounded-full shadow-lg z-50">
                        {weaponSelectionTimer}s
                    </div> */}

                    {/* Team color for points display */}
                    <div
                        className="fixed top-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl px-6 py-2 rounded-full shadow-lg z-50"
                        style={{
                            background: (typeof window !== 'undefined' && window.selectedTeamColor) ? window.selectedTeamColor : (window?.getTeamColorClass ? window.getTeamColorClass(window.selectedTeam)?.bgColor : '#2563eb'),
                            color: '#fff',
                        }}
                    >
                        Points: {playerPoints}
                    </div>

                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 mt-16">Choose Your Gear</h1>

                    <div className="w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Free Weapons</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {weaponsData.filter(w => w.cost === 0).map(weapon => (
                                <button
                                    key={weapon.name}
                                    onClick={() => handleSelectItem(weapon)}
                                    disabled={purchasedWeapons.some(pw => pw.name === weapon.name)}
                                    className={`py-3 px-4 rounded-lg shadow-md transition duration-300 font-semibold
                                        ${equippedWeapon && equippedWeapon.name === weapon.name ? 'bg-yellow-400 text-yellow-900 border-2 border-yellow-600' :
                                          purchasedWeapons.some(pw => pw.name === weapon.name) ? 'bg-green-400 text-white cursor-not-allowed' :
                                          'bg-green-200 text-green-800 hover:bg-green-300'}`}
                                >
                                    {weapon.name} (Damage: {weapon.damage})
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="w-full mt-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available for Purchase</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {weaponsData.filter(w => w.cost > 0 && !purchasedWeapons.some(pw => pw.name === w.name)).map(weapon => (
                                <button
                                    key={weapon.name}
                                    onClick={() => handleSelectItem(weapon)}
                                    disabled={playerPoints < weapon.cost}
                                    className={`py-3 px-4 rounded-lg shadow-md transition duration-300 font-semibold
                                        ${playerPoints < weapon.cost ? 'bg-gray-300 text-gray-600 cursor-not-allowed' :
                                          'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                                >
                                    {weapon.name} (Cost: {weapon.cost} pts) (Damage: {weapon.damage})
                                </button>
                            ))}
                        </div>
                    </div>

                    {weaponSelectionError && (
                        <p className="text-red-600 font-semibold text-center mt-4">{weaponSelectionError}</p>
                    )}

                    <button
                        onClick={handleStartGame}
                        disabled={!equippedWeapon}
                        className={`py-4 px-6 rounded-lg font-bold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 w-full mt-8
                            ${!equippedWeapon ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-300'}`}
                    >
                        Start Game
                    </button>

                    <button
                        onClick={() => setCurrentPage('teamSelectionLobby')}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-full mt-4"
                    >
                        Back
                    </button>
                </div>
            </div>

            {showPurchaseConfirmModal && itemToPurchase && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm flex flex-col gap-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Confirm Purchase</h2>
                        <p className="text-lg text-gray-700">
                            Do you want to buy <span className="font-semibold">{itemToPurchase.name}</span> for <span className="font-bold text-green-600">${itemToPurchase.cost}</span>?
                        </p>
                        <p className="text-md text-gray-600">
                            Your current points: <span className="font-bold text-blue-600">{playerPoints}</span>
                        </p>
                        {purchaseError && (
                            <p className="text-red-600 font-semibold text-center">{purchaseError}</p>
                        )}
                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                onClick={cancelPurchase}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmPurchase}
                                disabled={playerPoints < itemToPurchase.cost}
                                className={`py-2 px-4 rounded-lg font-bold shadow-md transition duration-300
                                    ${playerPoints < itemToPurchase.cost ? 'bg-red-400 text-white cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeaponSelectionPage;