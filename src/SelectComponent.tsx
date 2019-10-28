import React, { useState } from 'react'

interface Item {
  id: number
  option: string
}

const SelectComponent: React.FC = () => {

  const options = [
    'Item One',
    'Item Two',
    'Item Three',
    'Item Four',
    'Item Five',
  ]

  const [option, setOption] = useState<string>('')
  const [items, setItem] = useState<Item[]>([])
  const [isSelected, setIsSelected] = useState<boolean>(true)

  const addItem = (item: string) => {
    setItem([
      ...items,
      {
        id: items.length,
        option: item,
      },
    ])
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value
    if (option) {
      setIsSelected(false)
      setOption(option)
    } else {
      setIsSelected(true)
    }
  }

  const handleDelete = (option: string) => {
    setItem(items.filter(item => item.option != option))
  }

  return (
    <>
      <label htmlFor="options">List of Options</label>
      <select name="options" onChange={e => handleChange(e)}>
        <option></option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={() => addItem(option)} disabled={isSelected}>
        Add to list
      </button>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id}>
            {item.option}
            <button onClick={() => handleDelete(item.option)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SelectComponent