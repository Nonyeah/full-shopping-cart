import { useState } from "react";
export function Title({ storeUserInput }) {
  const [title, settitle] = useState("");
  return (
    <>
      <p>
        <span>Title</span>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
            storeUserInput(e);
          }}
          required
        />{" "}
      </p>
    </>
  );
}

export function FirstName({ storeUserInput }) {
  const [firstname, setfirstname] = useState("");
  return (
    <>
      <p>
        <span>First Name*</span>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => {
            setfirstname(e.target.value);
            storeUserInput(e);
          }}
          required
        />
      </p>
    </>
  );
}

export function LastName({ storeUserInput }) {
  const [lastname, setlastname] = useState("");
  return (
    <>
      <p>
        <span>Last Name*</span>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => {
            setlastname(e.target.value);
            storeUserInput(e);
          }}
          required
        />
      </p>
    </>
  );
}

export function Address1({ storeUserInput }) {
  const [address1, setaddress1] = useState("");
  return (
    <>
      <p>
        <span>Address 1* </span>
        <input
          type="text"
          id="address1"
          value={address1}
          onChange={(e) => {
            setaddress1(e.target.value);
            storeUserInput(e);
          }}
          required
        />
      </p>
    </>
  );
}

export function Address2({ storeUserInput }) {
  const [address2, setaddress2] = useState("");
  return (
    <>
      <p>
        <span>Address 2</span>
        <input
          type="text"
          id="address2"
          value={address2}
          onChange={(e) => {
            setaddress2(e.target.value);
            storeUserInput(e);
          }}
        />
      </p>
    </>
  );
}

export function Town({ storeUserInput }) {
  const [town, settown] = useState("");
  return (
    <>
      <p>
        <span>Town*</span>
        <input
          value={town}
          type="text"
          id="town"
          onChange={(e) => {
            settown(e.target.value);
            storeUserInput(e);
          }}
          required
        />
      </p>
    </>
  );
}

export function County({ storeUserInput }) {
  const [county, setcounty] = useState("");
  return (
    <>
      <p>
        <span>County</span>
        <input
          value={county}
          type="text"
          id="county"
          onChange={(e) => {
            setcounty(e.target.value);
            storeUserInput(e);
          }}
        />
      </p>
    </>
  );
}

export function Country({ storeUserInput }) {
  const [country, setcountry] = useState("");
  return (
    <>
      <p>
        <span>Country*</span>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => {
            setcountry(e.target.value);
            storeUserInput(e);
          }}
          required
        />
      </p>
    </>
  );
}

export function Postcode({ storeUserInput }) {
  const [postcode, setpostcode] = useState("");
  return (
    <>
      <p>
        <span>Postcode*</span>
        <input
          type="text"
          id="postcode"
          value={postcode}
          onChange={(e) => {
            setpostcode(e.target.value);
            storeUserInput(e);
          }}
          required
        />
      </p>
    </>
  );
}

export function Telephone({ storeUserInput }) {
  const [telephone, settelephone] = useState("");
  return (
    <>
      <p>
        <span>Telephone*</span>
        <input
          value={telephone}
          type="tel"
          id="telephone"
          onChange={(e) => {
            settelephone(e.target.value);
            storeUserInput(e);
          }}
        />
      </p>
    </>
  );
}

export function Email({ storeUserInput }) {
  const [email, setemail] = useState("");
  return (
    <>
      <p>
        <span>Email*</span>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
            storeUserInput(e);
          }}
        />
      </p>
    </>
  );
}
