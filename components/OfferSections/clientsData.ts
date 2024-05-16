export const clientsData = [
  {
    id: 1,
    uid: 'klienci-indywidualni',
    title: 'Klienci indywidualni',
    photo: {
      url: '/images/photo-2-1.png',
      alt: 'Klienci indywidualni',
      fill: '',
      leftPosition: '',
      topPosition: '',
      bottomPosition: '',
    },
    texts: [
      'NASZA OFERTA OBEJMUJE WSZYSTKIE ETAPY PROCESU INWESTYCYJNEGO POCZĄWSZY OD ANALIZ I KONCEPCJI PRZEDINWESTYCYJNYCH, POPRZEZ PROJEKTY BUDOWLANE, PRZETARGOWE, WYKONAWCZE, KOSZTORYSY, SPECYFIKACJE, NADZORY NAD REALIZACJĄ ROBÓT, AŻ DO DORADZTWA ENERGETYCZNEGO W TRAKCIE EKSPLOATACJI OBIEKTÓW.',
      'Wiemy, że dla wszystkich Państwa budowa własnego domu jest spełnieniem marzeń i podchodzicie do tego z wielkim zaangażowaniem. Dlatego indywidualne podejście do każdego klienta  jest dla nas tak ważne.',
    ],
    preparation: [
      'Analiza kosztów budowy i użytkowania źródeł ciepła dla poszczególnych budynków;',
      'Opracowywanie projektów przyłącz wodociągowych i kanalizacyjnych;',
      'Opracowywanie projektów przyłącz gazu ziemnego;',
      'Opracowywanie projektów przydomowych oczyszczalni ścieków;',
      'Opracowywanie projektów zbiorników na propan;',
      'Wykonywanie przyłącz wodociągowych (zaopatrzenie w wodę dla celów budowy);',
      'Opracowywanie projektów zbiorników na nieczystości (szamba);',
      'Opracowywanie projektów instalacji wewnętrznych: wodno kanalizacyjnych, centralnego ogrzewania, źródeł ciepła i wentylacji mechanicznej z odzyskiem ciepła;',
    ],
    realization: [
      'wykonywanie przyłącz wodociągowych i kanalizacyjnych do budynków;',
      'nadzór inwestorski nad wykonaniem wyżej wymienionych robót budowlanych;',
      'odbiory inwestorskie wykonywanych instalacji, a w szczególności sprawdzenie poprawności pracy i bezpieczeństwa użytkowania;',
    ],
    use: [
      'ocena poprawności pracy instalacji centralnego ogrzewania i źródła ciepła;',
      'ocena bezpieczeństwa pracy instalacji centralnego ogrzewania i źródła ciepła;',
    ],
  },
  {
    id: 2,
    uid: 'klienci-inni',
    title: 'Klienci inni',
    photo: {
      url: '/images/photo-2-1.png',
      alt: 'Klienci indywidualni',
      fill: '',
      leftPosition: '',
      topPosition: '',
      bottomPosition: '',
    },
    texts: [
      'NASZA OFERTA OBEJMUJE WSZYSTKIE ETAPY PROCESU INWESTYCYJNEGO POCZĄWSZY OD ANALIZ I KONCEPCJI PRZEDINWESTYCYJNYCH, POPRZEZ PROJEKTY BUDOWLANE, PRZETARGOWE, WYKONAWCZE, KOSZTORYSY, SPECYFIKACJE, NADZORY NAD REALIZACJĄ ROBÓT, AŻ DO DORADZTWA ENERGETYCZNEGO W TRAKCIE EKSPLOATACJI OBIEKTÓW.',
      'Wiemy, że dla wszystkich Państwa budowa własnego domu jest spełnieniem marzeń i podchodzicie do tego z wielkim zaangażowaniem. Dlatego indywidualne podejście do każdego klienta  jest dla nas tak ważne.',
    ],
    preparation: [
      'Analiza kosztów budowy i użytkowania źródeł ciepła dla poszczególnych budynków;',
      'Opracowywanie projektów przyłącz wodociągowych i kanalizacyjnych;',
      'Opracowywanie projektów przyłącz gazu ziemnego;',
      'Opracowywanie projektów przydomowych oczyszczalni ścieków;',
      'Opracowywanie projektów zbiorników na propan;',
      'Wykonywanie przyłącz wodociągowych (zaopatrzenie w wodę dla celów budowy);',
      'Opracowywanie projektów zbiorników na nieczystości (szamba);',
      'Opracowywanie projektów instalacji wewnętrznych: wodno kanalizacyjnych, centralnego ogrzewania, źródeł ciepła i wentylacji mechanicznej z odzyskiem ciepła;',
    ],
    realization: [
      'wykonywanie przyłącz wodociągowych i kanalizacyjnych do budynków;',
      'nadzór inwestorski nad wykonaniem wyżej wymienionych robót budowlanych;',
      'odbiory inwestorskie wykonywanych instalacji, a w szczególności sprawdzenie poprawności pracy i bezpieczeństwa użytkowania;',
    ],
    use: [
      'ocena poprawności pracy instalacji centralnego ogrzewania i źródła ciepła;',
      'ocena bezpieczeństwa pracy instalacji centralnego ogrzewania i źródła ciepła;',
    ],
  },
];

export type ClientsData = typeof clientsData;
export type ClientsDataItem = (typeof clientsData)[0];
