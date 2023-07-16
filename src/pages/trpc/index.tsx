import { ContextContainer } from "@/components/context/trpcContextContainer";
import { TrpcContainer } from "@/components";
const TrpcPage = () => {
  return (
    <ContextContainer>
      <TrpcContainer />
    </ContextContainer>
  );
};
export default TrpcPage;
