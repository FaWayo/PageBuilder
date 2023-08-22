import React from "react"
import './components.css'

interface MainSectionProps {
 title: string
}

const MainSection: React.FC<MainSectionProps> = ({title}) => {
  return (
    <section>
      <div className="heading">
        <p style={{fontWeight: 'bold'}}>{title} Section</p>
        <button className="remove-button">Remove Section</button>
      </div>
      <div>
        <input/>
        <input/>
      </div>
      
    </section>
  )
}

export default MainSection
