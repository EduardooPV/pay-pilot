import dayjs from "dayjs";
import { prisma } from "../lib/prisma";

class GenerateRefreshToken {
  async execute(userId: string) {
    const expiresIn = dayjs().add(15, "second").unix();

    const generateRefreshToken = await prisma.refreshToken.create({
      data: {
        user_id: userId,
        expiresIn,
      },
    });

    return generateRefreshToken;
  }
}

export { GenerateRefreshToken };
