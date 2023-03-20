import Home from './pages/home'
import Game from './pages/game'
import { Routes, Route } from 'react-router'

function RootCmp() {
    return <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
        </Routes>

    </main>
}

export default RootCmp