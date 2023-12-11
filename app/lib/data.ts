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
    brødtekst:
      "Der er vist et mønster. Vi skal til UK for at hente god humle år efter år. Og de af jer der har været med flere år ved at vi elsker Verdant. Et bryggeri der var super ekslusivt i DK for nogle år tilbage, men som nu er mere tilgængeligt. Og det er vi glade for! Det er DIPA-tid igen. Og i dag kan I forvente en mere bastant, tropisk og bitter sag. VERDANT ❤️",
    untappdlink: "https://untappd.com/b/verdant-brewing-co-pulp/1686557",
    dato: "09",
  },
  {
    bryggeri: "Sudden Death",
    navn: "Haze From The Crypt IPA",
    land: "DE",
    Alkohol: "6,3",
    brødtekst:
      "Vi skal prøve noget nyt og vildt i dag. Vi skal have humle fra Tyskland. Sudden Death kan godt lide gysere og så kan de godt lide sprød IPA. Sammen med Fuerst Wiacek står de for noget af det bedste IPA fra Tyskland. I dag får i humle fra krypten og hvis vi kender SD så er den tungt tørhumlet og sådan en IPA der er kvart i DIPA",
    untappdlink:
      "https://untappd.com/b/sudden-death-brewing-co-haze-from-the-crypt-2023/5560856",
    dato: "10",
  },
  {
    bryggeri: "Vault",
    navn: "Vault Dweller",
    land: "USA",
    Alkohol: "4,3",
    brødtekst:
      "Vault laver en vanvittig bred palette af sours fra Skotland. De er i høj grad til at komme til for penge og plejer at holde niveau. Dette er årets LOL-øl. For farven… den kan I glæde jer til. Forvent en voldsomt sur øl, hevet direkte op fra Edinburghs kloaksystemer. Skål i kloak! ",
    untappdlink:
      "https://untappd.com/b/vault-city-brewing-vault-dweller/5559673",
    dato: "11",
  },
  {
    bryggeri: "Left Handed Giant",
    navn: "Double Cheese",
    land: "UK",
    Alkohol: "8,4",
    brødtekst:
      "Vi skal selvfølgelig til UK igen for at hente humlevæske. Left Handed Giants’ klassiker, Cheeseburger Cavalry, er her nået sit næste udviklingsstadie. Øllen er en del af en hyldest til CC hvor de har brygget øllen i tre forskellige udgaver: pale ale, original og DIPA. Dagens øl markerer også halvvejen for årets øljulekalenderrejse… Er I klar til den længste slutspurt nogensinde?",
    untappdlink:
      "https://untappd.com/b/left-handed-giant-double-cheese/5560960",
    dato: "12",
  },
  {
    bryggeri: "Track",
    navn: "Southern Sun PALE ALE",
    land: "UK",
    Alkohol: "5,4",
    brødtekst:
      "Hey? Vidste I godt at de laver en del god pale ale, IPA og DIPA i UK? Ok, klart… det vidste I godt. Men vidste I så også godt at Track er et af de bryggerier vi holder vældig meget af i denne kategori? Nårh, ok… så det vidste I også godt. Men vidste I så også godt at dele af øljulekalender teamet bliver tiltagende glad for pale ales fordi han synes det giver mere plads til at humleprofilen står skarpt frem?  NÆH! Det vidste I da sikkert ikke. I dag skal vi ned i procenter og I får en pale ale fra humletrykkekunstnerne fra Track. De lave procenter skulle give jer mulighed for bedre at smage hvad den nye humle, Superdelic, kan sammen med Citra, Citra Cryo og Mosaic.",
    untappdlink:
      "https://untappd.com/b/track-brewing-company-southern-sun/5541236",
    dato: "13",
  },
  {
    bryggeri: "Short Throw Brewing Co.",
    navn: "Backyard Brawl",
    land: "USA",
    Alkohol: "13,1",
    brødtekst:
      "Sidste år øljulekalendermodtagere stiftede bekendtskab med amerikanske Short Throw Brewing Co. i form af en kettle sour med mango og abrikos. I år skal vi til et helt andet sted med STBC. En double pastry stout der har lagret med Vermont ahorn sirup, skumfiduser, ristet kokos, kanel og kaffebønner. En klog mand sagde en dag: de bedste stouts i verden har lidt kanel i sig… nogle af de værste stouts i verden har lidt kanel i sig. Vi håber at denne her rammer the sweet spot med sødme, bitterhed, kokos og kanelkrydder. ",
    untappdlink:
      "https://untappd.com/b/short-throw-brewing-co-backyard-brawl/4950555",
    dato: "14",
  },
  {
    bryggeri: "Salikatt",
    navn: "Dust Devil DIPA",
    land: "NOR",
    Alkohol: "8",
    brødtekst:
      "En julebekendelse: beskrivelserne af øllene er ikke alle lavet før december. Ofte laves de løbende. Dagens er ingen undtagelse. Det har haft den betydning at forfatteren af denne tekst ved at den første Salikatt-øl, Killdozer, gik rent ind hos mange. Salikatts humlegame er så latterligt stærkt og det var en no-brainer at hive endnu en DIPA fra norge ind i årets lineup. Så værsgo’ til jer - from Norway with love. Endnu en formentlig voldsomt velafbalanceret DIPA! ",
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
    brødtekst:
      " I dag får I mere af det samme… og så med et lille twist. For ved første øjekast kunne man tænke “jamen… jeg har da allerede fået en pale ale fra Track… og den var det godt. Men skal jeg virkelig have endnu en?”. Og svaret er “Ja, det skal du, men var der måske lige den helt nye humle, Kohia Nelson, i den?”. NEJ! Det var der ikke. Og her kommer der lige lidt historie til nørderne. Freestyle Hops, som hører til i New Zealand, prøver alt muligt af. Her har de lavet humlepiller der er en blanding af Nelson Sauvin og Rakau-humle. Så har de fået fat i en masse passionsfrugter fra NZ, tørret dem, fjerne frø og så blandet dem med humlerne inden de er lavet til humlepiller til ølbrygning. Vi er meget spændt på dette eksperiment og glæder os til at høre hvad I siger til det. ",
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
    brødtekst:
      "Verdant, Verdant, Verdant. Ja, ja, ja. Der har efterhånden været mange øl fra Verdant i kalenderen igennem årene, men vi er lige stoked hver gang vi skal servere det for jer. Der er svært at sige mere om Verdant eller om IPA, så lad os i stedet dykke ned i humlerne. Nectaron® er udviklet af firmaet NZ Hops og har taget 17 år at opdyrke. Den er ny, den er hypet og den skulle ananas, passionsfrugt og stenfrugter. Ved siden af Nectaron® suppleres der op med Idaho7 og Citra. Forvent en yderst frugtet IPA i den tropiske ende af frugtskalaen.",
    untappdlink:
      "https://untappd.com/b/verdant-brewing-co-neon-colour-spreading/5158780",
    dato: "19",
  },
  {
    bryggeri: "Verdant",
    navn: "Neal Gets Things Done IPA",
    land: "UK",
    Alkohol: "6,5",
    brødtekst:
      "WHAT? SKER DER? Troede I lige at man da kunne regne med at man ikke får øl fra samme bryggeri to dage i streg? Og hvis man gør, så kan man da ikke få samme ølstil to dage i streg? Think again! Intet er sikkert i øljulekalendere og humlebussen fra Verdant kører igen en IPA ud til folket. En juicy blanding af humleklassikerne Simcoe, Citra, Mosaic og Nelson Sauvin. ",
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
