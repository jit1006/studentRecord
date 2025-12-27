import express from 'express';

const router = express.Router();  // jis variable ser router ko import karoge usi ko export karoge
import Student from './../models/student.js';

import multer from 'multer';

router.post('/create', async (req, res) => {
    try {
        const { name, age, email, phone, address } = req.body;
        //create student record with base64-encoded image
        const newStudent = new Student({
            name, age, email, phone, address
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