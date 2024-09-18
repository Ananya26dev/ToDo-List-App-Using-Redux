import { useDispatch } from "react-redux";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { FaTrash, FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markInCompleted,
} from "../Action/actions";
const TodoItems = ({ todo, index }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex flex-col md:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center flex-wrap">
        <span className="mr-4 text-blue-500">{index + 1}</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-blue-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex space-x-3 ml-8">
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded"
        >
          {todo.completed ? <BsToggle2Off /> : <BsToggle2On />}
        </button>
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <ImCross />
          </button>
        )}
        {todo.completed && (
          <button
            className="mr-2 text-sm bg-green-500 text-white sm:px-2 py-1 px-1 rounded"
            onClick={() => dispatch(markInCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItems;
