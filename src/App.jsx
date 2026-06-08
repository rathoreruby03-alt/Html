import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";

import "./App.css";

const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
    return (
        <>
            <Navbar />

            <main className="container">
                <About />

                <Suspense fallback={<h2>Loading...</h2>}>
                    <Projects />
                    <Skills />
                    <Resume />
                    <Contact />
                </Suspense>
            </main>
        </>
    );
}

export default App;