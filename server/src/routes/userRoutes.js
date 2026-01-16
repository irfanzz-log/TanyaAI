import { Router } from "express";
import { OpenAI } from "openai";

const router = Router();
const client = new OpenAI({
    apiKey: "",
});

const promptID = new Map();

router.post('/', (req, res) => {
    // 1. Buat req dan res untuk generate ID prompt
});

router.get('/stream', async (req,res) => {

    // 2. Set header stream

    // 3. Konfigurasi query

    // 4. Buat stream ke openAI dan kirim res ke client
    
});



export default router;      