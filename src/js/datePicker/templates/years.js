import {
	getMonth,
	parse
} from 'date-fns';
import * as type from '../../utils/type';

export default (data) => {
	var date;
	if (type.isString(data.visibleDate)) {
		date = parse(data.visibleDate, data.format, new Date(), {
			locale: data.locale,
			budhhistYear: data.budhhistYear,
		})
	}
	
	return `${data.years.map(year => (`<div class="datepicker-year${year === getMonth(date) ? ' is-active' : ''}" data-year="${year}"><span class="item">${year}</span></div>`)).join('')}`;
}