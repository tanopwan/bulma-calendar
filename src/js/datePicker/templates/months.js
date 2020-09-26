import {
  addMonths,
  format,
  parse
} from 'date-fns';

export default (data) => {
  return `${data.months.map((d, i) => {
    console.log(d)
    console.log(typeof(d))
    console.log(parse(d,'MM', new Date()))
    let dObj = parse(d,'MM', new Date())
    console.log(addMonths(dObj, i))
    return `<div class="datepicker-month" data-month="${format(addMonths(dObj, i), 'MM', {
      locale: data.locale
    })}">${format(addMonths(dObj, i), 'MMM', {
      locale: data.locale
    })}</div>`
  }).join('')}`;
}