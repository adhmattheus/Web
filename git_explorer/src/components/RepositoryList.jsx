import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"
import '../styles/repositories.scss'

const repository = {
  name: 'unform',
  description: 'forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);



  return (
    <section className="respository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}