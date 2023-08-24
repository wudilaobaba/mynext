import {empListInfiniteService} from "@/server/services/employee"
import {EmpInfiniteInput} from '@/server/schema/employee.schema'

export const empListInfiniteController = async ({input}: { input: EmpInfiniteInput }) => {
  try {
    return await empListInfiniteService(input);
  } catch (e) {
    return {code: e}
  }
}
