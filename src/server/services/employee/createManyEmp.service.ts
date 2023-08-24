import {CreateManyEmpInput} from '@/server/schema/employee.schema'
import {prisma} from '@/server/prisma'
export const createManyEmpService = async (input: CreateManyEmpInput)=>{
  return prisma.employees.createMany({
    data: input,
    // skipDuplicates: true
  })
}
