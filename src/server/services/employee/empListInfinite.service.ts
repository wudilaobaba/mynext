import {prisma} from '@/server/prisma'
import {EmpInfiniteInput} from '@/server/schema/employee.schema'
export const empListInfiniteService = async (input: EmpInfiniteInput)=>{
  const { limit, cursor = 1 } = input;
    const data = await prisma.employees.findMany({
      take: limit + 1,
      skip: (cursor - 1) * limit,
    });
    let nextCursor;
    if (data.length > limit) {
      data.pop();
      nextCursor = cursor + 1;
    }
    return {
      // @ts-ignore
      data: [...new Set(data.map((item) => item).flat())],
      nextCursor,
    };
}
