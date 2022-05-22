const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const { authMiddleware } = require('./utils/auth');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// rename express function
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

// instantiate apollo server
const startApolloServer = async (typeDefs, resolvers) => {

  await server.start();
  // integrate with express which creates /graphql endpoint
  server.applyMiddleware({ app });

  // call on db and open port
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`GraphQL sandbox 🏖 @ http://localhost:${PORT}${server.graphqlPath}`);
  })
})


}
// Rrrrrrrrrrev up those fryers! 🐟
startApolloServer(typeDefs, resolvers);

