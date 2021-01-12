export type IOrder = {
    uid?: string,
    id?: string
    title: string,
    bookingDate: number,
    address: {
        city: string,
        country: string,
        street: string,
        zip: string
    },
    customer: {
        email: string, 
        name: string,
        phone: string
    } 
}

export type User = {
    email?: string;
    name?: string;
    phone?: string | number;
    uid?: string;
}