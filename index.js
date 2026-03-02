const { createClient } = require('bedrock-protocol');

// LES VRAIES INFOS PLAYIT
const SERVEUR_IP = '147.185.221.17';
const PORT = 12971;  // ← Le port donné par playit

console.log(`🚀 Connexion à ${SERVEUR_IP}:${PORT}...`);

const client = createClient({
  host: SERVEUR_IP,
  port: PORT,  // ← Normalement ça devrait marcher
  username: 'MultiservBot',
  offline: true,
  // Force le port manuellement
  connectTimeout: 10000
});

client.on('connect', () => {
  console.log('✅ Connecté !');
});

client.on('error', (err) => {
  console.log('❌', err.message);
}); 
