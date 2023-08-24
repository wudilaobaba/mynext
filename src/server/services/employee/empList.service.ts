import {prisma} from '@/server/prisma'
export const empListService = async ()=>{

  return prisma.employees.findMany({
    where:{
      department:{
        department_name:'销售部'
      }
    },
    include:{
      department: {
        include: {
          location: true
        }
      }
    },
  });
}
