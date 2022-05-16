import members from "../models/Member.js";

class MemberController {

    static searchAllMembers = (req, res) => {
        members.find((err, members) => {
        res.status(200).json(members)  
        })
    }

    static createMember = (req, res) => {
        let member = new members(req.body)

        member.save((err) => {
            if(err) {
                res.status(500). send(
                    {
                        message:`${err.message} - Failure to create member in family tree`
                    })
            } else {
                res.status(201).send(member.toJSON())
            }
        })
    }

    static updateMember = (req, res) => {
        const id = req.params.id

        members.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send(
                    {
                        message: `Member id ${id} sucessfully updated`
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

export default MemberController