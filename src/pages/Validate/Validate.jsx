import { useState, useEffect } from 'react'

function Validate() {
  const [input, setInput] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setIsValid(/^[ A-Za-z ]*$/.test(input))
  }, [input])

  function handleInput(event) {
    setInput(event.target.value)
  }

  return (
    <div>
      <h1>Input Validation</h1>
      <div style={{ width: 960, display: 'flex', flexFlow: 'column wrap' }}>
        <input
          type="text"
          placeholder="ONLY TYPE LETTERS AND SPACES PLEASE! I BEG OF YOU! FAILURE IS NOT AN OPTION!"
          onChange={handleInput}
        />
        {input && (
          <h1
            style={{
              color: isValid ? 'green' : 'red',
              textAlign: 'center',
              fontSize: '2em',
              animation: isValid
                ? 'fadeIn 2s ease-in-out'
                : 'shake 0.5s ease-in-out infinite',
            }}
          >
            {isValid
              ? 'THANK THE HEAVENS YOU LISTENED TO ME!'
              : 'OH, THE HORROR! WHY, WHY, WHY?!!!'}
          </h1>
        )}
        <style>
          {`
          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            10%, 30%, 50%, 70%, 90% {
              transform: translateX(-10px);
            }
            20%, 40%, 60%, 80% {
              transform: translateX(10px);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
        </style>
      </div>
    </div>
  )
}

export default Validate
