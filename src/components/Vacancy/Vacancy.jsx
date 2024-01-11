import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import cls from './Vacancy.module.scss';
import { completeOrder, completeNtd, completeLate } from '../../redux/ProfileSlice';

export const Vacancy = ({vacancy}) => {
  const {name, duration, payment} = vacancy;
  const dispatch = useDispatch();

  const handleOnCompleteOrder = () => {
    console.log(`заказ ${name} выполнен: +${duration}, +${payment} ₽`);
    dispatch(completeOrder({name, payment, duration, vacancy}))
  }
  const handleOnNTD = () => {
    dispatch(completeNtd())
  }
  const handleOnCompleteOrderLate = () => {
    dispatch(completeLate({name, payment, duration, vacancy}))
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
                <Button onClick={handleOnNTD}>Нарушение</Button>
                <Button onClick={handleOnCompleteOrderLate}>3 Опоздания</Button>
            </div>
        </div>
    </div>
  )
}
