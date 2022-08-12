import React, { useState } from "react";
import uniqid from "uniqid";
import EditSchool from "./EditSchool";
import "/home/marv/the-odin-project/react-projects/cv-project-functions/src/School/schoolStyles.css";

/* states */
function SchoolEtc() {
  const [task, setTask] = useState([]);
  const [butt, setButt] = useState(false);
  const [but, setBut] = useState(true);
  const [item, setItem] = useState({
    school: "",
    college: "",
    university: "",
    grades: "",
    id: uniqid(),
  });

  /* change handler */
  function change(e) {
    setItem({
      ...item,
      [e.target.id]: e.target.value,
      id: item.id,
    });
  }

  /* submit handler */
  function addToList(e) {
    e.preventDefault();
    let tempArr = task;
    tempArr.push(item);
    setTask(tempArr);
    setItem("");
    setButt(true);
    setBut(false);
  }

  /* edit button */
  function edit() {
    task.map((ed) => {
      return setItem(ed);
    });
    setBut(true);
    setButt(false);
  }

  return (
    <div className="container2">
      {/* inputs */}
      {but ? (
        <form onSubmit={addToList}>
          <div className="wrapper2">
            <div className="inputs2">
              <div>
                <label>School </label>
                <input
                  onChange={change}
                  value={item.school || ""}
                  type="text"
                  id="school"
                  name="school"
                />
              </div>
              <div>
                <label>College </label>
                <input
                  onChange={change}
                  value={item.college || ""}
                  type="text"
                  name="college"
                  id="college"
                />
              </div>
              <div>
                <label>University </label>
                <input
                  onChange={change}
                  value={item.university || ""}
                  type="text"
                  name="university"
                  id="university"
                />
              </div>
            </div>

            <div className="button2">
              <div>
                <label>Grades </label>
                <textarea 
                onChange={change}
                value={item.grades || ""}
                id="grades"
                ></textarea>
              </div>
              <div>
              <button type="submit">Add Task</button>
              </div>
            </div>
          </div>
        </form>
      ) : null}

      {/* output */}
      {butt ? <EditSchool edit={edit} task={task} /> : null}
    </div>
  );
}

export default SchoolEtc;
