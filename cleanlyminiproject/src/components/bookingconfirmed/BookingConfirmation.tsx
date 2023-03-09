import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";

import Confirmed from "./Confirmed";

export default function BookingConfirmation(): JSX.Element {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <Confirmed signOut={signOut} />
        </div>
      )}
    </Authenticator>
  );
}
