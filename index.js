const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Monitor de Sistemas Operacionais</h1>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><td><p><strong>Hostname:</strong> ${os.hostname()}</p></td></tr>
      <tr><td><p><strong>Plataforma:</strong> ${os.platform()}</p></td></tr>
      <tr><td><p><strong>Arquitetura:</strong> ${os.arch()}</p></td></tr>
      <tr><td><p><strong>Memória Total:</strong> ${Math.round(os.totalmem()/1024/1024)} MB</p></td></tr>
      <tr><td><p><strong>Memória Livre:</strong> ${Math.round(os.freemem()/1024/1024)} MB</p></td></tr>
      <tr><td><p><strong>CPUs:</strong> ${os.cpus().length}</p></td></tr>
      <tr><td><p><strong>Uptime:</strong> ${Math.round(os.uptime()/60)} minutos</p></td></tr>
    </table>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando"));