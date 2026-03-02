const dns = require('dns');
const net = require('net');

// Test DNS d'abord
dns.lookup('listings-newport.gl.at.ply.gg:12971', (err, ip) => {
  if (err) {
    console.log('❌ DNS ERROR:', err.message);
    return;
  }
  console.log('✅ DNS résolu:', ip);
 
  // Test TCP ensuite
  const socket = net.createConnection(19132, ip);
  socket.setTimeout(5000);
 
  socket.on('connect', () => {
    console.log('✅ PORT OUVERT !');
    socket.destroy();
  });
 
  socket.on('timeout', () => {
    console.log('❌ PORT TIMEOUT');
    socket.destroy();
  });
 
  socket.on('error', (err) => {
    console.log('❌ PORT ERROR:', err.message);
  });
}); 
