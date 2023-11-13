import { configureStore,combineReducers} from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import LeStylistReducer from './LeStylistSlice';
import loaderSlice from "./loaderSlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, LeStylistReducer);

export const store = configureStore({
  reducer: { orebiReducer: persistedReducer} ,rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const rootReducer = combineReducers({
  loader: loaderSlice,
  user: userSlice,
  product: productSlice,
  cart: cartSlice,
});

// const store = configureStore({
//   reducer: ,
// });

export let persistor = persistStore(store);
