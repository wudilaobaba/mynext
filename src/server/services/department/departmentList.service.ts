import {prisma} from '@/server/prisma'

export const departmentListService = async () => {
  return prisma.department.findMany({include: { employees: true, manager: true, location: true}});
}
