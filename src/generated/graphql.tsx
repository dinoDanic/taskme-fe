import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Autogenerated input type of CreateProject */
export type CreateProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Autogenerated input type of CreateTask */
export type CreateTaskInput = {
  assigneeId?: InputMaybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentId: Scalars['ID'];
  priority: PriorityEnum;
  projectId: Scalars['ID'];
  status: TaskStatusEnum;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject?: Maybe<Project>;
  createTask?: Maybe<Task>;
  toggleTaskStatus?: Maybe<Task>;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationToggleTaskStatusArgs = {
  input: ToggleTaskStatusInput;
};

export enum PriorityEnum {
  High = 'high',
  Low = 'low',
  None = 'none',
  Urgent = 'urgent'
}

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  visibility?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  getAllUsers?: Maybe<Array<User>>;
  getAssignedTasks?: Maybe<Array<Task>>;
  getProjectById?: Maybe<Project>;
  getProjectTasks?: Maybe<Array<Task>>;
  getProjects?: Maybe<Array<Project>>;
  getTaskById: Task;
  getTaskByParentAndProject?: Maybe<Array<Task>>;
  /** Login a user */
  login?: Maybe<Scalars['String']>;
  logout: Scalars['Boolean'];
};


export type QueryGetProjectByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProjectTasksArgs = {
  id: Scalars['ID'];
};


export type QueryGetTaskByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetTaskByParentAndProjectArgs = {
  parentId: Scalars['ID'];
  projectId: Scalars['ID'];
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  assigneeId?: Maybe<Scalars['ID']>;
  assigneeName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  priority: PriorityEnum;
  projectId: Scalars['ID'];
  projectName: Scalars['String'];
  status: TaskStatusEnum;
};

export enum TaskStatusEnum {
  Completed = 'completed',
  Open = 'open'
}

/** Autogenerated input type of ToggleTaskStatus */
export type ToggleTaskStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  status: TaskStatusEnum;
  taskId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  role?: Maybe<Scalars['String']>;
};

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', getProjects?: Array<{ __typename?: 'Project', id: string, name: string, description?: string | null, visibility?: string | null }> | null };

export type GetProjectByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProjectByIdQuery = { __typename?: 'Query', getProjectById?: { __typename?: 'Project', description?: string | null, id: string, name: string, visibility?: string | null } | null };

export type GetAssignedTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAssignedTasksQuery = { __typename?: 'Query', getAssignedTasks?: Array<{ __typename?: 'Task', assigneeId?: string | null, id: string, name: string, projectId: string, priority: PriorityEnum, description?: string | null, status: TaskStatusEnum }> | null };


export const GetProjectsDocument = gql`
    query getProjects {
  getProjects {
    id
    name
    description
    visibility
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetProjectByIdDocument = gql`
    query getProjectById($id: ID!) {
  getProjectById(id: $id) {
    description
    id
    name
    visibility
  }
}
    `;

/**
 * __useGetProjectByIdQuery__
 *
 * To run a query within a React component, call `useGetProjectByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProjectByIdQuery, GetProjectByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectByIdQuery, GetProjectByIdQueryVariables>(GetProjectByIdDocument, options);
      }
export function useGetProjectByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectByIdQuery, GetProjectByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectByIdQuery, GetProjectByIdQueryVariables>(GetProjectByIdDocument, options);
        }
export type GetProjectByIdQueryHookResult = ReturnType<typeof useGetProjectByIdQuery>;
export type GetProjectByIdLazyQueryHookResult = ReturnType<typeof useGetProjectByIdLazyQuery>;
export type GetProjectByIdQueryResult = Apollo.QueryResult<GetProjectByIdQuery, GetProjectByIdQueryVariables>;
export const GetAssignedTasksDocument = gql`
    query getAssignedTasks {
  getAssignedTasks {
    assigneeId
    id
    name
    projectId
    priority
    description
    status
  }
}
    `;

/**
 * __useGetAssignedTasksQuery__
 *
 * To run a query within a React component, call `useGetAssignedTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssignedTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssignedTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAssignedTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetAssignedTasksQuery, GetAssignedTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAssignedTasksQuery, GetAssignedTasksQueryVariables>(GetAssignedTasksDocument, options);
      }
export function useGetAssignedTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAssignedTasksQuery, GetAssignedTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAssignedTasksQuery, GetAssignedTasksQueryVariables>(GetAssignedTasksDocument, options);
        }
export type GetAssignedTasksQueryHookResult = ReturnType<typeof useGetAssignedTasksQuery>;
export type GetAssignedTasksLazyQueryHookResult = ReturnType<typeof useGetAssignedTasksLazyQuery>;
export type GetAssignedTasksQueryResult = Apollo.QueryResult<GetAssignedTasksQuery, GetAssignedTasksQueryVariables>;