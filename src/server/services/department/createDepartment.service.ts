import {CreateDepartmentInput} from '@/server/schema/department.schema'
import {prisma} from '@/server/prisma'
export const createDepartmentService = async (input: CreateDepartmentInput)=>{
  return prisma.department.create({
    data: input
  })
}
