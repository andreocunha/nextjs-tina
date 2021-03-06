//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export function gql(strings: TemplateStringsArray, ...args: string[]): string {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (args[i] || '')
  })
  return str
}
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  home: Home;
  homeConnection: HomeConnection;
  rooms: Rooms;
  roomsConnection: RoomsConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryHomeArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryHomeConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<HomeFilter>;
};


export type QueryRoomsArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryRoomsConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoomsFilter>;
};

export type DocumentFilter = {
  home?: InputMaybe<HomeFilter>;
  rooms?: InputMaybe<RoomsFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DocumentFilter>;
};

export type DocumentNode = Home | Rooms;

export type Home = Node & Document & {
  __typename?: 'Home';
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeFilter = {
  title?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
};

export type HomeConnectionEdges = {
  __typename?: 'HomeConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Home>;
};

export type HomeConnection = Connection & {
  __typename?: 'HomeConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<HomeConnectionEdges>>>;
};

export type Rooms = Node & Document & {
  __typename?: 'Rooms';
  nome_quarto?: Maybe<Scalars['String']>;
  descricao_quarto?: Maybe<Scalars['String']>;
  imagem_quarto?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type RoomsFilter = {
  nome_quarto?: InputMaybe<StringFilter>;
  descricao_quarto?: InputMaybe<StringFilter>;
  imagem_quarto?: InputMaybe<ImageFilter>;
};

export type RoomsConnectionEdges = {
  __typename?: 'RoomsConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Rooms>;
};

export type RoomsConnection = Connection & {
  __typename?: 'RoomsConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<RoomsConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateHome: Home;
  createHome: Home;
  updateRooms: Rooms;
  createRooms: Rooms;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateHomeArgs = {
  relativePath: Scalars['String'];
  params: HomeMutation;
};


export type MutationCreateHomeArgs = {
  relativePath: Scalars['String'];
  params: HomeMutation;
};


export type MutationUpdateRoomsArgs = {
  relativePath: Scalars['String'];
  params: RoomsMutation;
};


export type MutationCreateRoomsArgs = {
  relativePath: Scalars['String'];
  params: RoomsMutation;
};

export type DocumentMutation = {
  home?: InputMaybe<HomeMutation>;
  rooms?: InputMaybe<RoomsMutation>;
};

export type HomeMutation = {
  title?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type RoomsMutation = {
  nome_quarto?: InputMaybe<Scalars['String']>;
  descricao_quarto?: InputMaybe<Scalars['String']>;
  imagem_quarto?: InputMaybe<Scalars['String']>;
};

export type HomePartsFragment = { __typename?: 'Home', title?: string | null, body?: string | null, image?: string | null };

export type RoomsPartsFragment = { __typename?: 'Rooms', nome_quarto?: string | null, descricao_quarto?: string | null, imagem_quarto?: string | null };

export type HomeQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type HomeQuery = { __typename?: 'Query', home: { __typename?: 'Home', id: string, title?: string | null, body?: string | null, image?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type HomeConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<HomeFilter>;
}>;


export type HomeConnectionQuery = { __typename?: 'Query', homeConnection: { __typename?: 'HomeConnection', totalCount: number, edges?: Array<{ __typename?: 'HomeConnectionEdges', node?: { __typename?: 'Home', id: string, title?: string | null, body?: string | null, image?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type RoomsQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type RoomsQuery = { __typename?: 'Query', rooms: { __typename?: 'Rooms', id: string, nome_quarto?: string | null, descricao_quarto?: string | null, imagem_quarto?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type RoomsConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<RoomsFilter>;
}>;


export type RoomsConnectionQuery = { __typename?: 'Query', roomsConnection: { __typename?: 'RoomsConnection', totalCount: number, edges?: Array<{ __typename?: 'RoomsConnectionEdges', node?: { __typename?: 'Rooms', id: string, nome_quarto?: string | null, descricao_quarto?: string | null, imagem_quarto?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  title
  body
  image
}
    `;
export const RoomsPartsFragmentDoc = gql`
    fragment RoomsParts on Rooms {
  nome_quarto
  descricao_quarto
  imagem_quarto
}
    `;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export const RoomsDocument = gql`
    query rooms($relativePath: String!) {
  rooms(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RoomsParts
  }
}
    ${RoomsPartsFragmentDoc}`;
export const RoomsConnectionDocument = gql`
    query roomsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RoomsFilter) {
  roomsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RoomsParts
      }
    }
  }
}
    ${RoomsPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      home(variables: HomeQueryVariables, options?: C): Promise<{data: HomeQuery, variables: HomeQueryVariables, query: string}> {
        return requester<{data: HomeQuery, variables: HomeQueryVariables, query: string}, HomeQueryVariables>(HomeDocument, variables, options);
      },
    homeConnection(variables?: HomeConnectionQueryVariables, options?: C): Promise<{data: HomeConnectionQuery, variables: HomeConnectionQueryVariables, query: string}> {
        return requester<{data: HomeConnectionQuery, variables: HomeConnectionQueryVariables, query: string}, HomeConnectionQueryVariables>(HomeConnectionDocument, variables, options);
      },
    rooms(variables: RoomsQueryVariables, options?: C): Promise<{data: RoomsQuery, variables: RoomsQueryVariables, query: string}> {
        return requester<{data: RoomsQuery, variables: RoomsQueryVariables, query: string}, RoomsQueryVariables>(RoomsDocument, variables, options);
      },
    roomsConnection(variables?: RoomsConnectionQueryVariables, options?: C): Promise<{data: RoomsConnectionQuery, variables: RoomsConnectionQueryVariables, query: string}> {
        return requester<{data: RoomsConnectionQuery, variables: RoomsConnectionQueryVariables, query: string}, RoomsConnectionQueryVariables>(RoomsConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    let data = {};
    try {
      data = await client.request({
        query: doc,
        variables: vars,
      });
    } catch (e) {
      // swallow errors related to document creation
      console.warn("Warning: There was an error when fetching data");
      console.warn(e);
    }

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql" }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

