import React, { Dispatch, SetStateAction } from "react"
import './components.css'

type InputTypes = 'color' | 'text' | 'number'
interface MainSectionProps {
  title: string
  type1: InputTypes
  type2: InputTypes
  remove: boolean
  setRemove: Dispatch<SetStateAction<boolean>>
  setFirstInput: Dispatch<SetStateAction<string | number | undefined>>
  setSecondInput: Dispatch<SetStateAction<string | number | undefined>>
  firstInput: string | number | undefined
  secondInput: string | number | undefined
}


const MainSection: React.FC<MainSectionProps> = ({ title, type1, type2, setRemove, setFirstInput, setSecondInput }) => {
  

  return (
    <section>
          <div className="heading">
            <p style={{ fontWeight: 'bold' }}>{title} Section</p>
            <button className="remove-button" onClick={() => setRemove(true)}>Remove Section</button>
          </div>
          <div className="inputs-box">
            <div className="inputs-container">
              <input 
                className='input-section'
                type={type1} 
                placeholder={`${type1.charAt(0).toUpperCase() + type1.slice(1)} Input`} 
                onChange={(event) => setFirstInput(event.target.value)}
              />       
                <input 
                 className='input-section'
                 style={type2 === 'color' ? { width: '120px' } : {}} type={type2} 
                 placeholder={`${type2.charAt(0).toUpperCase() + type2.slice(1)} Input`} 
                 onChange={(event) => setSecondInput(event.target.value)}
                /> 
       
            </div>
          </div>
    </section>
  )
}

export default MainSection
