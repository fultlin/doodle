import About from "./about/About"
import FirstScreen from "./firstScreen/FirstScreen"

const Main = () => {
    return (
        <div className="wrapper main">
            <section>
                <FirstScreen/>
            </section>

            <section>
                <About/>
            </section>
        </div>
    )
    
}

export default Main