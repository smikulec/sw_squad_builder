import { makeApolloClient } from '@/lib/apollo';
import { gql } from '@apollo/client';

export async function signupHandler({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const client = makeApolloClient();

  try {
    const response = await client.mutate({
      mutation: gql`
        mutation Signup($email: String!, $password: String!) {
          signup(email: $email, password: $password) {
            user {
              id
              email
            }
            token
          }
        }
      `,
      variables: {
        email,
        password,
      },
    });

    return response.data.signup;
  } catch (error: any) {
    console.error('GraphQL signup request error:', error.message);
    throw new Error('Error in signup request');
  }
}

export async function loginHandler({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const client = makeApolloClient();

  try {
    const response = await client.mutate({
      mutation: gql`
        mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            user {
              id
              email
            }
            token
          }
        }
      `,
      variables: {
        email,
        password,
      },
    });
    return response.data.login;
  } catch (error: any) {
    console.error('GraphQL login request error:', error.message);
    throw new Error('Error in login request');
  }
}
