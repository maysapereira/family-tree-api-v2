import mongoose from "mongoose"

const relationshipSchema = new mongoose.Schema(
    {
        id: {type: String},
        parents: [
            {type: String},
            {type: String}
        ],
        children: [
            {type: String},
            {type: String}
        ]
    }
)

const relationship = mongoose.model('relationship', relationshipSchema)

export default relationship