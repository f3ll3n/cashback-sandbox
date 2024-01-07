import { Infoblock } from '../../components/InfoBlock/Infoblock';
import ProfileDataList from '../../components/ProfileDataList/ProfileDataList';
import { images } from '../../images';
import cls from './Profile.module.scss';
import { ProfileStatistics } from '../../components/ProfileStatistics/ProfileStatistics';
export const Profile = () => {
  return (
    <div className={cls.Profile}>
      <div>
        <div className={cls.header}>
          <h1 className={cls.title}>Персональные данные</h1>
          <img src={images.profileImg} alt='аватар пользователя'/>
        </div>
        <div>
          <div>
            <ProfileDataList />
          </div>
          <div>
            <Infoblock>
              Для редактирования данных обратитесь в ОЦАП
            </Infoblock>
          </div>
        </div>
        <div>
          <ProfileStatistics />
        </div>
      </div>
    </div>
  )
}
