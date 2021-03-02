export const toCountyObject = (data) => {
  const { _id: id, nome, descricao, provincia } = data;
  return {
    id,
    descricao,
    nome,
    provincia: provincia.nome,
  };
};
