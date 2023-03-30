import * as jwt from "jsonwebtoken";

const secret =
  "D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7w!z%C*F-JaNdRfUjXn2r5u8x";

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = jwt.sign({}, secret, {
      subject: userId,
      expiresIn: "20s",
    });
    
    return token;
  }
}

export { GenerateTokenProvider };
