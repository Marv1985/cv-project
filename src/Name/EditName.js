import React from "react";

function EditName(props) {
  const { task } = props;
  const {edit} = props;

  return task.map((item, index) => {
    if (task.length - 1 === index) {
      return (
        <div key={item.id} className="outputwrapper">
        <div className="nameoutput" >
         <div>Name: {item.name}</div>
          <div>Number: {item.number}</div>
          <div>Email: {item.email}</div>
          </div>
          <div>
          <button onClick={edit}>Edit</button>
          </div>
        </div>
      );
    }
    return null;
  });
}

export default EditName;
