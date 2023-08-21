import { AccountDetails } from "../types/transactions";

export const person = {
  genericIdentifiers: [
    {
      number: "396884465",
      schemeName: "clientId",
      issuer: "Mambu",
    },
  ],
  name: "Michael Jeffrey Jordan",
  shortName: "Michael Jordan",
  relatedParties: [
    {
      partyId: "8a44af33860351cb018603be2671135b",
      partyType: "Person",
      partyRelationType: "Owner",
    },
  ],
  postalAddress: {
    postCode: "45090",
    townName: "Chicago",
    country: "US",
    addressLine: ["1 United Center", "City "],
  },
  status: "ACTIVE",
  placeAndDateOfBirth: {
    birthDate: "1963-04-17",
  },
  contact: {
    mobileNumber: "+77-415-731-1111",
    emailAddress: "mj@mj.com",
  },
  structuredName: {
    firstName: "Michael",
    middleName: "Jeffrey",
    lastName: "Jordan",
  },
  personId: "8a44af33860351cb018603be2671135b",
};

export const personA = {
  genericIdentifiers: [
    {
      number: "396884465",
      schemeName: "clientId",
      issuer: "Mambu",
    },
  ],
  name: "Holly Flax",
  shortName: "Holly Flax",
  relatedParties: [
    {
      partyId: "8a44af33860351cb018603be2671135b",
      partyType: "Person",
      partyRelationType: "Owner",
    },
  ],
  postalAddress: {
    postCode: "45090",
    townName: "Chicago",
    country: "US",
    addressLine: ["1 United Center", "City "],
  },
  status: "ACTIVE",
  placeAndDateOfBirth: {
    birthDate: "1963-04-17",
  },
  contact: {
    mobileNumber: "+77-415-731-1111",
    emailAddress: "mj@mj.com",
  },
  structuredName: {
    firstName: "Michael",
    middleName: "Jeffrey",
    lastName: "Jordan",
  },
  personId: "8a44a29e850791680185081ace040f28",
};

export const personB = {
  genericIdentifiers: [
    {
      number: "396884465",
      schemeName: "clientId",
      issuer: "Mambu",
    },
  ],
  name: "Michael Scott",
  shortName: "Michael Scott",
  relatedParties: [
    {
      partyId: "8a44af33860351cb018603be2671135b",
      partyType: "Person",
      partyRelationType: "Owner",
    },
  ],
  postalAddress: {
    postCode: "45090",
    townName: "Chicago",
    country: "US",
    addressLine: ["1 United Center", "City "],
  },
  status: "ACTIVE",
  placeAndDateOfBirth: {
    birthDate: "1963-04-17",
  },
  contact: {
    mobileNumber: "+77-415-731-1111",
    emailAddress: "mj@mj.com",
  },
  structuredName: {
    firstName: "Michael",
    middleName: "Jeffrey",
    lastName: "Jordan",
  },
  personId: "8a44a29e850791680185081ae1c40f3d",
};

export const transactions: AccountDetails = {
  accountId: "8a44af33860351cb018603be2671135f",
  accountNumber: "ZFRH840",
  accountType: "REGULAR_SAVINGS",
  currency: "USD",
  currentBalance: "6.22",
  availableBalance: "6.22",
  ownershipType: "Owner",
  transactions: [
    {
      transactionId: "8a44b37889bca9760189d1dae956185d",
      amount: -3,
      creditDebitIndicator: "Debit",
      family: "WITHDRAWAL",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-08-08T04:37:21-07:00",
      bookingDate: "2023-08-08T04:37:21-07:00",
      charges: 0,
      interest: 0,
      currentBalance: 6.22,
    },
    {
      transactionId: "8a44dffe89bc44200189d1db28256b82",
      amount: 1,
      creditDebitIndicator: "Credit",
      family: "DEPOSIT",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-08-08T04:37:08-07:00",
      bookingDate: "2023-08-08T04:37:08-07:00",
      charges: 0,
      interest: 0,
      currentBalance: 9.22,
    },
    {
      transactionId: "8a44dffe89bc44200189bd26f5c91b34",
      amount: -3,
      creditDebitIndicator: "Debit",
      family: "WITHDRAWAL",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-08-04T14:45:05-07:00",
      bookingDate: "2023-08-04T14:45:05-07:00",
      charges: 0,
      interest: 0,
      currentBalance: 8.22,
    },
    {
      transactionId: "8a44b37889bca9760189c27ccac63384",
      amount: 1,
      creditDebitIndicator: "Credit",
      family: "DEPOSIT",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-08-04T14:44:51-07:00",
      bookingDate: "2023-08-04T14:44:51-07:00",
      charges: 0,
      interest: 0,
      currentBalance: 11.22,
    },
    {
      transactionId: "8a44a3dc89bc448c0189bd26f6c31c56",
      amount: -3,
      creditDebitIndicator: "Debit",
      family: "WITHDRAWAL",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-08-04T14:38:38-07:00",
      bookingDate: "2023-08-04T14:38:38-07:00",
      charges: 0,
      interest: 0,
      currentBalance: 10.22,
    },
    {
      transactionId: "8a44b37889bca9760189c27ccac63380",
      amount: 1,
      creditDebitIndicator: "Credit",
      family: "DEPOSIT",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-08-04T14:38:26-07:00",
      bookingDate: "2023-08-04T14:38:26-07:00",
      charges: 0,
      interest: 0,
      currentBalance: 13.22,
    },
    {
      transactionId: "8a44af33860351cb018603bf1b041376",
      amount: -3,
      creditDebitIndicator: "Debit",
      family: "WITHDRAWAL",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-01-30T09:35:06-08:00",
      bookingDate: "2023-01-30T09:35:06-08:00",
      charges: 0,
      interest: 0,
      currentBalance: 12.22,
    },
    {
      transactionId: "8a44af33860351cb018603becc3b136d",
      amount: 5,
      creditDebitIndicator: "Credit",
      family: "DEPOSIT",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-01-30T09:35:01-08:00",
      bookingDate: "2023-01-30T09:35:01-08:00",
      charges: 0,
      interest: 0,
      currentBalance: 15.22,
    },
    {
      transactionId: "8a44af33860351cb018603bec7261369",
      amount: 10.22,
      creditDebitIndicator: "Credit",
      family: "DEPOSIT",
      status: "Booked",
      reversalIndicator: false,
      creationDate: "2023-01-30T09:34:41-08:00",
      bookingDate: "2023-01-30T09:34:41-08:00",
      charges: 0,
      interest: 0,
      currentBalance: 10.22,
    },
  ],
};

export const account = {
  accountNumber: "ZFRH840",
  accountType: "REGULAR_SAVINGS",
  accountOwnershipType: "Owner",
  productId: "8a44d6d97c81ddbe017ca39738446161",
  name: "mj1DepositSavingsAccount1",
  currency: "USD",
  parties: [
    {
      partyId: "8a44af33860351cb018603be2671135b",
      partyType: "Person",
      partyAccountRole: "Owner",
    },
  ],
  status: "ACTIVE",
  statusDateAndTime: "2023-08-11T02:48:44-07:00",
  openDate: "2023-01-30",
  balances: [
    {
      balanceName: "Available",
      amount: 6.22,
      currency: "USD",
      calculationDate: "2023-08-11T02:48:44-07:00",
    },
    {
      balanceName: "Blocked",
      amount: 0,
      currency: "USD",
      calculationDate: "2023-08-11T02:48:44-07:00",
    },
    {
      balanceName: "Pending",
      amount: 0,
      currency: "USD",
      calculationDate: "2023-08-11T02:48:44-07:00",
    },
    {
      balanceName: "Current",
      amount: 6.22,
      currency: "USD",
      calculationDate: "2023-08-11T02:48:44-07:00",
    },
  ],
  accountId: "8a44af33860351cb018603be2671135f",
};

export const balances = {
  accountId: "8a44af33860351cb018603be2671135f",
  accountNumber: "ZFRH840",
  balances: [
    {
      balanceName: "Available",
      amount: 6.22,
      currency: "USD",
      calculationDate: "2023-08-11T02:48:44-07:00",
    },
    {
      balanceName: "Blocked",
      amount: 0,
      currency: "USD",
      calculationDate: "2023-08-11T02:48:44-07:00",
    },
    {
      balanceName: "Pending",
      amount: 0,
      currency: "USD",
      calculationDate: "2023-08-11T02:48:44-07:00",
    },
    {
      balanceName: "Current",
      amount: 6.22,
      currency: "USD",
      calculationDate: "2023-08-11T02:48:44-07:00",
    },
  ],
};
