import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
      status: "Error",
      message: error.message,
    });
  }
);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
