const express = require('express')
const router = express.Router()
const controller = require('../controller/cUser')

router.get('/',controller.main)

router.get('/signin',controller.getSignin)

router.get('/signup',controller.getSignup)

router.post('/profile',controller.postProfile)

router.post('/user/signup',controller.postSignup)

router.post('/user/signin',controller.postSignin)

// router.patch('/profile/patch', controller.editInfo)

// router.delete('/profile/delete',controller.deleteInfo)

module.exports = router