import months from './monthsValues'

const localizeDateStr = (actualDate)=>{
  let date_to_convert = new Date(Date.parse(actualDate));

  let fullDate = actualDate.split('T').shift()
  let [year, month, day] = fullDate.split('-')

  return actualDate = `${day} ${months[month-1]} ${year} `;
}

export default localizeDateStr
