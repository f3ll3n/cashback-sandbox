import ProfileDataItem from '../ProfileDataItem/ProfileDataItem';
import cls from './ProfileDataList.module.scss';

export const ProfileData = [
    {
        dataTitle: 'ФИО',
        dataValue: 'Мышкина Куся Вискасновна'
    },
    {
        dataTitle: 'Номер',
        dataValue: '333-00001'
    },
    {
        dataTitle: 'Спец',
        dataValue: 'Горничная, Бармен, Сборщик Велосипедов, Уборщица, Модель, Уличный продавец, Промоутер'
    },
    {
        dataTitle: 'Телефон',
        dataValue: '8 (800) 555-35-35'
    },
    {
        dataTitle: 'Метро',
        dataValue: 'Лежанка'
    },
    {
        dataTitle: 'ЛМК',
        dataValue: '24.08.2023'
    }
]
ProfileData.isMetrics = false;

const ProfileDataList = () => {
  
  return (
    <div className={cls.ProfileDataList}>
        {ProfileData.map((data, idx) => {
            return <ProfileDataItem key={idx} data={data} />
        })}
    </div>
  )
}

export default ProfileDataList;