import {prisma} from '@/server/prisma'
import {CreateUserInput} from '@/server/schema/user.schema'

export const createUserService = async (input: CreateUserInput) => {
  return prisma.user.create({data: input});
}
