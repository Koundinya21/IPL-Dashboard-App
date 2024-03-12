// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="card-container">
        <img className="img" src={teamImageUrl} alt={name} />
        <p className="title">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
