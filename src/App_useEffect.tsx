
import { ChangeEvent, useEffect, useState } from "react";

function App() {
  // States
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  // Use Efect
  useEffect(() => {
    setFullName(`${name} ${lastName}`);
  }, [name, lastName]);


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  return (
    <div className="flex flex-col">
      <input type="text" name="" value={name} placeholder="Digite seu NOME" onChange={handleNameChange} />
      <input type="text" name="" value={lastName} placeholder="Digite seu SOBRENOME" onChange={handleLastNameChange} />
      <p>Nome Completo: {fullName}</p>
    </div>
  )
}

export default App
