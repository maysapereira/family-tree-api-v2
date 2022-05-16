import relationships from "../models/Relationship.js";

class RelationshipController {

    static searchAllRelationships = (req, res) => {
        relationships.find((err, relationships) => {
        res.status(200).json(relationships)  
        })
    }

    static searchOneRelationship = (req, res) => {
        const id = req.params.id

        relationships.findByIdAndUpdate(id, (err, relationships) => {
            if(err) {
                res.status(400).send(
                    {
                        message: `${err.message} - Id not found`
                    }
                )
            } else {
                res.status(200).send(relationships)
            }
        })
    }

    static createRelationship = (req, res) => {
        let relationship = new relationships(req.body)

        relationship.save((err) => {
            if(err) {
                res.status(500). send(
                    {
                        message:`${err.message} - Failure to create relationship in family tree`
                    })
            } else {
                res.status(201).send(relationship.toJSON())
            }
        })
    }

    static updateRelationship = (req, res) => {
        const id = req.params.id

        relationships.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send(
                    {
                        message: `Relationship id ${id} sucessfully updated`
                    }
                )
            } else {
                res.status(500).send(
                    {
                        message: err.message
                    }
                )
            }
        })
    }

    static deleteRelationship = (req, res) => {
        const id = req.params.id

        relationships.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send(
                    {
                        message: 'Relationship successfully removed'
                    }
                )
            } else {
                res.status(500).send(
                    {
                        message: err.message
                    }
                )
            }
        })
    }
}

export default RelationshipController