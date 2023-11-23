import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkingWithArrays = () => {
  const API_BASE = process.env.REACT_APP_BASE_URL;
  const [errorMessage, setErrorMessage] = useState(null);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const API = `${API_BASE}/a5/todos`;
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(`Unable to delete TODO with ID ${todo.id}`);
    }
  };
  const updateTodo = async () => {
    console.log("here");
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error) {
      console.log(error);
      setErrorMessage(`Unable to update TODO with ID ${todo.id}`);
    }
  };

  return (
    <div className="d-flex flex-column gap-2 border p-3">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
      />
      <a href={`${API}/${todo.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>

      <br />
      <br />

      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>

      <br />
      <br />

      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>

      <br />
      <br />

      <h3>Deleting from an Array</h3>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
      />
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      <br />
      <br />

      <h3>Updating an Item in an Array</h3>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
      />
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary me-2">
        Update Title to {todo.title}
      </a>

      <br />
      <br />

      <div className="d-flex flex-column border gap-2 p-4">
        <h3>Updating Description</h3>
        <input
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          className="form-control mb-2"
          type="text"
        />
        <a
          href={`${API}/${todo.id}/description/${todo.description}`}
          className="btn btn-primary me-2"
        >
          Update Description
        </a>

        <br />
        <br />

        <h3>Updating Completion Status</h3>
        <div className="d-flex gap-5">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          />
          <a
            href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary me-2 w-100"
          >
            Set Completed to {todo.completed.toString()}
          </a>
        </div>
      </div>

      <br />
      <br />

      <input
        value={todo.id}
        readOnly
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <textarea
        className="form-control"
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        value={todo.description}
        type="text"
      />
      <input
        className="form-control"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
      />
      <label className="d-flex gap-2">
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} className="btn btn-primary mb-2 w-100">
        Post Todo
      </button>
      <button onClick={updateTodo} className="btn btn-success mb-2 w-100">
        Update Todo
      </button>
      {errorMessage && <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning float-end">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo)} className="btn btn-danger me-2 float-end">
              Delete
            </button>
            <div className="d-flex gap-2 align-items-center">
              <input checked={todo.completed} type="checkbox" readOnly />
              {todo.title}
              {todo.description}
              {todo.due}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WorkingWithArrays;
