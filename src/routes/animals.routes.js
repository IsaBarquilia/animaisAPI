import { Router } from "express"
import {
    atualizarAnimal,
    buscarAnimalPorId,
    buscarTodosanimais,
    criarAnimal,
    deletarAnimal
} from "../controllers/animais.controller.js";

const rotasAnimais = Router();

rotasAnimais.get("/", buscarTodosanimais)
rotasAnimais.get("/:id", buscarAnimalPorId)
rotasAnimais.post("/", criarAnimal)
rotasAnimais.put("/:id", atualizarAnimal)
rotasAnimais.delete("/:id", deletarAnimal)

export default rotasAnimais;