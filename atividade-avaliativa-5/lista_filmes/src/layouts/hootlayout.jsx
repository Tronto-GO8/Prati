import { Outlet } from "react-router-dom"
import NavBar from '../componentes/menu.jsx'

export default function Hootlayout(){
    return(
        <div>
            <NavBar/>
             <main>
                <Outlet/>
            </main>
        </div>
       
    )

    
}