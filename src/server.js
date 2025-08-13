import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",         // local React dev
    "https://deepakportfolio.vercel.app" // replace with your deployed frontend
  ],
  methods: ["GET", "POST"],
}));

// 1) Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// 2) Define a simple Message schema (for your Contact form)
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

// 3) Test route
app.get("/", (_req, res) => res.send("Backend OK"));

// 4) Contact route: save a message
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ success: false, error: "All fields required" });

    await Message.create({ name, email, message });
    res.status(201).json({ success: true, message: "Saved" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
