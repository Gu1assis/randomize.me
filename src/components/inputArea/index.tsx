import { useState } from 'react';
import './index.css';

interface InputAreaProps {
  onValueChange: (values: string[]) => void;
  onSettingsClick: () => void;
}

export default function InputArea({ onValueChange, onSettingsClick }: InputAreaProps) {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);

    const list = value
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    onValueChange(list);
  };

  return (
    <div className="input-area-container">
      <div className="input-area-header">
        <h2>Lista de nomes</h2>
        <button 
          className="settings-btn"
          onClick={onSettingsClick}
          title="Configurações"
        >
          ⚙️
        </button>
      </div>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Insira os nomes, um por linha..."
      />
    </div>
  );
}
