import Nav from "../components/Nav";
import { ToDoContext } from "../context/Context";
import { CheckedContext } from "../context/Context";

import { useContext, useState } from "react";

const Home = () => {
  const { toDo, setToDo } = useContext(ToDoContext);
  const [newToDo, setnewToDo] = useState({});
  const { checked, setChecked } = useContext(CheckedContext);

  const addInput = (event) => {
    setnewToDo({ todo: `${event.target.value}` });
  };

  const addToDo = () => {
    JSON.stringify(newToDo) === "{}" ? "" : setToDo([...toDo, newToDo]);
    document.querySelector(".input-field").value = "";
    setnewToDo({});
  };

  const checkToDo = (index) => {
    setChecked((prev) => {
      const toDoList = [...prev];
      toDoList[index] = !toDoList[index];
      return toDoList;
    });
  };

  const keyAddToDo = (event) => {
    if (event.key === "Enter") {
      JSON.stringify(newToDo) === "{}" ? "" : setToDo([...toDo, newToDo]);
      document.querySelector(".input-field").value = "";
      setnewToDo({});
    }
  };

  return (
    <main>
      <section>
        <h1>ToDo</h1>
        <Nav />
        <article className="todos-section">
          {toDo.map((elm, index) => {
            return (
              <div key={index} className="todo-box">
                <div className="checkbox-todo">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={checked[index]}
                    onClick={() => checkToDo(index)}
                  />
                  <p
                    style={{
                      textDecoration: checked[index] ? "line-through" : "none",
                    }}
                  >
                    {elm.todo}{" "}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setToDo((prev) => {
                      const index = toDo.indexOf(elm);
                      if (index > -1) {
                        prev.splice(index, 1);
                      }
                      return [...prev];
                    });
                  }}
                  className="gg-trash"
                ></button>
              </div>
            );
          })}
        </article>
        <div className="input">
          <input
            onKeyDown={keyAddToDo}
            className="input-field"
            onChange={addInput}
            type="text"
            placeholder="Füge eine Todo hinzu..."
          />
          <button className="adding-todo" onClick={addToDo}>
            Hinzufügen
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
