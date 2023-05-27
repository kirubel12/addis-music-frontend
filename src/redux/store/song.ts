import createSagaMiddleware  from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import rootSaga from '../saga/songSaga'
import songReducer from '../slice/songSlice'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        songs:  songReducer
    },
    devTools: true,
    middleware: [sagaMiddleware]
    
}

)

sagaMiddleware.run(rootSaga)
export default store 

export type RootState = ReturnType<typeof store.getState>