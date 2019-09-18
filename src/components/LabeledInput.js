import React from 'react';
import { string } from 'propTypes';

LabeledInput.propTypes = {
  name: string.isRequired,
  type: string,
  value: string,
  placeholder: string,
};

LabeledInput.defaultProps= {
  type: 'text',
  value: '',
  placeholder: '→ Enter text here ←',
}

function LabeledInput({ name, type, value, placeholder }) {
  return (
    <div>
      <label className='Label' for={name}>{`${name}: `}</label>
      <input
        className='Input'
        name={name}
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
