import { Router } from "express";

import { CreateUserController } from "./useCases/User/createUser/CreateUserController";
import { AuthenticateUserController } from "./useCases/User/authenticateUser/AuthenticateUserController";
import { RefreshTokenUserController } from "./useCases/User/refreshTokenUser/RefreshTokenUserController";

import { CreateTransactionController } from "./useCases/Transaction/createTransaction/CreateTransactionController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

const createTransactionController = new CreateTransactionController();

router.post("/user", createUserController.handle);
router.post("/user/login", authenticateUserController.handle);
router.post("/user/refresh-token", refreshTokenUserController.handle);

router.post("/transaction", createTransactionController.handle);

export { router };
