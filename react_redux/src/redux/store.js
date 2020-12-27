import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {comments} from './reducers'
// import reducers from './reducers'

export default createStore(
    // reducers,
    comments,
    composeWithDevTools(applyMiddleware(thunk))
)


