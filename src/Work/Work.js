import React, { useState } from "react";
import uniqid from "uniqid";
import EditWork from "./EditWork";
import "/home/marv/the-odin-project/react-projects/cv-project-functions/src/School/schoolStyles.css";

/* states */
function WorkEtc() {
  const [task, setTask] = useState([]);
  const [butt, setButt] = useState(false);
  const [but, setBut] = useState(true);
  const [item, setItem] = useState({
    company: "",
    position: "",
    dates: "",
    responsibilities: "",
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
                <label>Company </label>
                <input
                  onChange={change}
                  value={item.company || ""}
                  type="text"
                  id="company"
                  name="company"
                />
              </div>
              <div>
                <label>Position </label>
                <input
                  onChange={change}
                  value={item.position || ""}
                  type="text"
                  name="position"
                  id="position"
                />
              </div>
              <div>
                <label>Dates </label>
                <input
                  onChange={change}
                  value={item.dates || ""}
                  type="text"
                  name="dates"
                  id="dates"
                />
              </div>
            </div>

            <div className="button2">
              <div>
                <label>Responsibilities </label>
                <textarea 
                onChange={change}
                value={item.responsibilities || ""}
                id="responsibilities"
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
      {butt ? <EditWork edit={edit} task={task} /> : null}
    </div>
  );
}

export default WorkEtc;
