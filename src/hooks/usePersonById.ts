import { useState } from "react";
import { Person } from "../types/person";
import getPersonById from "../api/getPersonById";

function usePersonById() {
  const [person, setPerson] = useState<Person | void>();

  const fetchPerson = async (id: string) => {
    try {
      const result = await getPersonById("mambu", id);
      setPerson(result);
    } catch (error) {
      console.log(error);
    }
  };

  return { person, fetchPerson };
}

export default usePersonById;
