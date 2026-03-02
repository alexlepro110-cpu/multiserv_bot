const { createClient } = require('bedrock-protocol');

// METS LES INFOS DE PLAYIT ICI
const SERVEUR_IP = '147.185.221.17';    // L'IP donnée par playit
const PORT = 12971;                     // Le PORT donnée par playit
const NOM_BOT = 'MultiservBot';

console.log(`🚀 Connexion à ${SERVEUR_IP}:${PORT} via playit...`);

const client = createClient({
  host: SERVEUR_IP,
  port: PORT,  // ← Utilise le port playit, PAS 19132
  username: NOM_BOT,
  offline: true
});

client.on('connect', () => {
  console.log('✅ Bot connecté via playit !');
});

client.on('friendRequest', (player) => {
  client.acceptFriendRequest(player);
});

client.on('error', (err) => {
  console.log('❌', err.message);
}); 
