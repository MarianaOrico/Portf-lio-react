import Cabecalho from './componentes/Cabecalho'
import Perfil from './componentes/Perfil'
import Projetos from './componentes/Projetos'
import Repositorios from './componentes/Repositorios'
import Maravilhosa from './Maravilhosa.jpeg'
import Torre from './Torre.jpeg'
import TodoList from './TodoList.jpeg'
import Series from './Series.jpeg'
import Ghibli from './StudioGhibli.jpeg'
import './App.css'

function App() {

  return (
    <div className="App">
      <Cabecalho />
      <Perfil />
      <h1>05 Projetos feitos na Reprograma</h1>
      <Projetos title="M de Maravilhosa" image={Maravilhosa} link="https://m-de-maravilhosa-mariana-orico.netlify.app/"/>
      <Projetos title="To Do List" image={TodoList} link="https://projeto-list-to-do.netlify.app/"/>
      <Projetos title="Reproflix" image={Series} />
      <Projetos title="Landing Page" image={Torre} />
      <Projetos title="API Studio Ghibli" image={Ghibli} />
      <h1>Outros projetos no Github</h1>
      <Repositorios />

    </div>

  )
}

export default App
