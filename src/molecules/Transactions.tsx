import { StateTransactionsType } from "../hooks/useTransactions";
import { Table, Tabs } from "@mantine/core";
import { formatDate } from "../utils/formatDate";
import { dollarFormat } from "../utils/dollarFormat";
import { AccountDetails } from "../types/transactions";

interface ITransactions {
  transactions: StateTransactionsType;
}

function Transactions({ transactions }: ITransactions) {
  const ths = (
    <tr>
      <th>Type</th>
      <th>Date</th>
      <th>Amount</th>
      <th>Current Balance</th>
    </tr>
  );

  const isDeposit = (description: string) => description.includes("CREDIT");

  const sortByDate = (
    transactions: AccountDetails["transactions"]
  ): AccountDetails["transactions"] => {
    return transactions.sort((a, b) => {
      return (
        new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
      );
    });
  };

  const fixFirstCsiTransactionIndex = (
    transactions: AccountDetails["transactions"]
  ): AccountDetails["transactions"] => {
    if (!transactions.length) return [];
    const firstCsiTransactionIndex = transactions.findIndex(
      (item) => item.amount === 10000
    );
    const firstCsiTransaction = transactions[firstCsiTransactionIndex];
    transactions.splice(firstCsiTransactionIndex, 1);
    transactions.push(firstCsiTransaction);
    return transactions;
  };

  const csiTransactionsWithBalance = (
    transactions: AccountDetails["transactions"]
  ) => {
    let currentCsiTransactionBalance = 0;
    return transactions
      .reverse()
      .map((item) => {
        if (isDeposit(item.description))
          currentCsiTransactionBalance =
            currentCsiTransactionBalance + item.amount;
        else
          currentCsiTransactionBalance =
            currentCsiTransactionBalance - item.amount;
        return {
          ...item,
          currentBalance: currentCsiTransactionBalance,
        };
      })
      .reverse();
  };

  const transformCsiTransactions = (
    transactions: AccountDetails["transactions"]
  ): AccountDetails["transactions"] => {
    const sortedByDate = sortByDate(transactions);
    const fixedFirstCsiTransactionIndex =
      fixFirstCsiTransactionIndex(sortedByDate);
    const csiTransactionsWithBalances = csiTransactionsWithBalance(
      fixedFirstCsiTransactionIndex
    );
    return csiTransactionsWithBalances;
  };

  const csiRows = transformCsiTransactions(transactions.csiTransactions).map(
    (item) => {
      return (
        <tr key={item.transactionId}>
          <td>{isDeposit(item.description) ? "DEPOSIT" : "WITHDRAW"}</td>
          <td>{formatDate(item.creationDate)}</td>
          <td align="center">
            {isDeposit(item.description)
              ? dollarFormat(item.amount)
              : `-${dollarFormat(item.amount)}`}
          </td>
          <td align="center">{dollarFormat(item.currentBalance)}</td>
        </tr>
      );
    }
  );

  const mambuRows = transactions.mambuTransactions.map((item) => (
    <tr key={item.transactionId}>
      <td>{item.family}</td>
      <td>{formatDate(item.creationDate)}</td>
      <td align="center">{dollarFormat(item.amount)}</td>
      <td align="center">{dollarFormat(item.currentBalance)}</td>
    </tr>
  ));

  return (
    <Tabs defaultValue="csi">
      <Tabs.List
        style={{ position: "sticky", top: "54px", background: "white" }}
      >
        <Tabs.Tab value="csi" color="blue">
          CSI
        </Tabs.Tab>
        <Tabs.Tab value="mambu" color="teal">
          Mambu
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="csi" pt="xs">
        <Table striped highlightOnHover withBorder>
          <thead>{ths}</thead>
          <tbody>{csiRows}</tbody>
        </Table>
      </Tabs.Panel>

      <Tabs.Panel value="mambu" pt="xs">
        <Table striped highlightOnHover withBorder>
          <thead>{ths}</thead>
          <tbody>{mambuRows}</tbody>
        </Table>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Transactions;
