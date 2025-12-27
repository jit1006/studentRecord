
import mongoose from "mongoose";
// import bcrypt from 'bcrypt';
//user schema
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    mobile: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false
    },
    photo: {
        type: String //store base64 encoded data
    }
});

const Student = mongoose.model('Student', StudentSchema);
export default Student;