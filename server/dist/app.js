"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv/config");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));
app.get('/', (req, res) => {
    res.send(`hello`);
});
app.listen(process.env.SERVER_PORT, () => {
    console.log(`listen Port = ${process.env.SERVER_PORT}`);
});
//# sourceMappingURL=app.js.map