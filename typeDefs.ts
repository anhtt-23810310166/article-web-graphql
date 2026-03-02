const typeDefs = `
    type Query {
        articles: [Article]
    }

    type Article {
        id: ID!
        title: String!
        content: String!
        deleted: Boolean!
    }
`
export default typeDefs
