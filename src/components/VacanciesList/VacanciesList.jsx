import { Vacancy } from "../Vacancy/Vacancy"
import { vacanciesData } from "./VacanciesData"

export const VacanciesList = () => {
  return (
    <div className="vacancies">
        {vacanciesData.map((vacancy, idx) => {
            return <Vacancy key={idx} vacancy={vacancy} />
        })}
    </div>
  )
}
