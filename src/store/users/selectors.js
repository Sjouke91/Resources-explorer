export const logedInUser = (state) => {
  const userId = state.users;
  const developer = state.developers.find((dev) => dev.id === userId);
  console.log(developer, userId);
  return "developer.name;";
};
