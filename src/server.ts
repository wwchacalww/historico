import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (request, response) => {
    return response.status(200).json({"message":"Welcome a new World"});
});
app.listen(3000, () => console.log("Server is running on port 3000 🔥🔥🔥"));