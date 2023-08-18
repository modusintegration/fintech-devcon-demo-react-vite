import { Account } from "./account";

export interface PersonAccounts {
  personId: string;
  personName: string;
  accounts: Account[]
}
