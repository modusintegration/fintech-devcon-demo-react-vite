import { StateTransactionsType } from "../hooks/useTransactions";
import { Table, Tabs } from "@mantine/core";
import { formatDate } from "../utils/formatDate";
import { dollarFormat } from "../utils/dollarFormat";

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

  const csiRows = transactions.csiTransactions.map((item) => (
    <tr key={item.transactionId}>
      <td>{item.amount > 0 ? "DEPOSIT" : "WITHDRAW"}</td>
      <td>{formatDate(item.creationDate)}</td>
      <td align="center">{dollarFormat(item.amount)}</td>
      <td align="center">{dollarFormat(item.currentBalance)}</td>
    </tr>
  ));

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
