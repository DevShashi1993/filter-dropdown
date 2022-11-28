import FilterComponent from "./components/FilterComponent";
import filterData from "./filterData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FilterComponent filterData={filterData} />
    </div>
  );
}

export default App;
