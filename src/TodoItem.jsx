export function TodoItem({ complated, id, title, toggleTodo, deleteTodo }) {
    return (
      <li>
        <label>
          <input type="checkbox" checked={complated}
          onChange={e => toggleTodo(id, e.target.checked)}/>
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className='btn btn-danger'>Delete</button>
      </li>     
    )
}