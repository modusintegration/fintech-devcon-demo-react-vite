interface GenericIdentifier {
    number: string;
    schemeName: string;
    issuer: string;
}

interface RelatedParty {
    partyId: string;
    partyType: string;
    partyRelationType: string;
}

interface PostalAddress {
    postCode: string;
    townName: string;
    country: string;
    addressLine: string[];
}

interface PlaceAndDateOfBirth {
    birthDate: string;
}

interface Contact {
    mobileNumber: string;
    emailAddress: string;
}

interface StructuredName {
    firstName: string;
    middleName: string;
    lastName: string;
}

export interface Person {
    genericIdentifiers: GenericIdentifier[];
    name: string;
    shortName: string;
    relatedParties: RelatedParty[];
    postalAddress: PostalAddress;
    status: string;
    placeAndDateOfBirth: PlaceAndDateOfBirth;
    contact: Contact;
    structuredName: StructuredName;
    personId: string;
}
