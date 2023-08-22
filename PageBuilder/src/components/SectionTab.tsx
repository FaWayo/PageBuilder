import './components.css'
import PlusIcon from '../assets/PlusIcon'

interface SectionTabProps {
  title: string
  color: string
  onClick: () => void
}

const SectionTab : React.FC<SectionTabProps> = ({title, color, onClick}) =>{
  //TODO: update this function for disabled ??
  const getOpacity = () => {
    return '4C'
  }

  return (
    <button className='tab-main-container' onClick={onClick}>
    <div className='tab-sub-container' style={{ backgroundColor: color + getOpacity() }}>
      <div className='icon-container'>
        <PlusIcon color={color} />
      </div>
    </div>
        <span style={{fontWeight: 'bold', fontSize: '15px'}}>{title}</span> 
    </button>
  )
}

export default SectionTab
