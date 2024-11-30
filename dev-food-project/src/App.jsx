import "./App.css";
import Destination from "./components/Destination";
import Header from "./components/Header";
import Home from "./pages/Home";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <Header />
      <Home />
      <Destination />
    </AppProvider>
  );
}

export default App;
