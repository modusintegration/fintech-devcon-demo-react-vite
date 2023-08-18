import { useState } from "react";
import { Person } from "../types/person";
import getAllPersons from "../api/getAllPersons";

function useAllPersons() {
  const [persons, setPersons] = useState<Person[] | void>([]);

  const fetchAllPersons = async () => {
    try {
      const result = await getAllPersons();
      setPersons(result);
    } catch (error) {
      console.log(error);
    }
  };

  return { persons, fetchAllPersons };
}

export default useAllPersons;
