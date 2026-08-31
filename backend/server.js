import express from "express";
import cors from "cors";
import quizRoutes from "./routes/quizRoutes.js";


const app = express();

const PORT = 3000;


app.use(cors());
app.use(express.json());
app.use("/api", quizRoutes)

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "server is running"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
