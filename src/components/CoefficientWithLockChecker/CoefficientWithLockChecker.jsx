import { useState } from 'react';
import { CoefficientIndicator } from '../CoefficientIndicator/CoefficientIndicator'
import cls from './CoefficientWithLockChecker.module.scss';
import { FaLock } from "react-icons/fa";

export const CoefficientWithLockChecker = () => {
  const [isLocked] = useState(false);

  return (
    <div className={cls.coefficient_block}>
        {isLocked && (
            <div className={cls.reward_locker}>
                    <div className={cls.icon}>
                        <FaLock />
                    </div>
                    <div>
                        Time Reward недоступен в этом месяце, превышен лимит нарушений  .
                    </div>
            </div>
        )}
        <CoefficientIndicator />
    </div>
  )
}
