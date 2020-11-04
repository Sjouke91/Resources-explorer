import "./App.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import {
  selectDevelopers,
  selectStatistics,
  developersWithThisFavorite,
} from "./store/developers/selectors";
import { selectResources } from "./store/resources/selectors";
import {
  selectDevelopersFavoritesResources,
  selectLoggedinUser,
} from "./store/selector";
import ResourcesSection from "./Components/ResourcesSection";

function App() {
  const statistics = useSelector(selectStatistics);
  const developers = useSelector(selectDevelopers);
  const resources = useSelector(selectResources);
  const loggedinUser = useSelector(selectLoggedinUser);

  const [favoriteId, setFavoriteId] = useState(2);
  const [selectedDev, setSelectedDev] = useState(1);

  const developersWithFavorite = useSelector(
    developersWithThisFavorite(favoriteId)
  );

  const developersFavorites = useSelector(
    selectDevelopersFavoritesResources(selectedDev)
  );

  // const selectDevelopersFavoritesResources = useSelector((state) => {
  //   const selectedDeveloper = state.developers.find(
  //     (dev) => dev.id === selectedDev
  //   );
  //   return selectedDeveloper;
  // });

  // const favoriteNameArray = (
  //   selectDevelopersFavoritesResources.favorites
  // ) => {};

  // console.log("this", selectDevelopersFavoritesResources);

  return (
    <div className="App">
      <p
        style={{
          margin: "1rem 0 2rem 0",
          padding: "0.5rem",
          background: "#eee",
        }}
      >
        Welcome back, <strong>{loggedinUser.name}</strong>!
      </p>
      <h1>Web development resources</h1>
      <div>
        {statistics.numDevelopers}
        <p>developers</p>
      </div>
      <div>
        {statistics.numResources}
        <p>developers</p>
      </div>
      <h2>
        Who likes{" "}
        <select
          value={favoriteId}
          onChange={(e) => setFavoriteId(parseInt(e.target.value))}
        >
          {resources.map((resource) => {
            return (
              <option key={resource.id} value={resource.id}>
                {resource.name}
              </option>
            );
          })}
        </select>
        ?
      </h2>
      <ul>
        {developersWithFavorite.map((dev) => {
          return <li key={dev.id}>{dev.name}</li>;
        })}
      </ul>
      <h2>
        What are{" "}
        <select
          value={selectedDev}
          onChange={(e) => setSelectedDev(parseInt(e.target.value))}
        >
          {developers.map((developer) => {
            return (
              <option key={developer.id} value={developer.id}>
                {developer.name}
              </option>
            );
          })}
        </select>
        favorites?
      </h2>
      <ul>
        {developersFavorites.map((dev) => {
          return <li key={dev.id}>{dev.name}</li>;
        })}
      </ul>
      <ResourcesSection />
    </div>
  );
}

export default App;
