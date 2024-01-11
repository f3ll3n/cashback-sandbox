import { motion } from "framer-motion"
import { VacanciesList } from "../../components/VacanciesList/VacanciesList"
import cls from './Vacancies.module.scss'
import { MiniStatistic } from "../../components/MiniStatistic/MiniStatistic"
export const Vacancies = () => {
  return (
    <motion.div
      className={cls.Vacancies}
      initial={{ opacity: 0, height: '0px' }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0,  height: '0px' }}
      transition={{ duration: 0.5 }}
    >
      <MiniStatistic />
      <VacanciesList />
    </motion.div>
  )
}
