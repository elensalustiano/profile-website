import React from 'react'

import './index.scss'

const ErrorMessage = ({ message, isShowButton, buttonLabel, buttonCallback }) => (
  <div className="error-container">
    <p>{message}</p>
    {isShowButton &&
      <button
        className="error-button"
        onClick={buttonCallback}
      >
        {buttonLabel}
      </button>
    }
  </div>
)

export default ErrorMessage