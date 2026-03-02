import Article from "./models/article.model";

 const resolvers = {
    Query: {
      articles: async () => {
        return await Article.find({ deleted: false });
      },
    },
  };

  export default resolvers