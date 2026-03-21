import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
    const app = express();
    const PORT = 3000;

    app.use(express.json());

    const itemsPath = path.join(process.cwd(), "items.json");

    // READ
    function readData() {
        try {
            return JSON.parse(fs.readFileSync(itemsPath, "utf-8"));
        } catch (e) {
            return [];
        }
    }

    // WRITE
    function writeData(data: any) {
        fs.writeFileSync(itemsPath, JSON.stringify(data, null, 2));
    }

    // API Routes
    app.get("/api/items", (req, res) => {
        res.json(readData());
    });

    app.post("/api/buy", (req, res) => {
        let { id, quantity } = req.body;

        id = Number(id);
        quantity = Number(quantity);

        let items = readData();
        let item = items.find((i: any) => i.id === id);

        if (!item) {
            return res.status(404).json({ error: "Item not found" });
        }

        if (item.stock < quantity) {
            return res.status(400).json({ error: "Not enough stock" });
        }

        let total = item.price * quantity;

        item.stock -= quantity;
        item.soldToday += quantity;

        writeData(items);

        res.json({
            message: "Success",
            totalAmount: total
        });
    });

    // Vite middleware for development
    if (process.env.NODE_ENV !== "production") {
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "spa",
        });
        app.use(vite.middlewares);
    } else {
        const distPath = path.join(process.cwd(), "dist");
        app.use(express.static(distPath));
        app.get("*", (req, res) => {
            res.sendFile(path.join(distPath, "index.html"));
        });
    }

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();
