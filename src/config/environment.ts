export const environment = {
  mongoUrl:
    process.env.MONGO_URL ||
    'mongodb://localhost:27017/provinaiaDb' ||
    'mongodb+srv://adilson:adilson@cluster0.55krk.mongodb.net/provinaiaDb?retryWrites=true&w=majority',
};
