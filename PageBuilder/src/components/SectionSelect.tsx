import React from 'react'
import SectionTab from './SectionTab'

interface MainProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  setShowMainSection: (boolean: boolean) => void
  showMainSection: boolean
}

interface sectionTabInterface {
 title: string
 color: string
}

const SectionSelect: React.FC<MainProps> = ({setTitle, setShowMainSection, showMainSection, title}) => {

  const sectionTabs: sectionTabInterface[] = [
    { title:'Hero', color:"#6E56CF"},
    { title:'Article', color:"#30A46C"},
    { title:'Price', color:"#FFB224"}
  ]

   const handleTabClick = (sectTitle: string) => { 
    if(title == sectTitle){
      setShowMainSection(!showMainSection)
    } else {
      setTitle(sectTitle)
    }
   }

  return (
    <div>
      <p style={{textAlign: 'left', fontWeight: 'bold'}}>Available Sections</p>
        <ul className='main-section'>
       {
        sectionTabs.map((sect, index) => {
          return <SectionTab key={index} title={sect.title} color={sect.color} onClick={() => handleTabClick(sect.title)}/> 
        })
       }
        </ul>
    </div>
      
  )
}

export default SectionSelect
