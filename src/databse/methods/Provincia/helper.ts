export const toProvinceObject = (data) => {
  const {
    _id: id,
    nome,
    codigo,
    capital,
    area,
    populacao,
    municipios,
    comunas,
  } = data;

  return {
    id,
    nome,
    codigo,
    capital,
    area,
    populacao,
    municipios,
    comunas,
  };
};
