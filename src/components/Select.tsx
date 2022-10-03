import React from 'react';

interface Props {
  className:string,
  label:string,
  labelClass:string,
  selectName:string,
  selectClass:string,
  value:string | number,
  callback:(e:React.ChangeEvent<HTMLSelectElement>)=> void
  options:string[]
}

function Select({
  className,
  label,
  labelClass,
  selectClass,
  selectName,
  options,
  value,
  callback,
}:Props) {
  return (
    <div className={ className }>
      <label htmlFor={ selectName } className={ labelClass }>
        {label}
        <select
          name={ selectName }
          value={ value }
          id={ selectName }
          className={ selectClass }
          onChange={ callback }
        >
          {options.map((e) => (
            <option key={ e } value={ e }>
              {e}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Select;
