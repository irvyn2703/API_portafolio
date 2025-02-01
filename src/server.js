require("dotenv").config();
const swaggerDocs = require("./swagger");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
swaggerDocs(app);
require("./database/mongo")();
require("./routes/routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
