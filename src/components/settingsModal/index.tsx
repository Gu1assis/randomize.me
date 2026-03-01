import { useState } from "react"
import ColorPicker from "../colorPicker"
import './index.css'

interface SettingsProps {
  onClose: () => void
  onSettingsChange: (settingsData: settingsDataProps) => void
}

interface colorPalleteProps {
  primaryColor: string,
  secondaryColor: string
}

export interface settingsDataProps {
  colorPallete: colorPalleteProps,
  isInputProbabilityEnabled: boolean,
  backgroundSongName: string,
  soundEffectName: string,
  specialEventName: string
}

const SettingsModal = ({ onClose, onSettingsChange }: SettingsProps) => {

  const [colorPallete, setColorPalette] = useState<colorPalleteProps>({
    primaryColor: '#DA2C38',
    secondaryColor: '#357266',
  })

  const [settingsData, setSettingsData] = useState<settingsDataProps>({
    colorPallete: colorPallete,
    isInputProbabilityEnabled: false,
    backgroundSongName: '',
    soundEffectName: '',
    specialEventName: '',
  })

  const handleColorChange = (colorKey: keyof colorPalleteProps, color: string) => {
    const updatedColorPallete = {
      ...colorPallete,
      [colorKey]: color,
    }
    setColorPalette(updatedColorPallete)

    const updatedSettings = {
      ...settingsData,
      colorPallete: updatedColorPallete,
    }
    setSettingsData(updatedSettings)
    onSettingsChange(updatedSettings)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Configurações da Roleta</h2>
        
        <h3>Paleta de cores da Roleta</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ColorPicker
            value={colorPallete.primaryColor}
            onChange={(color) => handleColorChange('primaryColor', color)}
            label="Cor Primária"
          />
          <ColorPicker
            value={colorPallete.secondaryColor}
            onChange={(color) => handleColorChange('secondaryColor', color)}
            label="Cor Secundária"
          />
        </div>

        <h3>Entradas Ponderadas</h3>
        
        <h3>Música e Som de Sorteio</h3>
        
        <h3>Evento Especial</h3>
        
        <button onClick={onClose} style={{ marginTop: '20px', width: '100%' }}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;