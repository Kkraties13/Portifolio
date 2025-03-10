import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Sobre from '../src/pages/Sobre/Sobre'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/" element={<Sobre />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes