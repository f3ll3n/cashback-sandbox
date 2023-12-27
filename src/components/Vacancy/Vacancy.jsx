import { Button } from '../Button/Button';
import cls from './Vacancy.module.scss';

export const Vacancy = () => {
  const handleOnCompleteOrder = () => {
    console.log('заказ выполнен')
  }
  const handleOnNTD = () => {
    console.log('неприезд на заказ')
  }
  const handleOnCompleteOrderLate = () => {
    console.log('заказ выполнен с опозданием')
  }

  return (
    <div className={cls.Vacancy}>
        <div className={cls.vacancy_content}>
            <div className={cls.vacancy_header}>
                <div className={cls.vacancy_header_left}>
                    <p className={cls.title}>Работник торгового зала</p>
                    <p className={cls.sum}>1745 ₽</p>
                </div>
                <div className={cls.vacancy_header_right}>
                    <p className={cls.time}>12 часов</p>
                </div>
            </div>
            <div className={cls.vacancy_actions}>
                <Button onClick={handleOnCompleteOrder}>Выполнить</Button>
                <Button onClick={handleOnNTD}>Неприезд</Button>
                <Button onClick={handleOnCompleteOrderLate}>Опоздание</Button>
                {/* <button>Выполнить</button>
                <button>НТД</button>
                <button>Опоздание</button> */}
            </div>
        </div>
    </div>
  )
}
