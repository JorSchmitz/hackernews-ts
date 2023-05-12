import { ApolloServer } from 'apollo-server'
import { context } from './context'
import { schema } from './schema'

export const server = new ApolloServer({
  schema,
  context,
})

const PORT = 3000

server.listen(PORT).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
