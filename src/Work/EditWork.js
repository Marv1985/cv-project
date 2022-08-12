import React from "react";

function EditWork(props) {
  const { task } = props;
  const { edit } = props;

  return task.map((item, index) => {
    if (task.length - 1 === index) {
      return (
        <div key={item.id} className="outputwrapper">
          <div className="nameoutput">
            <div>Company: {item.company}</div>
            <div>Position: {item.position}</div>
            <div>Dates: {item.dates}</div>
            <div>Responsibilities: {item.responsibilities}</div>
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

export default EditWork;
