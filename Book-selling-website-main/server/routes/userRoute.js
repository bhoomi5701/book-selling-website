import express from "express";

import { registerUser, getUser, loginUser } from "../controller/user.controller.js";

const router = express.Router();

router.route("/")
    .post(registerUser)
    .get(getUser)

router.post("/login", loginUser);

export default router;