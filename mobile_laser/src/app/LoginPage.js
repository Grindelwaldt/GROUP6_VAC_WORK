import React from 'react';

const LoginPage = ({
    loginUsernameInput,
    setLoginUsernameInput,
    handleLogin,
    loginMessage,
}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome!</h1>
                <p className="text-lg text-gray-600 text-center mb-6">
                    Please login with your username to continue.
                </p>

                <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-300 rounded-lg text-center text-2xl text-black font-bold focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
                    placeholder="Enter your username"
                    value={loginUsernameInput}
                    onChange={(e) => setLoginUsernameInput(e.target.value)}
                    // Allow pressing Enter key to trigger login
                    onKeyPress={(e) => { if (e.key === 'Enter') handleLogin(); }}
                />

                <button
                    onClick={handleLogin}
                    // Disable button if Firebase Auth is not ready or username input is empty
                    // disabled={!isAuthReady || loginUsernameInput.trim() === ''}
                    className={`py-4 px-6 rounded-lg font-bold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 w-full
                        ${loginUsernameInput.trim() === '' ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-300'}`}
                >
                    Login
                </button>

                {/* Display login feedback message */}
                {loginMessage && (
                    <p className={`text-center mt-4 ${loginMessage.includes('Error') || loginMessage.includes('not found') ? 'text-red-600' : 'text-green-600'} font-semibold`}>
                        {loginMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

    export default LoginPage;