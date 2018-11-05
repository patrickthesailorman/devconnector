import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const TextFieldGroup = ({
  mame,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        type="email"
        className={classnames("form-control form-control-lg", {
          "is-invalid": errors.email
        })}
        placeholder="Email Address"
        name="email"
        value={this.state.email}
        onChange={this.onChange}
      />
      {errors.email && <div className="invalid-feedback">{errors.email} </div>}
    </div>
  );
};

export default TextFieldGroup;
