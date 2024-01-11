import { useEffect, useState } from 'react';
import { CoefficientIndicator } from '../CoefficientIndicator/CoefficientIndicator'
import cls from './CoefficientWithLockChecker.module.scss';
import { FaLock } from "react-icons/fa";
import { useSelector } from 'react-redux';
export const CoefficientWithLockChecker = () => {
  const [isLocked, setIsLocked] = useState(false);
  const ntdCount = useSelector((state) =>
        state.profile.ntdCount
  );

  useEffect(() => {
    if(ntdCount >= 3){
      setIsLocked(true)
    }
    else{
      setIsLocked(false)
    }
  },
   [ntdCount])
  return (
    <div className={cls.coefficient_block}>
        {isLocked && (
            <div className={cls.reward_locker}>
                    <div className={cls.icon}>
                        <FaLock />
                    </div>
                    <div className={cls.locker_text}>
                       Моя копилка недоступна в этом месяце, превышен лимит нарушений.
                    </div>
            </div>
        )}
        <CoefficientIndicator />
    </div>
  )
}
