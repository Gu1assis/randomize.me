import { useEffect, useState } from 'react'
import './App.css'
import InputArea from './components/inputArea'
import Portal from './utils/Portal'
import { Wheel } from 'react-custom-roulette'
import SettingsModal, { type settingsDataProps } from './components/settingsModal'

function App() {
  const [inputList, setInputList] = useState<string[]>([])
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(10)
  const [data, setData] = useState([{ option: '', style: { backgroundColor: 'white', textColor: 'black' } }])
  const [showSettings, setShowSettings] = useState(false)
  const [settingsData, setSettingsData] = useState<settingsDataProps>({
    colorPallete: {
      primaryColor: '#DA2C38',
      secondaryColor: '#357266',
    },
    isInputProbabilityEnabled: false,
    backgroundSongName: '',
    soundEffectName: '',
    specialEventName: '',
  })

  useEffect(() => {
    if (showSettings) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showSettings])

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  const generateWheelData = (list: string[]) => {
    const colors = [settingsData.colorPallete.primaryColor, settingsData.colorPallete.secondaryColor]
    return list.map((item, index) => ({
      option: item,
      style: { 
        backgroundColor: colors[index % colors.length], 
        textColor: '#000000' 
      },
  }))
  }

  const handleInputList = (lines: string[]) => {
    setInputList(lines)
    setData(generateWheelData(lines))
  }

  const handleSettingsChange = (newSettings: settingsDataProps) => {
    setSettingsData(newSettings)
    console.log('Configurações atualizadas:', newSettings)
  }

  useEffect(() => {
    console.log(inputList)
  }, [inputList])

  return (
    <>
      <div style={{ display: "flex", gap: "50px" }}>
        <InputArea onValueChange={handleInputList} onSettingsClick={() => setShowSettings(true)} />
        <button onClick={handleSpinClick}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false)
            }}
            backgroundColors={[settingsData.colorPallete.secondaryColor, settingsData.colorPallete.primaryColor]}
            textColors={['#ffffff']}
          />
        </button>
      </div>

      {showSettings && (
        <Portal>
          <SettingsModal 
            onClose={() => setShowSettings(false)} 
            onSettingsChange={handleSettingsChange}
          />
        </Portal>
      )}
    </>
  )
}

export default App