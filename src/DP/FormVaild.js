import React, { useState } from "react";

function FormVaild() {
  const [Form, setForm] = useState({ firstname: "", lastname: "", email: "" });
  const clear = () => {
    setForm({ firstname: "", lastname: "", email: "" });
  };
  const onSet = () => {
    alert("Successfully stored the details");
    clear();
  };
  return (
    <div style={{ backgroundColor: "orange", marginTop: "10px" }}>
      <form onSubmit={onSet}>
        <label>
          Enter your firstname:
          <input
            type="text"
            value={Form.firstname}
            onChange={(e) => setForm({ ...Form, firstname: e.target.value })}
          />
        </label>
        <label>
          Enter your lastname:
          <input
            type="text"
            value={Form.lastname}
            onChange={(e) => setForm({ ...Form, lastname: e.target.value })}
          />
        </label>
        <label>
          Enter your email:
          <input
            type="email"
            value={Form.email}
            onChange={(e) => setForm({ ...Form, email: e.target.value })}
          />
        </label>
        <button>Submit</button>
        <p>FirstName:{Form.firstname}</p>
        <p>LastName:{Form.lastname}</p>
        <p>EmailId:{Form.email}</p>
      </form>
    </div>
  );
}

export default FormVaild;
