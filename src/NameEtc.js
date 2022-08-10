import React, { useState } from "react";
import EditName from "./components/EditName";

  /* states */
  function NameEtc() {
    const [task, setTask] = useState([]);
    const [item, setItem] = useState({
      name: "",
      number: "",
      email: ""
    });

  /* change handler */
  function change(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  /* submit handler */
  function addToList() {
    let tempArr = task;
    tempArr.push(item.name);
    tempArr.push(item.number);
    tempArr.push(item.email);
    setTask(tempArr);
    setItem("");
  }

  return (
    <div>
      <div>
        <label>Name </label>
        <input onChange={change} value={item.name || ''} type="text" name="name" />
      </div>
      <div>
        <label>Number </label>
        <input onChange={change} value={item.number || ''} type="tel" name="number" />
      </div>
      <div>
        <label>Email </label>
        <input onChange={change} value={item.email || ''} type="email" name="email" />
      </div>

      <button onClick={addToList}>Add Task</button>
      <EditName task={task} />
    </div>
  );
}

export default NameEtc;
