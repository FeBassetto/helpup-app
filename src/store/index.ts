import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import rootReducer from "./reducer";
import reactotron from "@libs/reactotron/config";

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: reactotron.createSagaMonitor?.(),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  // @ts-ignore
  enhancers: (defaultEnhancers) => {
    const enhancersArray = defaultEnhancers();
    const reactotronEnhancer = reactotron.createEnhancer
      ? reactotron.createEnhancer()
      : undefined;
    return reactotronEnhancer
      ? [reactotronEnhancer, ...enhancersArray]
      : enhancersArray;
  },
});

sagaMiddleware.run(rootSaga);
