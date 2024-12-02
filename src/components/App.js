import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import '../styles/App.css'
import Loading from "./Loading";
import ToursData from "./ToursData";
import "regenerator-runtime/runtime";
const App = () => {

  const [loading, setLoading] = useState(true);
  const [fetchedData, setfetchedData] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setTimeout(() => {
        setfetchedData(ToursData);
        setLoading(false);
      },2000);
    };
    fetchTours();
  }, []);

  if(loading){
    return <Loading />;
  }

    return(
      <>
        <h1 id="main-heading">Tour Packages</h1>
        <main id="main">
          {fetchedData.length ? 
          (<Tours fetchedData={fetchedData} setfetchedData={setfetchedData}/>) 
          : 
          (<div>
            <h2>No Tours Left</h2>
            <button onClick={() => setfetchedData(ToursData)}>Refresh</button>
          </div>
          )}  
        </main>
      </>
    );
};
export default App;
