import React from "react";
import uniqid from "uniqid";

function EditName(props) {
  const { task } = props;

  return (
    <div>
      {task.map((item) => <p key={uniqid()}>{item} </p>)}
    </div>
  );
}

export default EditName;
