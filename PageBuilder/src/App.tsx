import { useState } from 'react'
import './App.css'
import MainSection from './components/MainSection'
import SectionSelect from './components/SectionSelect'

const App: React.FC = () => {
  const [title, setTitle] = useState('')

  return (
    <main>
      <MainSection title={title}/>
      <SectionSelect setTitle={setTitle} />
    </main>
  )
}

export default App
