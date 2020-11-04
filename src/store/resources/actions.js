export function addResource(newResource) {
  return {
    type: "ADD_RESOURCE",
    payload: newResource,
  };
}
