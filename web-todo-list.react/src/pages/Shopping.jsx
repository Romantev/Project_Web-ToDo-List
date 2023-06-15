import Nav from "../components/Nav";
import { ShoppingContext } from "../context/Context";
import { useContext, useState } from "react";
import { CheckedContext } from "../context/Context";

const Shopping = () => {
  const { shopping, setShopping } = useContext(ShoppingContext);
  const { checked, setChecked } = useContext(CheckedContext);
  const [newToDo, setnewToDo] = useState({});

  const addInput = (event) => {
    setnewToDo({ todo: `${event.target.value}` });
  };

  const addToDo = () => {
    JSON.stringify(newToDo) === "{}" ? "" : setShopping([...shopping, newToDo]);
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
      JSON.stringify(newToDo) === "{}"
        ? ""
        : setShopping([...shopping, newToDo]);
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
          {shopping.map((elm, index) => {
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
                    setShopping((prev) => {
                      const index = shopping.indexOf(elm);
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

export default Shopping;
