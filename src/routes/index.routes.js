import { Router } from "express";
import animalRouter from "./animals.routes.js";

const router = Router()
router.use("/animal", animalRouter)
router.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota ta funfionando" });
});
export default router