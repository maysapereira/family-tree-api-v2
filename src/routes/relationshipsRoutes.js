import express from 'express'
import RelationshipController from '../controllers/relationshipsController.js'

const router = express.Router()

router
    .get('/relationships', RelationshipController.searchAllRelationships)
    .get('/relationships/:id', RelationshipController.searchAllRelationships)
    .post('/relationships', RelationshipController.createRelationship)
    .put('/relationships/:id', RelationshipController.updateRelationship)
    .delete('/relationships/:id', RelationshipController.deleteRelationship)

export default router