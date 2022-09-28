import React from 'react'

export default function ConferenceSelect({updateConference, currentConference}) {
  
  return (
    <select onChange={updateConference} value={currentConference}>
      <option value="ACC">ACC</option>
      <option value="B12">Big 12</option>
      <option value="B1G">Big Ten</option>
      <option value="PAC">Pac-12</option>
      <option value="SEC">SEC</option>
    </select>
  )
}