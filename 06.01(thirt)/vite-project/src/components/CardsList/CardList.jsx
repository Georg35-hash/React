import './CardList.css';
import TeamCard from '../TeamCard/TeamCard';

export default function CardsList({ teamsData }) {
  console.log(teamsData);

  return (
    <div className="cards-list">
      {teamsData.map(teamData => (
        <TeamCard key={teamData.name} name={teamData.name} members={teamData.members} />
      ))}
    </div>
  )
}