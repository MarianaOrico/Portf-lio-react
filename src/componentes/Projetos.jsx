import './Projetos.css'

function Projetos(props) {
    return(
        <div className='container-project'>
        <h2>{props.title}</h2>
        <img src={props.image}/>
        <a href={props.link}>↳</a>
        </div>
    )
}

export default Projetos