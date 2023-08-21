import { useState } from "react";
import getPersonByName from "../api/getPersonByName";
import { Person } from "../types/person";

type StatePerson = {
  csi: Person;
  mambu: Person;
};

function usePerson() {
  const [person, setPerson] = useState<StatePerson>({
    csi: { personId: "" } as Person,
    mambu: { personId: "" } as Person,
  });

  const fetchPerson = async (name: string) => {
    const mambuPromise = getPersonByName("mambu", name);
    const csiPromise = getPersonByName("csi", name);

    return Promise.all([mambuPromise, csiPromise]).then(([mambuResult, csiResult]) => {
      const profiles: StatePerson = {
        csi: { personId: "" } as Person,
        mambu: { personId: "" } as Person,
      };
      if (mambuResult && mambuResult.length) {
        const personMambuProfile = mambuResult.filter(
          (item) => item.name === name
        );
        profiles.mambu = personMambuProfile[0];
      }

      if (csiResult && csiResult.length) {
        //const personCsiProfile = csiResult.filter((item) => item.name === name);
        profiles.csi = csiResult[0];
      }

      setPerson({ ...profiles });
    });
  };

  return { person, fetchPerson };
}

export default usePerson;
