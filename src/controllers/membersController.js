import members from "../models/Member.js";

class MemberController {

    static searchAllMembers = (req, res) => {
        members.find((err, members) => {
        res.status(200).json(members)  
        })
    }

}

export default MemberController