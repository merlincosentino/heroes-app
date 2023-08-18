import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, MarvelPage, HeroPage, SearchPage } from '../pages';


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="heroes-app/marvel" element={<MarvelPage/>}/>
                <Route path="heroes-app/dc" element={<DcPage/>}/>
                <Route path="heroes-app/search" element={<SearchPage/>}/>
                <Route path="heroes-app/hero/:id" element={<HeroPage/>}/>

                {/* Search, HeroById.. */}

                <Route path="/" element={<Navigate to="/search"/>}/>
            </Routes>
        </div>

        
    </>
  )
}
