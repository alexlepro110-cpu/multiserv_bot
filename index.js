const { createClient } = require('bedrock-protocol');

// METS TA VRAIE IP ICI
const SERVEUR_IP = 'listings-newport.gl.at.ply.gg';  // Test avec Lifeboat d'abord
const PORT = 12971;
const NOM_BOT = 'MultiservBot';

console.log(`?? Tentative de connexion à ${SERVEUR_IP}:${PORT}...`);

const client = createClient({
  host: SERVEUR_IP,
  port: PORT,
  username: NOM_BOT,
  offline: true,
  connectTimeout: 10000  // Attend 10 secondes max
});

client.on('connect', () => {
  console.log('? Connecté !');
});

client.on('error', (err) => {
  console.log('? Erreur:', err.message);
});

setTimeout(() => {
  console.log('?? Timeout - Le serveur ne répond pas');
}, 15000); 