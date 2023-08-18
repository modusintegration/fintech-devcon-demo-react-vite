import { notifications } from "@mantine/notifications";
import { useState } from "react";
import getAccountsBalances from "../api/getAccountsBalances";
import { Balances } from "../types/balances";
import { dollarFormat } from "../utils/dollarFormat";

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

const oldBalances = {
  csi: -1,
  mambu: -1,
};

function useBalances() {
  const [balances, setBalances] = useState<StateBalancesType>(initialState);
  const [notificationsOn, setNotificationsOn] = useState(false);

  if (
    (balances.csiBalances[0].amount > -1 ||
      balances.mambuBalances[0].amount > -1) &&
    !notificationsOn
  )
    setNotificationsOn(true);

  const receivedNotification = (message: string) =>
    notifications.show({
      color: "green",
      title: "🎉 Great news",
      message,
    });

  const receivedCSIMoney = balances.csiBalances[0].amount - oldBalances.csi;

  if (notificationsOn && receivedCSIMoney > 0)
    receivedNotification(
      `You received $${dollarFormat(receivedCSIMoney)} in your CSI account`
    );

  const receivedMAMBUMoney =
    balances.mambuBalances[0].amount - oldBalances.mambu;

  if (notificationsOn && receivedMAMBUMoney > 0)
    receivedNotification(
      `You received $${dollarFormat(receivedMAMBUMoney)} in your MAMBU account`
    );

  oldBalances.csi = balances.csiBalances[0].amount;
  oldBalances.mambu = balances.mambuBalances[0].amount;

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
