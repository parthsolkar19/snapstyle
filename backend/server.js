require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
    res.send("SnapStyle backend is working!");
});

app.post("/analyze", async (req, res) => {

    try {

        const { image } = req.body;

        if (!image) {
            return res.status(400).json({
                error: "No image received"
            });
        }

        const { GoogleGenerativeAI } = require("@google/generative-ai");

        const genAI = new GoogleGenerativeAI(
            process.env.GEMINI_API_KEY
        );

        const model = genAI.getGenerativeModel({
            model: "gemini-3.6-flash"
        });

        let result;

        // Try up to 3 times for temporary 503 errors
for (let attempt = 1; attempt <= 3; attempt++) {

    try {

        result = await model.generateContent([
            {
                inlineData: {
                    data: image.split(",")[1],
                    mimeType: "image/jpeg"
                }
            },
            `
            Analyze this fashion image.

            Identify the clothing items visible.

            Return ONLY JSON in this format:

            {
              "items": [
                {
                  "type": "shirt",
                  "color": "black",
                  "style": "oversized",
                  "material": "cotton",
                  "pattern": "solid",
                  "fit": "relaxed"
                }
              ]
            }

            Do not include markdown or explanations.
            `
        ]);

        // Success
        break;

    } catch (error) {

        const is503 =
    error.message.includes("503") ||
    error.message.includes("Service Unavailable");

const is429 =
    error.message.includes("429") ||
    error.message.includes("Too Many Requests") ||
    error.message.includes("Quota exceeded");
    if (is429) {
    return res.status(429).json({
        error: "Gemini daily quota exceeded",
        details: "Today's Gemini free-tier request limit has been reached. Please try again after the quota resets."
    });
}

        console.log(`Gemini attempt ${attempt} failed.`);

        // Only retry temporary 503 errors
        if (!is503 || attempt === 3) {

            if (is503) {
                return res.status(503).json({
                    error: "Gemini is temporarily busy",
                    details: "Please try again in a moment."
                });
            }

            throw error;
        }

        // 2s → 4s → 8s
        const delay = 2000 * Math.pow(2, attempt - 1);

        console.log(`Retrying in ${delay / 1000} seconds...`);

        await new Promise(resolve =>
            setTimeout(resolve, delay)
        );
    }
}
        const text = result.response.text();

        res.json({
            result: text
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "AI analysis failed",
            details: error.message
        });

    }

});
app.listen(3000, () => {
    console.log("SnapStyle backend running on http://localhost:3000");
});