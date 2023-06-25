// Import the necessary packages and modules
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import express from "express";

import { Users } from "./user/index";

// Define an async function to initialize the server
export async function initServer() {
  // Create an instance of the Express application
  const app = express();

  // Configure bodyParser to parse JSON requests
  app.use(bodyParser.json());

  // Define the GraphQL server configuration
  const graphqlServer = new ApolloServer({
    typeDefs: `

        ${Users.types}

        type Query {
            ${Users.queries}
        }
    `,
    resolvers: {
      Query: {
        ...Users.resolvers.queries,
      },
    },
  });

  // Start the GraphQL server
  await graphqlServer.start();

  // Add the Apollo Server middleware to the Express app
  app.use("/graphql", expressMiddleware(graphqlServer));

  // Return the configured Express app
  return app;
}

/*
   Explanation:
   - We import the necessary packages and modules, including ApolloServer, expressMiddleware, bodyParser, and express.
   - We define an async function named "initServer" to initialize the server.
   - Inside the function, we create an instance of the Express application using "express()".
   - We configure bodyParser to parse JSON requests using "app.use(bodyParser.json())".
   - We define the GraphQL server configuration using ApolloServer.
     - We specify the type definitions using the "typeDefs" property, which defines a single Query type with a "sayHello" field of type String.
     - We specify the resolvers using the "resolvers" property, which provides the implementation for the "sayHello" field.
   - We start the GraphQL server using "await graphqlServer.start()".
   - We add the Apollo Server middleware to the Express app using "app.use("/graphql", expressMiddleware(graphqlServer))".
   - Finally, we return the configured Express app from the "initServer" function.
*/
