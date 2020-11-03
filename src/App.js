import "./App.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import {
  selectDevelopers,
  selectStatistics,
  developersWithThisFavorite,
} from "./store/developers/selectors";
import { selectResources } from "./store/resources/selectors";
import { selectDevelopersFavoritesResources } from "./store/selector";

function App() {
  const statistics = useSelector(selectStatistics);
  const developers = useSelector(selectDevelopers);
  const resources = useSelector(selectResources);

  const [favoriteId, setFavoriteId] = useState(2);
  const [selectedDev, setSelectedDev] = useState(1);

  const developersWithFavorite = useSelector(
    developersWithThisFavorite(favoriteId)
  );

  const developersFavorites = useSelector(
    selectDevelopersFavoritesResources(selectedDev)
  );

  console.log(developersFavorites);

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
    </div>
  );
}

export default App;
