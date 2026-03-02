import Article from "./models/article.model";

const resolvers = {
  Query: {
    articles: async () => {
      return await Article.find({ deleted: false });
    },
    article: async (_: any, args: { id: string }) => {
      return await Article.findOne({ _id: args.id, deleted: false });
    },
  },
  Mutation: {
    createArticle: async (_: any, args: any) => {
      const article = new Article(args);
      await article.save();
      return article;
    },
  },
};

export default resolvers;