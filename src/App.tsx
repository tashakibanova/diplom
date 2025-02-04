import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { AppRoutes } from "./routes/AppRoutes";
import './App.css';

function App() {
  return (
    <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </HashRouter>
  );
}

export default App;
