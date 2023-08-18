import { Button, Flex, TextInput } from "@mantine/core";
import { useRef } from "react";

function SignIn({ handleSubmit }: { handleSubmit: (value: string) => void }) {
  const inputName = useRef<HTMLInputElement>(null);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userName = inputName.current?.value || "";
    localStorage.setItem("userName", userName);
    handleSubmit(userName);
  };

  return (
    <form onSubmit={submit}>
      <Flex
        direction={"column"}
        align={"flex-end"}
        justify={"center"}
        gap="8px"
      >
        <TextInput
          w="100%"
          required
          ref={inputName}
          placeholder="Full name on your card, please"
          label="First, tell me your name"
          withAsterisk
        />
        <Button type="submit">Start</Button>
      </Flex>
    </form>
  );
}

export default SignIn;
