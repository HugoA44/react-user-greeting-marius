import logo from './logo.svg'
import './app-style.css'
import { UserGreeting } from 'lib/main'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <UserGreeting name='Marius' />
      </header>
    </div>
  )
}

export default App
