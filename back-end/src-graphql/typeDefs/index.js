import { mergeTypes } from 'merge-graphql-schemas'
import message from './message.graphql'

const types = [
  message,
]
export default mergeTypes(types, { all: true })
