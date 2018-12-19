import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import Vue from 'vue'


const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3001/graphql',
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only'
      }
    }
  })

  export default ({app}, inject) => {
    const apolloProvider = new VueApollo({
        defaultClient: apolloClient,
    })

    app.provide = apolloProvider.provide()


  }