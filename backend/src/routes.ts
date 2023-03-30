import { Router } from "express";
import { AuthenticateUserController } from "./useCases/User/authenticateUser/AuthenticateUserController";

import { CreateUserController } from "./useCases/User/createUser/CreateUserController";
import { RefreshTokenUserController } from "./useCases/User/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

router.post("/user", createUserController.handle);
router.post("/user/login", authenticateUserController.handle);
router.post("/user/refresh-token", refreshTokenUserController.handle);

export { router };
