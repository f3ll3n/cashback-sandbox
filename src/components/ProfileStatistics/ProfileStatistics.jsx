import { useSelector } from 'react-redux';
import ProfileDataItem from '../ProfileDataItem/ProfileDataItem';
import cls from './ProfileStatistics.module.scss';
import { useEffect } from 'react';

export const ProfileStatistics = () => {  
  const profile = useSelector((state) =>
    state.profile
  );
  useEffect(() => {
    console.log(profile)
  }, [])

  return (
    <div className={cls.ProfileStatistics}>
        <div className={cls.header}>
          <h2 className={cls.title}>Заказы</h2>
          <ProfileDataItem data={{
            dataTitle: 'Заказы (кол-во)',
            dataValue: `${profile.ordersCount}`
          }}/>
          <ProfileDataItem data={{
            dataTitle: 'Наработка (кол-во)',
            dataValue: `${profile.operatingHours}`
          }}/>
        </div>
    </div>
  )
}
