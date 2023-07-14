import { useState } from 'react'
import './styles/input.css'

function Input ({ children, type, ids, placeh, name, onInputChange, categories }) {
  const [inputValue, setInputValue] = useState('')

  const id = ids === 'input-bot' ? 'input-bot' : 'input-desc'

  return (
    <>
      {type === 'text'
        ? (
          <>
            <p className='input-title'>{children}</p>
            <input type='text' className='form-control' id={id} placeholder={placeh} name={name} onChange={onInputChange} />
          </>
          )
        : (
          <>
            <p className='input-title'>{children}</p>
            <select className='form-select' id='input-bot' aria-label='Default select example' name={name} onChange={onInputChange}>
              {categories
                ? categories.map((category, i) => (
                  <option key={i} value={category.name}>{category.name}</option>
                ))
                : ''}
              {/* <option value='0'>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option> */}
            </select>
          </>
          )}

    </>
  )
}

export default Input
