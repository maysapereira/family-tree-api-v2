import express from 'express'
import MemberController from '../controllers/membersController.js'

const router = express.Router()

router
    .get('/members', MemberController.searchAllMembers)

export default router