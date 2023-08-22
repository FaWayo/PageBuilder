import React from 'react'
import SectionTab from './SectionTab'

interface MainProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>
}

interface sectionTabInterface {
 title: string
 color: string
}

const SectionSelect: React.FC<MainProps> = ({setTitle}) => {

  const sectionTabs: sectionTabInterface[] = [
    { title:'Hero', color:"#6E56CF"},
    { title:'Article', color:"#30A46C"},
    { title:'Price', color:"#FFB224"}
  ]

   const handleTabClick = (sectTitle: string) => { 
    setTitle(sectTitle)
   }

  return (
    <div>
      <p style={{textAlign: 'left', fontWeight: 'bold', paddingBottom: '10px'}}>Available Sections</p>
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
