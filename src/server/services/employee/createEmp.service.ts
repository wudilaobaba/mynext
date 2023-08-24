import {CreateEmpInput} from '@/server/schema/employee.schema'
import {prisma} from '@/server/prisma'
export const createEmpService = async (input: CreateEmpInput)=>{
  return prisma.employees.create({
    data: input,
    // skipDuplicates: true
  })
}
