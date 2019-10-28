import React, { useState } from 'react'

const styles = {
  container: {
    margin: '20px 100px',
  },
  label: {
    display: 'block',
    marginBottom: 20,
  },
  select: {
    height: 40,
    width: 300,
    border: '1px solid #ced4da',
    background: '#fff',
    padding: '8px 16px',
    verticalAlign: 'middle',
    marginBottom: 20,
    fontSize: 15,
  },
  button: {
    color: '#fff',
    fontWeight: 400,
    border: 0,
    borderRadius: 4,
    fontSize: 18,
    cursor: 'pointer',
  },
  btnAdd: {
    display: 'block',
    background: '#0f7397',
    padding: '8px 16px',
  },
  itemsContainer: {
    width: 300,
    padding: 0,
    border: '1px solid #ced4da',
    borderRadius: 5,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 12px',
    borderBottom: '1px solid #ced4da',
  },
  btnDelete: {
    background: '#bd0505',
    padding: '7px 14px',
  },
  btnDisabled: {
    cursor: 'default',
    opacity: 0.5,
  },
}

interface Item {
  id: number
  option: string
}

interface SelectProps {
  options: string[]
}
const SelectComponent: React.FC<SelectProps> = props => {
  const [option, setOption] = useState<string>('')
  const [items, setItem] = useState<Item[]>([])
  const [disabled, setDisabled] = useState<boolean>(true)

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
      setDisabled(false)
      setOption(option)
    } else {
      setDisabled(true)
    }
  }

  const handleDelete = (id: number) => {
    setItem(items.filter(item => item.id !== id))
  }

  const { options } = props
  return (
    <div style={styles.container}>
      <label style={styles.label} htmlFor="options">
        List of Options
      </label>
      <select
        style={styles.select}
        name="options"
        onChange={e => handleChange(e)}
      >
        <option></option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        style={
          disabled
            ? { ...styles.button, ...styles.btnAdd, ...styles.btnDisabled }
            : { ...styles.button, ...styles.btnAdd }
        }
        onClick={() => addItem(option)}
        disabled={disabled}
      >
        Add to list
      </button>
      <ul style={styles.itemsContainer} hidden={items.length === 0}>
        {items.map((item: Item) => (
          <li key={item.id} style={styles.item}>
            {item.option}
            <button
              style={{ ...styles.button, ...styles.btnDelete }}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectComponent
