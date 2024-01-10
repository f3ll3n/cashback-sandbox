import { CoefficientWithLockChecker } from '../../components/CoefficientWithLockChecker/CoefficientWithLockChecker'
import { ProfileStatistics } from '../../components/ProfileStatistics/ProfileStatistics'
import cls from './Reward.module.scss'

export const Reward = () => {
  return (
    <div className={cls.Reward}>
      <div className={cls.reward_block}>
        <h2 className={cls.title}>Мой Time Reward</h2>
        <CoefficientWithLockChecker />
        <ProfileStatistics />
      </div>
    </div>
  )
}
