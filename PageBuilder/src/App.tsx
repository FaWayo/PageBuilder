import { useEffect, useState } from 'react'
import './App.css'
import MainSection from './components/MainSection'
import SectionSelect from './components/SectionSelect'


const App: React.FC = () => {
  const [title, setTitle] = useState('')
  const [showMainSection, setShowMainSection] = useState(false)
  const [showStored, setStored] = useState(false)

  useEffect(() => {
   const storedTitle = localStorage.getItem('title')
   if(storedTitle){
    setTitle(storedTitle)
   }
   const storedShowMainSection = localStorage.getItem('showMainSection')
   if(storedShowMainSection){
    setStored(Boolean(showMainSection).valueOf())
   }
  },[])

  useEffect(() => {
    localStorage.setItem('title', title)
    localStorage.setItem('showMainSection', showMainSection.toString())
  },[title, showMainSection])

  return (
    <main>
       {showMainSection || showStored ? <MainSection
          title={title}
          setShowMainSection={setShowMainSection}
        /> : null }
    
      <SectionSelect
        title={title}
        setTitle={setTitle}
        setShowMainSection={setShowMainSection}
        showMainSection={showMainSection}
         />
    </main>
  )
}

export default App
