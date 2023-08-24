import {prisma} from '@/server/prisma'
import {UpdateUserInput} from '@/server/schema/user.schema'
export const updateUserService = async (input: UpdateUserInput)=>{
  return prisma.user.update({data:input, where:{id: input.id}})
}
