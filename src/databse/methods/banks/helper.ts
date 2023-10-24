export const toBankObject = (data) => {
  const { _id: id, name, fullname, swift, code } = data;

  return {
    id,
    name,
    fullname,
    swift,
    code,
  };
};
