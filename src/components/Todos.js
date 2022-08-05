import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "./services/action/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((store) => store);
  const x = useSelector((store) => console.log(store));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  console.log(todos);
  return (
    <div>
      <h1>todos app</h1>
      {isLoading && <h3>loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            const { title, id } = todo;
            return (
              <article key={id}>
                <h4>{title}</h4>
                <p>{id}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
