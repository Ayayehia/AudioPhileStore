import Classes from "../assets/Css/CheckOut.module.css";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useEffect, useState } from "react";

const CheckOut = ({ Submitting, errorsubmit, error }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("E-money");
  const [eMoneyNumber, setEMoneyNumber] = useState("");
  const [eMoneyPin, setEMoneyPin] = useState("");

  useEffect(() => {
    // Validation logic
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      address.trim() !== "" &&
      zipCode.trim() !== "" &&
      city.trim() !== "" &&
      country.trim() !== "" &&
      eMoneyNumber.trim() !== "" &&
      eMoneyPin.trim() !== ""
    ) {
      // Set errorsubmit to false
      errorsubmit(false);
    } else {
      // Set errorsubmit to true
      errorsubmit(true);
    }
  }, [
    name,
    email,
    phoneNumber,
    address,
    zipCode,
    city,
    country,
    eMoneyNumber,
    eMoneyPin,
  ]);

  console.log(Submitting, "CHnaging state after submitting");
  console.log(error, "error condition");
  const ErrorMessage = (
    <p className={Classes.errorMessage}>Field can't be empty</p>
  );
  console.log(name, "name field");
  return (
    <div className={Classes.container}>
      <h1>CheckOut</h1>
      <form>
        <div className={Classes.sections}>
          <h3>billing details</h3>
          <div className={Classes.rowSections}>
            <div className={Classes.labelposition}>
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className={!name && Submitting ? Classes.errorInput : ""}
              />
              {!name && Submitting && ErrorMessage}
            </div>

            <div className={Classes.labelposition}>
              <label>Email-Adresse</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className={!email && Submitting ? Classes.errorInput : ""}
              />
              {!email && Submitting && ErrorMessage}
            </div>
          </div>
          <div className={Classes.labelposition}>
            <label>Phone Number</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              className={!phoneNumber && Submitting ? Classes.errorInput : ""}
            />
            {!phoneNumber && Submitting && ErrorMessage}
          </div>
        </div>

        <div className={Classes.sections}>
          <h3>Shipping Info</h3>
          <div className={Classes.labelposition}>
            <label>Adresse</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className={`${Classes.fullLength} ${
                !address && Submitting ? Classes.errorInput : ""
              }`}
              type="text"
            />
            {!address && Submitting && ErrorMessage}
          </div>

          <div className={Classes.rowSections}>
            <div className={Classes.labelposition}>
              <label>Zip Code</label>
              <input
                onChange={(e) => setZipCode(e.target.value)}
                value={zipCode}
                type="number"
                className={!zipCode && Submitting ? Classes.errorInput : ""}
              />
              {!zipCode && Submitting && ErrorMessage}
            </div>
            <div className={Classes.labelposition}>
              <label>City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                value={city}
                type="text"
                className={!city && Submitting ? Classes.errorInput : ""}
              />
              {!city && Submitting && ErrorMessage}
            </div>
          </div>
          <div className={Classes.labelposition}>
            <label>Country</label>
            <input
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              type="text"
              className={!country && Submitting ? Classes.errorInput : ""}
            />
            {!country && Submitting && ErrorMessage}
          </div>
        </div>

        <div className={Classes.sections}>
          <div className={Classes.rowSections}>
            <h3>Payment Method </h3>
            <div className={Classes.sections}>
              <FormControl>
                <FormLabel>Sizes</FormLabel>
                <RadioGroup
                  defaultValue="medium"
                  name="radio-buttons-group"
                  className={Classes.radioContainer}
                >
                  <div className={Classes.radio}>
                    <Radio value="E-money" label="Small" size="sm" />
                    <FormLabel>E-money</FormLabel>
                  </div>
                  <div className={Classes.radio}>
                    <Radio value="Cash on Delivery" label="Small" size="md" />
                    <FormLabel>Cash on Delivery</FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className={Classes.rowSections}>
            <div className={Classes.labelposition}>
              <label>e-money Number</label>
              <input
                onChange={(e) => setEMoneyNumber(e.target.value)}
                value={eMoneyNumber}
                type="number"
                className={
                  !eMoneyNumber && Submitting ? Classes.errorInput : ""
                }
              />
              {!eMoneyNumber && Submitting && ErrorMessage}
            </div>
            <div className={Classes.labelposition}>
              <label>e-money Pin</label>
              <input
                onChange={(e) => setEMoneyPin(e.target.value)}
                value={eMoneyPin}
                type="number"
                className={!eMoneyPin && Submitting ? Classes.errorInput : ""}
              />
              {!eMoneyPin && Submitting && ErrorMessage}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
