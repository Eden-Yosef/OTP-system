const sqlConnect = require("./DB/sql-connect.config");

const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

sqlConnect;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./Routes/restApi"));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
