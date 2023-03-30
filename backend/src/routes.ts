import { Router } from "express";

import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

import { CreateUserController } from "./useCases/User/createUser/CreateUserController";
import { AuthenticateUserController } from "./useCases/User/authenticateUser/AuthenticateUserController";
import { RefreshTokenUserController } from "./useCases/User/refreshTokenUser/RefreshTokenUserController";

import { CreateTransactionController } from "./useCases/Transaction/createTransaction/CreateTransactionController";
import { GetTransactionUserController } from "./useCases/Transaction/getTransactionUser/GetTransactionUserController";
import { DeleteTransactionController } from "./useCases/Transaction/deleteTransaction/DeleteTransactionController";
import { EditTransactionController } from "./useCases/Transaction/editTransaction/EditTransactionController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();

const createTransactionController = new CreateTransactionController();
const getTransactionsUserController = new GetTransactionUserController();
const deleteTransactionController = new DeleteTransactionController();
const editTransactionsController = new EditTransactionController();

router.post("/user", createUserController.handle);
router.post("/user/login", authenticateUserController.handle);
router.post("/user/refresh-token", refreshTokenUserController.handle);

router.post("/transaction", createTransactionController.handle);
router.get(
  "/transaction",
  ensureAuthenticated,
  getTransactionsUserController.handle
);
router.delete("/transaction", deleteTransactionController.handle);
router.put("/transaction", editTransactionsController.handle);

export { router };
