import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Modal,
  Radio,
  Select,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { BalanceCard } from "../components";
import { useDisclosure } from "@mantine/hooks";
import SignIn from "../molecules/SignIn";
import usePerson from "../hooks/usePerson";
import useAccounts from "../hooks/useAccounts";
import useBalances from "../hooks/useBalances";
import useTransactions from "../hooks/useTransactions";
import Transactions from "../molecules/Transactions";
import useAllPersons from "../hooks/useAllPersons";
import useTransfeer, { AccountDetailsType } from "../hooks/useTransfeer";

interface FormValues {
  withdrawAccountServicer: "csi" | "mambu" | null;
  depositAccountServicer: "csi" | "mambu" | null;
  personIdToDeposit: string;
  amount: string;
}

function Home() {
  const [userName, setUserName] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [openedSignIn, { close: closeSignIn, open: openSignIn }] =
    useDisclosure(false);
  const { person, fetchPerson } = usePerson();
  const {
    accounts: accountsFromLoggedUser,
    fetchAccounts: fetchAccountsFromLoggedUser,
  } = useAccounts();
  const {
    accounts: accountsFromReceiverUser,
    fetchAccounts: fetchAccountsFromReceiverUser,
  } = useAccounts();

  const { balances, fetchBalancesOn } = useBalances();
  const { transactions, fetchTransactionsOn, fetchTransactionsOff } =
    useTransactions();
  const { persons, fetchAllPersons } = useAllPersons();
  const { isLoading, transfeer } = useTransfeer();

  const form = useForm<FormValues>({
    initialValues: {
      withdrawAccountServicer: null,
      depositAccountServicer: null,
      personIdToDeposit: "",
      amount: "",
    },
  });

  useEffect(() => {
    const localstorageUserName = localStorage.getItem("userName");
    if (!localstorageUserName) return openSignIn();
    setUserName(localstorageUserName);
  }, []);

  useEffect(() => {
    if (!userName) return;
    fetchPerson(userName);
    fetchAllPersons();
  }, [userName]);

  useEffect(() => {
    if (person?.personId) fetchAccountsFromLoggedUser(person.personId);
  }, [person?.personId]);

  useEffect(() => {
    if (
      accountsFromLoggedUser?.csi.accountId &&
      accountsFromLoggedUser?.mambu.accountId
    )
      fetchBalancesOn({
        csiAccountId: accountsFromLoggedUser.csi.accountId,
        mambuAccountId: accountsFromLoggedUser.mambu.accountId,
      });
  }, [
    accountsFromLoggedUser?.csi.accountId,
    accountsFromLoggedUser?.mambu.accountId,
  ]);

  useEffect(() => {
    if (
      opened &&
      accountsFromLoggedUser?.csi.accountId &&
      accountsFromLoggedUser?.mambu.accountId
    ) {
      fetchTransactionsOn({
        csiAccountId: accountsFromLoggedUser.csi.accountId,
        mambuAccountId: accountsFromLoggedUser.mambu.accountId,
      });
    } else fetchTransactionsOff();
  }, [opened]);

  const handleCloseSignIn = (value: string) => {
    setUserName(value);
    closeSignIn();
  };

  useEffect(() => {
    if (form.values.personIdToDeposit)
      fetchAccountsFromReceiverUser(form.values.personIdToDeposit);
  }, [form.values.personIdToDeposit]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      withdrawAccountServicer,
      depositAccountServicer,
      personIdToDeposit,
      amount,
    } = form.values;
    if (
      !withdrawAccountServicer ||
      !depositAccountServicer ||
      !personIdToDeposit ||
      !amount
    )
      return;

    const from: AccountDetailsType = {
      accountId: accountsFromLoggedUser[withdrawAccountServicer].accountId,
      servicerId: withdrawAccountServicer,
    };
    const to: AccountDetailsType = {
      accountId: accountsFromReceiverUser[depositAccountServicer].accountId,
      servicerId: depositAccountServicer,
    };
    transfeer(from, to, amount);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Flex direction="column" gap={10}>
          <Flex justify="space-between">
            <Title order={1}>{userName}</Title>
            <Button variant="outline" color="#4fc7e7" onClick={open}>
              Transactions
            </Button>
          </Flex>
          <Flex gap={5}>
            <BalanceCard
              account="CSI"
              balance={balances.csiBalances[0].amount}
              color="linear-gradient(90deg, rgba(188,220,228,1) 0%, rgba(79,199,231,1) 43%, rgba(0,212,255,1) 100%)"
            />
            <BalanceCard
              account="Mambu"
              balance={balances.mambuBalances[0].amount}
              color="linear-gradient(90deg, rgba(215,240,224,1) 0%, rgba(122,238,166,1) 43%, rgba(122,238,166,1) 100%)  "
            />
          </Flex>
          <Radio.Group
            required
            name="accountFrom"
            label="Select account to withdraw"
            {...form.getInputProps("withdrawAccountServicer")}
          >
            <Radio required value="csi" label="CSI" />
            <Radio required value="mambu" label="Mambu" mt={2} />
          </Radio.Group>
          <Select
            searchable
            clearable
            required
            label="Send payment to:"
            placeholder="choose the lucky person"
            data={
              persons?.map((item) => ({
                value: item.personId,
                label: item.name,
              })) || []
            }
            {...form.getInputProps("personIdToDeposit")}
          />
          <Radio.Group
            required
            name="accountTo"
            label="Select account to send money"
            {...form.getInputProps("depositAccountServicer")}
          >
            <Radio required value="csi" label="CSI" />
            <Radio required value="mambu" label="Mambu" mt={2} />
          </Radio.Group>
          <Flex align="end" gap={5}>
            <TextInput
              required
              placeholder="Amount"
              label="Amount"
              icon="$"
              w={"50%"}
              {...form.getInputProps("amount")}
            />
            <Button
              variant="outline"
              color="#4fc7e7"
              type="submit"
              loading={isLoading}
            >
              Send
            </Button>
          </Flex>
        </Flex>
      </form>
      <Modal opened={opened} onClose={close} title="Transactions" centered>
        <Transactions transactions={transactions} />
      </Modal>
      <Modal
        opened={openedSignIn}
        onClose={closeSignIn}
        title="Identification"
        closeOnEscape={false}
        closeOnClickOutside={false}
        withCloseButton={false}
      >
        <SignIn handleSubmit={handleCloseSignIn} />
      </Modal>
    </>
  );
}

export default Home;
