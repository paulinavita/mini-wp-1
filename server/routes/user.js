const router = require('express').Router()
const {UserController} = require('../controllers')
const {authorized} = require('../middleware/authorized')
const {authenticate} = require('../middleware/authenticate')
const {verifyUser} = require('../middleware/verifyUser')
const images = require('../middleware/images')
const {safeImage} = require('../middleware/safeImage')



router.post('/register',  images.multer.single('image'), images.sendUploadToGCS, safeImage, UserController.register)
router.post('/signin/local',  UserController.signInLocal)
router.post('/signin/google',  UserController.signInGoogle)
// ==============

router.get('/', authenticate, UserController.getAllUser)
router.get('/:username', authenticate, UserController.getOneUser)

// router.get('/location', UserController.getLoc)
// router.get('/randomquotes', UserController.getQuotes)

module.exports = router