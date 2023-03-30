import { prisma } from "../../../lib/prisma";

import dayjs from "dayjs";
import { GenerateRefreshToken } from "../../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../../provider/GenerateTokenProvider";

class RefreshTokenUserUseCase {
  async execute(refresh_token: string) {
    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    if (!refreshToken) {
      throw new Error("Refresh Token inválido!");
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken?.expiresIn as number)
    );

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(refreshToken.user_id);

    if (refreshTokenExpired) {
      await prisma.refreshToken.deleteMany({
        where: {
          user_id: refreshToken.user_id,
        },
      });

      const generateRefreshTokenProvider = new GenerateRefreshToken();
      const newRefreshToken = await generateRefreshTokenProvider.execute(
        refreshToken.user_id
      );

      return { token, refreshToken: newRefreshToken };
    }

    return { token };
  }
}

export { RefreshTokenUserUseCase };
