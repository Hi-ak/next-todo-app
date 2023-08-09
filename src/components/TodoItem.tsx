"use client"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}



export function TodoItem({id, title, complete, toggleTodo}: TodoItemProps) {
  return <li className = "flex gap-1 items-center">
    
    <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}></input>
    {/* complete はBoolean ではなく 小文字のboolean型じゃないとだめ, onChangeとか使うならuse clienと書かないとダメ*/}
    <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
  </li>
}