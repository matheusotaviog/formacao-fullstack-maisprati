import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, texto: "Organização agenda", categoria: "Exericios", feito: true },
    { id: 2, texto: "Atividades +praTi", categoria: "Estudos", feito: false },
    { id: 3, texto: "Limpar a casa", categoria: "Diarias", feito: false }
  ]);
  
  const concluirTarefa = (id) => {
    setTodos((todosAtuais) =>
      todosAtuais.map((todo) =>
        todo.id === id ? { ...todo, feito: !todo.feito } : todo
      )
    )
  }

  return <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <div className="conteudo">
                <p> {todo.texto} </p>
                <p> {todo.categoria} </p>
              </div>
              <div>
                <input type="checkbox" checked={todo.feito} onChange={() => concluirTarefa(todo.id)} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
}

export default App
