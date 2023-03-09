import Booking from "../components/booking/Booking";
import Header from "../components/Header";
import { Authenticator } from "@aws-amplify/ui-react";

export default function LandingPage() {
  return (
    
      <>
      
        <Header />
        <Booking />
      </>
    
  );
}
