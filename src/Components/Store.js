import { createStore } from 'redux';
import Redux from "./Reducer.js"

var score = createStore(Redux, { count: 0 })
export default score
