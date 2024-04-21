import React, { useEffect, useState } from 'react'
import './inputInterface.css'
import { toast } from 'react-toastify'

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
      <form className="Form">
        <div>
          <div className="inDiv">
            <label htmlFor="nitrogen">Nitrogen</label>
            <input
              type="number"
              name="nitrogen"
              onChange={(e) => setNitrogen(e.target.value)}
              required
              className="ipForm"
            />
          </div>
          <div className="inDiv">
            <label htmlFor="phosphorus">Phosphorus</label>
            <input
              type="number"
              name="phosphorus"
              required
              onChange={(e) => setPhosphorus(e.target.value)}
              className="ipForm"
            />
          </div>
        </div>
        <div>
          <div className="inDiv">
            <label htmlFor="potassium">Potassium</label>
            <input
              type="number"
              name="potassium"
              onChange={(e) => setPotassium(e.target.value)}
              required
              className="ipForm"
            />
          </div>
          <div className="inDiv">
            <label htmlFor="temperature">Temperature</label>
            <input
              type="number"
              name="temperature"
              required
              onChange={(e) => setTemperature(e.target.value)}
              className="ipForm"
            />
          </div>
        </div>
        <div>
          <div className="inDiv">
            <label htmlFor="humidity">Humidity</label>
            <input
              type="number"
              name="humidity"
              onChange={(e) => setHumidity(e.target.value)}
              required
              className="ipForm"
            />
          </div>
          <div className="inDiv">
            <label htmlFor="pH">pH</label>
            <input
              type="number"
              name="pH"
              onChange={(e) => setPH(e.target.value)}
              required
              className="ipForm"
            />
          </div>
        </div>
        <div className="inDiv">
          <label htmlFor="rainfall">Rainfall</label>
          <input
            type="number"
            name="rainfall"
            onChange={(e) => setRainfall(e.target.value)}
            required
            className="ipForm"
          />
        </div>
        <button type="submit" className="btnRec">
          Get Recommendation
        </button>
      </form>
    </section>
  )
}

export default InputForm
