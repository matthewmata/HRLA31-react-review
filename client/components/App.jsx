import React, { useState } from 'react';

const App = () => {
  const [first, setFirst] = useState('first');
  const [last, setLast] = useState('last')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submit ${first} ${last}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type='text' value={first} onChange={e => setFirst(e.target.value)}></input>
        </label>
        <label>
          Last Name:
          <input type='text' value={last} onChange={e => setLast(e.target.value)}></input>
        </label>
        <input type='submit' value='submit'></input>
      </form>
      {first} {last}
    </div>
  )
}

export default App;