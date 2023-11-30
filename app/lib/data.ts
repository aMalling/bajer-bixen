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
    bryggeri: "Other Half",
    navn: "All Citra Everything DIPA",
    land: "USA",
    Alkohol: "8,5",
    brødtekst:
      "Velkommen til Øljulekalenderen anno 2023! \n\nVi glæder os til at rejse igennem julen med kæften fuld af opturslæske alt imens vi deler oplevelsen med hinanden - IRL eller virtuelt. \n\nVi er sindssygt stole over kalenderen i år. Og første øl er vi selv rimelig WTF (Why The Face) over at have fået med. \n\nOther Half er et amerikansk bryggeri som især er kendt for deres IPA’er. Øller der sjældent er til at få fingrene i i DK og som ofte er voldsomt dyre at få “lov” til at købe. \n\nVi synes det er passende at sparke juledøren ind med denne basker af en dobbelt tørhumlet DIPA fra Other Half. For I, kære købere, fortjener det bedste i verden!",
    untappdlink:
      "https://untappd.com/b/other-half-brewing-co-all-citra-everything/1793659",
    dato: "01",
  },
  {
    bryggeri: "Dark Horse",
    navn: "Bourbon Barrel Aged Plead The 5th ",
    land: "USA",
    Alkohol: "11",
    brødtekst:
      '"BANG!" sagde det i jeres alle sind i går. Og vi fortsætter i dag. I det sparker vi døren ind til den tunge ende af årets kalender. Vi skal til Stoutland. Dark Horse Brewing Co. er et amerikansk bryggeri vi faktisk ikke rigtig kender til endnu og glæder os til at lære lidt bedre at kende med jer i dag. \n\nSkål i bourbon fadlagret stout!',
    untappdlink:
      "https://untappd.com/b/dark-horse-brewing-co-bourbon-barrel-aged-plead-the-5th/34285",
    dato: "02",
  },
  {
    bryggeri: "Bayreuther Bierbrauerei\n\n",
    navn: "Bayreuther Hell",
    land: "DE",
    Alkohol: "4,9",
    brødtekst:
      "Traditioner er traditioner er traditioner. \n\nVi skal over til pilsverdenen og skal have en klassisk tysk lager i stilarten Helles. Det er den pilsner man godt vil drikke i slutningen af sin arbejdsdag - smagen af velfortjent fyraften. ",
    untappdlink:
      "https://untappd.com/b/bayreuther-bierbrauerei-bayreuther-brauhaus-hell/116296",
    dato: "03",
  },
  {
    bryggeri: "Salikatt",
    navn: "Killdozer DIPA",
    land: "NOR",
    Alkohol: "8",
    brødtekst:
      "I Norge har Salikatt gang i noget godt. Et bryggeri vi er slemt begejstret for fordi de leverer solid humle på en knivskarp pris. Deres nyklassiker, Slam Dunk, går stadig sin sejrsgang som en prismæssigt tilforladelig DIPA med et højt niveau. \n\nVi har i år fået fat i denne her helt nye bryg, som vi af gode grunde ikke selv har prøvet. De gode folk fra Salikatt har brygget det med en norsk hjemmebrygger og når der både er hvede og havre i, så kan vi forvente noget friskhed og sødme og så noget citrus fra tørhumlen som både er frisk citrahumle og cryocitra.\n\nDIPA DIPA DIPA! LOVE LOVE LOVE!",
    untappdlink: "https://untappd.com/b/salikatt-killdozer/5552453",
    dato: "04",
  },
  {
    bryggeri: "Yonder Brewing",
    navn: "Raspberry gose",
    land: "UK",
    Alkohol: "4",
    brødtekst:
      "Britiske Yonder Brewing har begået dagens øl - en frugtet Gose. Dvs. vi er ude i en sur øl med lidt salt i. Og du tænker sikkert “WIERD!” Hvis ikke du har prøvet det før. Men vent lige en gang, for det her det spiller altså. \n\nDenne frækkert har fået 170g. Britiske hindbær pr. Liter øl og du kan forvente en syrlig, tær omgang med yoghurtnoter og et strejf af salt. ",
    untappdlink:
      "https://untappd.com/b/yonder-brewing-and-blending-raspberry-gose/3356298",
    dato: "05",
  },
  {
    bryggeri: "North",
    navn: "Heliocentric.  IPA",
    land: "UK",
    Alkohol: "6,4",
    brødtekst:
      "For et par år siden var North Brewing Co. det helt store i Danmark. Deres triple fruited gose tog øllandet med storm og deres IPA-sortiment endte med at gøre det samme. Masser af North i landets bottle shops. \n\nSå stilnede det lidt af og det er længere imellem at man lige får sig en god bajs fra North. Men det skal være løgn at I ikke får sådan en i år. \n\nÅrets første IPA. Vi går lidt ned i procenter, men dette giver ofte mere plads til humleprofilen. Som med Killdozer er der også her både hvede og havre, hvilket ofte giver sødme og blødhed. Humleprofilen trækker i retningen af det mere tropiske med stenfrugter og ananas, men noget citrahumle til liiiige at runde skidtet af. Altså… den vil jo det hele… KAN MAN VIRKELIG DET?\n\n",
    untappdlink: "https://untappd.com/b/north-brewing-co-heliocentric/5533295",
    dato: "06",
  },
  {
    bryggeri: "Track",
    navn: "Sea of Stars DIPA",
    land: "UK",
    Alkohol: "8",
    brødtekst:
      "Track Brewing Company er velkendt for alle tidligere ølkalendermodtagere. Og det er af god grund. Track leverer et ekstremt solidt niveau af humledrevne øl. Hvis der står Track på dåsen så kan man bare købe og blive glad. \n\nDenne DIPA er en tur igennem Nelson Sauvin-humlen. Der er både NS-humle i bryggen og i tørhumledelen. Og igen har vi os en humlesag med både hvede og havre, så forvent igen en pokkers smooth mundfølelse. \n",
    untappdlink:
      "https://untappd.com/b/track-brewing-company-sea-of-stars/4708694",
    dato: "07",
  },
  {
    bryggeri: "Timber Ales",
    navn: "ForEverett",
    land: "USA",
    Alkohol: "12",
    brødtekst:
      'Timber Ales var nye i kalenderen sidste år. En ikke-fadlagret stout der virkelig slog benene væk under folket. Sådan en "DAFUK? Er den ikke fadlagret? Hvordan kan det lade sig gøre?". Da chancen bød sig for igen at få en stout-basse fra TA var der ikke så meget at rafle om. \n\nEn stout med vanilje, kaffe og ristede peanuts. Vi håber og beder ølguderne om at denne kan ramme noget i nærheden af sidste års basker. ',
    untappdlink: "https://untappd.com/b/timber-ales-foreverett/4755725",
    dato: "08",
  },
  {
    bryggeri: "Verdant",
    navn: "Pulp DIPA",
    land: "UK",
    Alkohol: "8",
    brødtekst: "tom",
    untappdlink: "https://untappd.com/b/verdant-brewing-co-pulp/1686557",
    dato: "09",
  },
  {
    bryggeri: "Sudden Death",
    navn: "Haze From The Crypt IPA",
    land: "DE",
    Alkohol: "6,3",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/sudden-death-brewing-co-haze-from-the-crypt-2023/5560856",
    dato: "10",
  },
  {
    bryggeri: "Vault",
    navn: "Vault Dweller",
    land: "USA",
    Alkohol: "4,3",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/vault-city-brewing-vault-dweller/5559673",
    dato: "11",
  },
  {
    bryggeri: "Left Handed Giant",
    navn: "Double Cheese",
    land: "UK",
    Alkohol: "8,4",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/left-handed-giant-double-cheese/5560960",
    dato: "12",
  },
  {
    bryggeri: "Track",
    navn: "Southern Sun PALE ALE",
    land: "UK",
    Alkohol: "5,4",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/track-brewing-company-southern-sun/5541236",
    dato: "13",
  },
  {
    bryggeri: "Short Throw Brewing Co.",
    navn: "Backyard Brawl",
    land: "USA",
    Alkohol: "13,1",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/short-throw-brewing-co-backyard-brawl/4950555",
    dato: "14",
  },
  {
    bryggeri: "Salikatt",
    navn: "Dust Devil DIPA",
    land: "NOR",
    Alkohol: "8",
    brødtekst: "tom",
    untappdlink: "https://untappd.com/b/salikatt-dust-devil/5523659",
    dato: "15",
  },
  {
    bryggeri: "Cantilion",
    navn: "Gueuze 100% Lambic Bio (2020)",
    land: "BEL",
    Alkohol: "5,5",
    brødtekst:
      "Jamen altså, jamen altså, jamen altså. Hvad skal vi sige? Det måske mest hypede belgiske lambikbryggeri, Cantillon, leverer år efter år solide lambics til verden, og folk bliver ved med at betale i dyre domme for alle deres sjældne flasker. Vi er virkelig stolte over at kunne præsentere jer for Cantillons smukke øl i år.\n\nFor de uindviede er der i dag tale om en gueuze, hvilket består af et blend af 1, 2 og 3 år gammel lambik. Lambik er øl brygget ved at lade mælkesyrebakterier fra luften starte gæringen af øllet og efterfølgende lade øllet gære på træfade. Bryggeriernes store opgave er så at få smagt på lambikkerne på fadene løbende for at finde ud af, hvornår de skal bruges, og til sidst laver de et blend af fx 5-7 forskellige fade, de mener komplimenterer hinanden godt. Det er et krav, at der skal være 1, 2 og 3 år gammel lambik i blendet. Blendet kommer på flaske og gærer videre og karbonerer så på flasken.\n\nLambics er sure øl, og det er meningen, de skal være sure. Hvis man er ny i denne verden, kan man med fordel gå til øllen med forventning om at smage en spraglet og mousserende naturvin",
    untappdlink:
      "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio-2020/3653264",
    dato: "16",
  },
  {
    bryggeri: "Track",
    navn: "Always On My Mind PALE ALE",
    land: "UK",
    Alkohol: "5",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/track-brewing-company-always-on-my-mind/5550312",
    dato: "17",
  },
  {
    bryggeri: "Hoppin Frog",
    navn: "Rocky Mountain Barrel-Aged Q.O.R.I.S. the Quasher Quadruple Oatmeal Russian Imperial Stout",
    land: "USA",
    Alkohol: "15,7",
    brødtekst:
      "Vi skal I dag have fat med stout fra… USA! For der er vist et mønster omkring årets stouts. . En af de helt tunge af slagsen i en sød lille dåse. En tætpakket stout med nogle alvorlige procenter, som du kan nyde i løbet af din aften. En øl, som formentlig vil trives godt, efter den får lidt mere temperatur. Forvent en superkomprimeret smagsoplevelse og en øl, som ændrer karakter, imens den varmer op",
    untappdlink:
      "https://untappd.com/b/hoppin-frog-brewery-rocky-mountain-barrel-aged-q-o-r-i-s-the-quasher-quadruple-oatmeal-russian-imperial-stout/4566617",
    dato: "18",
  },
  {
    bryggeri: "Verdant",
    navn: "Neon Colour Spreading IPA",
    land: "UK",
    Alkohol: "6,5",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/verdant-brewing-co-neon-colour-spreading/5158780",
    dato: "19",
  },
  {
    bryggeri: "Verdant",
    navn: "Neal Gets Things Done IPA",
    land: "UK",
    Alkohol: "6,5",
    brødtekst: "tom",
    untappdlink:
      "https://untappd.com/b/verdant-brewing-co-neal-gets-things-done/2183923",
    dato: "20",
  },
  {
    bryggeri: "AleSmith",
    navn: "Barrel-Aged Vietnamese Coffee Speedway Stout (2022)",
    land: "USA",
    Alkohol: "14,2",
    brødtekst:
      "AleSmith Brewing Company er et legendarisk amerikans bryggeri som i særdeleshed for deres ekstremt populære klassiker “Speedway Stout”. De har redet på bølgen og lavet et væld af forskellige udgaver. I skal i dag stifte bekendtskab med bourbonfadlagret udgave med vietnamesisk kaffe. Det bliver sikkert rimelig crazy lækkert! \n",
    untappdlink:
      "https://untappd.com/b/alesmith-brewing-company-barrel-aged-vietnamese-coffee-speedway-stout-2022/5055895",
    dato: "21",
  },
  {
    bryggeri: "Cantilion",
    navn: "Kriek 100% Lambic Bio (2023)",
    land: "BEL",
    Alkohol: "6",
    brødtekst:
      "SURPRISE! Vi var simpelthen så umådeligt heldige at vi fik lov til at købe hele to forskellige flasker Cantillon. Og hvilken bedre måde at fejre juleferien på end at få sig en øl med kirsebær i? \n\nVi er igen ude i en lambik og her får i en såkaldt Kriek. En kriek består af et blend af lambik der har ligget og gæret med kirsebær og ufrugtet lambik.\n\nEndnu en sur (med vilje) øl der burde stå som et smukt kontrapunkt til den fløde- og smørfyldte julemad.",
    untappdlink:
      "https://untappd.com/b/brasserie-cantillon-kriek-100-lambic-bio-2023/5181935",
    dato: "22",
  },
  {
    bryggeri: "Other Half",
    navn: "Broccoli DIPA",
    land: "USA",
    Alkohol: "7,9",
    brødtekst:
      "Vi ved godt det er lidt sindsygt, men vi har faktisk endnu en øl fra IPA-mejeriet fra Brooklyn! Der rulles selvfølgelig med en doublet dry-hopped sag. Navnet indikere at denne øl kan anses som værende en del af denne måneds indtag af grøntsager, velbekomme!",
    untappdlink: "https://untappd.com/b/other-half-brewing-co-broccoli/1941131",
    dato: "23",
  },
  {
    bryggeri: "Jackie O's Brewery",
    navn: "Forward Into Yesterday",
    land: "USA",
    Alkohol: "14,2",
    brødtekst:
      "Vi prøver igen med historiens dyreste julekalender øl, som delvist financieres af sidste års infected mushroom fra Prairie. Jackie O’s er kendt for deres fadlagerede stouts og vi har fået fat i en af de mere eksklusive fra deres hånd. Forvent masser af vanilje og smæk fra bourbon tønderne. Forvent ikke inficeret øl, men dråber af himmelsk stout af gedigen, amerikansk superkvalitet.",
    untappdlink:
      "https://untappd.com/b/jackie-o-s-brewery-forward-into-yesterday/4585575",
    dato: "24",
  },
] as const;
