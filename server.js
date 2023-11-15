const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./controllers/SemestersController  ");
const { connectDb } = require("./config/database.js");


const app = express();
connectDb();

const publicDir = path.join(__dirname, "front", "html");

app.use(express.static(path.join(__dirname, "front")));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});


async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/api" });

  app.use((req, res, next) => {
    res.status(404).send("not found");
  });

  app.listen(process.env.PORT || 3000, () =>
    console.log("Server on port", process.env.PORT || 3000)
  );
}

start();