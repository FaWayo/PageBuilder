import React from 'react'
import SectionTab from './SectionTab'

interface MainProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>
  setRemove: (boolean: boolean) => void
  setType1: (type: InputColors) => void
  setType2: (type: InputColors) => void
}

interface sectionTabInterface {
 title: string
 color: string
}

type InputColors = 'color' | 'text' | 'number'

const SectionSelect: React.FC<MainProps> = ({setTitle, setRemove, setType1, setType2}) => {

  const sectionTabs: sectionTabInterface[] = [
    { title:'Hero', color:"#6E56CF"},
    { title:'Article', color:"#30A46C"},
    { title:'Price', color:"#FFB224"}
  ]

   const handleTabClick = (sectTitle: string) => { 
    setTitle(sectTitle)
    setRemove(false)
    switch(sectTitle) {
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
