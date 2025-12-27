import express from 'express';

const router = express.Router();  // jis variable ser router ko import karoge usi ko export karoge
import Student from './../models/student.js';

import multer from 'multer';

// //set up multer to store files in/upload folder
// const storage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const suffix = Date.now();
//         cb(null, suffix + '-' + file.originalname);
//     }
// })
// //...multer fn end

//configure multer to store files in memory as buffer
const storage = multer.memoryStorage();
const upload = new multer({ storage });

router.post('/create', upload.single('photo'), async (req, res) => {
    try {
        const { name, age, email, phone, address } = req.body;

        // const photopath = req.file ? req.file.path : null //get the file path if uploaded
        const photBase64 = req.file ? req.file.buffer.toString('base64') : null;
        //create student record with base64-encoded image
        const newStudent = new Student({
            name,
            age,
            email,
            phone,
            address,
            photo: photBase64
        });

        await newStudent.save();
        return res.status(200).json({ message: "student created sucessfully ", student: newStudent });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" });
    }
})
export default router;