import { Flex, FlexProps, Text, Loader } from "@mantine/core";
import { dollarFormat } from "../../utils/dollarFormat";

interface IBalanceCard extends FlexProps {
  account: string;
  balance: number;
  color: string;
}

function BalanceCard({ account, balance, color, ...rest }: IBalanceCard) {
  return (
    <Flex
      w={"100%"}
      h={100}
      p={5}
      style={{ borderRadius: 10 }}
      bg={color}
      direction="column"
      display="flex"
      {...rest}
    >
      <Flex align="start" justify="space-between">
        <Text size={15}>Total Balance:</Text>
        <Text size={20}>{account}</Text>
      </Flex>
      <Text align="end" size={40}>
        {balance === -1 ? <Loader /> : dollarFormat(balance)}
      </Text>
    </Flex>
  );
}

export default BalanceCard;
