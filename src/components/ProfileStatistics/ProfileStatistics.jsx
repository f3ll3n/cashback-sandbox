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
          <div className={cls.ProfileDataList}>
          <ProfileDataItem data={{
            dataTitle: 'Заказы (кол-во)',
            dataValue: profile.ordersTotal
          }}/>
          <ProfileDataItem data={{
            dataTitle: 'Наработка (время)',
            dataValue: `${profile.operatingHours} ч.`
          }}/>
          <ProfileDataItem data={{
            dataTitle: 'Кешбек (Коэффициент)',
            dataValue: `${profile.cashbackPercent} %`
          }}/>
          <ProfileDataItem data={{
            dataTitle: 'Кешбек (сумма)',
            dataValue: `${profile.cashback} ₽`
          }}/>
          <ProfileDataItem data={{
            dataTitle: 'Наработка (сумма)',
            dataValue: `${profile.cash} ₽`
          }}/>
          </div>
        </div>
    </div>
  )
}
