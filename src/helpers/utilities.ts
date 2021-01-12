import { IOrder } from "../models";

export const formatOrderData = (orders: IOrder[]) => {
    return orders.map((item: any)=> {
        return {
          title: item.title,
          bookingDate: typeof item.bookingDate !== "object" ? item.bookingDate : '--',
          address: (item.address && item.address.street) ? item.address.street : '--',
          customer: (item.customer && item.customer.name) ? item.customer.name : '--',
          id: item.id
        }
    });
}
