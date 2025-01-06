

import './TeamCard.css';



export default function TeamCard({ name, members }) {
    return (
      <>
      
      <div className="team-card">
        <h3 className="team-card__name">{name}</h3>
        <ul>
          {members.map(member => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      </div>

      
      </>
    )
  }

  // function Inline(){
  //   return(
  //     {
  //       Array(100).fill().map(_,i) =>(
  //         <div key={i}, className ='item'></div>
  //       )
  //     }
  //   )
  // }