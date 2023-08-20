import { Outlet } from "react-router-dom"
import Navigation from "./shared/navigation"

function Root() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Root
