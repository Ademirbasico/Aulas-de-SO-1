const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  const uptimeSeconds = os.uptime();
  const uptimeDays = Math.floor(uptimeSeconds / 86400);
  const uptimeHours = Math.floor((uptimeSeconds % 86400) / 3600);
  const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
  const memoryTotalMB = Math.round(os.totalmem() / 1024 / 1024);
  const memoryFreeMB = Math.round(os.freemem() / 1024 / 1024);
  const memoryUsedMB = memoryTotalMB - memoryFreeMB;
  const cpus = os.cpus();
  const cpuModel = cpus.length > 0 ? cpus[0].model : 'N/A';
  const cpuSpeed = cpus.length > 0 ? cpus[0].speed : 'N/A';
  const loadAvg = os.loadavg();
  const userInfo = os.userInfo();

  res.send(`
    <h1>Monitor de Sistemas Operacionais</h1>
    <h2>Sistema</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><td><strong>Hostname</strong></td><td>${os.hostname()}</td></tr>
      <tr><td><strong>Tipo</strong></td><td>${os.type()}</td></tr>
      <tr><td><strong>Plataforma</strong></td><td>${os.platform()}</td></tr>
      <tr><td><strong>Arquitetura</strong></td><td>${os.arch()}</td></tr>
      <tr><td><strong>Release</strong></td><td>${os.release()}</td></tr>
      <tr><td><strong>Versão</strong></td><td>${os.version()}</td></tr>
      <tr><td><strong>Uptime</strong></td><td>${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m</td></tr>
    </table>

    <h2>Memória</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><td><strong>Total</strong></td><td>${memoryTotalMB} MB</td></tr>
      <tr><td><strong>Livre</strong></td><td>${memoryFreeMB} MB</td></tr>
      <tr><td><strong>Usada</strong></td><td>${memoryUsedMB} MB</td></tr>
    </table>

    <h2>CPU</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><td><strong>Contagem</strong></td><td>${cpus.length}</td></tr>
      <tr><td><strong>Modelo</strong></td><td>${cpuModel}</td></tr>
      <tr><td><strong>Velocidade</strong></td><td>${cpuSpeed} MHz</td></tr>
      <tr><td><strong>Carga média (1m, 5m, 15m)</strong></td><td>${loadAvg.map(v => v.toFixed(2)).join(', ')}</td></tr>
    </table>

    <h2>Usuário</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><td><strong>Usuário</strong></td><td>${userInfo.username}</td></tr>
      <tr><td><strong>Home</strong></td><td>${userInfo.homedir}</td></tr>
      <tr><td><strong>Pasta temporária</strong></td><td>${os.tmpdir()}</td></tr>
    </table>

    <h2>Node.js</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><td><strong>Versão</strong></td><td>${process.version}</td></tr>
      <tr><td><strong>Plataforma</strong></td><td>${process.platform}</td></tr>
      <tr><td><strong>Arquitetura</strong></td><td>${process.arch}</td></tr>
    </table>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando"));