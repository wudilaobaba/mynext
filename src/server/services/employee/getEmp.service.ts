import {FindEmpInput} from '@/server/schema/employee.schema'
import {prisma} from '@/server/prisma'
export const getEmpService = async (input: FindEmpInput)=>{
  return prisma.employees.findUnique({
    where:{
      id: input.id
    }
  })
}
