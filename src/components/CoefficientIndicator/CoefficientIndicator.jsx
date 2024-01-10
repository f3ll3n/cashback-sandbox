import { useSelector } from 'react-redux';
import { CoefficientCircles } from '../CoefficientCircles/CoefficientCircles';
import cls from './CoefficientIndicator.module.scss';

export const CoefficientIndicator = () => {
    const profile = useSelector((state) =>
        state.profile.operatingHours
    );

    return (
        <div className={cls.block}>
            <div>
                <div className={cls.circles_block}>
                    <CoefficientCircles />
                </div>
                <div className={cls.wrapper_line}>
                    <div className={cls.line} style={{width: `${profile / 3}%`}}>
                    </div>
                </div>
            </div>
        </div>
    )
}