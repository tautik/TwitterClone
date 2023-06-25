"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = void 0;
exports.types = `#graphql

    types User {
        id: !ID
        firstName: String!
        lastName: String!
        email: String!
        profileImageURL: String!
    }

`;
