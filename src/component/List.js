import React, { useState, useEffect } from "react";
import { FaBitbucket } from "react-icons/fa";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function List({ user }) {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const todoRef = db.collection("todos").doc(user.uid);
      todoRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          const todoData = docSnap.data();
          setList(todoData.todos);
        } else {
          console.log("No Docs");
        }
      });
    }
  }, []);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTask() {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...list, { id: Date.now(), task: task }],
      });
    setTask("");
  }

  function handleDelete(id) {
    db.collection("todos").doc(user.uid).update({
        todos: list.filter((x) => x.id !== id)
      });
  }

  return (
    <>
      <div className="todo">
        <h4>Add Your Task</h4>
        <input
          onChange={handleChange}
          type="text"
          value={task}
          placeholder="Enter Your Task"
        />
        <button onClick={addTask} className="btns">
          Add
        </button>

        <div className="list">
          {list.map((x) => {
            return (
              <div className="task" key={x.id}>
                <div className="content">
                  <b>
                    <p>{x.task}</p>
                  </b>
                </div>
                <button onClick={() => handleDelete(x.id)} className="del">
                  <FaBitbucket />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default List;
