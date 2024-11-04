
const { doc, setDoc, getDoc } = require("firebase/firestore"); 
const bcrypt = require("bcrypt");
const { adminDb } = require("../config/firebase"); 
const { v4: uuidv4 } = require('uuid');


exports.register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const userDocRef = doc(adminDb, "users", uuidv4()); 

        
        await setDoc(userDocRef, {
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userDocRef = doc(adminDb, "users", email); 
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
            return res.status(404).json({ message: "User not found" });
        }

        const userData = userDoc.data();

        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};
