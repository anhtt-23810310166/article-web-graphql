const typeDefs = `#graphql
    type Query {
        articles: [Article]
        article(id: ID!): Article
    }

    type Mutation {
        createArticle(title: String, description: String, avatar: String): Article
    }

    type Article {
        id: ID!
        title: String
        description: String
        avatar: String
        deleted: Boolean
    }
`;
export default typeDefs;
