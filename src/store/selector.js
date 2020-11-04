export const selectDevelopersFavoritesResources = (developerId) => (state) => {
  const developer = state.developers.find((dev) => dev.id === developerId);
  if (!developer) {
    return [];
  }
  return state.resources.filter((resource) => {
    return developer.favorites.includes(resource.id);
  });
};

export const selectLoggedinUser = (state) => {
  return state.developers.find((dev) => dev.id === state.user.id);
};
