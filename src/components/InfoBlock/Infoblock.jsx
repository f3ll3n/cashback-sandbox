import { images } from '../../images'
import cls from './Infoblock.module.scss'

export const Infoblock = ({children}) => {
  return (
    <div className={cls.Infoblock}>
        <img src={images.info} alt="значок информации"></img>
        <div>
            {children}
        </div>
    </div>
  )
}
