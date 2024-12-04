import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { CartReducer } from "./CartPage/Cartreducer";
import { wishlistReducer } from "./wishlist/wishlistreducer";
import { orderReducer } from "./order/order.reducer";

// Combine reducers
const rootReducer = combineReducers({
  cartManager: CartReducer,
  wishlistManager: wishlistReducer,
  orderManager: orderReducer
});

// Persist config
const persistConfig = {
  key: 'root',
  storage
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Setup Redux DevTools and middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
