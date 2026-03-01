import './index.css';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label?: string;
}

const ColorPicker = ({ value, onChange, label }: ColorPickerProps) => {
  return (
    <div className="color-picker-container">
      {label && <label className="color-picker-label">{label}</label>}
      <div className="color-picker-wrapper">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="color-picker-input"
        />
        <span className="color-picker-value">{value}</span>
      </div>
    </div>
  );
}

export default ColorPicker