import React from "react";

function EditName(props) {
  const { task } = props;

  return task.map((item, index) => {
    if (task.length - 1 === index) {
      return (
        <p key={item.id}>
          Name: {item.name} <br />
          Number: {item.number} <br />
          Email: {item.email}
        </p>
      );
    }
    return null;
  });
}

export default EditName;
