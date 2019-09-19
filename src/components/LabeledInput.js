import React from 'react';
import { string } from 'prop-types';

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

export default function LabeledInput({ name, type, value, placeholder }) {
  return (
    <div>
      <label className='Label' for={name}>{`${name}: `}</label>
      <input
        className='Input'
        name={name}
        id={name}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
}
