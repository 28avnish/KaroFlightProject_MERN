import axios from "axios";

// Call backend translate API
export async function translateTexts(texts, lang) {
  try {
    const res = await axios.post(
      "https://server-render-kflight-0d3r.onrender.com/api/translate",
      {
        texts,
        targetLang: lang,
      }
    );
    return res.data.translations;
  } catch (err) {
    console.error("Translation failed:", err);
    return texts; // fallback
  }
}