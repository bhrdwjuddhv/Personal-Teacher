import express from 'express';
import cors from "cors";
import {port, corsOrigin} from "./constants.js";

const app = express()
app.use(express.json());
app.use(cors({
    origin: corsOrigin,
    credentials: true,
}));

import aiRouter from "./routes/ai.router.js";
app.use("/api/v1/request-gpt",aiRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})