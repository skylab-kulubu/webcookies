import DataFetching from "./DataFetching";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="App">
      <DataFetching refresh={refresh}/>

      <button
        onClick={() => {
          setRefresh(!refresh);
        }}>
        yenile
      </button>
    </div>
  );
}

export default App;
