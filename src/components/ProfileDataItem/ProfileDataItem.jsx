import { useEffect } from 'react';
import cls from './ProfileDataItem.module.scss';


const ProfileDataItem = ({data}) => {
  useEffect(() => {
    console.log(data)
  }, [])
  return (
    <div>
        <p className={cls.dataTitle}>{data.dataTitle}</p>
        <p className={cls.dataValue}>{data.dataValue}</p>
    </div>
  )
}

export default ProfileDataItem;