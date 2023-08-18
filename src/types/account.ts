import { Balance } from "./balances";

interface Party {
  partyId: string;
  partyType: string;
  partyAccountRole: string;
}

export interface Account {
  accountNumber: string;
  accountType: string;
  accountOwnershipType: string;
  productId: string;
  name: string;
  currency: string;
  parties: Party[];
  status: string;
  statusDateAndTime: string;
  openDate: string;
  balances: Balance[];
  accountId: string;
}
