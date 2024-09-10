/* eslint-disable react/prop-types */

export default function CharacterCard({ valor, index, EventClick, DeleteClick }) {
  return (
    <>
    <div className="character">
      <div className='character-img'>
          <img src={valor.image} alt={valor.name} />
        </div>
        <div className='info'>
          <h3 id="character-name">{valor.name}</h3>
          <span><b>Ki level: </b>{valor.ki}</span> <br/>
          <span><b>Max ki: </b>{valor.maxKi}</span> <br />
          <span><b>Race:</b> {valor.race}</span> <br />
          <span><b>Gender:</b> {valor.gender}</span> <br />
          <p id="character-affiliation"><b>{valor.affiliation}</b></p>
        </div>
        <button onClick={()=> EventClick(valor, index)}>Add Favorite</button>
        <button onClick={()=> DeleteClick(valor)}>Delete</button>
    </div>
    </>
  )
}
