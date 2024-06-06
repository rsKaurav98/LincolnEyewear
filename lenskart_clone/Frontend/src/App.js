import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import { CategoryProvider } from "../src/Components/Navbar/CategoryContext";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
      <AllRoutes />
      </CategoryProvider>
    </div>
  );
}

export default App;
