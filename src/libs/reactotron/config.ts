import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

const reactotron = Reactotron.configure({ host: "localhost", port: 9090 })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin({}) as any)
  .connect();

export default reactotron;
