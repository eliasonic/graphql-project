export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Query {
        games: [Game]
        authors: [Author]
        reviews: [Review] 
        game(id: ID!): Game
        author(id: ID!): Author
        review(id: ID!): Review
    }

    type Mutation {
        addGame(game: AddGameInput!): Game
        updateGame(game: UpdateGameInput!, id: ID!): Game
        deleteGame(id: ID!): [Game]
    }

    input AddGameInput {
        title: String!
        platform: [String!]!
    } 

    input UpdateGameInput {
        title: String
        platform: [String!]
    } 
` 