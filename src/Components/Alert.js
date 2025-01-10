import React from "react";

function Alert(props) {
  const capitlizeChar = (char) => {
    return props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>
          {capitlizeChar(props.alert.type)}: {props.alert.msg}
        </strong>
      </div>
    )
  );
}

export default Alert;
