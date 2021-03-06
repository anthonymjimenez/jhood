export const findUserIndexes = (user, stock, stockUserData) => [
  findIndexById(user.stocks, stock),
  findIndexById(user.user_owned_stocks, stockUserData),
];

export const findIndexById = (data, ref) => {
  let index = data.findIndex((d) => d.id === ref.id);
  return index !== -1 ? index : data.length;
};

export const userStocks = (stocks) => stocks?.filter((s) => s.userData)