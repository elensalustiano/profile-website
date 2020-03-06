import React from 'react'
import './index.scss'

const ReposList = ({ repoData }) => (
  <div className="row">
    {repoData.map((repo, key) =>
      <div key={key} className="col repo-container">
        <a
          href={repo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-title"
        >
          {repo.name}
        </a>
        <p>{repo.description}</p>
        <p className="repo-language">{repo.language}</p>
      </div>
    )
    }
  </div>
)

export default ReposList