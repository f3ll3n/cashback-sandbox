import { RoutePaths } from "../AppRouter/RoutesConfig"

const linkNames = ['Профиль', 'Заказы', 'Моя копилка']

const links = []; 

Object.keys(RoutePaths).map((key, idx) => {
    links.push({pathName: key, linkName: linkNames[idx]})
})

export default links;
