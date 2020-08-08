import React, { useState, useEffect } from "react";
import "./Form.scss";
import uid from "./uid";
const Form = (props) => {
  const { visible, method, formFunction, member } = props.options;
  const [formValues, setFormValues] = useState({
    id: null,
    name: "",
    email: "",
    role: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.id === "closeButton") {
      setFormValues({ id: null, name: "", email: "", role: "" });
      props.formControl({ visible: false, method: "", id: null, member: null });
    } else if (e.target.id === "submitButton" || e.type === "submit") {
      if (
        formValues.name !== "" &&
        formValues.email !== "" &&
        formValues.role !== ""
      ) {
        formFunction({
          id: formValues.id || uid(),
          name: formValues.name,
          email: formValues.email,
          role: formValues.role,
        });
        setFormValues({ id: null, name: "", email: "", role: "" });
        props.formControl({
          visible: false,
          method: "",
          formFunction: null,
          member: null,
        });
      }
    } else {
      setFormValues({ ...formValues, [e.target.id]: e.target.value });
    }
  };
  useEffect(() => {
    document.querySelector("#name").focus();
  }, [visible]);
  useEffect(() => {
    if (member !== null) {
      setFormValues({ ...member });
    }
  }, [member]);
  return (
    <div className={`formContainer ${visible ? `visible` : `hidden`}`}>
      <form className="memberForm hidden" onSubmit={(e) => handleInput(e)}>
        <div className="formHeader">
          <h3>
            <span>{method} member</span>
            <span
              className="closeButton"
              id="closeButton"
              onClick={(e) => handleInput(e)}
            >
              x
            </span>
          </h3>
        </div>
        <div className="formBody">
          <label htmlFor="name">
            name:
            <input
              type="text"
              id="name"
              value={formValues.name}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <label htmlFor="email">
            email:
            <input
              type="email"
              id="email"
              value={formValues.email}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <label htmlFor="role">
            role:
            <input
              type="text"
              id="role"
              value={formValues.role}
              onChange={(e) => handleInput(e)}
            />
          </label>
          <button
            type="submit"
            id="submitButton"
            className={`${method}MemberButton submitButton`}
          >
            {method}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
