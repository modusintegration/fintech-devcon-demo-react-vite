import { useState } from "react";
import { Account } from "../types/account";
import getAccountsByPersonId from "../api/getAccountsByPersonId";

type StateAccountsType = {
  csi: Account;
  mambu: Account;
};

const initialState: StateAccountsType = {
  csi: {} as Account,
  mambu: {} as Account,
};

function useAccounts() {
  const [accounts, setAccounts] = useState<StateAccountsType>(initialState);

  const fetchAccounts = async (personId: string) => {
    try {
      const csiAccountPromise = getAccountsByPersonId("csi", personId);
      const mambuAccountPromise = getAccountsByPersonId("mambu", personId);
      Promise.all([csiAccountPromise, mambuAccountPromise]).then(
        ([csiAccountResult, mambuAccountResult]) => {
          if (csiAccountResult && mambuAccountResult)
            setAccounts({
              csi: csiAccountResult.accounts[0],
              mambu: mambuAccountResult.accounts[0],
            });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { accounts, fetchAccounts };
}

export default useAccounts;
