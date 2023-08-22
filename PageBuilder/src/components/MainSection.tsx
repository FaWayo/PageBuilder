import React from "react"
import './components.css'

type InputColors = 'color' | 'text' | 'number'
interface MainSectionProps {
  title: string
  type1: InputColors
  type2: InputColors
  remove: boolean
  setRemove: (boolean: boolean) => void
}


const MainSection: React.FC<MainSectionProps> = ({ title, type1, type2, setRemove }) => {

  return (
    <section>
          <div className="heading">
            <p style={{ fontWeight: 'bold' }}>{title} Section</p>
            <button className="remove-button" onClick={() => setRemove(true)}>Remove Section</button>
          </div>
          <div className="inputs-box">
            <div className="inputs-container">
              <input className='input-section' type={type1} placeholder={`${type1.charAt(0).toUpperCase() + type1.slice(1)} Input`} />
              <input className='input-section' style={type2 === 'color' ? { width: '120px' } : {}}type={type2} placeholder={`${type2.charAt(0).toUpperCase() + type2.slice(1)} Input`} />
            </div>
          </div>
    </section>
  )
}

export default MainSection
