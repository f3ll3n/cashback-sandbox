import { useEffect } from 'react'
import links from './Links'
import { Link } from 'react-router-dom'

export const Header = () => {
useEffect(() => {
    console.log(links)
}, [])
  return (
    <div>
        <div>
            Cashback-sandbox
        </div>
        <div>
            {links.length && links.map(({pathName, linkName}, idx) => {
                return <Link key={idx} to={pathName}>{linkName}</Link>
            })}
        </div>
    </div>
  )
}
