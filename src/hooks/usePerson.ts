import { useState } from "react";
import getPersonByName from "../api/getPersonByName";
import { Person } from "../types/person";

function usePerson() {
  const [person, setPerson] = useState<Person | void>();

  const fetchPerson = async (name: string) => {
    try {
      const result = await getPersonByName("mambu", name);
      if (result && result.length) {
        const personProfile = result.filter((item) => item.name === name);
        setPerson(personProfile[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { person, fetchPerson };
}

export default usePerson;
