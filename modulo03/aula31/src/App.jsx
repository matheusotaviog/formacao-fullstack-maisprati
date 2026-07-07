import { useState } from 'react';

export default function App() {

  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {

    if (novaTarefa.trim() === '') return;

    const tarefa = {
      id: crypto.randomUUID(),
      nome: novaTarefa,
      concluida: false
    }

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa('');
  }

  const removerTarefa = (idTarefa) => {
    
    if(tarefas.length <= 0 || tarefas === null || tarefas === undefined) return;

    let tarefasAtualizadas = tarefas.filter(tarefas => tarefas.id !== idTarefa);
    setTarefas(tarefasAtualizadas);

  }

  const concluirTarefa = (idTarefa) => {

    if(tarefas.length <= 0 || tarefas === null || tarefas === undefined) return;

    let tarefasAtualizadas = tarefas.map(tarefa => {
      if(tarefa.id === idTarefa) return {...tarefa, concluida: true };
      return tarefa;
    })

    setTarefas(tarefasAtualizadas);

  }

  const [tarefas, setTarefas] = useState([
    { id: crypto.randomUUID(), nome: 'Estudar React', concluida: true },
    { id: crypto.randomUUID(), nome: 'Praticar Node.js', concluida: false },
    { id: crypto.randomUUID(), nome: 'Estudar TypeScript', concluida: false },
  ])

  return (
    <div>
      <Saudacao nome="Matheus" />

      <div>
        <input type="text" placeholder="Adicionar nova tarefa" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)}>
        </input>
        
        <button onClick={adicionarTarefa}>
          Adicionar Tarefa
        </button>
      </div>

      <ul>
        {tarefas.map(tarefa => {
          return <li key={tarefa.id}>{tarefa.id} - <b>{tarefa.nome}</b> ({tarefa.concluida ? 'Concluída' : 'Pendente'})
          <button onClick={() => {concluirTarefa(tarefa.id)}} hidden={tarefa.concluida}>Concluir</button>
          <button onClick={() => {removerTarefa(tarefa.id)}}>Remover</button>
          </li>;
        })}
      </ul>
    </div>
  )
}

function Saudacao({nome}) {
  return <h2>Olá {nome}, seja bem-vindo(a) ao nosso site!</h2>;
}