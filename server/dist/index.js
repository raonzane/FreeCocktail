"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send(`hello`);
});
app.listen(process.env.SERVER_PORT, () => {
    console.log(`listen Port = ${process.env.SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map