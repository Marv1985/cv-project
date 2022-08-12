import React from "react";

function EditSchool(props) {
  const { task } = props;
  const { edit } = props;

  return task.map((item, index) => {
    if (task.length - 1 === index) {
      return (
        <div key={item.id} className="outputwrapper">
          <div className="nameoutput">
            <div>School: {item.school}</div>
            <div>College: {item.college}</div>
            <div>University: {item.university}</div>
            <div>Grades: {item.grades}</div>
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

export default EditSchool;
