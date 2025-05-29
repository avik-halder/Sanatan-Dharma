import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  const { textToTranslate, sourceLanguage, targetLanguage } = req.body;

  const API_KEY = process.env.TRANSLATION_API_KEY;
  const endpoint = "https://api.cognitive.microsofttranslator.com";
  const location = "southeastasia";

  const translatedBlog = {};

  try {
    for (const [key, text] of Object.entries(textToTranslate)) {
      const response = await fetch(`${endpoint}/translate?api-version=3.0&from=${sourceLanguage}&to=${targetLanguage}`, {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": API_KEY,
          "Ocp-Apim-Subscription-Region": location,
          "Content-Type": "application/json",
          "X-ClientTraceId": uuidv4(),
        },
        body: JSON.stringify([{ text }]),
      });

      const data = await response.json();
      translatedBlog[key] = data[0].translations[0].text;
      await new Promise(r => setTimeout(r, 300)); // slight delay to avoid throttling
    }

    res.status(200).json({ translatedBlog });
  } catch (error) {
    console.error("Translation failed:", error);
    res.status(500).json({ error: "Translation failed" });
  }
}
