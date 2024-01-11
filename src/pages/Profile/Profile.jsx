import { Infoblock } from '../../components/InfoBlock/Infoblock';
import ProfileDataList from '../../components/ProfileDataList/ProfileDataList';
import { images } from '../../images';
import { motion } from "framer-motion";

import cls from './Profile.module.scss';
import { ProfileStatistics } from '../../components/ProfileStatistics/ProfileStatistics';
export const Profile = () => {
  return (
    <motion.div className={cls.Profile}
      initial={{ opacity: 0, height: '0px' }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0,  height: '0px' }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  )
}
