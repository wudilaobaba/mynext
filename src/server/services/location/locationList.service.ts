import {prisma} from '@/server/prisma'
export const locationListService = async ()=>{
  return prisma.location.findMany({include:{department: true}});
}
