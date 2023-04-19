import express from "express";

const router = express.Router();

router.get('/movies', (req, res) => {
    res.json([
        {
            title:'mario',
            year: 2020
        }
    ]);
});

export default router;
