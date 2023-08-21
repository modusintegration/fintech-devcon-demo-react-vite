import { useState } from "react";
import postDeposit from "../api/postDeposit";
import postWithdraw from "../api/postWithdraw";
import { notifications } from "@mantine/notifications";

export type AccountDetailsType = {
  accountId: string;
  servicerId: "csi" | "mambu";
};

function useTransfeer() {
  const [isLoading, setIsLoading] = useState(false);
  const transfeer = async (
    from: AccountDetailsType,
    to: AccountDetailsType,
    ammount: string
  ) => {
    if (from.servicerId === "csi")
      from.accountId = from.accountId.split("-").pop()!;

    if (to.servicerId === "csi") to.accountId = to.accountId.split("-").pop()!;
    setIsLoading(true);
    let rollbackRetries = 0;
    const rollback = async () => {
      try {
        await postDeposit(from.servicerId, from.accountId, ammount);
      } catch (error) {
        if (rollbackRetries < 5) {
          rollbackRetries++;
          rollback();
        }
      }
    };

    try {
      await postWithdraw(from.servicerId, from.accountId, ammount);
    } catch (error) {
      notifications.show({
        color: "red",
        message: "Error trying to transfeer money",
      });
      setIsLoading(false);
      return;
    }

    try {
      await postDeposit(to.servicerId, to.accountId, ammount);
      notifications.show({
        color: "green",
        title: "Success",
        message: `You sent $${ammount}`,
      });
    } catch (error) {
      notifications.show({
        color: "red",
        message: "Error trying to transfeer money",
      });
      rollback();
    }
    setIsLoading(false);
  };

  return { transfeer, isLoading };
}

export default useTransfeer;
