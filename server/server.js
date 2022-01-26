const express = require("express");
const mysql = require("mysql");
const conn = require("express-myconnection");
const cors = require("cors");

const app = express();

app.use(
  conn(mysql, {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "subidadatos",
  })
);

app.use(cors());

app.use(require("./routes/routes"));

app.listen(5000, () => {
  console.log("server running on", "http://localhost:" + 5000);
});
