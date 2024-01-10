
import { useSelector } from 'react-redux';
import cls from './CoefficientCircles.module.scss';
import classNames from 'classnames';
export const CoefficientCircles = () => {
    const percent = useSelector((state) =>
        state.profile.cashbackPercent
    );
  
    return (
    <div className={cls.circlesBlock}>
        <div className={cls.percent_row}>
        {
            Array.from({ length: 11 }, (_, i) => (
                <div
                    className={cls.text}
                    key={i}
                    style={{color: percent === i ? '#0D1F33': '#838383'}}
                >
                    {i}%
                </div>
            ))
        }
        </div>
        {
            Array.from({ length: 11 }, (_, i) => (
                <div
                    className={classNames(
                        cls.circle, 
                        {
                            [cls.active]: i < percent,
                            [cls.default]: i > percent,
                            [cls.focus]: i === percent
                        }
                        )}
                    style={{
                        left: `${i * 10}%`
                    }}
                    key={i}
                >
                </div>
            ))
        }
        <div className={cls.hours_row}>
        {
            Array.from({ length: 11 }, (_, i) => (
                <div
                    className={cls.text_hours}
                    key={i}
                    style={{color: percent === i ? '#0D1F33': '#838383'}}
                >
                    {i * 30} ч.
                </div>
            ))
        }
        </div>
    </div>
  )
}
