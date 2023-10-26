import { useState, useEffect } from 'react'

function Consume() {
  const [input, setInput] = useState('')
  const [tag, setTag] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (tag) {
      fetch(`https://api.waifu.im/search/?included_tags=${tag}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          setImage(json.images[0].url)
          setError('')
        })
        .catch(() => setError('Failed to produce a waifu :('))
    }
  }, [tag, count])

  function handleInput(event) {
    setInput(event.target.value)
    setCount(0)
  }

  function handleTag(event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTag(event.target.value)
      setInput('')
      event.target.value = ''
    }
  }

  function handleClick() {
    setCount((count) => count + 1)
  }

  return (
    <div>
      <h1>Consuming APIs</h1>
      <div style={{ width: 600, display: 'flex', flexFlow: 'column wrap' }}>
        <input
          type="text"
          value={input}
          placeholder="Type a tag (e.g. waifu, maid, marin-kitagawa, selfies, uniform)"
          style={{ margin: 0 }}
          onChange={handleInput}
          onKeyDown={handleTag}
        />
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {image && (
          <div style={{ display: 'flex', flexFlow: 'column wrap' }}>
            <img
              src={image}
              alt="waifu"
              style={{
                height: 600,
                margin: '8px 0',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
            <button style={{ margin: 0 }} onClick={handleClick}>
              {count < 5 ? 'Regenerate' : 'Damn. You be picky AF!'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Consume
