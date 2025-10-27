const express = require('express');
const pasienRouter = require('../src/routes/pasienRouter');
const app = express();
const PORT = 4000;
const log = require("./middleware/log");
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

app.use(express.json());
app.use(log);

app.get('/', (req, res) => {
    res.send('API Pasien Berjalan!!!');
});

app.post('/tambah_pasien', (req, res) => {
    const namaPasien = req.body.nama_pasien
    console.log("Menambahkan Pasien: " + namaPasien)
    res.json("Berhasil menambahkan Pasien: " + namaPasien)
});

app.use('/pasien', pasienRouter);

app.listen(PORT, () => {
    console.log(`App port http://localhost:${PORT}`);
});

app.use(notFoundHandler);
app.use(errorHandler);
