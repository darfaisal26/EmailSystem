import { gql } from "@apollo/client";
export const Register = gql`
 mutation RegisterUser( 
  $confirmPassword: String!
  $email: String! $firstName: String!
   $lastName: String! $password: String! )
    {
      register
    (confirmPassword: $confirmPassword
    email: $email 
    firstName: $firstName
     lastName: $lastName
      password: $password) 
      {account {id password
       firstName
       lastName
       email  
       username}
        message
         __typename }
         }
`;