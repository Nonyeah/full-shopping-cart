export function TitleSame({ map }) {
  return (
    <>
      <p>
        <span>Title*</span>
        <input
          value={map.current.get("title")}
          type="text"
          id="title"
          readOnly={true}
        />
      </p>
    </>
  );
}

export function FirstNameSame({ map }) {
  return (
    <p>
      <span>First Name*</span>
      <input
        type="text"
        id="firstname"
        value={map.current.get("firstname")}
        readOnly={true}
      />
    </p>
  );
}

export function LastNameSame({ map }) {
  return (
    <p>
      <span>Last Name*</span>
      <input type="text" value={map.current.get("lastname")} readOnly={true} />
    </p>
  );
}
export function Address1Same({ map }) {
  return (
    <p>
      <span>Address1*</span>
      <input type="text" value={map.current.get("address1")} readOnly={true} />
    </p>
  );
}

export function Address2Same({ map }) {
  return (
    <p>
      <span>Address2*</span>
      <input type="text" value={map.current.get("address2")} readOnly={true} />
    </p>
  );
}

export function TownSame({ map }) {
  return (
    <p>
      <span>Town*</span>
      <input type="text" value={map.current.get("town")} readOnly={true} />
    </p>
  );
}

export function CountySame({ map }) {
  return (
    <p>
      <span>County</span>
      <input type="text" value={map.current.get("county")} readOnly={true} />
    </p>
  );
}

export function PostcodeSame({ map }) {
  return (
    <>
      <p>
        <span>Postcode*</span>
        <input
          value={map.current.get("postcode")}
          type="text"
          id="postcode"
          readOnly={true}
        />
      </p>
    </>
  );
}

export function TelephoneSame({ map }) {
  return (
    <>
      <p>
        <span>Telephone*</span>
        <input
          value={map.current.get("telephone")}
          type="tel"
          id="telephone"
          readOnly={true}
        />
      </p>
    </>
  );
}

export function EmailSame({ map }) {
  return (
    <>
      <p>
        <span>Email*</span>
        <input
          value={map.current.get("email")}
          type="email"
          id="email"
          readOnly={true}
        />
      </p>
    </>
  );
}
