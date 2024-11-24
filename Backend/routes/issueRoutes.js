
import { Router } from "express";
import {getAllissues, postIssues, updateStatus} from "../controllers/IssuesController.js";

const router = new Router()

router.get("/getIssues",getAllissues)
router.post("/postIssue", postIssues)
router.put("/updateStatus", updateStatus)

export default router;