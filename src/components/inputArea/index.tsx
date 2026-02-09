import type { ChangeEvent } from "react"
import './index.css'

interface InputAreaProps {
    onValueChange: (value: string[]) => void
}

const InputArea = ({ onValueChange }: InputAreaProps) => {

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textAreaInput = event.target.value
        const lines = textAreaInput
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0)
        onValueChange(lines)
    }

    return (
        <div className="input-area">
            <label>Coloque aqui sua lista:</label>
            <textarea onChange={handleChange} placeholder="Digite aqui sua Lista" />
        </div>
    )
}

export default InputArea
