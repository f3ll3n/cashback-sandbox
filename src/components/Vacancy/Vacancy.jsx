import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import cls from './Vacancy.module.scss';
import { completeOrder } from '../../redux/ProfileSlice';

export const Vacancy = ({vacancy}) => {
  const {name, duration, payment} = vacancy;
  const dispatch = useDispatch();

  const handleOnCompleteOrder = () => {
    console.log(`заказ ${name} выполнен: +${duration}, +${payment} ₽`);
    dispatch(completeOrder({name, payment, duration}))
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
                    <p className={cls.title}>{name}</p>
                    <p className={cls.sum}>{payment} ₽</p>
                </div>
                <div className={cls.vacancy_header_right}>
                    <p className={cls.time}>{duration} часов</p>
                </div>
            </div>
            <div className={cls.vacancy_actions}>
                <Button onClick={handleOnCompleteOrder}>Выполнить</Button>
                <Button onClick={handleOnNTD}>Неприезд</Button>
                <Button onClick={handleOnCompleteOrderLate}>Опоздание</Button>
            </div>
        </div>
    </div>
  )
}
