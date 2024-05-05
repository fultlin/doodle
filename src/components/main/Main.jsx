import About from "./about/About";
import FirstScreen from "./firstScreen/FirstScreen";
import Projects from "./Projects/Prokects";
import Require from "./require/require";
import News from "./news/news";

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

            <section className="news">
                <div className="wrapper main news__container">
                    <News />
                </div>
            </section>

            <section className="require">
                <div className="wrapper main require__contanier">
                    <Require />
                </div>
            </section>
        </>
    )

}

export default Main