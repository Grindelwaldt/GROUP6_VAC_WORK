// src/pages/GameEndPage.js
import React from 'react';

const GameEndPage = ({ winningTeam, playerTeam, setCurrentPage }) => {
  const isWinner = winningTeam && playerTeam && winningTeam.number === playerTeam;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className={`${isWinner ? 'bg-gradient-to-r from-yellow-500 to-yellow-700' : 'bg-gradient-to-r from-blue-600 to-purple-700'} p-8 text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isWinner ? 'VICTORY!' : 'DEFEAT :('}
          </h1>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white opacity-90">
            {winningTeam 
              ? `${winningTeam.name} wins the game!` 
              : "The game has ended"}
          </p>
        </div>

        {/* Results Container */}
        
        {/* Action Button */}
        <div className="p-8 bg-gray-900 flex justify-center">
          <button
            onClick={setCurrentPage('lobby')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
          >
            Return to Lobby
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameEndPage;