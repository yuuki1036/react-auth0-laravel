import React, { VFC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Components/Loading";
import Wrapper from "../Components/Wrapper";

const Index: VFC = () => {
  const { isLoading } = useAuth0();

  return <>{isLoading ? <Loading /> : <Wrapper />}</>;
};

export default Index;
