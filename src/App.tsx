import clsx from 'clsx'
import reactLogo from './assets/react.svg'

// Components
import CounterButton from './components/CounterButton'

// Styles
import classes from './App.module.css'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={clsx(classes.logo, classes.react)} alt="React logo" />
        </a>
      </div>
      <div className={classes.card}>
        <CounterButton defaultCount={7} />
        <CounterButton />
      </div>
    </>
  )
}

export default App
