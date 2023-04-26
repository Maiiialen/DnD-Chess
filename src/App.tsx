// import { useState } from 'react'
import Board from "./components/board/Board.tsx"
import Informations from "./components/informations/Informations.tsx"
import Settings from "./components/settings/Settings.tsx"
import './styles/App.scss'

function App() {
    return (
        <div className="page">
            <div className="header">
                See more
            </div>
            <div className="main">
                <Settings />
                <div className="outer-board">
                    <Board />
                </div>
                <Informations />
            </div>
        </div>
    )
}

export default App

{/* <a href="https://www.vecteezy.com/free-vector/chess">Chess Vectors by Vecteezy</a> */ }