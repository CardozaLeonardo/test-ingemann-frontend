
export interface Item {
    id: number;
    code: string;
    description: string;
    price: number;
    cost: number;
}

export interface Invoice {
    subTotal: number;
    tax: number;
    total: number;
    invoiceDetails: InvoiceDetail[];
}

export interface InvoiceDetail {
    quantity: number;
    itemId: number;
}

export interface Response<T> {
    data: T;
    succeeded: boolean;
    message: string | null;
}