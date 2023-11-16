import CheckOut from "../Components/CheckOut";
import classes from "../assets/Css/CheckOut.module.css";
import Summary from "../Components/Summary";
import { useState } from "react";

const CheckoutPage = () => {
  const [submit, SetSubmit] = useState(false);
  const [errorSubmit, SeterrorSubmit] = useState(false);
  return (
    <div className={classes.pageContainer}>
      <CheckOut
        Submitting={submit}
        errorsubmit={SeterrorSubmit}
        error={errorSubmit}
      />
      <Summary
        submit={submit}
        Submitting={SetSubmit}
        errorsubmit={errorSubmit}
      />
    </div>
  );
};

export default CheckoutPage;
