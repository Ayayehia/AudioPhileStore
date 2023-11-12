import CheckOut from "../Components/CheckOut"
import classes from "../assets/Css/CheckOut.module.css"
import Summary from "../Components/Summary"
import { useState } from "react"

const CheckoutPage = () => {
  const [submit,SetSubmit]=useState(false)
  return (
    <div className={classes.pageContainer}>
      <CheckOut Submitting={submit} />
      <Summary Submitting={SetSubmit}/>
    </div>
  )
}

export default CheckoutPage
