import { useState } from "react";
import getAccountsBalances from "../api/getAccountsBalances";
import { Balances } from "../types/balances";

interface IFetchBalances {
  csiAccountId: string;
  mambuAccountId: string;
}

type StateBalancesType = {
  csiBalances: Balances["balances"];
  mambuBalances: Balances["balances"];
};

const intialBalanceState = {
  balanceName: "",
  amount: -1,
  currency: "",
  calculationDate: "",
};

const initialState: StateBalancesType = {
  csiBalances: [intialBalanceState],
  mambuBalances: [intialBalanceState],
};

function useBalances() {
  const [balances, setBalances] = useState<StateBalancesType>(initialState);

  const fetchBalances = async ({
    csiAccountId,
    mambuAccountId,
  }: IFetchBalances) => {
    try {
      const csiBalancePromise = getAccountsBalances("csi", csiAccountId);
      const mambuBalancePromise = getAccountsBalances("mambu", mambuAccountId);
      Promise.all([csiBalancePromise, mambuBalancePromise]).then(
        ([csiBalanceResult, mambuBalanceResult]) => {
          if (csiBalanceResult && mambuBalanceResult) {
            setBalances({
              csiBalances: csiBalanceResult.balances,
              mambuBalances: mambuBalanceResult.balances,
            });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBalancesOn = (params: IFetchBalances) => {
    fetchBalances(params);
    setInterval(() => fetchBalances(params), 5000);
  };

  return { balances, fetchBalancesOn };
}

export default useBalances;
