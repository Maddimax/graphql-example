# GraphQL example

Very simple GraphQL example

# Installation

* Checkout and run `npm install`

# Running

* `npm run start`
* Open [http://localhost:4000/graphql](http://localhost:4000/graphql) in your browser]

# Example queries

```graphql
query {
  hello
  complex {
    someString
    someBoolean
  }
}
```

```graphql
mutation {
  setHelloString(str: "Hello You")
}
```