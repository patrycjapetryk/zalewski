export const allProjectsData = [
  {
    id: 1,
    uid: 'filtry-warszawskie',
    title: 'Filtry Warszawskie',
    text: 'Projekt budowlany i wykonawczy branży sanitarnej dla budynku Filtrów, dla budynku Dyspozytorni, dla budynku koagulacji w ramach zadania “Modernizacja technologii w Zakładzie Wodociągu Centralnego etap II - II ciąg technologiczny” realizowany w ramach Projektu „Zaopatrzenie w wodę i oczyszczanie ścieków w Warszawie - IV Faza”',
    scope: [
      'Instalacja wod-kan,',
      'Instalacja grzewcza wraz z pod węzłami cieplnymi,',
      'Instalacja wentylacji mechanicznej bytowej i technologiczne.',
    ],
    description:
      'Projekt budowlany i wykonawczy dla budynku pompowni 2 stopnia w branży sanitarnej tj. instalacji wentylacji i klimatyzacji, co oraz wod-kan, projekt wykonawczy branży sanitarnej tj. instalacji wentylacji i klimatyzacji, co oraz wod-kan dla budynku Wapna, projekt budowlany i wykonawczy drenaży przy budynkach Pompowni II, Koagulacji oraz Wapna, dla inwestycji: “Modernizacja technologii w Zakładzie Wodociągu Centralnego etap II – II ciąg technologiczny. realizowany w ramach Projektu „Zaopatrzenie w wodę i oczyszczanie ścieków w Warszawie – IV Faza”.',
    photos: [
      {
        id: 1,
        url: '/images/projects/filtry-warszawskie-1.jpg',
        alt: 'Filtry Warszawskie Realizacja',
        width: 714,
        height: 746,
      },
      {
        id: 2,
        url: '/images/projects/filtry-warszawskie-2.jpg',
        alt: 'Filtry Warszawskie Realizacja',
        width: 723,
        height: 421,
      },
      {
        id: 3,
        url: '/images/projects/filtry-warszawskie-3.jpg',
        alt: 'Filtry Warszawskie Realizacja',
        width: 744,
        height: 572,
      },
    ],
  },
];

export type AllProjectsData = typeof allProjectsData;
export type AllProjectsDataItem = AllProjectsData[0];
