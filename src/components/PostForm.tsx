import { useState, ChangeEvent } from "react";

type Props = {
    onAdd: (title: string, body: string) => void;
}
export const PostForm = ({ onAdd }: Props) => {
    // States
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    // Funções
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
    }

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value);
    }

    const handleAddClick = () => {
        if (addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText)
        } else {
            alert("Preencha os Campos!");
        }
    }

    return (
        <fieldset className="border-2 mb-3 p-3">
            <legend>Adicionar Novo Post</legend>

            <input
                value={addTitleText}
                onChange={handleAddTitleChange}
                className="border block"
                type="text"
                placeholder="Digite um título"
            />

            <textarea
                className="border block"
                value={addBodyText}
                onChange={handleAddBodyChange}
            ></textarea>

            <button className="border block" onClick={handleAddClick}>Adicionar</button>

        </fieldset>
    );
}