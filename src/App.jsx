import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./components/animatedroutes"
import Footer from "./components/footer"

import { CTA } from "./components/CTA"
import Action from "./components/actions"
import { Character } from "./components/character"

import { CTAButton } from "./components/ctaButton"
import { Box } from "@chakra-ui/react"

const App = () => (
    <BrowserRouter>
        <AnimatedRoutes/>
        <Character />
        <CTAButton />
        <Footer />
    </BrowserRouter>
)
export default App
