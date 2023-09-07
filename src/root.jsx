import { Outlet } from "react-router-dom"
import Navigation from "./components/Layout/Navigation/navigation"

function Root() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Root
