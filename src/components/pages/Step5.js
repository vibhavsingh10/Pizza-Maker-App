// export default Step5;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseName, chooseAddress, choosePhoneNo, chooseEmail } from "../../store/user";
import Button from "../common/Button";

const Step5 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector((state) => state.userReducer.name);
  const address = useSelector((state) => state.userReducer.address);
  const phoneNo = useSelector((state) => state.userReducer.phoneNo);
  const email = useSelector((state) => state.userReducer.email);

  const [meraName, setmeraName] = useState(name);
  const [meraAddress, setmeraAddress] = useState(address);
  const [meraPhone, setmeraPhone] = useState(phoneNo);
  const [meraEmail, setmeraEmail] = useState(email);

  const onSubmit = () => {
    dispatch(chooseName(meraName));
    dispatch(chooseAddress(meraAddress));
    dispatch(choosePhoneNo(meraPhone));
    dispatch(chooseEmail(meraEmail));
    history.push("./result");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="vib">
      <div className="mb-3 col">
        <label htmlFor="meraName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="meraName"
          placeholder="Enter your name"
          onChange={(e) => setmeraName(e.target.value)}
          value={meraName}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="meraAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="meraAddress"
          placeholder="Enter your address"
          onChange={(e) => setmeraAddress(e.target.value)}
          value={meraAddress}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="meraPhone" className="form-label">
          Phone No
        </label>
        <input
          type="tel"
          className="form-control"
          id="meraPhone"
          maxLength={10}
          minLength={10}
          placeholder="Enter your phone no."
          onChange={(e) => setmeraPhone(e.target.value)}
          value={meraPhone}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="meraEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="meraEmail"
          placeholder="Enter your email"
          onChange={(e) => setmeraEmail(e.target.value)}
          value={meraEmail}
        />
      </div>
      </div>
      <br></br>
      <Button onSubmit={onSubmit}>Next</Button>
    </form>
  );
};

export default Step5;