import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
dotenv.config();

// ROUTE IMPORTS
import dashboardRouters from "./routes/dashboardRoutes";
import productsRouters from "./routes/productRouters";

// CONFIGURATIONS
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use("/dashboard", dashboardRouters);
app.use("/products", productsRouters);
// SERVER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
