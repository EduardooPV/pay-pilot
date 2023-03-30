import { prisma } from "../../../lib/prisma";
import * as bcrypt from "bcryptjs";

interface ICreateUserRequest {
  email: string;
  password: string;
}

class CreateUserUseCase {
  async execute({ email, password }: ICreateUserRequest) {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Usuário já existe");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });

    return newUser;
  }
}

export { CreateUserUseCase };
