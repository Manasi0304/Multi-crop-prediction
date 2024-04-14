import React, { useState } from 'react'
import './inputInterface.css'
const InputForm = () => {
  const [nitrogen, setNitrogen] = useState('')
  const [phosphorus, setPhosphorus] = useState('')
  const [potassium, setPotassium] = useState('')
  const [temperature, setTemperature] = useState('')
  const [humidity, setHumidity] = useState('')
  const [pH, setPH] = useState('')
  const [rainfall, setRainfall] = useState('')

  return (
    <section className="inputForm">
      <video autoPlay loop muted playsInline className="bgvdeo">
        <source src="../assets/inptVid.mp4" type="video/mp4" />
      </video>
      <form className="Form">
        <div>
          <div className="inDiv">
            <label htmlFor="nitrogen">Nitrogen</label>
            <input type="number" name="nitrogen" required className="ipForm" />
          </div>
          <div className="inDiv">
            <label htmlFor="phosphorus">Phosphorus</label>
            <input
              type="number"
              name="phosphorus"
              required
              className="ipForm"
            />
          </div>
        </div>
        <div>
          <div className="inDiv">
            <label htmlFor="potassium">Potassium</label>
            <input type="number" name="potassium" required className="ipForm" />
          </div>
          <div className="inDiv">
            <label htmlFor="temperature">Temperature</label>
            <input
              type="number"
              name="temperature"
              required
              className="ipForm"
            />
          </div>
        </div>
        <div>
          <div className="inDiv">
            <label htmlFor="humidity">Humidity</label>
            <input type="number" name="humidity" required className="ipForm" />
          </div>
          <div className="inDiv">
            <label htmlFor="pH">pH</label>
            <input type="number" name="pH" required className="ipForm" />
          </div>
        </div>
        <div className="inDiv">
          <label htmlFor="rainfall">Rainfall</label>
          <input type="number" name="rainfall" required className="ipForm" />
        </div>
        <button type="submit" className="btnRec">
          Get Recommendation
        </button>
      </form>
    </section>
  )
}

export default InputForm
