import React from 'react'
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
  return (
    <div>
        <form className='inputForm' onSubmit={handleAdd}>
            <input
              type="input"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter a task" className='input__box'
            />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    </div>
  )
}

export default InputField