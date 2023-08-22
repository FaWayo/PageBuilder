import { useState } from 'react'
import './App.css'
import MainSection from './components/MainSection'
import SectionSelect from './components/SectionSelect'

type InputColors = 'color' | 'text' | 'number'

const App: React.FC = () => {
  const [title, setTitle] = useState('')
  const [remove, setRemove] = useState(false)
  const [type1, setType1] = useState<InputColors>('text')
  const [type2, setType2] = useState<InputColors>('text')



  return (
    <main>
      {!remove && title.length > 0 ?
        <MainSection
          title={title}
          type1={type1}
          type2={type2}
          remove={remove}
          setRemove={setRemove}
        /> : null}
      <SectionSelect
        setTitle={setTitle}
        setType1={setType1}
        setType2={setType2}
        setRemove={setRemove} />
    </main>
  )
}

export default App
