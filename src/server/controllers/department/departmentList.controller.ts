import {departmentListService} from '@/server/services/department'
export const departmentListController = async ()=>{
  try {
    return await departmentListService();
  }catch (e){
    return {code: e}
  }
}
