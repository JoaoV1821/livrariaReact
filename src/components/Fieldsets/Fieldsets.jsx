import React from 'react'
import style from './Fieldsets.module.css'

const Fieldsets = ({ label, value, onChange, keyState, type }) => {
  return (
    <fieldset className={style.fieldset}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        value={value}
        onChange={({ target }) => onChange(target, keyState)}
      />
    </fieldset>
  )
}

export default Fieldsets