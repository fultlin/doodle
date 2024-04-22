import png1 from './assets/твори2.png'
import png2 from './assets/покоряй2.png'
import png3 from './assets/вдохновляй2.png'
import Login from '../../header/components/login/Login'

const FirstScreen = () => {
    return (
        <div className="firstsreen">
            <h1 className="firstsreen__name">Doodle</h1>
            <p className="firstsreen__description">
                Платформа для реализации своего творческого потенциала, поиска своей аудитории и работадалей
            </p>
            <Login className={'login__button firstsreen__button'} text={'Присоединиться'}/>
            <img src={png1} alt="make" className='firstscreen_img-1' />
            <img src={png2} alt="take" className='firstscreen_img-2'/>
            <img src={png3} alt="create" className='firstscreen_img-3'/>
        </div>
    )
}

export default FirstScreen