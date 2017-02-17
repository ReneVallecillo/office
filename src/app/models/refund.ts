export interface Refund {
    id: number;
    amount: number;
    date: string;
    check_number: string;
    details?: RefundDetail[];
}

export interface RefundDetail {
    id: number;
    amount: number;
    reference: number;
    date: string;
}
