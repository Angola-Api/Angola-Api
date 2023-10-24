export const toComemorativeDateObject = (data: any) => {
  const { _id: id, date, description, atribuition } = data;

  return {
    id,
    date,
    description,
    atribuition,
  };
};
