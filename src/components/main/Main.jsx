import About from "./about/About"
import FirstScreen from "./firstScreen/FirstScreen"
import Projects from "./Projects/Prokects"

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
        </>
    )

}

export default Main