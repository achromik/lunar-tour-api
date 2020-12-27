const { gql } = require('apollo-server-lambda');

const schema = gql`
  type ListingType {
    name: String
  }

  type ListingActivities {
    name: String
  }

  type Guide {
    Name: String
    Bio: String
    Avatar: String
  }

  type Listing {
    listingId: String
    coverPhoto: String
    listingName: String
    listingDescription: String
    listingType: [ListingType]
    listingLocation: String
    listingActivities: [ListingActivities]
    specialType: String
    specialAmount: Int
    rating: Int
    guide: Guide
    price: String
    numberOfDays: Int
  }

  type ErrorDetails {
    message: String
    code: String
  }

  type Error {
    error: ErrorDetails
  }

  type Listings {
    results: [Listing]
  }

  union ListingsOrError = Listings | Error

  type Query {
    hello: String!
    getAllListings: ListingsOrError
  }
`;

export { schema };
