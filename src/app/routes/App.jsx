import { HomePage } from '../../pages'
import './App.css'

function App() {

  return (
    <>
      <header className='container header'>
        <button className='row header__container_button'></button>

        <div className='header__icons'>
          <img src="" alt="" />
          <h1 className='header__icons_title'>
            <p className='header__icons_title_text'></p>
          </h1>
        </div>
      </header>
      <HomePage />
    </>
  )
}

export default App
