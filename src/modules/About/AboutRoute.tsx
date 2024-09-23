import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const About = lazy(() => import('./About'))

const AboutRoute = () => {

    return (
        <Routes>
            <Route index element={<About />} />
        </Routes>
    )
}
export default AboutRoute