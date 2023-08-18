interface Transaction {
  transactionId: string;
  amount: number;
  creditDebitIndicator: string;
  domain: string;
  family: string;
  status: string;
  reversalIndicator: boolean;
  creationDate: string;
  bookingDate: string;
  charges: number;
  interest: number;
  currentBalance: number;
  subfamily: string;
}

export interface AccountDetails {
  accountId: string;
  accountNumber: string;
  accountType: string;
  currency: string;
  currentBalance: string;
  ownershipType: string;
  availableBalance: string;
  transactions: Transaction[];
}