import React from 'react'

const Country = ({country}) => {
  return (
    <div>
    	<article >
			  <img src={country.flags.svg} alt="" />
			  <h2>{ country.altSpellings[2]}</h2>
			  <h4><b>Capital: </b> { country.capital[0]}</h4>
			</article>
    </div>
  )
}

export default Country