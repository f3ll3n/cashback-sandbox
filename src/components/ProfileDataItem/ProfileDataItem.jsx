

import cls from './ProfileDataItem.module.scss';
import classNames from 'classnames';
const ProfileDataItem = ({data}) => {

  return (
    <div className={classNames({[cls.ProfileDataItem]: data.isMetrics, [cls.accentItem] : data.dataTitle === "Процентный бонус"})}>
        <p className={cls.dataTitle}>{data.dataTitle}</p>
        <p className={cls.dataValue}>{data.dataValue}</p>
    </div>
  )
}

export default ProfileDataItem;