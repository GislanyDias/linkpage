import vejasaude from '../assets/logos/vejasaude.png';
import govbr from '../assets/logos/govbr.png';
import sus from '../assets/logos/sus.png';
import datasus from '../assets/logos/datasus.png';
import tabnet from '../assets/logos/tabnet.png';
import sisab from '../assets/logos/sisab.png';
import cnes from '../assets/logos/cnes.png';
import sinan from '../assets/logos/sinan.png';
import siasus from '../assets/logos/siasus.png';
import sihsus from '../assets/logos/sihsus.png';
import siops from '../assets/logos/siops.png';
import rnds from '../assets/logos/rnds.png';
import susdigital from '../assets/logos/susdigital.png';
import prefeitura from '../assets/logos/prefeitura.png';
import farmacia from '../assets/logos/farmacia.png';
import medicos from '../assets/logos/medicos.png';
import samu from '../assets/logos/samu.png';
import esus from '../assets/logos/esus.png';



const sites = [
    {
        nome: 'Veja+Saúde',
        url: 'https://vejamaissaude.vercel.app/',
        categoria: 'UPA',
        image: vejasaude
    },
    {
      nome: 'Portal do Ministério da Saúde',
      url: 'https://www.gov.br/saude/pt-br',
      categoria: 'Ministério',
      image: govbr
    },
    {
      nome: 'Portal Sistema Único de Saúde (SUS)',
      url: 'https://www.gov.br/saude/pt-br/sus',
      categoria: 'SUS',
      image: sus
    },
    {
      nome: 'DATASUS',
      url: 'https://datasus.saude.gov.br/',
      categoria: 'SUS',
      image: datasus
    },
    {
      nome: 'TABNET – Informações de Saúde',
      url: 'https://datasus.saude.gov.br/informacoes-de-saude-tabnet/',
      categoria: 'Administração',
      image: tabnet
    },
    {
      nome: 'SISAB – Atenção Básica',
      url: 'https://sisab.saude.gov.br/',
      categoria: 'Atenção Básica',
      image: sisab
    },
    {
      nome: 'CNES – Cadastro Nacional',
      url: 'https://datasus.saude.gov.br/cnes-estabelecimentos/',
      categoria: 'Cadastro',
      image: cnes
    },
    {
      nome: 'SINAN – Agravos de Notificação',
      url: 'https://portalsinan.saude.gov.br/',
      categoria: 'Vigilância',
      image: sinan
    },
    {
      nome: 'e-SUS APS',
      url: 'https://sisaps.saude.gov.br/sistemas/esusaps/',
      categoria: 'Atenção Primária',
      image: esus
    },
    {
      nome: 'SIA/SUS – Ambulatorial',
      url: 'https://datasus.saude.gov.br/acesso-a-informacao/producao-ambulatorial-sia-sus/',
      categoria: 'Ambulatorial',
      image: siasus
    },
    {
      nome: 'SIH/SUS – Hospitalar',
      url: 'https://datasus.saude.gov.br/acesso-a-informacao/morbidade-hospitalar-do-sus-sih-sus/',
      categoria: 'Hospitalar',
      image: sihsus
    },
    {
      nome: 'SIOPS – Orçamentos em Saúde',
      url: 'https://www.gov.br/saude/pt-br/acesso-a-informacao/siops',
      categoria: 'Administração',
      image: siops
    },
    {
      nome: 'RNDS – Rede Nacional de Dados',
      url: 'https://rnds.saude.gov.br/',
      categoria: 'Administração',
      image: rnds
    },
    {
      nome: 'Meu SUS Digital',
      url: 'https://meususdigital.saude.gov.br/',
      categoria: 'Cidadão',
      image: susdigital
    },
    {
      nome: 'Prefeitura Municial',
      url: 'https://campinagrande.pb.gov.br/',
      categoria: 'Administração',
      image: prefeitura
    },
    {
      nome: 'Farmácia Popular',
      url: 'https://www.gov.br/saude/pt-br/composicao/sectics/farmacia-popular',
      categoria: 'Medicamentos',
      image: farmacia
    },
    {
      nome: 'Mais Médicos',
      url: 'https://www.gov.br/saude/pt-br/composicao/saps/mais-medicos',
      categoria: 'SUS',
      image: medicos
    },
    {
      nome: 'SAMU 192',
      url: 'https://www.gov.br/saude/pt-br/composicao/saes/samu-192',
      categoria: 'Emergência',
      image: samu
    }
  ];
  
  export default sites;