const express = require('express')

const controller = require('./controller')

const router = express.Router()

router.get('/home', controller.getCount)
router.get('/get/hospitals', controller.getHospitals)
router.get('/get/users', controller.getUsers)
router.get('/get/clusters', controller.getClusters)
router.post('/post/manufacturer', controller.createManufacturer)
router.post('/post/hospital', controller.createHospital)
router.post('/post/user', controller.createUser)
router.post('/post/warehouse', controller.createWarehouse)
router.post('/allotment', controller.slotAllotment)
router.post('/newVaccine', controller.createVaccine)
router.post('/verifyVaccine', controller.vaccineScan)
router.post('/verifyUser', controller.verifyUser)
router.post('/mail', controller.mail)

module.exports = router
