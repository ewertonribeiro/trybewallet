import React from 'react';

interface Props {
  className:string,
  label:string,
  labelClass:string,
  inputType:string,
  inputName:string,
  inputClass:string,
  value:string | number,
  callback:(e:React.ChangeEvent<HTMLInputElement>)=> void
}


function FormControl({
  className,
  label,
  inputType,
  inputName,
  inputClass,
  labelClass,
  value,
  callback,
}:Props) {
  return (
    <div className={ className }>
      <label htmlFor="description" className={ labelClass }>
        {label}
        <input
          type={ inputType }
          name={ inputName }
          id={ inputName }
          value={ value }
          onChange={callback }
          className={ inputClass }
        />
      </label>
    </div>
  );
}

export default FormControl;
