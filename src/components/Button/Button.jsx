import cls from './Button.module.scss'
export const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className={cls.Button}>
        {children}
    </button>
  )
}
