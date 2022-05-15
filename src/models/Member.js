import mongoose from "mongoose"

const memberSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        parents: {type: String},
        children: {type: String}
    }
)

const members = mongoose.model('members', memberSchema)

export default members