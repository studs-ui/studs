import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StudsButton, StudsDropdown } from '@studs/react'
import "@studs/react/studs-base.css";
import { StudsChip } from '@studs/react'


function App() {
  const [count, setCount] = useState(0)

  function onChange() {
    console.log('change');
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <StudsButton button-type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </StudsButton>
        <StudsDropdown options={[{label: "Option 1", value: "1"}, {label: "Option 2", value: "2"}]} selected="2" onChange={onChange} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <StudsChip>{count}</StudsChip>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
