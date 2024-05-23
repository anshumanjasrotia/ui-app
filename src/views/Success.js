import React from "react";

import { withAuthenticationRequired } from "@auth0/auth0-react";

import Loading from "../components/Loading";

export const SuccessComponent = () => {
  return <h1>Your payment has been processed successfully</h1>;
};

export default withAuthenticationRequired(SuccessComponent, {
  onRedirecting: () => <Loading />,
});
