const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, "../archivos"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-prueba-" + file.originalname);
  },
});

const fileUpload = multer({
  storage: diskstorage,
}).single("archivo");

router.get("/", (req, res) => {
  res.send("Welcome to my app");
});

router.post("/files/post", fileUpload, (req, res) => {
  console.log(req.file);
});

module.exports = router;
