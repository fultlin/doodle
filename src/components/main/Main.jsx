import About from "./about/About"
import FirstScreen from "./firstScreen/FirstScreen"
import Projects from "./Projects/Prokects"
import Students from "./Students/Students"

const Main = () => {
    return (
        <>
            <section>
                <div className="wrapper main">
                    <FirstScreen />
                </div>
            </section>

            <section>
                <div className="wrapper main">
                    <About />
                </div>
            </section>
            <section className="section-projects">
                <div className="wrapper main">
                    <Projects />
                </div>
            </section>
            <section>
            <div className="wrapper main">
                    <Students />
                </div>
            </section>
        </>
    )

}

export default Main