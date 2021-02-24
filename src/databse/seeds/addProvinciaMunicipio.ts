import mongoose from 'mongoose';
import { environment } from '../../config/environment';
import { ProvinciaModel, MunicipioModel } from '../models';

async function start() {
  try {
    await mongoose.connect(environment.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    await ProvinciaModel.deleteMany({});
    await MunicipioModel.deleteMany({});

    provinciasArray.forEach(async (prvincia) => {
      const {
        nome,
        codigo,
        capital,
        area,
        populacao,
        municipios,
        comunas,
      } = prvincia;
      const newProvina = new ProvinciaModel({
        nome,
        codigo,
        capital,
        area,
        populacao,
        municipios,
        comunas,
      });
      const savedProvincia = await newProvina.save();

      const result = municipiosArray.filter(
        (item) => item.provincia_id === prvincia.id
      );

      result.forEach(async (item) => {
        const newMunicipio = new MunicipioModel({
          nome: item.nome,
          descricao: item.descricao,
          provincia: savedProvincia._id,
        });
        await newMunicipio.save();
      });
    });
    console.log('finish');
  } catch (error) {
    console.log(error);
  }
}

start().then().catch();

const provinciasArray = [
  {
    id: 1,
    nome: 'Bengo',
    codigo: 'BGO',
    capital: 'Caxito',
    area: 15506,
    populacao: 356641,
    municipios: 6,
    comunas: 23,
  },

  {
    id: 2,
    nome: 'Benguela',
    codigo: 'BGU',
    capital: 'Benguela',
    area: 31788,
    populacao: 2231385,
    municipios: 10,
    comunas: 38,
  },

  {
    id: 3,
    nome: 'Bié',
    codigo: 'BIE',
    capital: 'Cuíto',
    area: 70314,
    populacao: 1455255,
    municipios: 9,
    comunas: 39,
  },

  {
    id: 4,
    nome: 'Cabinda',
    codigo: 'CAB',
    capital: 'Cabinda',
    area: 7270,
    populacao: 716076,
    municipios: 4,
    comunas: 12,
  },

  {
    id: 5,
    nome: 'Cuando-Cubango',
    codigo: 'CCU',
    capital: 'Menongue',
    area: 199049,
    populacao: 534002,
    municipios: 9,
    comunas: 30,
  },

  {
    id: 6,
    nome: 'Cuanza Norte',
    codigo: 'CNO',
    capital: "N'dalatando",
    area: 24190,
    populacao: 443386,
    municipios: 10,
    comunas: 30,
  },

  {
    id: 7,
    nome: 'Cuanza Sul',
    codigo: 'CUS',
    capital: 'Sumbe',
    area: 55660,
    populacao: 1881873,
    municipios: 12,
    comunas: 36,
  },

  {
    id: 8,
    nome: 'Cunene',
    codigo: 'CNN',
    capital: 'Ondjiva',
    area: 89342,
    populacao: 990087,
    municipios: 6,
    comunas: 20,
  },

  {
    id: 9,
    nome: 'Huambo',
    codigo: 'HUA',
    capital: 'Huambo',
    area: 34274,
    populacao: 2019555,
    municipios: 11,
    comunas: 37,
  },

  {
    id: 10,
    nome: 'Huíla',
    codigo: 'HUI',
    capital: 'Lubango',
    area: 75002,
    populacao: 2497422,
    municipios: 14,
    comunas: 37,
  },

  {
    id: 11,
    nome: 'Luanda',
    codigo: 'LUA',
    capital: 'Luanda',
    area: 18283,
    populacao: 6945386,
    municipios: 9,
    comunas: 14,
  },

  {
    id: 12,
    nome: 'Lunda Norte',
    codigo: 'LNO',
    capital: 'Dundo',
    area: 102783,
    populacao: 862566,
    municipios: 10,
    comunas: 24,
  },

  {
    id: 13,
    nome: 'Lunda Sul',
    codigo: 'LSU',
    capital: 'Saurimo',
    area: 45649,
    populacao: 537587,
    municipios: 4,
    comunas: 14,
  },

  {
    id: 14,
    nome: 'Malanje',
    codigo: 'MAL',
    capital: 'Malanje',
    area: 97602,
    populacao: 986363,
    municipios: 14,
    comunas: 52,
  },

  {
    id: 15,
    nome: 'Moxico',
    codigo: 'MOX',
    capital: 'Luena',
    area: 223023,
    populacao: 758568,
    municipios: 9,
    comunas: 27,
  },

  {
    id: 16,
    nome: 'Namibe',
    codigo: 'NAM',
    capital: 'Moçâmedes',
    area: 58137,
    populacao: 495326,
    municipios: 5,
    comunas: 16,
  },

  {
    id: 17,
    nome: 'Uíge',
    codigo: 'UIG',
    capital: 'Uíge',
    area: 58698,
    populacao: 1483118,
    municipios: 16,
    comunas: 44,
  },

  {
    id: 18,
    nome: 'Zaire',
    codigo: 'ZAI',
    capital: "M'Banza Congo",
    area: 40130,
    populacao: 594428,
    municipios: 6,
    comunas: 25,
  },
];

const municipiosArray = [
  {
    id: 1,
    descricao: '',
    nome: 'Dande',
    provincia_id: 1,
  },
  {
    id: 2,
    descricao: '',
    nome: 'Ambriz',
    provincia_id: 1,
  },
  {
    id: 3,
    descricao: '',
    nome: 'Dembos',
    provincia_id: 1,
  },
  {
    id: 4,
    descricao: '',
    nome: 'Bula Atumba',
    provincia_id: 1,
  },
  {
    id: 5,
    descricao: '',
    nome: 'Nambuangongo',

    provincia_id: 1,
  },
  {
    id: 6,
    descricao: '',
    nome: 'Pango Aluquém',

    provincia_id: 1,
  },
  {
    id: 7,
    descricao: '',
    nome: 'Balombo',

    provincia_id: 2,
  },
  {
    id: 8,
    descricao: '',
    nome: 'Benguela',

    provincia_id: 2,
  },
  {
    id: 9,
    descricao: '',
    nome: 'Bocoio',

    provincia_id: 2,
  },
  {
    id: 10,
    descricao: '',
    nome: 'Caimbambo',

    provincia_id: 2,
  },
  {
    id: 11,
    descricao: '',
    nome: 'Catumbela',

    provincia_id: 2,
  },
  {
    id: 12,
    descricao: '',
    nome: 'Chongorói',

    provincia_id: 2,
  },
  {
    id: 13,
    descricao: '',
    nome: 'Cubal',

    provincia_id: 2,
  },
  {
    id: 14,
    descricao: '',
    nome: 'Ganda',

    provincia_id: 2,
  },
  {
    id: 15,
    descricao: '',
    nome: 'Lobito',

    provincia_id: 2,
  },
  {
    id: 16,
    descricao: '',
    nome: 'Baía Farta',

    provincia_id: 2,
  },
  {
    id: 17,
    descricao: '',
    nome: 'Andulo',

    provincia_id: 3,
  },
  {
    id: 18,
    descricao: '',
    nome: 'Camacupa',

    provincia_id: 3,
  },
  {
    id: 19,
    descricao: '',
    nome: 'Catabola',

    provincia_id: 3,
  },
  {
    id: 20,
    descricao: '',
    nome: 'Chinguar',

    provincia_id: 3,
  },
  {
    id: 21,
    descricao: '',
    nome: 'Chitembo',

    provincia_id: 3,
  },
  {
    id: 22,
    descricao: '',
    nome: 'Cuemba',

    provincia_id: 3,
  },
  {
    id: 23,
    descricao: '',
    nome: 'Cuemba',

    provincia_id: 3,
  },
  {
    id: 24,
    descricao: '',
    nome: 'Cuíto',

    provincia_id: 3,
  },
  {
    id: 25,
    descricao: '',
    nome: 'Nharea',

    provincia_id: 3,
  },
  {
    id: 26,
    descricao: '',
    nome: 'Belize',

    provincia_id: 4,
  },
  {
    id: 27,
    descricao: '',
    nome: 'Uíge',

    provincia_id: 4,
  },
  {
    id: 28,
    descricao: '',
    nome: 'Buco-Zau',

    provincia_id: 4,
  },
  {
    id: 29,
    descricao: '',
    nome: 'Cabinda',

    provincia_id: 4,
  },
  {
    id: 30,
    descricao: '',
    nome: 'Cacongo',

    provincia_id: 4,
  },
  {
    id: 31,
    descricao: '',
    nome: 'Calai',

    provincia_id: 5,
  },
  {
    id: 32,
    descricao: '',
    nome: 'Cuangar',

    provincia_id: 5,
  },
  {
    id: 33,
    descricao: '',
    nome: 'Cuchi',

    provincia_id: 5,
  },
  {
    id: 34,
    descricao: '',
    nome: 'Cuito Cuanavale',

    provincia_id: 5,
  },
  {
    id: 35,
    descricao: '',
    nome: 'Dirico',

    provincia_id: 5,
  },
  {
    id: 36,
    descricao: '',
    nome: 'Mavinga',

    provincia_id: 5,
  },
  {
    id: 37,
    descricao: '',
    nome: 'Menongue',

    provincia_id: 5,
  },
  {
    id: 38,
    descricao: '',
    nome: 'Nancova',

    provincia_id: 5,
  },
  {
    id: 39,
    descricao: '',
    nome: 'Rivungo',

    provincia_id: 5,
  },
  {
    id: 40,
    descricao: '',
    nome: 'Cahama',

    provincia_id: 6,
  },
  {
    id: 41,
    descricao: '',
    nome: 'Cuanhama',

    provincia_id: 6,
  },
  {
    id: 42,
    descricao: '',
    nome: 'Curoca',

    provincia_id: 6,
  },
  {
    id: 43,
    descricao: '',
    nome: 'Cuvelai',

    provincia_id: 6,
  },
  {
    id: 44,
    descricao: '',
    nome: 'Namacunde',

    provincia_id: 6,
  },
  {
    id: 45,
    descricao: '',
    nome: 'Ombadja',

    provincia_id: 6,
  },
  {
    id: 46,
    descricao: '',
    nome: 'Bailundo',

    provincia_id: 7,
  },
  {
    id: 47,
    descricao: '',
    nome: 'Cachiungo',

    provincia_id: 7,
  },
  {
    id: 48,
    descricao: '',
    nome: 'Caála',

    provincia_id: 7,
  },
  {
    id: 49,
    descricao: '',
    nome: 'Ecunha',

    provincia_id: 7,
  },
  {
    id: 50,
    descricao: '',
    nome: 'Huambo',

    provincia_id: 7,
  },
  {
    id: 51,
    descricao: '',
    nome: 'Londuimbali',

    provincia_id: 7,
  },
  {
    id: 52,
    descricao: '',
    nome: 'Longonjo',

    provincia_id: 7,
  },
  {
    id: 53,
    descricao: '',
    nome: 'Mungo',

    provincia_id: 7,
  },
  {
    id: 54,
    descricao: '',
    nome: 'Chicala-Choloanga',

    provincia_id: 7,
  },
  {
    id: 55,
    descricao: '',
    nome: 'Chinjenje',

    provincia_id: 7,
  },
  {
    id: 56,
    descricao: '',
    nome: 'Ucuma',

    provincia_id: 7,
  },
  {
    id: 57,
    descricao: '',
    nome: 'Caconda',

    provincia_id: 8,
  },
  {
    id: 58,
    descricao: '',
    nome: 'Cacula',

    provincia_id: 8,
  },
  {
    id: 59,
    descricao: '',
    nome: 'Caluquembe',

    provincia_id: 8,
  },
  {
    id: 60,
    descricao: '',
    nome: 'Chiange',

    provincia_id: 8,
  },
  {
    id: 61,
    descricao: '',
    nome: 'Chibia',

    provincia_id: 8,
  },
  {
    id: 62,
    descricao: '',
    nome: 'Chicomba',

    provincia_id: 8,
  },
  {
    id: 63,
    descricao: '',
    nome: 'Chipindo',

    provincia_id: 8,
  },
  {
    id: 64,
    descricao: '',
    nome: 'Cuvango',

    provincia_id: 8,
  },
  {
    id: 65,
    descricao: '',
    nome: 'Humpata',

    provincia_id: 8,
  },
  {
    id: 66,
    descricao: '',
    nome: 'Jamba',

    provincia_id: 8,
  },
  {
    id: 67,
    descricao: '',
    nome: 'Lubango',

    provincia_id: 8,
  },
  {
    id: 68,
    descricao: '',
    nome: 'Matala',

    provincia_id: 8,
  },
  {
    id: 69,
    descricao: '',
    nome: 'Quilengues',

    provincia_id: 8,
  },
  {
    id: 70,
    descricao: '',
    nome: 'Quipungo',

    provincia_id: 8,
  },
  {
    id: 71,
    descricao: '',
    nome: 'Amboim',

    provincia_id: 9,
  },
  {
    id: 72,
    descricao: '',
    nome: 'Cassongue',

    provincia_id: 9,
  },
  {
    id: 73,
    descricao: '',
    nome: 'Cela',

    provincia_id: 9,
  },
  {
    id: 74,
    descricao: '',
    nome: 'Conda',

    provincia_id: 9,
  },
  {
    id: 75,
    descricao: '',
    nome: 'Ebo',

    provincia_id: 9,
  },
  {
    id: 76,
    descricao: '',
    nome: 'Libolo',

    provincia_id: 9,
  },
  {
    id: 77,
    descricao: '',
    nome: 'Mussende',

    provincia_id: 9,
  },
  {
    id: 78,
    descricao: '',
    nome: 'Porto Amboim',

    provincia_id: 9,
  },
  {
    id: 79,
    descricao: '',
    nome: 'Quibala',

    provincia_id: 9,
  },
  {
    id: 80,
    descricao: '',
    nome: 'Quilenda',

    provincia_id: 9,
  },
  {
    id: 81,
    descricao: '',
    nome: 'Seles',

    provincia_id: 9,
  },
  {
    id: 82,
    descricao: '',
    nome: 'Sumbe',

    provincia_id: 9,
  },
  {
    id: 83,
    descricao: '',
    nome: 'Ambaca',

    provincia_id: 10,
  },
  {
    id: 84,
    descricao: '',
    nome: 'Banga',

    provincia_id: 10,
  },
  {
    id: 85,
    descricao: '',
    nome: 'Bolongongo',

    provincia_id: 10,
  },
  {
    id: 86,
    descricao: '',
    nome: 'Cambambe',

    provincia_id: 10,
  },
  {
    id: 87,
    descricao: '',
    nome: 'Cazengo',

    provincia_id: 10,
  },
  {
    id: 88,
    descricao: '',
    nome: 'Golungo Alto',

    provincia_id: 10,
  },
  {
    id: 89,
    descricao: '',
    nome: 'Gonguembo',

    provincia_id: 10,
  },
  {
    id: 90,
    descricao: '',
    nome: 'Lucala',

    provincia_id: 10,
  },
  {
    id: 91,
    descricao: '',
    nome: 'Quiculungo',

    provincia_id: 10,
  },
  {
    id: 92,
    descricao: '',
    nome: 'Samba Caju',

    provincia_id: 10,
  },
  {
    id: 93,
    descricao: '',
    nome: 'Belas',

    provincia_id: 11,
  },
  {
    id: 94,
    descricao: '',
    nome: 'Cacuaco',

    provincia_id: 11,
  },
  {
    id: 95,
    descricao: '',
    nome: 'Cazenga',

    provincia_id: 11,
  },
  {
    id: 96,
    descricao: '',
    nome: 'Ícolo e Bengo',

    provincia_id: 11,
  },
  {
    id: 97,
    descricao: '',
    nome: 'Luanda',

    provincia_id: 11,
  },
  {
    id: 98,
    descricao: '',
    nome: 'Quilamba Quiaxi',

    provincia_id: 11,
  },
  {
    id: 99,
    descricao: '',
    nome: 'Quissama',

    provincia_id: 11,
  },
  {
    id: 100,
    descricao: '',
    nome: 'Talatona',

    provincia_id: 11,
  },
  {
    id: 101,
    descricao: '',
    nome: 'Viana',

    provincia_id: 11,
  },
  {
    id: 102,
    descricao: '',
    nome: 'Cambulo',

    provincia_id: 12,
  },
  {
    id: 103,
    descricao: '',
    nome: 'Capenda-Camulemba',

    provincia_id: 12,
  },
  {
    id: 104,
    descricao: '',
    nome: 'Caungula',

    provincia_id: 12,
  },
  {
    id: 105,
    descricao: '',
    nome: 'Chitato',

    provincia_id: 12,
  },
  {
    id: 106,
    descricao: '',
    nome: 'Cuango',

    provincia_id: 12,
  },
  {
    id: 107,
    descricao: '',
    nome: 'Cuílo',

    provincia_id: 12,
  },
  {
    id: 108,
    descricao: '',
    nome: 'Lóvua',

    provincia_id: 12,
  },
  {
    id: 109,
    descricao: '',
    nome: 'Lubalo',

    provincia_id: 12,
  },
  {
    id: 110,
    descricao: '',
    nome: 'Lucapa',

    provincia_id: 12,
  },
  {
    id: 111,
    descricao: '',
    nome: 'Xá-Muteba',

    provincia_id: 12,
  },
  {
    id: 112,
    descricao: '',
    nome: 'Cacolo',

    provincia_id: 13,
  },
  {
    id: 113,
    descricao: '',
    nome: 'Dala',

    provincia_id: 13,
  },
  {
    id: 114,
    descricao: '',
    nome: 'Muconda',

    provincia_id: 13,
  },
  {
    id: 115,
    descricao: '',
    nome: 'Saurimo',

    provincia_id: 13,
  },
  {
    id: 116,
    descricao: '',
    nome: 'Cacuso',

    provincia_id: 14,
  },
  {
    id: 117,
    descricao: '',
    nome: 'Calandula',

    provincia_id: 14,
  },
  {
    id: 118,
    descricao: '',
    nome: 'Cambundi-Catembo',

    provincia_id: 14,
  },
  {
    id: 119,
    descricao: '',
    nome: 'Cangandala',

    provincia_id: 14,
  },
  {
    id: 120,
    descricao: '',
    nome: 'Caombo',

    provincia_id: 14,
  },
  {
    id: 121,
    descricao: '',
    nome: 'Cuaba Nzoji',

    provincia_id: 14,
  },
  {
    id: 122,
    descricao: '',
    nome: 'Cunda-Dia-Baze',

    provincia_id: 14,
  },
  {
    id: 123,
    descricao: '',
    nome: 'Luquembo',

    provincia_id: 14,
  },
  {
    id: 124,
    descricao: '',
    nome: 'Malanje',

    provincia_id: 14,
  },
  {
    id: 125,
    descricao: '',
    nome: 'Marimba',

    provincia_id: 14,
  },
  {
    id: 126,
    descricao: '',
    nome: 'Massango',

    provincia_id: 14,
  },
  {
    id: 127,
    descricao: '',
    nome: 'Mucari',

    provincia_id: 14,
  },
  {
    id: 128,
    descricao: '',
    nome: 'Quela',

    provincia_id: 14,
  },
  {
    id: 129,
    descricao: '',
    nome: 'Quirima',

    provincia_id: 14,
  },
  {
    id: 130,
    descricao: '',
    nome: 'Alto Zambeze',

    provincia_id: 15,
  },
  {
    id: 131,
    descricao: '',
    nome: 'Cela',

    provincia_id: 15,
  },
  {
    id: 132,
    descricao: '',
    nome: 'Bundas',

    provincia_id: 15,
  },
  {
    id: 133,
    descricao: '',
    nome: 'Camanongue',

    provincia_id: 15,
  },
  {
    id: 134,
    descricao: '',
    nome: 'Léua',

    provincia_id: 15,
  },
  {
    id: 135,
    descricao: '',
    nome: 'Luau',

    provincia_id: 15,
  },
  {
    id: 136,
    descricao: '',
    nome: 'Luacano',

    provincia_id: 15,
  },
  {
    id: 137,
    descricao: '',
    nome: 'Luchazes',

    provincia_id: 15,
  },
  {
    id: 138,
    descricao: '',
    nome: 'Cameia',

    provincia_id: 15,
  },
  {
    id: 139,
    descricao: '',
    nome: 'Moxico',

    provincia_id: 15,
  },
  {
    id: 140,
    descricao: '',
    nome: 'Bibala',

    provincia_id: 16,
  },
  {
    id: 141,
    descricao: '',
    nome: 'Camucuio',

    provincia_id: 16,
  },
  {
    id: 142,
    descricao: '',
    nome: 'Moçâmedes',

    provincia_id: 16,
  },
  {
    id: 143,
    descricao: '',
    nome: 'Tômbua',

    provincia_id: 16,
  },
  {
    id: 144,
    descricao: '',
    nome: 'Virei',

    provincia_id: 16,
  },
  {
    id: 145,
    descricao: '',
    nome: 'Alto Cauale',

    provincia_id: 17,
  },
  {
    id: 146,
    descricao: '',
    nome: 'Ambuíla',

    provincia_id: 17,
  },
  {
    id: 147,
    descricao: '',
    nome: 'Bembe',

    provincia_id: 17,
  },
  {
    id: 148,
    descricao: '',
    nome: 'Buengas',

    provincia_id: 17,
  },
  {
    id: 149,
    descricao: '',
    nome: 'Bungo',

    provincia_id: 17,
  },
  {
    id: 150,
    descricao: '',
    nome: 'Damba',

    provincia_id: 17,
  },
  {
    id: 151,
    descricao: '',
    nome: 'Milunga',

    provincia_id: 17,
  },
  {
    id: 152,
    descricao: '',
    nome: 'Mucaba',

    provincia_id: 17,
  },
  {
    id: 153,
    descricao: '',
    nome: 'Negage',

    provincia_id: 17,
  },
  {
    id: 154,
    descricao: '',
    nome: 'Puri',

    provincia_id: 17,
  },
  {
    id: 155,
    descricao: '',
    nome: 'Quimbele',

    provincia_id: 17,
  },
  {
    id: 156,
    descricao: '',
    nome: 'Quitexe',

    provincia_id: 17,
  },
  {
    id: 157,
    descricao: '',
    nome: 'Sanza Pombo',

    provincia_id: 17,
  },
  {
    id: 158,
    descricao: '',
    nome: 'Songo',

    provincia_id: 17,
  },
  {
    id: 159,
    descricao: '',
    nome: 'Uíge',

    provincia_id: 17,
  },
  {
    id: 160,
    descricao: '',
    nome: 'Zombo',

    provincia_id: 17,
  },
  {
    id: 161,
    descricao: '',
    nome: 'Cuimba',

    provincia_id: 18,
  },
  {
    id: 162,
    descricao: '',
    nome: 'Mabanza Congo',

    provincia_id: 18,
  },
  {
    id: 163,
    descricao: '',
    nome: 'Nóqui',

    provincia_id: 18,
  },
  {
    id: 164,
    descricao: '',
    nome: 'Soio',

    provincia_id: 18,
  },
  {
    id: 165,
    descricao: '',
    nome: 'Nezeto',

    provincia_id: 18,
  },
  {
    id: 166,
    descricao: '',
    nome: 'Tomboco',
    provincia_id: 18,
  },
];
