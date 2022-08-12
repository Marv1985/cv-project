import React, { useState } from "react";
import uniqid from "uniqid";
import EditName from "./EditName";
import "/home/marv/the-odin-project/react-projects/cv-project-functions/src/Name/nameStyles.css";

/* states */
function NameEtc() {
  const [task, setTask] = useState([]);
  const [butt, setButt] = useState(false);
  const [but, setBut] = useState(true);
  const [item, setItem] = useState({
    name: "",
    number: "",
    email: "",
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
    <div className="container">
      {/* inputs */}
      {but ? (
        <form onSubmit={addToList}>
        <div className="wrapper">
          <div className="inputs">
            <div>
              <label>Name </label>
              <input
                onChange={change}
                value={item.name || ""}
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label>Number </label>
              <input
                onChange={change}
                value={item.number || ""}
                type="tel"
                name="number"
                id="number"
                pattern="[0-9]+"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Enter a valid telphone number")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
            </div>
            <div>
              <label>Email </label>
              <input
                onChange={change}
                value={item.email || ""}
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          

          <div className="button">
            <button type="submit" >Add Task</button>
          </div>
        </div>
        </form>
      ) : null}

      {/* output */}
      {butt ? <EditName edit={edit} task={task} /> : null}
    </div>
  );
}

export default NameEtc;
