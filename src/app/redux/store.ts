import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}


// let rootReducer = combineReducers({
//   cart: cartReducer,
//   // if u have another slice
//   fav: favReducer, 
// })
// const persistedReducer = persistReducer(persistConfig, rootReducer) 

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {cart:persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
})

export let persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch