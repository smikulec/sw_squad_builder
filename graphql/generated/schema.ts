import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type AuthenticatedUser = {
  __typename?: 'AuthenticatedUser';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Film = {
  __typename?: 'Film';
  characters?: Maybe<Array<Maybe<Person>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  episodeID?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  openingCrawl?: Maybe<Scalars['String']['output']>;
  planets?: Maybe<Array<Maybe<Planet>>>;
  producers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  releaseDate?: Maybe<Scalars['String']['output']>;
  species?: Maybe<Array<Maybe<Species>>>;
  starships?: Maybe<Array<Maybe<Starship>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createSquad?: Maybe<Squad>;
  login?: Maybe<AuthenticatedUser>;
  signup?: Maybe<AuthenticatedUser>;
};

export type MutationCreateSquadArgs = {
  characters: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Person = {
  __typename?: 'Person';
  birthYear?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eyeColor?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  gender?: Maybe<Scalars['String']['output']>;
  hairColor?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  homeworld?: Maybe<Planet>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  mass?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  skinColor?: Maybe<Scalars['String']['output']>;
  species?: Maybe<Species>;
  starships?: Maybe<Array<Maybe<Starship>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

export type Planet = {
  __typename?: 'Planet';
  climate?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  diameter?: Maybe<Scalars['Int']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  gravity?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  orbitalPeriod?: Maybe<Scalars['Int']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
  residents?: Maybe<Array<Maybe<Person>>>;
  rotationPeriod?: Maybe<Scalars['Int']['output']>;
  surfaceWater?: Maybe<Scalars['Float']['output']>;
  terrain?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allFilms?: Maybe<Array<Maybe<Film>>>;
  allPeople?: Maybe<Array<Maybe<Person>>>;
  allPlanets?: Maybe<Array<Maybe<Planet>>>;
  allSpecies?: Maybe<Array<Maybe<Species>>>;
  allStarships?: Maybe<Array<Maybe<Starship>>>;
  allVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  film?: Maybe<Film>;
  me?: Maybe<User>;
  person?: Maybe<Person>;
  planet?: Maybe<Planet>;
  species?: Maybe<Species>;
  squad?: Maybe<Squad>;
  squads: Array<Maybe<Squad>>;
  starship?: Maybe<Starship>;
  vehicle?: Maybe<Vehicle>;
};

export type QueryFilmArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPersonArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPlanetArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySpeciesArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySquadArgs = {
  id: Scalars['ID']['input'];
};

export type QueryStarshipArgs = {
  id: Scalars['ID']['input'];
};

export type QueryVehicleArgs = {
  id: Scalars['ID']['input'];
};

export type Species = {
  __typename?: 'Species';
  averageHeight?: Maybe<Scalars['Float']['output']>;
  averageLifespan?: Maybe<Scalars['Int']['output']>;
  classification?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  eyeColors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  films?: Maybe<Array<Maybe<Film>>>;
  hairColors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  homeworld?: Maybe<Planet>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  people?: Maybe<Array<Maybe<Person>>>;
  skinColors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Squad = {
  __typename?: 'Squad';
  characters?: Maybe<Array<Maybe<Person>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Starship = {
  __typename?: 'Starship';
  cargoCapacity?: Maybe<Scalars['Float']['output']>;
  consumables?: Maybe<Scalars['String']['output']>;
  costInCredits?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  crew?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  hyperdriveRating?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxAtmospheringSpeed?: Maybe<Scalars['Int']['output']>;
  mglt?: Maybe<Scalars['Int']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passengers?: Maybe<Scalars['String']['output']>;
  pilots?: Maybe<Array<Maybe<Person>>>;
  starshipClass?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAtAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  cargoCapacity?: Maybe<Scalars['Int']['output']>;
  consumables?: Maybe<Scalars['String']['output']>;
  costInCredits?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  crew?: Maybe<Scalars['String']['output']>;
  films?: Maybe<Array<Maybe<Film>>>;
  id: Scalars['ID']['output'];
  length?: Maybe<Scalars['Float']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  maxAtmospheringSpeed?: Maybe<Scalars['Int']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passengers?: Maybe<Scalars['String']['output']>;
  pilots?: Maybe<Array<Maybe<Person>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vehicleClass?: Maybe<Scalars['String']['output']>;
};

export type AllPeopleQueryVariables = Exact<{ [key: string]: never }>;

export type AllPeopleQuery = {
  __typename?: 'Query';
  allPeople?: Array<{
    __typename?: 'Person';
    id: string;
    name?: string | null;
    image?: string | null;
    species?: {
      __typename?: 'Species';
      id: string;
      name?: string | null;
    } | null;
  } | null> | null;
};

export type GetPersonByIdQueryVariables = Exact<{
  personId: Scalars['ID']['input'];
}>;

export type GetPersonByIdQuery = {
  __typename?: 'Query';
  person?: {
    __typename?: 'Person';
    id: string;
    name?: string | null;
    birthYear?: string | null;
    eyeColor?: string | null;
    gender?: string | null;
    hairColor?: string | null;
    height?: number | null;
    mass?: number | null;
    skinColor?: string | null;
    image?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    homeworld?: {
      __typename?: 'Planet';
      name?: string | null;
      population?: number | null;
    } | null;
    films?: Array<{
      __typename?: 'Film';
      title?: string | null;
      director?: string | null;
    } | null> | null;
    species?: { __typename?: 'Species'; name?: string | null } | null;
    starships?: Array<{
      __typename?: 'Starship';
      name?: string | null;
      model?: string | null;
    } | null> | null;
    vehicles?: Array<{
      __typename?: 'Vehicle';
      name?: string | null;
      model?: string | null;
    } | null> | null;
  } | null;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
  __typename?: 'Query';
  me?: { __typename?: 'User'; id: string; email?: string | null } | null;
};

export const AllPeopleDocument = gql`
  query AllPeople {
    allPeople {
      id
      name
      image
      species {
        id
        name
      }
    }
  }
`;

/**
 * __useAllPeopleQuery__
 *
 * To run a query within a React component, call `useAllPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPeopleQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllPeopleQuery,
    AllPeopleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPeopleQuery, AllPeopleQueryVariables>(
    AllPeopleDocument,
    options,
  );
}
export function useAllPeopleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllPeopleQuery,
    AllPeopleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllPeopleQuery, AllPeopleQueryVariables>(
    AllPeopleDocument,
    options,
  );
}
export function useAllPeopleSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AllPeopleQuery,
    AllPeopleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AllPeopleQuery, AllPeopleQueryVariables>(
    AllPeopleDocument,
    options,
  );
}
export type AllPeopleQueryHookResult = ReturnType<typeof useAllPeopleQuery>;
export type AllPeopleLazyQueryHookResult = ReturnType<
  typeof useAllPeopleLazyQuery
>;
export type AllPeopleSuspenseQueryHookResult = ReturnType<
  typeof useAllPeopleSuspenseQuery
>;
export type AllPeopleQueryResult = Apollo.QueryResult<
  AllPeopleQuery,
  AllPeopleQueryVariables
>;
export const GetPersonByIdDocument = gql`
  query GetPersonById($personId: ID!) {
    person(id: $personId) {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      homeworld {
        name
        population
      }
      films {
        title
        director
      }
      species {
        name
      }
      image
      starships {
        name
        model
      }
      vehicles {
        name
        model
      }
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetPersonByIdQuery__
 *
 * To run a query within a React component, call `useGetPersonByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonByIdQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useGetPersonByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPersonByIdQuery,
    GetPersonByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPersonByIdQuery, GetPersonByIdQueryVariables>(
    GetPersonByIdDocument,
    options,
  );
}
export function useGetPersonByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPersonByIdQuery,
    GetPersonByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPersonByIdQuery, GetPersonByIdQueryVariables>(
    GetPersonByIdDocument,
    options,
  );
}
export function useGetPersonByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPersonByIdQuery,
    GetPersonByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetPersonByIdQuery,
    GetPersonByIdQueryVariables
  >(GetPersonByIdDocument, options);
}
export type GetPersonByIdQueryHookResult = ReturnType<
  typeof useGetPersonByIdQuery
>;
export type GetPersonByIdLazyQueryHookResult = ReturnType<
  typeof useGetPersonByIdLazyQuery
>;
export type GetPersonByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetPersonByIdSuspenseQuery
>;
export type GetPersonByIdQueryResult = Apollo.QueryResult<
  GetPersonByIdQuery,
  GetPersonByIdQueryVariables
>;
export const UserDocument = gql`
  query User {
    me {
      id
      email
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  );
}
export function useUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<
  typeof useUserSuspenseQuery
>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
