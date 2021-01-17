import moment from 'moment';
import { IOrder } from "../models";

export const formatOrderData = (orders: IOrder[]) => {
    return orders.map((item: any)=> {
        return {
          title: item.title,
          bookingDate: formatDate(item.bookingDate),
          address: (item.address && item.address.street) ? item.address.street : '--',
          customer: (item.customer && item.customer.name) ? item.customer.name : '--',
          id: item.id
        }
    });
}

const formatDate = (date: Date) => {
  if (typeof date !== "object") {
    return typeof date === 'number' 
      ? moment.unix(date).format('DD-MM-YYYY')
      : date;
  }
  return '--'
}
