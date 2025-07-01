// src/utils/gameData.js

export const weaponsData = [
    { name: 'Basic Pistol', cost: 0, type: 'weapon', damage: 10, ammoCapacity: 10, currentAmmo: 10, imageUrl: 'https://placehold.co/32x32/FF0000/FFFFFF?text=P' },
    { name: 'Combat Knife', cost: 0, type: 'weapon', damage: 15, ammoCapacity: Infinity, currentAmmo: Infinity, imageUrl: 'https://placehold.co/32x32/00FF00/000000?text=K' },
    { name: 'Assault Rifle', cost: 500, type: 'weapon', damage: 25, ammoCapacity: 30, currentAmmo: 30, imageUrl: 'https://placehold.co/32x32/0000FF/FFFFFF?text=AR' },
    { name: 'Shotgun', cost: 400, type: 'weapon', damage: 30, ammoCapacity: 8, currentAmmo: 8, imageUrl: 'https://placehold.co/32x32/FFFF00/000000?text=SG' },
    { name: 'Sniper Rifle', cost: 700, type: 'weapon', damage: 50, ammoCapacity: 5, currentAmmo: 5, imageUrl: 'https://placehold.co/32x32/FF00FF/FFFFFF?text=SR' },
    { name: 'Heavy Machine Gun', cost: 850, type: 'weapon', damage: 40, ammoCapacity: 100, currentAmmo: 100, imageUrl: 'https://placehold.co/32x32/00FFFF/000000?text=HMG' },
];

export const getTeamColorClass = (teamName) => {
    switch (teamName) {
        case 'Team 1':
            return { bg: 'bg-red-500', hoverBg: 'hover:bg-red-600', focusRing: 'focus:ring-red-300', text: 'text-red-500' };
        case 'Team 2':
            return { bg: 'bg-blue-500', hoverBg: 'hover:bg-blue-600', focusRing: 'focus:ring-blue-300', text: 'text-blue-500' };
        default:
            return { bg: 'bg-gray-500', hoverBg: 'hover:bg-gray-600', focusRing: 'focus:ring-gray-300', text: 'text-gray-500' };
    }
};

// Function to get health bar color class (moved from App.js)
export const getHealthColorClass = (playerHealth, maxPlayerHealth) => {
    const percentage = (playerHealth / maxPlayerHealth) * 100;
    if (percentage > 75) {
        return 'bg-green-500';
    } else if (percentage > 25) {
        return 'bg-orange-500';
    } else {
        return 'bg-red-500';
    }
};