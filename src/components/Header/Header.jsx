import { Link } from 'react-router-dom'
import links from './Links'
import cls from './Header.module.scss'

export const Header = () => {

  return (
    <header>
        <div>
            Моя копилка - песочница
        </div>
        <nav className='navbar'>
            <ul className={cls.navbar_list}>
                {links.length && links.map(({pathName, linkName}, idx) => {
                    return (
                        <li key={idx}>
                            <Link to={pathName}>{linkName}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}
