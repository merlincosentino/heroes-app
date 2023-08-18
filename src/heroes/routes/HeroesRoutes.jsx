import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, MarvelPage, HeroPage, SearchPage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="/marvel" element={<MarvelPage/>}/>
                <Route path="/dc" element={<DcPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/hero/:id" element={<HeroPage/>}/>

                {/* Search, HeroById.. */}

                <Route path="/" element={<Navigate to="/search"/>}/>
            </Routes>
        </div>

        
    </>
  )
}
