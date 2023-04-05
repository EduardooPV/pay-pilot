import dayjs from "dayjs";
import { prisma } from "../lib/prisma";

class GenerateRefreshToken {
  async execute(userId: string) {
    const expiresIn = dayjs().add(1, "week").unix();

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
