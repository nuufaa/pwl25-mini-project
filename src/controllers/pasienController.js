const pasienModel = require('../models/pasienModel');

const getAllPasien = async (req, res) => {
    try {
        const pasien = await pasienModel.getAllPasien();
        res.json({
            success: true,
            data: pasien
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting pasien',
            error: error.message
        });
    }
};

const getPasienById = async (req, res) => {
    try {
        const {id} = req.params;
        const pasien = await pasienModel.getPasienById(id);

        if (!pasien) {
            return res.status(404).json({
                success: false,
                message: 'Pasien not found',
            });
        }
        res.json({
            success: true,
            data: pasien
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error getting pasien',
            error: error.message
        });
    }
};

const addPasien = async(req, res) =>{
    try{
        const {nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk} = req.body
        const pasienId = await pasienModel.addPasien({nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk});

        res.status(201).json({
            success: true,
            message: 'Pasien sukses ditambahkan',
            data: (id = pasienId, nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk)
        });
    } catch (error){
        res.status(500).json({
            success: false,
            message: 'Error creating pasien',
            error: error.message
        });
    }
};

const updatePasien = async (req, res) => {
    try {
        const {id} = req.params;
        const {nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk} = req.body;

        const result = await pasienModel.updatePasien(id, {nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk});

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Pasien not found',
            });
        }

        res.json({
            success: true,
            message: 'Pasien sukses diedit',
            data: (id, nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk)
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating pasien',
            error: error.message
        });
    }
};

const deletePasien = async (req, res) => {
    try {
        const {id} = req.params;
        const affectedRows = await pasienModel.deletePasien(id);

        if (affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Pasien not found',
            });
        }
        res.json({
            success: true,
            message: 'Pasien dihapus'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting pasien',
            error: error.message
        });
    }
};

module.exports = { 
    getAllPasien,
    getPasienById,
    addPasien,
    updatePasien,
    deletePasien
 };