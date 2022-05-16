import express from 'express'
import MemberController from '../controllers/membersController.js'

const router = express.Router()

router
    .get('/members', MemberController.searchAllMembers)
    .get('/members/:id', MemberController.searchOneMember)
    .post('/members', MemberController.createMember)
    .put('/members/:id', MemberController.updateMember)

export default router