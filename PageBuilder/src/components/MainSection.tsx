import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import './components.css'

type InputTypes = 'color' | 'text' | 'number'
interface MainSectionProps {
  title: string
  setShowMainSection: Dispatch<SetStateAction<boolean>>
}


const MainSection: React.FC<MainSectionProps> = ({ title, setShowMainSection}) => {
  const [type1, setType1] = useState<InputTypes>('text')
  const [type2, setType2] = useState<InputTypes>('text')
  const [firstInput, setFirstInput] = useState<number | string>('')
  const [secondInput, setSecondInput] = useState<number | string>('')
  
  useEffect(()=>{
   if(title){
    switch(title) {
      case 'Hero':
        setType1('text')
        setType2('text')
        break;
      case 'Article':
        setType1('text')
        setType2('color')
        break;
      case 'Price':
        setType1('text')
        setType2('number')
        break;   
      default:
        setType1('text')
        setType2('text')
    }
   }
   setFirstInput('')
   setSecondInput('')
  },[title])

  console.log(firstInput, 'first input here')

  useEffect(() => {
    const storedFirstInput = localStorage.getItem('firstInput')
    if(storedFirstInput){
     console.log(storedFirstInput, 'stored first input')
     setFirstInput(storedFirstInput)
    }
   },[])

   useEffect(() => {
    localStorage.setItem('firstInput', firstInput.toString())
   },[firstInput])

  return (
    <section>
          <div className="heading">
            <p style={{ fontWeight: 'bold' }}>{title} Section</p>
            <button className="remove-button" onClick={() => setShowMainSection(false)}>Remove Section</button>
          </div>

          <div className="inputs-box">
            <div className="inputs-container">
            <input 
                className="input-section"
                value={firstInput} 
                type={type1}
                placeholder={`${type1?.charAt(0).toUpperCase() + type1.slice(1)} Input`} 
                onChange={(event) => setFirstInput(event.target.value)}
            />
            <input 
                  className="input-section"
                  value={secondInput}
                  type={type2}
                  style={type2 === 'color' ? { width: '120px' } : {}} 
                  onChange={(event) => setSecondInput(event.target.value)}
                  placeholder={`${type2?.charAt(0).toUpperCase() + type2.slice(1)} Input`} />    
            </div>
          </div>
    </section>
  )
}

export default MainSection
