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
      "bryggeri": "Azvex Brewing Company",
      "navn": "Circadian Rhythm",
      "land": "England",
      "Alkohol": "6.8%",
      "brødtekst": "Velkommen til Øljulekalenderen anno 2024!  Vi glæder os til at rejse igennem julen med kæften fuld af opturslæske alt imens vi deler oplevelsen med hinanden - IRL eller virtuelt. Vi er som altid stolte over kalenderen i år. Som I går igennem kalendere vil I formentlig kunne se at vi i år har prøvet noget nyt - vi har nemlig lidt flere billigere og lidt flere ræddi dyre øl med i år.   Azvex Brewing Company har i allerhøjeste grad gjort deres indtog på den danske humlescene i løbet af det seneste års tid. Og det med god grund!  Det Liverpool-baserede bryggeri har fuldt fokus på de humlede sager og ligesom sine landsfæller Track, Verdant og Cloudwater, så har de altså styr på at lave IPA/DIPA. En god tester for et bryggeri med humlefokus er at få deres IPA - så er der smæk på humlen uden at den bliver gemt for meget væk i alkoholprocenterne. Så goddag til Azvex - det bliver sikkert ikke sidste gang du skal have en øl fra dem",
      "untappdlink": "https://untappd.com/b/azvex-brewing-company-circadian-rhythm/6015122",
      "dato": "01"
  },
  {
      "bryggeri": "Two Flints Brewery",
      "navn": "Like a Glove",
      "land": "England",
      "Alkohol": "5,50%",
      "brødtekst": "Vi er miljøvenlige og bliver i England. Ingen flyvninger i dag. En bette bustur måske. Afsted til Windsor hvor vi finder Twi Flints Brewery som har begået denne pale ale. Forvent florale noter og lidt tropefrugt. Mon ikke man kunne drikke denne og ønske sig at man lige have et par stykker mere? ",
      "untappdlink": "https://untappd.com/b/two-flints-brewery-like-a-glove/5990079",
      "dato": "02"
  },
  {
      "bryggeri": "Holy Goat",
      "navn": "Starhammer",
      "land": "Scotland",
      "Alkohol": "6%",
      "brødtekst": "Yer lookin’ a bit peely wally! Ville være en fuldstændig almindelig ting at høre hvis man tog hen til denne øls oprindelsesland: SCOTLAND! Vi har før været forbi Holy Goat og vi synes de er fuldstændig stabile i deres levering af sure øl. Denne øl er fermenteret med brettanomyces  og 220g stjernefrugt pr. liter øl. Forvent en fræk syrlig øl med noter af stenfrugt og ja... bare noget funky shit!",
      "untappdlink": "https://untappd.com/b/holy-goat-brewing-starhammer/5690594",
      "dato": "03"
  },
  {
      "bryggeri": "Saint Errant",
      "navn": "Mother of Sighs",
      "land": "USA",
      "Alkohol": "7,50%",
      "brødtekst": "Over atlanten skal vi da for første gang i år! For derovre kan de også lave humleøl. Saint Errant mener selv at de skal være kendte for deres mixed fermentation øl, men pøblen vil det anderledes - pøblen elsker nemlig deres IPA/DIPA-show. Vi skal have os en tåget IPA (som med sine 7.5% skæver lidt mod DIPA-kategorien) med både Citra og Citra Cryo humle - så at forvente noget citrus ville nok ikke være fuldstændig ved siden af. ",
      "untappdlink": "https://untappd.com/b/saint-errant-brewing-mother-of-sighs/5882582",
      "dato": "04"
  },
  {
      "bryggeri": "Root + Branch Brewing",
      "navn": "The Castle: Strata",
      "land": "USA",
      "Alkohol": "5,50%",
      "brødtekst": "OKOKOKOK! SÅ SKER DET! NU BLIVER DET VILDT! Vi bliver i USA og I får i dag en øl fra det überhypede IPA-bryggeri Root & Branch Brewing. Og de kan altså finde ud af at brygge alt fra pale ales til TIPA'er og hit-raten på det de laver en fænomenal.  Det er med meget stor glæde og stolthed at vi i dag siger SKÅL i Root & Branch! <3 Nyd en øl som man sjældent kan få fingrene i i DK. ",
      "untappdlink": "https://untappd.com/b/root-branch-brewing-the-castle-strata/4984653",
      "dato": "05"
  },
  {
      "bryggeri": "AleSmith Brewing Company",
      "navn": "Speedway Stout",
      "land": "USA",
      "Alkohol": "12%",
      "brødtekst": "Mere USA! Blandt de absolut mest legendariske og klassiske stouts i verden finder vi denne: Speedway Stout fra Alesmith. Vi har tidligere haft en anden udgave af den med i kalenderen, men nu får I lov til at prøve the original gangster!  Der er tale om en clean stout med masser af smæk på de klassiske stoutnoter: kaffe, bitterhed og alkofylde. Ikke en masse tilsætningsstoffer, skumfiduser eller ahornsirup - bare en solid og velbrygget stout fra USA. Enjoy!",
      "untappdlink": "https://untappd.com/b/alesmith-brewing-company-speedway-stout/923",
      "dato": "06"
  },
  {
      "bryggeri": "Basqueland Brewing",
      "navn": "Salsa Verde",
      "land": "Spanien",
      "Alkohol": "10%",
      "brødtekst": "Igen skal vi prøve noget nyt og vildt i Øljulekalenderen. Aldrig før har vi budt jer en TIPA (right!?) For 4-5 år siden blev der spyttet en del TIPA'er ud, men der var længere mellem snapsene. Mange af dem var enten ekstremt søde og nærmeste kvalme eller decideret sprittede. Men verden udvikler sig - elbiler bliver billigere og bryggerier finder måder at brygge TIPA'er på som faktisk gør dem helt spændende at prøve af. Basqueland Brewing har begået denne her frækkert af en TIPA som I nok kan forvente er noget af koncentreret eksplosion af humle!",
      "untappdlink": "https://untappd.com/b/basqueland-brewing-salsa-verde/6021613",
      "dato": "07"
  },
  {
      "bryggeri": "Copenhagen Commons",
      "navn": "CopenPils",
      "land": "Danmark",
      "Alkohol": "5%",
      "brødtekst": "En dansk newcomer. Copenhagen Commons fokuserer hovedsageligt på klassiske øltyper og denne øl er ingen undtagelse. En tysk classic pils. En øl der skulle gøre enhver hårdtarbejdende person glad og tilfreds når dagen går på hæld. Skål i classic!",
      "untappdlink": "https://untappd.com/b/copenhagen-commons-copenpils/5662553",
      "dato": "08"
  },
  {
      "bryggeri": "Mikerphone",
      "navn": "Mikerphone Brewing",
      "land": "USA",
      "Alkohol": "8%",
      "brødtekst": "Ooooog vi skal have en DIPA! Oooooog vi skal til USA for at få fingrene i den. Oooooog den smager sikkert rimelig lækkert. Oooooog det her er den mest solgte Mikerphone øl nogensinde.... ooooooog det er der nok en rimelig god grund til! Dobbelt tørhumlet DIPA med Citraaaaaa! I ved det bliver godt!",
      "untappdlink": "https://untappd.com/b/mikerphone-brewing-mikerphone-check-1-2/1841083",
      "dato": "09"
  },
  {
      "bryggeri": "Weldwerks",
      "navn": "Coffee Peanut Butter Vanilla Imperial Stout",
      "land": "USA",
      "Alkohol": "9%",
      "brødtekst": "Før første gang nogensinde kan vi byde velkommen til bryggeriet WeldWerks. Et amerikansk bryggeri som i Danmark mest af alt er kendt for at lave øl man ikke kan få fat i. De laver nogle fuldstændig groteske øl (som fx en kokosstout så tykflydende at man kan være nødsaget til at hamre i bunden på den som en anden glasflaske med Heinz ketchup) hvor det absolut intet er sparet på. På en eller anden måde er deres bryggestil lige præcis ligeså voldsom, overdrevet og Ja-hats-præget som oprindelseslandet. More is more, men mon de 9% kunne pege i retningen af en øl der måske ikke er voldsommere end at den kan nyde fra ende til anden ?",
      "untappdlink": "https://untappd.com/b/weldwerks-brewing-co-coffee-peanut-butter-vanilla-imperial-stout/3913680",
      "dato": "10"
  },
  {
      "bryggeri": "Azvex Brewing Company",
      "navn": "Charoit of Helios",
      "land": "England",
      "Alkohol": "8%",
      "brødtekst": "",
      "untappdlink": "https://untappd.com/b/azvex-brewing-company-chariot-of-helios/6015126",
      "dato": "11"
  },
  {
      "bryggeri": "Polly's Brew Co.",
      "navn": "Club Floral/Dream Sound",
      "land": "Wales",
      "Alkohol": "6,5/5,4%",
      "brødtekst": "",
      "untappdlink": " https://untappd.com/b/polly-s-brew-co-dream-sound/6009259",
      "dato": "12"
  },
  {
      "bryggeri": "Brasserie Cantillon",
      "navn": "Gueuze 100% Lambic Bio",
      "land": "Belgien",
      "Alkohol": "5%",
      "brødtekst": "",
      "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
      "dato": "13"
  },
  {
    "bryggeri": "Brasserie Cantillon",
    "navn": "Gueuze 100% Lambic Bio",
    "land": "Belgien",
    "Alkohol": "5%",
    "brødtekst": "",
    "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
    "dato": "14"
  },  
  {
  "bryggeri": "Brasserie Cantillon",
  "navn": "Gueuze 100% Lambic Bio",
  "land": "Belgien",
  "Alkohol": "5%",
  "brødtekst": "",
  "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
  "dato": "15"
  },
  {
    "bryggeri": "Brasserie Cantillon",
    "navn": "Gueuze 100% Lambic Bio",
    "land": "Belgien",
    "Alkohol": "5%",
    "brødtekst": "",
    "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
    "dato": "16"
  },
  {
    "bryggeri": "Brasserie Cantillon",
    "navn": "Gueuze 100% Lambic Bio",
    "land": "Belgien",
    "Alkohol": "5%",
    "brødtekst": "",
    "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
    "dato": "17"
  },  
  {
  "bryggeri": "Brasserie Cantillon",
  "navn": "Gueuze 100% Lambic Bio",
  "land": "Belgien",
  "Alkohol": "5%",
  "brødtekst": "",
  "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
  "dato": "18"
  },
  {
    "bryggeri": "Brasserie Cantillon",
    "navn": "Gueuze 100% Lambic Bio",
    "land": "Belgien",
    "Alkohol": "5%",
    "brødtekst": "",
    "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
    "dato": "19"
  },
  {
    "bryggeri": "Brasserie Cantillon",
    "navn": "Gueuze 100% Lambic Bio",
    "land": "Belgien",
    "Alkohol": "5%",
    "brødtekst": "",
    "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
    "dato": "20"
  },  
  {
  "bryggeri": "Brasserie Cantillon",
  "navn": "Gueuze 100% Lambic Bio",
  "land": "Belgien",
  "Alkohol": "5%",
  "brødtekst": "",
  "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
  "dato": "21"
  },
  {
    "bryggeri": "Brasserie Cantillon",
    "navn": "Gueuze 100% Lambic Bio",
    "land": "Belgien",
    "Alkohol": "5%",
    "brødtekst": "",
    "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
    "dato": "22"
  },
  {
    "bryggeri": "Brasserie Cantillon",
    "navn": "Gueuze 100% Lambic Bio",
    "land": "Belgien",
    "Alkohol": "5%",
    "brødtekst": "",
    "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
    "dato": "23"
  },  
  {
  "bryggeri": "Brasserie Cantillon",
  "navn": "Gueuze 100% Lambic Bio",
  "land": "Belgien",
  "Alkohol": "5%",
  "brødtekst": "",
  "untappdlink": "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
  "dato": "24"
  }
] as const;
