const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');
const validatePasien = require("../middleware/pasienValidate");

router.get('/', pasienController.getAllPasien);

router.get('/:id', pasienController.getPasienById);

router.post('/', validatePasien, pasienController.addPasien);

router.put('/:id', validatePasien, pasienController.updatePasien);

router.delete('/:id', pasienController.deletePasien);

module.exports = router;