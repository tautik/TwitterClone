const queries = {
  verifyGoogleToken: (parent: any, { token }: { token: String }) => {
    return token;
  },
};

export const resolvers = { queries };

// (parent: any, { token }: { token: String })
