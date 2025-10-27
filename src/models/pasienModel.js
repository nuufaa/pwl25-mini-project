const  db = require('../config/db');

const getAllPasien = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM pasien');
        return rows;
    } catch (error) {
        console.error('Error in getAllPasien model: ', error.message);
        throw new Error(`Database query failed: ${error.message}`);
    }
};

const getPasienById = async (id) => {
    try {
        const [rows] = await db.query('SELECT * FROM pasien WHERE id_pasien = ?', [id]);
        return rows[0];
    } catch (error) {
        console.error('Error in getPasienById model: ', error.message);
        throw new Error(`Database query failed: ${error.message}`);
    }
};

const updatePasien = async (id, dataPasien) => {
    try {
        const {nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk} = dataPasien;
        const [result] = await db.query(
            'UPDATE pasien SET nama = ?, jenis_kelamin = ?, tgl_lahir = ?, penyakit = ?, tgl_masuk = ? WHERE id_pasien = ?',
            [nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk, id]
        );
        return result.affectedRows;
    } catch (error) {
        console.error('Error in updatePasien model: ', error.message);
        throw new Error(`Database query failed: ${error.message}`);
    }
};

const addPasien = async (dataPasien) => {
    try{
        const{nama, jenis_kelamin,  tgl_lahir, penyakit, tgl_masuk} = dataPasien;
        const [result] = await db.query(
            'INSERT INTO pasien(nama, jenis_kelamin, tgl_lahir, penyakit,  tgl_masuk) VALUES (?, ?, ?, ?, ?)',
            [nama, jenis_kelamin, tgl_lahir, penyakit, tgl_masuk]
        );
    } catch(error){
        console.error('Error in addPasien model:', error.message);
        throw new error('Database query failed: ${error.message}');
    }
};

const deletePasien = async (id) => {
    try {
        const [result] = await db.query('DELETE FROM pasien WHERE id_pasien = ?', [id]);
        return result.affectedRows;
    } catch (error) {
        console.error('Error in deletePasien model: ', error.message);
        throw new Error(`Database query failed: ${error.message}`);
    }
};

module.exports = { 
    getAllPasien,
    getPasienById,
    addPasien,
    updatePasien,
    deletePasien
 };