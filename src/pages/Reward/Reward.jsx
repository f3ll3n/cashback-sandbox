import { motion } from 'framer-motion'
import { CoefficientWithLockChecker } from '../../components/CoefficientWithLockChecker/CoefficientWithLockChecker'
import { ProfileStatistics } from '../../components/ProfileStatistics/ProfileStatistics'
import cls from './Reward.module.scss'

export const Reward = () => {
  return (
    <motion.div className={cls.Reward}
      initial={{ opacity: 0, height: '0px' }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0,  height: '0px' }}
      transition={{ duration: 0.5 }}
    >
      <div className={cls.reward_block}>
        <h2 className={cls.title}>Мой Time Reward</h2>
        
        <CoefficientWithLockChecker />
        <ProfileStatistics />
      </div>
    </motion.div>
  )
}
