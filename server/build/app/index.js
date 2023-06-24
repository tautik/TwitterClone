"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
// Import the necessary packages and modules
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
// Define an async function to initialize the server
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create an instance of the Express application
        const app = (0, express_1.default)();
        // Configure bodyParser to parse JSON requests
        app.use(body_parser_1.default.json());
        // Define the GraphQL server configuration
        const graphqlServer = new server_1.ApolloServer({
            typeDefs: `
        type Query {
            sayHello: String
        }
    `,
            resolvers: {
                Query: {
                    sayHello: () => `Hello from the GraphQL server`,
                },
            },
        });
        // Start the GraphQL server
        yield graphqlServer.start();
        // Add the Apollo Server middleware to the Express app
        app.use("/graphql", (0, express4_1.expressMiddleware)(graphqlServer));
        // Return the configured Express app
        return app;
    });
}
exports.initServer = initServer;
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
// Adding comments to your code helps document its purpose and functionality,
// making it easier for other developers to understand and maintain the code.
// You can use single-line comments (//) or multi-line comments (/* */) to add comments in your code.
