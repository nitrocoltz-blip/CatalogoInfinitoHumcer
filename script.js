/* ===== CONFIGURACIÓN: aquí van los enlaces de los botones ===== */
const LINKS = {
  steam:   "https://steamcommunity.com/id/GazerV/",   // Mi perfil de Steam
  discord: "https://discord.gg/J6qTvsNqxx",   // Servidor de Discord
  twitch:  "https://www.twitch.tv/humcerp29"  // Volver a Twitch
};

/* ===== LISTA DE JUEGOS =====
   status: "obtenido" | "completado" | "porconseguir"
   platform: "Steam" | "Epic Games" | "EA" | "Nintendo Switch"
   appid: ID del juego en Steam (la portada se carga sola; lo rellena buscar_caratulas.py)
   img: URL de la portada (si existe, manda sobre covers.js y appid)
   url: enlace a la tienda (para "Ver en Steam")
   Los juegos más recientes van al principio de la lista. */
const GAMES = [
  { name:"A Webbing Journey", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Afterbeat (Project Arrhythmia)", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Airship Kingdoms Adrift", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Alan Wake", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Alex Kidd in Miracle World DX", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Alice: Madness Returns", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Amazing Frog?", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Amnesia: Rebirth", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Among Us", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Are You Smarter Than A 5th Grader", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"ARK: Survival Evolved", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Balatro", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"BAM", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Barony", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"BattleBlock Theater", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Beat Saber", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Beyond: Two Souls", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Big Walk", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Black Desert", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Black Mesa", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Blasphemous", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Bloons TD 6", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Borderlands 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Botany Manor", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Brotato", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Buckshot Roulette", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Car Tuning Simulator", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Card Shark", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Caribbean Crashers", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Castle Crashers", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Celeste", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Changed", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Chessarama", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Constance", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Content Warning", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Cookie Clicker", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Coromon", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Counter-Strike", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Counter-Strike 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Counter-Strike: Condition Zero", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Counter-Strike: Condition Zero Deleted Scenes", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Counter-Strike: Source", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Cube Escape: Paradox", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Cult of the Lamb", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Cuphead", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Cyberpunk 2077", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Danganronpa 2: Goodbye Despair", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Danganronpa Another Episode: Ultra Despair Girls", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Danganronpa V3: Killing Harmony", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Danganronpa: Trigger Happy Havoc", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Dark Sector", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Day of Defeat", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Day of Defeat: Source", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Days Gone", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"DDNet", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Dead by Daylight", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Dead Cells", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Dead Island Definitive Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Dead Island Retro Revenge", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Dead Island Riptide Definitive Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Deathmatch Classic", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Deceive Inc", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Deep Rock Galactic", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Deep Rock Galactic: Rogue Core", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"DELTARUNE", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Deponia", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Detroit: Become Human", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Devil May Cry 4 Special Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Devil May Cry 5", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Devil May Cry HD Collection", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Dicey Dungeons", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Dispatch", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"DmC Devil May Cry", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Do Not Feed the Monkeys", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Doki Doki Literature Club Plus!", platform:"Steam", status:"completado", img:"", url:"" },
  { name:"Don't Starve Together", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"DOOM", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"DOOM Eternal", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Doomed to Hell", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Doors - Paradox", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Drift86", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Drop Duchy", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Duck Game", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Eastern Exorcist", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"ELDEN RING", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Elite Dangerous", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"ENDER LILIES: Quietus of the Knights", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Escape Room - The Sick Colleague", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Escape Simulator", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Escape the Backrooms", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Fallout 3 - Game of the Year Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Fallout 4", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Fallout 76", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Fallout Shelter", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Fallout: New Vegas", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Fantasy General II", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Field of Glory II: Medieval", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Fireboy & Watergirl: Elements", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Fireboy & Watergirl: Fairy Tales", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Five Nights at Freddy's: Into the Pit", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Five Nights at Freddy's: Security Breach", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Gang Beasts", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Garry's Mod", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Geometry Dash", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Gloomhaven", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Goat Simulator", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Goat Simulator 3", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Goat Simulator: Remastered", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Golden Light", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Golf With Your Friends", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Grand Theft Auto IV: The Complete Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Gravity Circuit", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Hades", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Hades II", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Half-Life", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Half-Life 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Half-Life 2: Deathmatch", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Half-Life Deathmatch: Source", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Half-Life: Blue Shift", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Half-Life: Opposing Force", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Half-Life: Source", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Halo: The Master Chief Collection", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Happy Wheels", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Haunt the House: Terrortown", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Hello Neighbor", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"High On Life", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Hogwarts Legacy", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Hollow Knight", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Hollow Knight: Silksong", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Horizon Forbidden West Complete Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Hotline Miami", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Hotline Miami 2: Wrong Number", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"House Flipper", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Hue", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Human Fall Flat", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"I Am Bread", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Injustice: Gods Among Us Ultimate Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Inscryption", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"INSIDE", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Jennifer Wilde: Unlikely Revolutionaries", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Jurassic World Evolution", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Just Die Already", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Just Shapes & Beats", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"KeyWe", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Killing Floor 2", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Kindergarten", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Kirby and the Forgotten Land", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Kirby Star Allies", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Kirby's Return to Dream Land Deluxe", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Left 4 Dead", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Left 4 Dead 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"LEGO Batman 2: DC Super Heroes", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"LEGO Batman 3: Beyond Gotham", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"LEGO Harry Potter Collection", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"LEGO Indiana Jones: The Original Adventures", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"LEGO Jurassic World", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"LEGO MARVEL's Avengers", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Let's Build a Zoo", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Liberte", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Life is Strange Remastered", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Life is Strange: Before the Storm", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Little Nightmares", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Little Nightmares Enhanced Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Little Nightmares II", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Loop Hero", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Lorelai", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Lost Potato", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Magic: The Gathering Arena", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Maneater", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Manifold Garden", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Marvel's Spider-Man Remastered", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Marvel's Spider-Man: Miles Morales", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Metro 2033 Redux", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Metro: Last Light Complete Edition", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Mewgenics", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Moonlighter", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Mortal Kombat 1", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Mortal Kombat 11", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Mortal Kombat X", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Mortal Shell", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Mouthwashing", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Move or Die", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Muck", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"MultiVersus", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Muse Dash", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"MY HERO ULTRA RUMBLE", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Necesse", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"NEEDY GIRL OVERDOSE", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"NEKOPARA Vol. 0", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"New Super Mario Bros. U Deluxe", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Niche - a genetics survival game", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"NineHells", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Nocturnal", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Noita", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"OMORI", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"One-armed robber", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"OneShot", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Outer Wilds", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Outlast", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Overcooked", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Palworld", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Papers, Please", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Party Hard", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Party Hard 2", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"PAYDAY 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Persona 3 Reload", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Persona 4 Golden", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Persona 5 Royal", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Phasmophobia", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Pizza Tower", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Plague Inc: Evolved", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Planet Zoo", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Plants vs. Zombies: Game of the Year", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Plants vs. Zombies: Garden Warfare", platform:"EA", status:"obtenido", img:"", url:"" },
  { name:"Plants vs. Zombies: Garden Warfare 2", platform:"EA", status:"obtenido", img:"", url:"" },
  { name:"Plants vs. Zombies: La Batalla de Neighborville", platform:"EA", status:"obtenido", img:"", url:"" },
  { name:"Plastic Rebellion", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Please, Don't Touch Anything", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Pokémon Legends: Arceus", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Pokémon Púrpura", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Poly Bridge", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Portal", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Portal 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"POSTAL", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"PRAGMATA", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Project Playtime", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Project Zomboid", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Purple Place - Classic Games", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Quaver", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Rain World", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil 3", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil 3 Nemesis (1999)", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil 4", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil 4 (2005)", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil 5", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil 6", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil 7 Biohazard", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"RESIDENT EVIL RESISTANCE", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil Revelations 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Resident Evil Village", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Ricochet", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"RiMS Racing", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Rise of the Tomb Raider", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Risk of Rain 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"ROBOBEAT", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Rock of Ages", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Rock of Ages 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Rock of Ages 3: Make & Break", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"RUSSIAPHOBIA", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Sackboy: Una aventura a lo grande", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Sally Face - Episode One", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Scribblenauts Unlimited", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"SEGA Mega Drive & Genesis Classics", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Session: Skate Sim", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Shovel Knight: Treasure Trove", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"SILENT HILL 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Sky: Niños de la Luz", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"SkyDrift Infinity", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Slime Rancher", platform:"Steam", status:"completado", img:"", url:"" },
  { name:"Slime Rancher 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"SMITE", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"SMITE 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"SOMA", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Sonic Forces", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Sonic Mania", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Sons Of The Forest", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Soulstice", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"South Park: The Stick of Truth", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Space Gladiators", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Space Grunts: Chrono Shard", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Splatoon 3", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Spore", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Star Birds", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Star Stuff", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Stardew Valley", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Steelrising", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"STEINS;GATE", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"STEINS;GATE 0", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Stick Fight: The Game", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Stream Avatars", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Subnautica", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Subnautica: Below Zero", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Suicide Squad: Kill the Justice League", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Super Mario Bros. Wonder", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Super Mario Galaxy", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Super Mario Galaxy 2", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Super Mario Odyssey", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"Super Meat Boy", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Super Meat Boy Forever", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Super Slime Arena", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Supermarket Together", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Tabletop Simulator", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Tasty Blue", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Tasty Planet", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Tattletail", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Team Fortress Classic", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Teardown", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Teenage Mutant Ninja Turtles: Shredder's Revenge", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"TEKKEN 7", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Terraria", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"That's not my Neighbor", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Binding of Isaac: Rebirth", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Bridge", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"The Cat Lady", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Forest", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Henry Stickmin Collection", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"THE KING OF FIGHTERS 2002 UNLIMITED MATCH", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Lab", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Last of Us Part II Remastered", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Legend of Zelda: Skyward Sword HD", platform:"Nintendo Switch", status:"obtenido", img:"", url:"" },
  { name:"The LEGO NINJAGO Movie Video Game", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Outlast Trials", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Sandbox", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"The Sims 4", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Walking Dead", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"The Walking Dead: The Telltale Definitive Series", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Thief Simulator", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"tModLoader", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"To The Rescue", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Totally Accurate Battle Simulator", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"Transformice", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Trek to Yomi", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Troublemaker", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Tu madre", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Twin Shot Deluxe", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"UBERMOSH", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"UBERMOSH BLACK", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"UBERMOSH OMEGA", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"UBERMOSH SANTICIDE", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"UBERMOSH Vol3", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"UBERMOSH Vol5", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"UBERMOSH Vol7", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"UBERMOSH WRAITH", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Ultimate Chicken Horse", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Ultimate Zombie Defense", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Undertale", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Until Then", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Vampire Survivors", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Vampire: The Masquerade - Reckoning of New York", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Viscera Cleanup Detail", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Viscera Cleanup Detail: Santa's Rampage", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Viscera Cleanup Detail: Shadow Warrior", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"VRChat", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"WAKFU", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"War Hospital", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Warframe", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Warhammer: Vermintide 2", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Weird West: Definitive Edition", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Who's Your Daddy?!", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Windowkill", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Wobbledogs", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"World of Goo", platform:"Steam", status:"porconseguir", img:"", url:"" },
  { name:"World of Warships", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"WorldBox - God Simulator", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Yuppie Psycho", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Zombie Army 4 Dead War", platform:"Epic Games", status:"obtenido", img:"", url:"" },
  { name:"Zuma Deluxe", platform:"Steam", status:"obtenido", img:"", url:"" },
  { name:"Zuma's Revenge", platform:"Steam", status:"obtenido", img:"", url:"" },
];

/* ===== LÓGICA ===== */
const PER_PAGE = 12;
const $ = id => document.getElementById(id);
let filter = "todos", page = 1;
const platformFilters = new Set();

$("lnkSteam").href = LINKS.steam; $("lnkDiscord").href = LINKS.discord; $("lnkTwitch").href = LINKS.twitch;

const pad = n => String(n).padStart(2, "0");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const LABEL = { obtenido:"Obtenido", completado:"Completado", porconseguir:"Por Conseguir" };

function placeholders(){ // vista de muestra mientras la lista está vacía
  const cycle = ["obtenido","porconseguir","completado","obtenido"];
  return Array.from({length:12},(_,i)=>({name:"Nombre juego",platform:"Launcher / Plataforma",status:cycle[i%4],img:"",url:"",ph:true}));
}

function stats(){
  const total = GAMES.filter(g=>g.status!=="porconseguir").length;
  const done = GAMES.filter(g=>g.status==="completado").length;
  const wish = GAMES.filter(g=>g.status==="porconseguir").length;
  $("nTotal").textContent = pad(total); $("nDone").textContent = pad(done); $("nWish").textContent = pad(wish);
  const pct = total ? Math.round(done/total*100) : 0;
  $("barFill").style.width = pct + "%";
  document.querySelector(".bar").setAttribute("aria-valuenow", pct);
}

const coverCache = JSON.parse(localStorage.getItem("humcer_cover_cache") || "{}");
const pendingCovers = new Map();
const failedCovers = new Set();
let coversLoading = false;

function normalizeGameName(name){
  return String(name || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(the|game|demo|public test|edition|definitive edition)\b/g, " ")
    .replace(/\s+/g, " ").trim();
}

function similarity(a,b){
  a=normalizeGameName(a); b=normalizeGameName(b);
  if(!a || !b) return 0;
  if(a===b) return 1;
  if(a.includes(b) || b.includes(a)) return 0.9;
  const aa=new Set(a.split(" ")), bb=new Set(b.split(" "));
  const inter=[...aa].filter(x=>bb.has(x)).length;
  return inter / Math.max(aa.size,bb.size);
}

function proxyUrl(url){
  return "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);
}

async function jsonFetch(url){
  const urls=[url, proxyUrl(url)];
  for(const target of urls){
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),3000);
    try{
      const r=await fetch(target,{headers:{Accept:"application/json"},signal:controller.signal});
      if(r.ok) return await r.json();
    }catch(e){
      if(e.name!=="AbortError") console.warn("No se pudo cargar una fuente de portadas:",e);
    }finally{
      clearTimeout(timeout);
    }
  }
  return null;
}

async function findSteamApp(name){
  const key=normalizeGameName(name);
  if(coverCache[key]) return coverCache[key];
  if(pendingCovers.has(key)) return pendingCovers.get(key);

  const promise=(async()=>{
    try{
      const url="https://store.steampowered.com/api/storesearch/?term="+encodeURIComponent(name)+"&l=english&cc=US";
      const data=await jsonFetch(url);
      const items=Array.isArray(data?.items) ? data.items : [];
      const candidates=items.filter(x=>x && x.id && x.name);
      if(!candidates.length) return null;
      candidates.sort((a,b)=>similarity(name,b.name)-similarity(name,a.name));
      const best=candidates[0];
      const score=similarity(name,best.name);
      if(score < 0.48) return null;
      const result={appid:Number(best.id),name:best.name};
      coverCache[key]=result;
      localStorage.setItem("humcer_cover_cache",JSON.stringify(coverCache));
      return result;
    }catch(e){
      return null;
    }finally{
      pendingCovers.delete(key);
    }
  })();

  pendingCovers.set(key,promise);
  return promise;
}

async function findWikipediaCover(name){
  const key="wiki:"+normalizeGameName(name);
  if(coverCache[key]) return coverCache[key];
  try{
    const title=encodeURIComponent(name.replace(/\s+\(.*?\)$/,"").trim());
    const data=await jsonFetch("https://en.wikipedia.org/api/rest_v1/page/summary/"+title);
    const src=data?.thumbnail?.source || data?.originalimage?.source || "";
    if(src){
      coverCache[key]={img:src,name:data.title || name};
      localStorage.setItem("humcer_cover_cache",JSON.stringify(coverCache));
      return coverCache[key];
    }
  }catch(e){}
  return null;
}

function coverUrls(appid){
  return [
    `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/library_600x900.jpg`,
    `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/library_600x900.jpg`,
    `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`
  ];
}

function coverKey(g){
  return String(GAMES.indexOf(g));
}

function markCoverUnavailable(g){
  failedCovers.add(g);
  const slot=[...document.querySelectorAll("[data-cover-key]")]
    .find(el=>el.dataset.coverKey===coverKey(g));
  if(!slot) return;
  const unavailable=document.createElement("div");
  unavailable.className="cover-unavailable";
  unavailable.textContent="Portada no disponible";
  slot.replaceWith(unavailable);
}

function watchCoverImage(img){
  let timeout;
  let observer;
  const clearWatch=()=>{
    clearTimeout(timeout);
    observer?.disconnect();
  };
  const fail=()=>{
    if(!img.isConnected) return;
    clearWatch();
    const g=GAMES[Number(img.dataset.coverKey)];
    if(g) markCoverUnavailable(g);
    else img.remove();
  };
  img.addEventListener("error",fail,{once:true});
  img.addEventListener("load",clearWatch,{once:true});
  const startWatchdog=()=>{ timeout=setTimeout(()=>{
    if(img.isConnected && !img.complete) fail();
    else if(img.isConnected && img.naturalWidth===0) fail();
  },8000); };

  if(img.complete){
    if(img.naturalWidth===0) fail();
  }else if(img.loading==="lazy" && "IntersectionObserver" in window){
    observer=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){
        observer.disconnect();
        startWatchdog();
      }
    });
    observer.observe(img);
  }else{
    startWatchdog();
  }
}

async function loadSteamCover(g, appid){
  for(const src of coverUrls(appid)){
    const ok=await new Promise(resolve=>{
      const test=new Image();
      const timeout=setTimeout(()=>finish(false),3000);
      const finish=success=>{
        clearTimeout(timeout);
        test.onload=null;
        test.onerror=null;
        resolve(success);
      };
      test.onload=()=>finish(true);
      test.onerror=()=>finish(false);
      test.src=src;
    });
    if(ok){
      setCoverForGame(g,src,appid);
      return true;
    }
  }
  return false;
}

function setCoverForGame(g, src, appid){
  if(!src) return;
  g.img=src;
  if(appid) g.appid=appid;
  const slot=[...document.querySelectorAll("[data-cover-key]")]
    .find(el=>el.dataset.coverKey===coverKey(g));
  if(!slot) return;
  const cardIndex=Array.from(document.querySelectorAll(".card")).indexOf(slot.closest(".card"));
  const el=document.createElement("img");
  el.alt="";
  el.dataset.coverKey=coverKey(g);
  el.loading=cardIndex >= 0 && cardIndex < 4 ? "eager" : "lazy";
  el.fetchPriority=cardIndex >= 0 && cardIndex < 2 ? "high" : "auto";
  el.decoding="async";
  el.src=src;
  watchCoverImage(el);
  slot.replaceWith(el);
}

function card(g,index){
  const done = g.status === "completado", wish = g.status === "porconseguir";
  const known = g.img || (typeof COVERS !== "undefined" && COVERS[g.name]) || (g.appid ? coverUrls(g.appid)[0] : "");
  const loading=index < 4 ? "eager" : "lazy";
  const priority=index < 2 ? "high" : "auto";
  const img = known
    ? `<img data-game="${esc(g.name)}" data-cover-key="${coverKey(g)}" src="${esc(known)}" alt="" loading="${loading}" fetchpriority="${priority}" decoding="async">`
    : failedCovers.has(g)
      ? `<div class="cover-unavailable" data-cover-key="${coverKey(g)}">Portada no disponible</div>`
      : `<div class="cover-loading" data-cover-key="${coverKey(g)}"></div>`;
  const check = done ? `<div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg></div>` : "";
  const go = wish ? `<a class="go" href="${esc(g.url || (g.appid ? "https://store.steampowered.com/app/" + g.appid : "https://store.steampowered.com/search/?term=" + encodeURIComponent(g.name)))}" target="_blank" rel="noopener">Ver en<br>Steam</a>` : "";
  return `<article class="card"><div class="frame">${check}<div class="inner">${img}
    <div class="info"><h3>${esc(g.name)}</h3><div class="plat">${esc(g.platform)}</div>
    <div class="row"><span class="st ${g.status}">${LABEL[g.status]}</span>${go}</div></div></div></div><span class="gem" aria-hidden="true"></span></article>`;
}

async function resolveCover(g){
  if(g.img || (typeof COVERS !== "undefined" && COVERS[g.name]) || failedCovers.has(g)) return;

  const cached=coverCache[normalizeGameName(g.name)];
  if(cached?.appid){
    g.appid=cached.appid;
    g.url=g.url || `https://store.steampowered.com/app/${cached.appid}`;
    if(await loadSteamCover(g,cached.appid)) return;
  }
  if(coverCache["wiki:"+normalizeGameName(g.name)]?.img){
    setCoverForGame(g,coverCache["wiki:"+normalizeGameName(g.name)].img);
    return;
  }

  const steam=cached?.appid ? null : await findSteamApp(g.name);
  if(steam){
    g.appid=steam.appid;
    g.url=g.url || `https://store.steampowered.com/app/${steam.appid}`;
    if(await loadSteamCover(g,steam.appid)) return;
  }

  const wiki=await findWikipediaCover(g.name);
  if(wiki?.img) setCoverForGame(g,wiki.img);
  else markCoverUnavailable(g);
}

async function loadMissingCovers(){
  if(coversLoading) return;
  coversLoading = true;

  const current=listForCurrentView();
  const visible=current.slice((page-1)*PER_PAGE,page*PER_PAGE);
  const prioritized=[...visible,...GAMES.filter(g=>!visible.includes(g))];
  const targets=prioritized.filter(g=>!g.img && !(typeof COVERS !== "undefined" && COVERS[g.name]));
  let next=0;

  try{
    const workers=Array.from({length:Math.min(8,targets.length)},async()=>{
      while(next<targets.length){
        const game=targets[next++];
        await resolveCover(game);
      }
    });
    await Promise.all(workers);
  }finally{
    coversLoading = false;
  }
}

function listForCurrentView(){
  let list=GAMES.slice();
  const q=$("q").value.trim().toLowerCase();
  if(q) list=list.filter(g=>(g.name+" "+g.platform).toLowerCase().includes(q));
  if(filter!=="todos") list=list.filter(g=>g.status===filter);
  if(platformFilters.size) list=list.filter(g=>platformFilters.has(g.platform));
  const s=$("sort").value;
  if(s==="az") list.sort((a,b)=>a.name.localeCompare(b.name,"es"));
  if(s==="za") list.sort((a,b)=>b.name.localeCompare(a.name,"es"));
  return list;
}
function view(){
  const usingPh = GAMES.length === 0;
  let list = usingPh ? placeholders() : listForCurrentView();
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  page = Math.min(page, pages);
  const slice = list.slice((page-1)*PER_PAGE, page*PER_PAGE);

  $("grid").innerHTML = slice.length ? slice.map((g,index)=>card(g,index)).join("") : '<div class="empty">No se encontraron juegos con ese filtro.</div>';
  $("grid").querySelectorAll("img[data-cover-key]").forEach(watchCoverImage);
  $("pageLbl").textContent = "Pag: " + page;
  $("prev").disabled = page <= 1; $("next").disabled = page >= pages;
  $("jump").dataset.pages = pages; $("jpIn").max = pages;
  $("count").textContent = list.length
    ? `Mostrando ${(page-1)*PER_PAGE+1}-${(page-1)*PER_PAGE+slice.length} de ${list.length} juegos`
    : "";
  $("grid").classList.remove("fade"); void $("grid").offsetWidth; $("grid").classList.add("fade");
  if(!usingPh) loadMissingCovers();
}

function goTo(n){
  page = n; view();
  $("grid").scrollIntoView({ behavior:"smooth", block:"start" });
}

function renderPlatformOptions(){
  const counts=new Map();
  GAMES.forEach(g=>counts.set(g.platform,(counts.get(g.platform)||0)+1));
  $("platformOptions").innerHTML=[...counts.entries()]
    .sort(([a],[b])=>a.localeCompare(b,"es"))
    .map(([platform,count])=>`<label class="platform-option">
      <input type="checkbox" value="${esc(platform)}">
      <span>${esc(platform)} <small>${count}</small></span>
    </label>`).join("");
}

function updatePlatformFilter(){
  platformFilters.clear();
  $("platformOptions").querySelectorAll("input:checked").forEach(input=>platformFilters.add(input.value));
  const count=platformFilters.size;
  $("platformToggleLabel").textContent=count ? `Plataforma (${count})` : "Plataforma";
  $("platformToggle").setAttribute("aria-pressed",count>0);
  page=1;
  view();
}

renderPlatformOptions();
$("platformToggle").addEventListener("click",()=>{
  const open=$("platformMenu").hidden;
  $("platformMenu").hidden=!open;
  $("platformToggle").setAttribute("aria-expanded",open);
});
$("platformOptions").addEventListener("change",updatePlatformFilter);
$("platformClear").addEventListener("click",()=>{
  $("platformOptions").querySelectorAll("input").forEach(input=>input.checked=false);
  updatePlatformFilter();
});
document.addEventListener("keydown",event=>{
  if(event.key==="Escape" && !$("platformMenu").hidden){
    $("platformMenu").hidden=true;
    $("platformToggle").setAttribute("aria-expanded","false");
    $("platformToggle").focus();
  }
});

document.querySelectorAll(".pill").forEach(b => b.addEventListener("click", () => {
  if(b.id==="platformToggle") return;
  filter = b.dataset.f; page = 1;
  document.querySelectorAll(".pill").forEach(x => x.setAttribute("aria-pressed", x === b));
  view();
}));
$("q").addEventListener("input", () => { page = 1; view(); });
$("sort").addEventListener("change", () => { page = 1; view(); });
$("prev").addEventListener("click", () => goTo(page - 1));
$("next").addEventListener("click", () => goTo(page + 1));
$("jump").addEventListener("click", () => {
  const open = $("jp").hidden;
  $("jp").hidden = !open; $("jump").setAttribute("aria-expanded", open);
  if (open) { $("jpIn").value = page; $("jpIn").focus(); $("jpIn").select(); }
});
function jumpGo(){
  const n = parseInt($("jpIn").value, 10), max = +$("jump").dataset.pages;
  if (n >= 1) { $("jp").hidden = true; $("jump").setAttribute("aria-expanded", false); goTo(Math.min(n, max)); }
}
$("jpGo").addEventListener("click", jumpGo);
$("jpIn").addEventListener("keydown", e => { if (e.key === "Enter") jumpGo(); if (e.key === "Escape") { $("jp").hidden = true; $("jump").focus(); } });

stats(); view();
