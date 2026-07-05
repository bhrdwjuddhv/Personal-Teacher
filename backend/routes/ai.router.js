import {Router} from "express";
import {askTeacher} from "../controller/ai.controller.js";

const router = Router();

router.route("/ask-ai").post(askTeacher)

export default router;

