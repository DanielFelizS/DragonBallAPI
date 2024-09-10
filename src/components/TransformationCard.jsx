/* eslint-disable react/prop-types */

export default function TransformationCard({ valor }) {
  return (
    <div className="character">
        <div className='character-img'>
            <img src={valor.image} alt={valor.name} />
        </div>
        <div className='info'>
            <h3 id="character-name">{valor.name}</h3>
            <p style={{textAlign: "center"}}><b>Ki level: </b>{valor.ki}</p> <br/>
        </div>
    </div>
  )
}
