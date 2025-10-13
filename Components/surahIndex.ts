// Import all your surah JSON files statically
import surahyaseen from '../app/data/surahyaseen.json';
import suraharrahman from '../app/data/surahrahman.json';
import surahatTin from '../app/data/surahTin.json';
import surahalAlaq from '../app/data/surahGalaq.json';
import surahalQadr from '../app/data/surahQadar.json';
import surahalBayyina from '../app/data/surahBaiyinah.json';
import surahAzzalzalah from '../app/data/surahZilzal.json';
import surahalAdiyat from '../app/data/surahAdiat.json';
import surahalQaria from '../app/data/surahQaria.json';
import surahTakathur from '../app/data/surahTakasur.json';
import surahalAsr from '../app/data/surahAsar.json';
import surahalHumazah from '../app/data/surahHumaza.json';
import surahalFil from '../app/data/surahFel.json';
import surahQuraysh from '../app/data/surahQuraish.json';
import surahalMaun from '../app/data/surahMaoon.json';
import surahalKawthar from '../app/data/surahkawsar.json';
import surahalKafirun from '../app/data/surahKafiron.json';
import surahAnNasr from '../app/data/surahNasar.json'
import surahalMasad from '../app/data/surahLahab.json';
import surahalIkhlas from '../app/data/surahIkhlas.json';
import surahalFalaq from '../app/data/surahFalaq.json'
import surahAnNaas from '../app/data/surahNas.json';

// Export a map keyed by file names used in navigation
const surahIndex = {
  surahyaseen,
  suraharrahman,
  'surahat-tin': surahatTin,
  'surahal-aq': surahalAlaq,
  surahalqadr: surahalQadr,
  surahalbayyina: surahalBayyina,
  surahazzalzalah: surahAzzalzalah,
  surahaladiyat: surahalAdiyat,
  surahalqaria: surahalQaria,
  surahtaktathur: surahTakathur,
  surahalasr: surahalAsr,
  surahalhumazah: surahalHumazah,
  surahalfil: surahalFil,
  surahquraysh: surahQuraysh,
  surahalmaun: surahalMaun,
  surahalkawthar: surahalKawthar,
  surahalkafirun: surahalKafirun,
  surahannasr: surahAnNasr,
  surahalmasad: surahalMasad,
  surahalikhlas: surahalIkhlas,
  surahalfalaq: surahalFalaq,
  surahannaas: surahAnNaas,
};

export default surahIndex;
