import React  from 'react'

function Display (props){
  
  const earthquakesList = 
  props.earthquakes.map((earthquake,i) => {
    const date = new Date(earthquake.properties.time) // makes it and object, so turn to string


   return (
     <div key={i}>
       <h1> 
         Title: {earthquake.properties.title} <br/>
         Type: {earthquake.type} <br/>
         Places: {earthquake.properties.place} <br/>
         Longitude: {earthquake.geometry.coordinates[0]} <br/>
         Latitude: {earthquake.geometry.coordinates[1]} <br/>
         Time: {date.toString()} <br/>
         Time Ago: { Math.floor( (earthquake.properties.time / 1572872460 / 60 ) ) } hours <br /> 
       </h1>
      
     </div>
   )

})

  return (
    <div>
      {earthquakesList}
      
    </div>

  )
}

export default Display; 