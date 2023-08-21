import { useState } from "react";
import getAccountTransactions from "../api/getAccountTransactions";
import { AccountDetails } from "../types/transactions";

interface IFetchTransactions {
  csiAccountId: string;
  mambuAccountId: string;
}

export type StateTransactionsType = {
  csiTransactions: AccountDetails["transactions"];
  mambuTransactions: AccountDetails["transactions"];
};

const initialState: StateTransactionsType = {
  csiTransactions: [],
  mambuTransactions: [],
};

let intervalId = -1;

function useTransactions() {
  const [transactions, setTransactions] =
    useState<StateTransactionsType>(initialState);

  const fetchTransactions = async ({
    csiAccountId,
    mambuAccountId,
  }: IFetchTransactions) => {
    try {
      const csiTransactionsPromise = getAccountTransactions(
        "csi",
        csiAccountId.split("-").pop()!
      );
      const mambuTransactionsPromise = getAccountTransactions(
        "mambu",
        mambuAccountId
      );
      Promise.all([csiTransactionsPromise, mambuTransactionsPromise]).then(
        ([csiTransactionsResult, mambuTransactionsResult]) => {
          if (csiTransactionsResult && mambuTransactionsResult)
            setTransactions({
              csiTransactions: csiTransactionsResult.transactions,
              mambuTransactions: mambuTransactionsResult.transactions,
            });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransactionsOn = (params: IFetchTransactions) => {
    fetchTransactions(params);
    intervalId = setInterval(() => fetchTransactions(params), 5000);
  };

  const fetchTransactionsOff = () => {
    clearInterval(intervalId);
  };

  return { transactions, fetchTransactionsOn, fetchTransactionsOff };
}

export default useTransactions;
