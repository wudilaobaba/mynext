import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const xx = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();
  await prisma.user.update({
    where: { id: 15 },
    data: {
      name: "Tom Cat",
    },
  });
  res.status(200).json({
    msg: "okokkok~~~",
  });
};
export default xx;
