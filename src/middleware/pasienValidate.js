const validatePasien = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            message: "Request body is required. Please provide nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk"
        });
    }

    const {nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk} = req.body;
    if (!nama || !jenis_kelamin || !tgl_lahir || !penyakit || !tgl_masuk) {
        return res.status(400).json({
            message: "nama, jenis_kelamin, tgl_lahir, penyakit, and tgl_masuk are required"
        });
    }
    next();
};

module.exports = validatePasien;