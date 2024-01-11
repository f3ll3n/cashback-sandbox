import { useSelector } from 'react-redux';
import ProfileDataItem from '../ProfileDataItem/ProfileDataItem';
import cls from './ProfileStatistics.module.scss';
import { useDispatch } from 'react-redux';
import { clearAllData } from '../../redux/ProfileSlice';
import { MdDeleteForever } from "react-icons/md";

export const ProfileStatistics = () => {  
  const dispatch = useDispatch();
  const profile = useSelector((state) =>
    state.profile
  );

  return (
    <div className={cls.ProfileStatistics}>
        <div className={cls.header}>
          <div className={cls.block_header}>
            <button className={cls.deleteButton} onClick={() => dispatch(clearAllData())}><MdDeleteForever/></button>
          </div>
          
          <div className={cls.ProfileDataList}>
            <ProfileDataItem data={{
              dataTitle: 'Заказы (кол-во)',
              dataValue: profile.ordersTotal,
              isMetrics: true
            }}/>
            <ProfileDataItem data={{
              dataTitle: 'Наработка (часы)',
              dataValue: `${profile.operatingHours}`,
              isMetrics: true
            }}/>
            <ProfileDataItem data={{
              dataTitle: 'Наработка',
              dataValue: `${profile.cash} ₽`,
              isMetrics: true
            }}/>
            <ProfileDataItem data={{
              dataTitle: 'Процент накопления',
              dataValue: `${profile.cashbackPercent} %`,
              isMetrics: true
            }}/>
            <ProfileDataItem data={{
              dataTitle: 'Процентный бонус',
              dataValue: `${profile.cashback} ₽`,
              isMetrics: true
            }}/>
            
          </div>
        </div>
    </div>
  )
}
