import { useState } from 'react'
import logo from './assets/logo.gif';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='buttons'>
          <a href='https://x.com/penguntoken'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href='https://t.me/penguntoken'><FontAwesomeIcon icon={faTelegram} /></a>
          <a href='https://pump.fun'>Buy on Pump.Fun</a>
        </div>
      </header>
      <main>
        <div className='side-by-side'>
          <img src={img1} alt='img1' />
          <div className='text-block to-left'>
            <h1>$PenGun doesn’t miss with his GUN</h1>
            <p>yo jeets, do not let me make my gun talk to yall 🐧</p>
            <p>Jeets, don’t try me ; my gun don’t miss</p>
            <p>my gun got more body counts than these bitches </p>
            <div className='buttons'>
              <a href='https://pump.fun/BE8F7ur9YzUoVjQAEPZbkKoNq62P4nwjTfdYAGEepump'>Buy on Pump.Fun</a>
            </div>
          </div>
        </div>
        <div className='side-by-side reverse-on-mobile'>
          <div className='text-block to-right'>
            <h2>$PenGun has a message for y’all</h2>
            <p>i have a message for the jeets ‘I WILL FIND YALL AND KILL YALL’</p>
            <p>PenGun doesn’t just talk, i let my gun do my talking </p>
            <p>Giving away a jeeter’s head to one lucky winner that HODL</p>
            <div className='buttons'>
              <a href='https://x.com/penguntoken'><FontAwesomeIcon icon={faTwitter} /></a>
              <a href='https://t.me/penguntoken'><FontAwesomeIcon icon={faTelegram} /></a>
            </div>
          </div>
          <img src={img2} alt='img2' />
        </div>
        <div className='centered'>
          <div className='text-block'>
            <h2>$PenGun is who he think he is</h2>
            <p>When PenGun stands, every kneel must bow</p>
            <p>Everything PenGun says is Bullish regardless of jeeters presence</p>
          </div>
        </div>
      </main>
      <footer>
        <p>©2024 $PenGun</p>
        <div className='buttons'>
          <a href='https://x.com/penguntoken'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href='https://t.me/penguntoken'><FontAwesomeIcon icon={faTelegram} /></a>
          <a href='https://pump.fun/board'>Buy on Pump.Fun</a>
        </div>
      </footer>
    </>
  )
}

export default App
