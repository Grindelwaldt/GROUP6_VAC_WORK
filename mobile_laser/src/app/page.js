// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// client/src/app/page.js
// "use client"; // Needed to use hooks and client-side code in App Router

// import { useEffect, useState } from "react";
// import io from "socket.io-client";

// let socket;
// let my_username = "";

// export default function Home() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // socket = io("https://group6-vac-work-backend.onrender.com");
//     // socket = io("http://192.168.0.5:4000", {
//     //   transports: ['websocket']
//     // });
//     socket = io("http://192.168.46.69:4000");
//     // socket = io("http://192.168.46.69:4000", {  withCredentials: true, transports: ["websocket"], });

//     socket.on("connect", () => {
//       console.log("Connected to server:", socket.id);
//     });

//     socket.on("receive-message", (data) => {
//       setMessages((prev) => [...prev, data]);
//     });

//     socket.on("Give-Lobby-Status", (data) => {
//       setMessages((prev) => [...prev, data]);
//     });

//     socket.on("Is-ID-Alive", (data) => {
//       if (data === my_username)
//       socket.emit("ID-Alive");
//     });

//     socket.on("Login-approved", (data) => {
//       my_username = data;
//       setInput(my_username);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim()) {
//       // socket.emit("send-message", input);
//       // socket.emit("Get-Lobby-Status");
//       // socket.emit("Player-ID-Joined", input);
//       // socket.emit("Create-Lobby");
//       socket.emit("Login-Request", input)
//       setInput("");
//     }
//   };

//   return (
//     <main style={{ padding: 20 }}>
//       <h1>Next.js + Socket.IO Chat</h1>
//       <div>
//         {messages.map((msg, i) => (
//           <div key={i}>{msg}</div>
//         ))}
//       </div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         placeholder="Type a message"
//       />
//       <button onClick={sendMessage}>Send</button>
//     </main>
//   );
// }

"use client"; // Needed to use hooks and client-side code in App Router

import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;
let my_username = "";
let lobby_id = -1;
let curr_team = -1;
let curr_points = 0;

import LoginPage from './LoginPage.js';
import LobbyPage from './LobbyPage.js';
import CreateJoinLobbyPage from './CreateJoinLobbyPage.js';
import NumberAssignmentPage from './NumberAssignmentPage.js';
import TeamSelectionLobbyPage from './TeamSelectionLobbyPage.js';
import WeaponSelectionPage from './WeaponSelectionPage.js';
import SpectatorLobbyPage from './SpectatorLobbyPage.js';
import LobbySelectionForSpectatorPage from './LobbySelectionForSpectatorPage.js';
import PlayerGameFeedPage from './PlayerGameFeedPage.js';
import SpectatorGameFeedPage from './SpectatorGameFeedPage.js';

// Import utilities with .js extension
import { weaponsData, getTeamColorClass } from '@/utils/gameData.js';
import '@/utils/animations.css'; // Corrected import path


export default function Home() {
    const [loginUsernameInput, setLoginUsernameInput] = useState(''); // User's input for username
    const [loginMessage, setLoginMessage] = useState(''); // Feedback message for login attempts
    const [loggedInUsername, setLoggedInUsername] = useState(''); // Stores the successfully logged-in username
    const [currentPage, setCurrentPage] = useState('login'); // Controls which part of the UI is shown

    // Lobby and Game related states
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [gameMode, setGameMode] = useState(null); // 'singlePlayer' or 'team'
    const [selectedTeam, setSelectedTeam] = useState(null); // 'Team 1' or 'Team 2'
    const [players, setPlayers] = useState([]); // Array of { id, name, score, team? }
    const [teams, setTeams] = useState([]);
    const [spectTeams, setSpectTeams] = useState([]);
    const [showDeathMessage, setShowDeathMessage] = useState(false);
    const [killedPlayerName, setKilledPlayerName] = useState('');
    const [hasSelectedTeam, setHasSelectedTeam] = useState(false);
    const [currentTeamMembers, setCurrentTeamMembers] = useState([]); // Dummy data for team members
    const [weaponSelectionTimer, setWeaponSelectionTimer] = useState(60);
    const [equippedWeapon, setEquippedWeapon] = useState(null);
    const [purchasedWeapons, setPurchasedWeapons] = useState([]);
    const [playerPoints, setPlayerPoints] = useState(1000);
    const [showPurchaseConfirmModal, setShowPurchaseConfirmModal] = useState(false);
    const [itemToPurchase, setItemToPurchase] = useState(null);
    const [purchaseError, setPurchaseError] = useState('');
    const [playerHealth, setPlayerHealth] = useState(100);
    const maxPlayerHealth = 100;
    const [isPlayer, setIsPlayer] = useState(true);
    const [gameTimer, setGameTimer] = useState(0);
    const [isReloading, setIsReloading] = useState(false);
    const [reloadMessage, setReloadMessage] = useState('');
    const [needsReload, setNeedsReload] = useState(false);
    const [showLeaveGameConfirmModal, setShowLeaveGameConfirmModal] = useState(false);
    const [savingProgress, setSavingProgress] = useState(false);
    const [showDamageMessage, setShowDamageMessage] = useState(false);
    const [damageMessageText, setDamageMessageText] = useState('');
    const [showRedGlow, setShowRedGlow] = useState(false);
    const [showHealMessage, setShowHealMessage] = useState(false);
    const [healMessageText, setHealMessageText] = useState('');
    const [showGreenGlow, setShowGreenGlow] = useState(false);
    const [weaponSelectionError, setWeaponSelectionError] = useState('');
    const [watchingPlayerId, setWatchingPlayerId] = useState(null);
    const [watchingPlayerName, setWatchingPlayerName] = useState(null);
    const [newGameLobbyName, setNewGameLobbyName] = useState('');
    const [joinGameLobbyName, setJoinGameLobbyName] = useState('');
    const [lobbyMessage, setLobbyMessage] = useState('');
    const [currentLobbyId, setCurrentLobbyId] = useState(null);
    const [currentLobbyName, setCurrentLobbyName] = useState(null);
    const [availableLobbies, setAvailableLobbies] = useState([]);
    const [availableSpectatorLobbies, setAvailableSpectatorLobbies] = useState([]);
    const [showLobbyDropdown, setShowLobbyDropdown] = useState(false);
    const [showCreateLobbySection, setShowCreateLobbySection] = useState(false);
    const [showJoinLobbySection, setShowJoinLobbySection] = useState(false);
    const [isPlayerDead, setIsPlayerDead] = useState(false);
    const [assignedPlayerNumber, setAssignedPlayerNumber] = useState(null);
    const [numberInput, setNumberInput] = useState('');
    const [numberAssignmentMessage, setNumberAssignmentMessage] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [showWaiting, setShowWaiting] = useState(false);
    //socket handler
    useEffect(() => {
    // socket = io("https://group6-vac-work-backend.onrender.com");
    // socket = io("http://192.168.0.5:4000", {
    //   transports: ['websocket']
    // });
    socket = io("https://group6-vac-work-backend.onrender.com");
    // socket = io("http://192.168.46.69:4000", {  withCredentials: true, transports: ["websocket"], });

    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });

    socket.on("receive-message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("Give-Lobby-Status", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("Is-ID-Alive", (data) => {
      console.log("is-alive " + data + " " + my_username)
      if (data === my_username)
      socket.emit("ID-Alive");
    });


    socket.on("Login-approved", (data) => {
      my_username = data;
      console.log("set username to " + my_username)
      setLoggedInUsername(data);
      setCurrentPage('lobby');
    });

    socket.on("Login-denied", () => {
      setLoginMessage("Username already in use")
      setLoginUsernameInput('')
    });

    socket.on("Lobby-Created", (data) => {
      lobby_id = data;
      setCurrentPage('numberAssignment');
    });

    socket.on("Player-Added-To-Lobby", () => {
      setCurrentPage('teamSelectionLobby');
    });

    socket.on("Player-Added-To-Team", (data) => {
      console.log(data)
      setHasSelectedTeam(true);
      let temp = []
      let key = 1
      for (let id in data) {
        console.log(data[id]);
        temp.push( { id: key++, name: id} )
      }

      setCurrentTeamMembers(temp);
    });

    socket.on("Teams-Updated", (data) => {
      console.log("Teams-Updated " + lobby_id + " " + data[0])
      if (lobby_id === data[0] && curr_team !== -1)
      {
        let temp = []
        let key = 1
        for (let id in data[curr_team]) {
          console.log(data[curr_team][id]);
          temp.push( { id: key++, name: id} )
        }

        setCurrentTeamMembers(temp);
      }
    });



    socket.on("Lobbies-List", (data) => {
      console.log(data);
      setAvailableLobbies(data);
    });

    socket.on("Spectator-Lobbies-List", (data) => {
      console.log(data);
      setAvailableSpectatorLobbies(data);
    });

     socket.on("Start-Game", (data) => {
      if (data === lobby_id) {
        setWeaponSelectionTimer(60);
        const initialWeapons = [weaponsData[0], weaponsData[1]];
        setPurchasedWeapons(initialWeapons.map(w => ({ ...w })));
        setEquippedWeapon({ ...weaponsData[0] });
        setPlayerPoints(curr_points);
        setPlayerHealth(100);
        setCurrentPage('weaponSelection');
      }
    });

    socket.on("Take-Damage", (data) => {
      if (lobby_id === data.id && my_username === data.player_id) {
        takeDamage(data.damage);
      }
      
    });

    socket.on("Heal-Player", (data) => {
      handleHealPlayer(data);   
    });

    socket.on("Lobby-Info", (data) => {
       let temp_1 = []
       let count = 1;
       let playersArray = Object.values(data.team1_players);
       playersArray.forEach(player => {
        temp_1.push({id: count++, name: player.id})
       });
       let temp_2 = []
       count = 1;
       playersArray = Object.values(data.team2_players);
       playersArray.forEach(player => {
        temp_2.push({id: count++, name: player.id})
       });
       console.log(data.team1_points + " " + data.team2_points)
        setSpectTeams([
            { id: 't1', name: 'Team 1', score: data.team1_points, players: temp_1},
            { id: 't2', name: 'Team 2', score: data.team2_points, players: temp_2},
        ]);
    });

    socket.on("Update-Score", (data) => {
      if (lobby_id === data.id) {
        setTeams([
            { id: 't1', name: 'Team 1', score: data.team1_points},
            { id: 't2', name: 'Team 2', score: data.team2_points},
        ]);
      }
      
    });

    socket.on("Increase-Player-Points", (data) => {
      console.log("Increase-Player-Points " + data)
      curr_points = Math.max(curr_points + data,0);
      console.log("Increase-Player-Points " + data)
      setPlayerPoints(curr_points);  
    });

    return () => {
      socket.disconnect();
    };
  }, []);


    // Effect for weapon selection timer
    useEffect(() => {
        let timerInterval;
        if (currentPage === 'weaponSelection' && weaponSelectionTimer > 0) {
            timerInterval = setInterval(() => {
                setWeaponSelectionTimer(prevTime => prevTime - 1);
            }, 1000);
        } else if (weaponSelectionTimer === 0 && currentPage === 'weaponSelection') {
            if (!equippedWeapon) {
                setWeaponSelectionError("Please select at least one weapon to start the game!");
                setWeaponSelectionTimer(0);
            } else {
                handleStartGame();
            }
        }
        return () => clearInterval(timerInterval);
    }, [currentPage, weaponSelectionTimer, equippedWeapon]);

    // Effect for game timer
    useEffect(() => {
        let gameTimerInterval;
        if (currentPage === 'gameFeed' && isPlayer) {
            gameTimerInterval = setInterval(() => {
                setGameTimer(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(gameTimerInterval);
    }, [currentPage, isPlayer]);

    // Effect to check for player death
    useEffect(() => {
        if (isPlayer && playerHealth <= 0 && !isPlayerDead) {
            socket.emit("Player-Died",{id: lobby_id, player_id:my_username});
            setEquippedWeapon({ ...weaponsData[1] });
            setIsPlayerDead(true);
            setReloadMessage("You Died!");
            setTimeout(() => setReloadMessage(''), 3000);
        } else if (isPlayer && playerHealth > 0 && isPlayerDead) {
            setIsPlayerDead(false);
        }
    }, [playerHealth, isPlayer, isPlayerDead]);

    // Effect to fetch available lobbies in real-time for both player and spectator paths
    // useEffect(() => {
    //     if (!db || (currentPage !== 'createJoinLobby' && currentPage !== 'lobbySelectionForSpectator' && !showJoinLobbySection && currentPage !== 'gameFeed')) return;

    //     const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    //     const lobbiesCollectionRef = collection(db, 'artifacts', appId, 'public', 'data', 'lobbies');
    //     const q = query(lobbiesCollectionRef, where("status", "==", "waiting"));

    //     const unsubscribe = onSnapshot(q, (snapshot) => {
    //         const fetchedLobbies = snapshot.docs.map(doc => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }));
    //         setAvailableLobbies(fetchedLobbies);
    //     }, (error) => {
    //         console.error("Error fetching available lobbies:", error);
    //     });

    //     return () => unsubscribe();
    // }, [db, currentPage, showJoinLobbySection]);

    // Effect to generate a number when entering the number assignment page
    useEffect(() => {
        if (currentPage === 'numberAssignment' && assignedPlayerNumber === null) {
            const newNumber = Math.floor(Math.random() * 9000) + 1000;
            setAssignedPlayerNumber(newNumber);
        }
    }, [currentPage, assignedPlayerNumber]);


    // Centralized handlers for various actions
    const handleLogin = async () => {
        socket.emit("Login-Request", loginUsernameInput)
        setLoginMessage("Attempting to log in")
        // setCurrentPage('lobby');
    };

    const handleTeamSelect = async (teamName) => {
        // await updateTeamSelection(db, currentLobbyId, userId, usernameInput, teamName);
        // setSelectedTeam(teamName);
        // setHasSelectedTeam(true);
        // // Dummy data for team members based on selected team (this will eventually come from Firestore)
        // if (teamName === 'Team 1') {
        //     setCurrentTeamMembers([
        //         { id: 'tm1', name: 'Player A' },
        //         { id: 'tm2', name: 'Player B' },
        //         { id: 'tm3', name: 'Player C' },
        //     ]);
        // } else if (teamName === 'Team 2') {
        //     setCurrentTeamMembers([
        //         { id: 'tm4', name: 'Player X' },
        //         { id: 'tm5', name: 'Player Y' },
        //     ]);
        // } else {
        //     setCurrentTeamMembers([]);
        // }
        let temp_message = {}
        console.log("Teamname " + teamName)
        if (teamName === 'Team 1' || curr_team === 2) {
          temp_message = { id: lobby_id, player_id: my_username, team: 1};
          setSelectedTeam(1)
          curr_team = 1;
        } else if (teamName === 'Team 2' || curr_team === 1) {
          temp_message = { id: lobby_id, player_id: my_username, team: 2};
          setSelectedTeam(2)
          curr_team = 2
        }
        console.log("team set to " + curr_team)
        socket.emit('Request-To-Join-Team',temp_message)

    };

    const handleLeaveLobby = async () => {
      let temp_message = {id: lobby_id, player_id: my_username};
      lobby_id = -1;
      socket.emit('Leave-Lobby',temp_message);
      setShowCreateLobbySection(false);
      setShowJoinLobbySection(false);
      setCurrentPage('createJoinLobby');
    }

    const handleLoadExistingLobbies = async () => {
      socket.emit('Get-Existing-Lobbies');
      setShowJoinLobbySection(true);
    }

    const handleLoadSpectatorExistingLobbies = async () => {
      socket.emit('Get-Existing-Spectator-Lobbies');
      setCurrentPage('lobbySelectionForSpectator')
    }

    const handlePlayerReady = async() => {
      socket.emit('Player-ready', {id: lobby_id, player_id: my_username});
      // add stuff - gray out ready button and display waiting for other players
    }

    const handleSelectItem = (item) => {
        setWeaponSelectionError('');
        const isOwned = purchasedWeapons.some(pw => pw.name === item.name);

        if (item.cost === 0) {
            if (!isOwned) {
                setPurchasedWeapons(prevItems => [...prevItems, { ...item }]);
            }
            setEquippedWeapon({ ...item });
        } else {
            if (isOwned) {
                setEquippedWeapon(purchasedWeapons.find(pw => pw.name === item.name));
            } else {
                setItemToPurchase(item);
                setPurchaseError('');
                setShowPurchaseConfirmModal(true);
            }
        }
    };

    const handleShootExternal = () => {
      let shootSound = null
      if (equippedWeapon.name === 'Combat Knife') {
        shootSound = new Audio('/sounds/knife.wav');
      } else {
        shootSound = new Audio('/sounds/shoot.wav');
      }
      shootSound.play();
    } ;

    const handleReloadExternal = () => {
       const reloadSound = new Audio('/sounds/reload.wav'); 
        reloadSound.play();
    } ;

    const handleHealExternal = () => {
       const healSound = new Audio('/sounds/heal.wav');
            healSound.play();
    } ;

    const handleDamageExternal = () => {
       const damageSound = new Audio('/sounds/damage.wav'); 
            damageSound.play();
    } ;

    const confirmPurchase = () => {
        if (itemToPurchase && playerPoints >= itemToPurchase.cost) {
            curr_points -= itemToPurchase.cost;
            setPlayerPoints(prevPoints => prevPoints - itemToPurchase.cost);
            const newItem = { ...itemToPurchase };
            setPurchasedWeapons(prevItems => [...prevItems, newItem]);
            setEquippedWeapon(newItem);
            setShowPurchaseConfirmModal(false);
            setItemToPurchase(null);
        } else if (itemToPurchase) {
            setPurchaseError("Insufficient funds!");
        }
    };

    const cancelPurchase = () => {
        setShowPurchaseConfirmModal(false);
        setItemToPurchase(null);
        setPurchaseError('');
    };

    const handleWeaponAction = (temp_number) => {
        if (!equippedWeapon) {
            setReloadMessage("No weapon equipped!");
            setTimeout(() => setReloadMessage(''), 2000);
            return;
        }
        if (equippedWeapon.ammoCapacity === Infinity) {
            setReloadMessage("Weapon Fired!");
            socket.emit("Fire-Gun", {id: lobby_id, player_id: my_username, number: temp_number, damage: equippedWeapon.damage})
            setTimeout(() => setReloadMessage(''), 1000);
            return;
        }
        if (equippedWeapon.currentAmmo <= 0) {
            setReloadMessage("Out of ammo! Reload required.");
            setNeedsReload(true);
            setTimeout(() => setReloadMessage(''), 2000);
            return;
        }

        setEquippedWeapon(prevWeapon => {
            const newAmmo = prevWeapon.currentAmmo - 1;
            return { ...prevWeapon, currentAmmo: newAmmo };
        });

        setReloadMessage("Weapon Fired!");
        socket.emit("Fire-Gun", {id: lobby_id, player_id: my_username, number: temp_number, damage: equippedWeapon.damage})
        setTimeout(() => setReloadMessage(''), 1000);

        if (equippedWeapon.currentAmmo - 1 <= 0) {
            setNeedsReload(true);
            setReloadMessage("Out of ammo! Reload required.");
        }
    };

    const takeDamage = (amount) => {
        setPlayerHealth(prevHealth => Math.max(0, prevHealth - amount));
        setDamageMessageText(`-${amount} HP`);
        setShowDamageMessage(true);
        setShowRedGlow(true);

        setTimeout(() => {
            setShowDamageMessage(false);
        }, 2000);

        setTimeout(() => {
            setShowRedGlow(false);
        }, 1000);
    };

    const handleHealPlayer = (amount) => {
        setPlayerHealth(prevHealth => Math.min(maxPlayerHealth, prevHealth + amount));
        setHealMessageText(`+${amount} HP`);
        setShowHealMessage(true);
        setShowGreenGlow(true);

        setTimeout(() => {
            setShowHealMessage(false);
        }, 2000);

        setTimeout(() => {
            setShowGreenGlow(false);
        }, 1000);
    };

    const handleReloadWeapon = () => {
        if (!equippedWeapon || equippedWeapon.ammoCapacity === Infinity) {
            setReloadMessage("No weapon to reload or infinite ammo.");
            setTimeout(() => setReloadMessage(''), 2000);
            return;
        }
        if (isReloading) {
            setReloadMessage("Weapon is already reloading...");
            setTimeout(() => setReloadMessage(''), 2000);
            return;
        }
        if (equippedWeapon.currentAmmo === equippedWeapon.ammoCapacity) {
            setReloadMessage("Ammo is full!");
            setTimeout(() => setReloadMessage(''), 2000);
            return;
        }

        setReloadMessage("Reloading weapon...");
        setIsReloading(true);
        setTimeout(() => {
            setEquippedWeapon(prevWeapon => ({
                ...prevWeapon,
                currentAmmo: prevWeapon.ammoCapacity
            }));
            setNeedsReload(false);
            setReloadMessage("Weapon reloaded!");
            setIsReloading(false);
            setTimeout(() => setReloadMessage(''), 2000);
        }, 1500);
    };

    const handleGetLobbyInfo = async () => {
      socket.emit("Get-Lobby-Info",lobby_id);
    }

    const saveGameProgress = async () => {
        setSavingProgress(true);
        await firebaseSaveGameProgress(db, userId, playerPoints, playerHealth, equippedWeapon, purchasedWeapons);
        setSavingProgress(false);
    };

    const handleLeaveGame = () => {
        setShowLeaveGameConfirmModal(true);
    };

    const confirmLeaveGame = async () => {
        // await saveGameProgress();
        // setShowLeaveGameConfirmModal(false);
        setShowLeaveGameConfirmModal(false);
        setCurrentPage('weaponSelection');
    };

    const cancelLeaveGame = () => {
        setShowLeaveGameConfirmModal(false);
    };

    const handleStartGame = () => {
        setWeaponSelectionError('');
        if (!equippedWeapon) {
            setWeaponSelectionError("Please select at least one weapon to start the game!");
            return;
        }
        generateDummyScores();
        setPlayerName(my_username);
        setCurrentPage('gameFeed');
    };

    const generateDummyScores = () => {
        const team1Players = [
            { id: 't1_p1', name: 'Player A', score: 300 },
            { id: 't1_p2', name: 'Player B', score: 450 },
            { id: 't1_p3', name: 'Player C', score: 250, userId: 'someFirebaseUid1' },
            { id: 't1_p4', name: 'Player D', score: 350 },
            { id: 't1_p5', name: 'Player E', score: 400 },
        ];
        const team2Players = [
            { id: 't2_p1', name: 'Player X', score: 200 },
            { id: 't2_p2', name: 'Player Y', score: 600 },
            { id: 't2_p3', name: 'Player Z', score: 350, userId: 'someFirebaseUid2' },
            { id: 't2_p4', name: 'Player W', score: 280 },
            { id: 't2_p5', name: 'Player V', score: 500 },
        ];
        setTeams([
            { id: 't1', name: 'Team 1', score: 0, players: team1Players },
            { id: 't2', name: 'Team 2', score: 0, players: team2Players },
        ]);
        setPlayers([]);
    };

    const handleWatchPlayer = (playerId, playerName) => {
        setWatchingPlayerId(playerId);
        setWatchingPlayerName(playerName);
    };

    const createLobby = async () => {
        // const result = await firebaseCreateLobby(db, userId, usernameInput, setLobbyMessage);
        // if (result.success) {
        //     setCurrentLobbyId(result.lobbyId);
        //     setCurrentLobbyName(result.lobbyName);
        //     setGameMode('team');
        //     setIsPlayer(true);
        //     setCurrentPage('numberAssignment');
        // }
        console.log("Requesting new lobby");
        console.log(socket)
        socket.emit("Create-Lobby-Request");
    };

    const joinLobby = async (lobbyIdToJoin) => {
        // const result = await firebaseJoinLobby(db, userId, usernameInput, lobbyIdToJoin, setLobbyMessage);
        // if (result.success) {
        //     setCurrentLobbyId(lobbyIdToJoin);
        //     setCurrentLobbyName(lobbyIdToJoin);
        //     setGameMode('team');
        //     setIsPlayer(true);
        //     setSelectedTeam(result.selectedTeam);
        //     setHasSelectedTeam(result.hasSelectedTeam);
        //     setCurrentTeamMembers(result.currentTeamMembers);
        //     setCurrentPage('numberAssignment');
        // }
        // add stuff - make it that client checks if player can join lobby
        lobby_id = lobbyIdToJoin;
        setCurrentPage('numberAssignment');
    };

    const handleSelectLobbyToSpectate = (lobbyId, lobbyName) => {
        lobby_id = lobbyId;
        setCurrentLobbyId(lobbyId);
        setCurrentLobbyName(lobbyName);
        setIsPlayer(false);
        generateDummyScores();
        setPlayerName(my_username);
        setCurrentPage('gameFeed');
        setShowLobbyDropdown(false);
    };

    const handleSubmitNumber = async (number) => {
        // const success = await updatePlayerAssignedNumber(db, userId, currentLobbyId, assignedPlayerNumber, numberInput, setNumberAssignmentMessage);
        // if (success) {
        //     setTimeout(() => {
        //         setCurrentPage('teamSelectionLobby');
        //         setNumberInput('');
        //         setAssignedPlayerNumber(null);
        //     }, 1500);
        // }
        let temp_message = {id: lobby_id, player_id: my_username, player_number: number};
        socket.emit("Request-To-Join-Lobby",temp_message)
    };

    // Props object for common handlers and states
    const commonProps = {
        // userId,
        // isAuthReady,
        // usernameInput,
        currentPage,
        setCurrentPage,
        loginUsernameInput,
        setLoginUsernameInput,
        loginMessage,
        setLoginMessage,
        handleLogin,
        showAboutModal,
        setShowAboutModal,
        gameMode,
        setGameMode,
        selectedTeam,
        setSelectedTeam,
        players,
        setPlayers,
        teams,
        setTeams,
        spectTeams,
        setSpectTeams,
        showDeathMessage,
        killedPlayerName,
        setKilledPlayerName,
        hasSelectedTeam,
        setHasSelectedTeam,
        currentTeamMembers,
        setCurrentTeamMembers,
        weaponSelectionTimer,
        setWeaponSelectionTimer,
        equippedWeapon,
        setEquippedWeapon,
        purchasedWeapons,
        setPurchasedWeapons,
        playerPoints,
        setPlayerPoints,
        showPurchaseConfirmModal,
        setShowPurchaseConfirmModal,
        itemToPurchase,
        setItemToPurchase,
        purchaseError,
        setPurchaseError,
        playerHealth,
        setPlayerHealth,
        maxPlayerHealth,
        isPlayer,
        setIsPlayer,
        gameTimer,
        setGameTimer,
        isReloading,
        setIsReloading,
        reloadMessage,
        setReloadMessage,
        needsReload,
        setNeedsReload,
        showLeaveGameConfirmModal,
        setShowLeaveGameConfirmModal,
        savingProgress,
        setSavingProgress,
        showDamageMessage,
        setShowDamageMessage,
        damageMessageText,
        setDamageMessageText,
        showRedGlow,
        setShowRedGlow,
        showHealMessage,
        setShowHealMessage,
        healMessageText,
        setHealMessageText,
        showGreenGlow,
        setShowGreenGlow,
        weaponSelectionError,
        setWeaponSelectionError,
        watchingPlayerId,
        setWatchingPlayerId,
        watchingPlayerName,
        setWatchingPlayerName,
        newGameLobbyName,
        setNewGameLobbyName,
        joinGameLobbyName,
        setJoinGameLobbyName,
        lobbyMessage,
        setLobbyMessage,
        currentLobbyId,
        setCurrentLobbyId,
        currentLobbyName,
        setCurrentLobbyName,
        availableLobbies,
        setAvailableLobbies,
        availableSpectatorLobbies,
        setAvailableSpectatorLobbies,
        showLobbyDropdown,
        setShowLobbyDropdown,
        showCreateLobbySection,
        setShowCreateLobbySection,
        showJoinLobbySection,
        setShowJoinLobbySection,
        isPlayerDead,
        setIsPlayerDead,
        assignedPlayerNumber,
        setAssignedPlayerNumber,
        numberInput,
        setNumberInput,
        numberAssignmentMessage,
        setNumberAssignmentMessage,
        handleTeamSelect,
        handleLeaveLobby,
        handleLoadExistingLobbies,
        handleLoadSpectatorExistingLobbies,
        handlePlayerReady,
        handleSelectItem,
        confirmPurchase,
        cancelPurchase,
        handleWeaponAction,
        takeDamage,
        handleHealPlayer,
        handleReloadWeapon,
        saveGameProgress,
        handleLeaveGame,
        confirmLeaveGame,
        cancelLeaveGame,
        handleStartGame,
        generateDummyScores,
        handleWatchPlayer,
        createLobby,
        joinLobby,
        handleSelectLobbyToSpectate,
        handleSubmitNumber,
        weaponsData,
        getTeamColorClass,
        playerName,
        setPlayerName,
        handleShootExternal,
        handleDamageExternal,
        handleHealExternal,
        handleReloadExternal,
        showWaiting, 
        setShowWaiting,
        handleGetLobbyInfo
    };
    // Login page specific states

    // 3. Render the Login Page UI
    // const renderLoginPage = () => (
    //     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4 font-inter">
    //         <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-8">
    //             <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome!</h1>
    //             <p className="text-lg text-gray-600 text-center mb-6">
    //                 Please login with your username to continue.
    //             </p>

    //             <input
    //                 type="text"
    //                 className="w-full p-4 border-2 border-gray-300 rounded-lg text-center text-2xl text-black font-bold focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
    //                 placeholder="Enter your username"
    //                 value={loginUsernameInput}
    //                 onChange={(e) => setLoginUsernameInput(e.target.value)}
    //                 // Allow pressing Enter key to trigger login
    //                 onKeyPress={(e) => { if (e.key === 'Enter') handleLogin(); }}
    //             />

    //             <button
    //                 onClick={handleLogin}
    //                 // Disable button if Firebase Auth is not ready or username input is empty
    //                 // disabled={!isAuthReady || loginUsernameInput.trim() === ''}
    //                 className={`py-4 px-6 rounded-lg font-bold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 w-full
    //                     ${loginUsernameInput.trim() === '' ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-300'}`}
    //             >
    //                 Login
    //             </button>

    //             {/* Display login feedback message */}
    //             {loginMessage && (
    //                 <p className={`text-center mt-4 ${loginMessage.includes('Error') || loginMessage.includes('not found') ? 'text-red-600' : 'text-green-600'} font-semibold`}>
    //                     {loginMessage}
    //                 </p>
    //             )}
    //         </div>
    //     </div>
    // );

    // Conditional rendering based on the current page state
    switch (currentPage) {
        case 'login':
            return <LoginPage {...commonProps} />;
        case 'lobby':
            return <LobbyPage {...commonProps} />;
        case 'createJoinLobby':
            return <CreateJoinLobbyPage {...commonProps} />;
        case 'numberAssignment':
            return <NumberAssignmentPage {...commonProps} />;
        case 'teamSelectionLobby':
            return <TeamSelectionLobbyPage {...commonProps} />;
        case 'weaponSelection':
            return <WeaponSelectionPage {...commonProps} />;
        case 'spectatorLobby':
            return <SpectatorLobbyPage {...commonProps} />;
        case 'lobbySelectionForSpectator':
            return <LobbySelectionForSpectatorPage {...commonProps} />;
        case 'gameFeed':
            return isPlayer ? <PlayerGameFeedPage {...commonProps} /> : <SpectatorGameFeedPage {...commonProps} />;
        default:
            return <LoginPage {...commonProps} />;
    }
}