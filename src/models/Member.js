import mongoose from "mongoose"

const memberSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        relationship: {type: mongoose.Schema.Types.ObjectId, ref: 'relationship'}
    }
)

const members = mongoose.model('members', memberSchema)

export default members