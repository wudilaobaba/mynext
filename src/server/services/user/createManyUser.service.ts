import {CreateManyUserInput} from '@/server/schema/user.schema'
import {prisma} from '@/server/prisma'
export const createManyUserService = (input: CreateManyUserInput)=>{
  return prisma.user.createMany({data: input})
}
