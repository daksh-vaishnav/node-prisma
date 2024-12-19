import { Router } from "express";


const router = Router()

router.get("/", (req, res) => {
    res.status(200).send({ msg: "this is test from prisma" })
})

export default router