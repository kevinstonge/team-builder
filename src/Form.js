import React from "react";
import "./Form.scss";
const Form = (props) => {
  const { visible, method } = props.options;
  return (
    <div className={`formContainer ${visible ? `visible` : `hidden`}`}>
      <div className="memberForm hidden">
        <div className="formHeader">
          <h3>
            <span>{method} member</span>
            <span
              className="closeButton"
              onClick={() => props.formControl({ visible: false, method: "" })}
            >
              x
            </span>
          </h3>
        </div>
        <div className="formBody">
          <label htmlFor="name">
            name:
            <input type="text" id="name" />
          </label>
          <label htmlFor="email">
            email:
            <input type="text" id="email" />
          </label>
          <label htmlFor="role">
            role:
            <input type="text" id="role" />
          </label>
          <button type="submit" className={`${method}Button submitButton`}>
            {method}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
