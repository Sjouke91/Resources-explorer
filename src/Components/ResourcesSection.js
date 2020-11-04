import React from "react";
import { useSelector } from "react-redux";
import { selectResources } from "../store/resources/selectors";
import "./ResourcesSection.scss";
import AddResourceForm from "./AddResourceForm";
import { selectLoggedinUser } from "../store/selector";
import { useDispatch } from "react-redux";

export default function ResourcesSection() {
  const dispatch = useDispatch();
  const logedInUser = useSelector(selectLoggedinUser);
  const resources = useSelector(selectResources);
  console.log("this is loged in", logedInUser.id);
  return (
    <div>
      {resources.map((resource) => {
        const toggle = () => {
          dispatch({
            type: "TOGGLE_FAVORITE_RESOURCE",
            payload: { userId: logedInUser.id, resourceId: resource.id },
          });
        };
        return (
          <div key={resource.id} className="resource">
            <button onClick={toggle}>
              {logedInUser.favorites.includes(resource.id) ? "♥" : "♡"}
            </button>
            <div className="title">
              <strong>{resource.name}</strong> (<em>{resource.type}</em>)
              &mdash; Find out more at <a href={resource.url}>{resource.url}</a>
            </div>
            <div className="meta">
              {resource.tags.map((tag, i) => {
                return (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
      <AddResourceForm />
    </div>
  );
}
