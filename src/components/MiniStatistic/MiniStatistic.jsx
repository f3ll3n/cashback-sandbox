
import { useSelector } from 'react-redux';
import cls from './MiniStatistic.module.scss';

export const MiniStatistic = () => {
const data = useSelector((state) =>
    state.profile
);
  return (
    <div className={cls.MiniStatistic}>
        <div>
            Счетчик заказов: 
            <span className={cls.data}> {data.ordersTotal}</span>
        </div>
        <div>   
            Часы: 
            <span className={cls.data}> {data.operatingHours}</span>
        </div>
    </div>
  )
}
