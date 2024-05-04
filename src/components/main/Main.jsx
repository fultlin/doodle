import About from "./about/About"
import FirstScreen from "./firstScreen/FirstScreen"

const Main = () => {
    return (
        <>
            <section>
                <div className="wrapper main">
                    <FirstScreen/>
                </div>
            </section>

            <section>
                <div className="wrapper main">
                    <About/>
                </div>
            </section>
        </>
    )
    
}

export default Main