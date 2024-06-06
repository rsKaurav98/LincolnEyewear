import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import { CategoryProvider } from "./Context/CategoryContext";
import { SearchProvider } from "./Context/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
      <CategoryProvider>
      <AllRoutes />
      </CategoryProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
