
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
    item: Item | null;
}

export interface InvoiceDetailApi {
    quantity: number;
    itemId: number;
}

export interface InvoiceApi {
    invoiceDetails: InvoiceDetailApi[];
    total: number;
    tax: number;
    subTotal: number;
}

export interface Response<T> {
    data: T;
    succeeded: boolean;
    message: string | null;
}