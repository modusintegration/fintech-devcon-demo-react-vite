export interface Balance {
    balanceName: string;
    amount: number;
    currency: string;
    calculationDate: string;
}

export interface Balances {
    accountId: string;
    accountNumber: string;
    balances: Balance[];
}
