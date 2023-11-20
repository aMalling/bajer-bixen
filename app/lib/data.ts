import React from "react";

interface BeerCalenderDataInterface {
  dato: string;
  bryggeri: string;
  navn: string;
  land: string;
  alkohol: string;
  brødtekst: string;
  untappdlink: string;
}

export const beerCalenderData: any = [
  {
    dato: "01",
    bryggeri: "Jackie O's Brewery",
    navn: "Forward Into Yesterday",
    land: "USA",
    alkohol: "14,2",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/jackie-o-s-brewery-forward-into-yesterday/4585575",
  },
  {
    dato: "02",
    bryggeri: "Hoppin Frog",
    navn: "Rocky Mountain Barrel-Aged Q.O.R.I.S. the Quasher Quadruple Oatmeal Russian Imperial Stout",
    land: "USA",
    alkohol: "15,7",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/hoppin-frog-brewery-rocky-mountain-barrel-aged-q-o-r-i-s-the-quasher-quadruple-oatmeal-russian-imperial-stout/4566617",
  },
  {
    dato: "03",
    bryggeri: "Dark Horse",
    navn: "Bourbon Barrel Aged Plead The 5th ",
    land: "USA",
    alkohol: "11,0",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/dark-horse-brewing-co-bourbon-barrel-aged-plead-the-5th/34285",
  },

  {
    dato: "04",
    bryggeri: "Cantilion",
    navn: "Gueuze 100% Lambic Bio (2020)",
    land: "BEL",
    alkohol: "5,5",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio-2020/3653264",
  },
  {
    dato: "05",
    bryggeri: "Cantilion",
    navn: "Kriek 100% Lambic Bio (2023)",
    land: "BEL",
    alkohol: "6,0",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/brasserie-cantillon-kriek-100-lambic-bio-2023/5181935",
  },
  {
    dato: "06",
    bryggeri: "Timber Ales",
    navn: "ForEverett",
    land: "USA",
    alkohol: "12,0",
    brødtekst: "tom",
    untappdlink: "https://untappd.com/b/timber-ales-foreverett/4755725",
  },
  {
    dato: "07",
    bryggeri: "Other Half",
    navn: "All Citra Everything DIPA",
    land: "USA",
    alkohol: "8,5",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/other-half-brewing-co-all-citra-everything/1793659",
  },
  {
    dato: "08",
    bryggeri: "Other Half",
    navn: "Broccoli DIPA",
    land: "USA",
    alkohol: "7,9",
    brødtekst: "tom",
    untappdlink: "https://untappd.com/b/other-half-brewing-co-broccoli/1941131",
  },
  {
    dato: "09",
    bryggeri: "Short Throw Brewing Co.",
    navn: "Backyard Brawl",
    land: "USA",
    alkohol: "13,1",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/short-throw-brewing-co-backyard-brawl/4950555",
  },
  {
    dato: "10",
    bryggeri: "North",
    navn: "Heliocentric.  IPA",
    land: "UK",
    alkohol: "6,4",
    brødtekst: "tom",
    untappdlink: "https://untappd.com/b/north-brewing-co-heliocentric/5533295",
  },
  {
    dato: "11",
    bryggeri: "Verdant",
    navn: "Pulp DIPA",
    land: "UK",
    alkohol: "8,0",
    brødtekst: "tom",
    untappdlink: "https://untappd.com/b/verdant-brewing-co-pulp/1686557",
  },
  {
    dato: "12",
    bryggeri: "Verdant",
    navn: "Neal Gets Things Done IPA",
    land: "UK",
    alkohol: "6,5",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/verdant-brewing-co-neal-gets-things-done/2183923",
  },
  {
    dato: "13",
    bryggeri: "Verdant",
    navn: "Neon Colour Spreading IPA",
    land: "UK",
    alkohol: "6,5",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/verdant-brewing-co-neon-colour-spreading/5158780",
  },
  {
    dato: "14",
    bryggeri: "Track",
    navn: "Sea of Stars DIPA",
    land: "UK",
    alkohol: "8,0",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/track-brewing-company-sea-of-stars/4708694",
  },
  {
    dato: "15",
    bryggeri: "Track",
    navn: "Southern Sun PALE ALE",
    land: "UK",
    alkohol: "5,4",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/track-brewing-company-southern-sun/5541236",
  },
  {
    dato: "16",
    bryggeri: "Left Handed Giant",
    navn: "Double Cheese",
    land: "UK",
    alkohol: "8,4",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/left-handed-giant-double-cheese/5560960",
  },
  {
    dato: "17",
    bryggeri: "Sudden Death",
    navn: "Haze From The Crypt IPA",
    land: "DE",
    alkohol: "6,3",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/sudden-death-brewing-co-haze-from-the-crypt-2023/5560856",
  },
  {
    dato: "18",
    bryggeri: "Salikatt",
    navn: "Dust Devil DIPA",
    land: "NOR",
    alkohol: "8,0",
    brødtekst: "tom",
    untappdlink: "https://untappd.com/b/salikatt-dust-devil/5523659",
  },
  {
    dato: "19",
    bryggeri: "Salikatt",
    navn: "Killdozer DIPA",
    land: "NOR",
    alkohol: "8,0",
    brødtekst: "tom",
    untappdlink: "https://untappd.com/b/salikatt-killdozer/5552453",
  },
  {
    dato: "20",
    bryggeri: "Vault",
    navn: "Vault Dweller",
    land: "USA",
    alkohol: "4,3",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/vault-city-brewing-vault-dweller/5559673",
  },
  {
    dato: "21",
    bryggeri: "Yonder Brewing",
    navn: "Raspberry gose",
    land: "UK",
    alkohol: "4,0",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/yonder-brewing-and-blending-raspberry-gose/3356298",
  },
  {
    dato: "22",
    bryggeri: "Maisels",
    navn: "Bayreuther Hell",
    land: "DE",
    alkohol: "4,9",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/bayreuther-bierbrauerei-bayreuther-brauhaus-hell/116296",
  },
  {
    dato: "23",
    bryggeri: "AleSmith",
    navn: "Barrel-Aged Vietnamese Coffee Speedway Stout (2022)",
    land: "USA",
    alkohol: "14,2",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/alesmith-brewing-company-barrel-aged-vietnamese-coffee-speedway-stout-2022/5055895",
  },
  {
    dato: "24",
    bryggeri: "Track",
    navn: "Always On My Mind PALE ALE",
    land: "UK",
    alkohol: "5,0",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/track-brewing-company-always-on-my-mind/5550312",
  },
] as const;
