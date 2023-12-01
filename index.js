var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type ComplexData {
    someString: String
    someNumber: Int
    someBoolean: Boolean
  }

  type Query {
    hello: String
    complex: ComplexData
  }
  type Mutation {
    setHelloString(str: String): String
  }
`)

var helloString = "Hello world!"

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return helloString
  },
  complex: () => {
    return {
      someString: "some string",
      someNumber: 123,
      someBoolean: true,
    }
  },
  setHelloString: ({ str }) => {
    helloString = str
    return helloString
  },
}

var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")
