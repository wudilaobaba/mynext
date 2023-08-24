import {router, procedure} from "@/server/trpc";
import {locationListController} from "@/server/controllers/location";

export const locationRouter = router({
  list:procedure.query(locationListController)
});
