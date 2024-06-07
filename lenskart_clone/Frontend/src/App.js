import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import { CategoryProvider } from "./Context/CategoryContext";
import { SearchProvider } from "./Context/SearchContext";
import { ShippingProvider } from "./Context/shippingContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
      <CategoryProvider>
        <ShippingProvider>
        <AllRoutes />
        </ShippingProvider>
      </CategoryProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
