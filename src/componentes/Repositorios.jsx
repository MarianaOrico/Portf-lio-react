import { useState, useEffect } from 'react'
import './Repositorio.css'

const Repositorios = () => {
    const [repos, setRepos] = useState([])
    const [search, setSearch] = useState('')
    const [filteredRepos, setFilteredRepos] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://api.github.com/users/MarianaOrico/repos')
            const data = await response.json()
            console.log(response)

            setRepos(data)
        }
        getData()
    }, [])

    useEffect(() => {
        setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
    }, [repos, search])

    return (
        <div className='repos'>
            <ul>
                {filteredRepos.map(repo => {
                    return (

                        <li className="lista" key={repo.id}> 
                            {repo.name}
                        </li>

                    )
                })}
            </ul>

        </div>
    )
}

export default Repositorios