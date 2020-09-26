import {
  addMonths,
  format,
  parse
} from 'date-fns';

export default (data) => {
  return `${data.months.map((d, i) => `<div class="datepicker-month" data-month="${format(parse(d, 'MM', new Date(), i), 'MM', {
    locale: data.locale
  })}">${format(parse(d, 'MM', new Date(), i), 'MMM', {
    locale: data.locale
  })}</div>`).join('')}`;
}