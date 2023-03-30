import { prisma } from "../../../lib/prisma";

import * as bcrypt from "bcryptjs";
import { GenerateTokenProvider } from "../../../provider/GenerateTokenProvider";
import { GenerateRefreshToken } from "../../../provider/GenerateRefreshToken";

interface IAuthenticateUser {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!userAlreadyExists) {
      throw new Error("Usuário ou senha incorreto!");
    }

    const passwordMatch = bcrypt.compareSync(
      password,
      userAlreadyExists.password
    );

    if (!passwordMatch) {
      throw new Error("Usuário ou senha incorreto!");
    }

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(userAlreadyExists.id);

    await prisma.refreshToken.deleteMany({
      where: {
        user_id: userAlreadyExists.id,
      },
    });

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(
      userAlreadyExists.id
    );

    return { token, refreshToken };
  }
}

export { AuthenticateUserUseCase };
