import { useState } from "react";

function Bai1() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert("Submit thành công");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter your name</label>
        <input
          type="text"
          value={form.name}
          onChange={handleChange("name")}
        />
        <br />

        <label>Enter your email</label>
        <input
          type="text"
          value={form.email}
          onChange={handleChange("email")}
        />
        <br />

        <label>Enter your age</label>
        <input
          type="text"
          value={form.age}
          onChange={handleChange("age")}
        />
        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Bai1;
