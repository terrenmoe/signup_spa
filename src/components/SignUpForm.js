import React from 'react'
import { func } from 'prop-types'

// You want these to be as visible as possible
SignUpForm.propTypes = {
  onSubmit: func.isRequired,
  onEntry: func.isRequired
}

// destro props and use default args in setting defaultProps
function SignUpForm({ onEntry, onSubmit, children }) {
  return (
    <form className='SignUpForm' onSubmit={onSubmit}>
      {children}
      <button className='Button' onClick={onEntry}>Enter</button>
    </form>
  )
}

export default SignUpForm
