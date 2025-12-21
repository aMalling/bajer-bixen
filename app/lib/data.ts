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
    navn: "Ticker Shock",
    land: "USA",
    Alkohol: "8,5",
    brødtekst:
      "Velkommen til Øljulekalenderen 2025! \nVi har, som altid, glædet os helt ustyrligt til at servere øl for jer igennem december. Vi håber at vi i denne gruppe igennem december kan dele glædelige stunder og vilde øloplevelser med hinanden. Igennem december opfordres I til at poste så mange billeder, kommentarer og hyggelige inputs som I overhovedet har lyst til. \nVi starter i år ud med en tur over atlanten. USA har jo tjek på deres humle og vi har været svineheldige, at få mulighed for at præstentere jer for en eksklusiv omgang humlesuppe fra Other Half. Svært at forestille sig at starte december OG ugen ud på en mere træfsikker måde end med en DIPA fra Other Half. Tørhumlet tåget sag med en hulens masse amerikansk humle i. \nSKÅL OG GLÆDELIG 1. DECEMBER <3 <3 ",
    untappdlink:
      "https://untappd.com/b/other-half-brewing-co-ticker-shock/4307974",
    dato: "01",
  },
  {
    bryggeri: "Põhjala",
    navn: "More Than Amber",
    land: "Estland",
    Alkohol: 13,
    brødtekst:
      "En gammel estisk kending, vi har flere gange før haft besøg fra Põhjala i ØJ og det har vi fordi vi synes de laver nogle nice øl. Især deres mørke sager kan noget og de tidligere øl har ligesom den her, været fra deres Celler Series - en serie vi elsker og som har høj kvalitet uden du behøver at tømme hele sparegrisen. \nDagens låge er faktisk en porter, og nej vi gider ikke forklare forskellen på en porter og en stout. Øllet har hygget sig 2 år på cognacfade, hvilket giver en anderledes tilføjelse, end de bourbonfade som man måske er vant til. Vi håber i har tid til at hygge om den her fætter, måske med julekalender eller PL som en lækker sidevogn.",
    untappdlink:
      "https://untappd.com/b/pohjala-more-than-amber-cellar-series/6053421",
    dato: "02",
  },
  {
    bryggeri: "Arpus x Blood Brothers",
    navn: "TDH Peacharine X Taiheke X Riwaka IPA",
    land: "Letland/Canada",
    Alkohol: "6,5",
    brødtekst:
      "Vi holder lige gang i det baltiske tema. \nLettiske Ārpus har haft godt fat med kettle sours i en del år. De seneste år er de kommet virkelig godt i gang med deres humleøl. I år har de teamet op med en række knivskarpe amerikanske bryggeri for at lave colabs. I får i dag den øl de har lavet med amerikanske Blood Brothers.\nDer venter jer i dag det man forhåbentlig vil kalde en vaskeægte bælle-IPA. En spændende bælle-IPA. Og det er lige det i mangler på sådan en onsdag. ",
    untappdlink:
      "https://untappd.com/b/arpus-brewing-co-arpus-x-blood-brothers-tdh-peacharine-x-taiheke-x-riwaka-ipa/6447587",
    dato: "03",
  },
  {
    bryggeri: "Observatoriet",
    navn: "Luminosa Oak Juice",
    land: "Danmark",
    Alkohol: "6,5",
    brødtekst:
      "Sidste år debuterede danske Observatoriet i ØJ med bragende succes. Vi fik os en snak med brygmesteren Simon Thoft Hansen på Aarhus Together, smagte noget ny øl og skulle selvfølgelig have hans øl med igen. \nObservatoriet har specialiseret sig i wild ales og her får i en egetræsfadlagret en af slagsen. Forvent citrusfriskhed, appelsinskal og en øl som kan hjælpe dig tilbage til sommerens varme. For på denne torsdag har du brug for lige at mærke sommerens varme i en dansk wild ale!",
    untappdlink:
      "https://untappd.com/b/observatoriet-luminosa-oak-juice/6432445",
    dato: "04",
  },
  {
    bryggeri: "Other Half",
    navn: "Green Dots",
    land: "USA",
    Alkohol: "6,8",
    brødtekst:
      "Arrrrrhhmen, hvad har I da gjort, I skal ha' det så godt? \nFor anden gang i år er i de heldige vinderen af en øl fra Other Half. I dag går vi lidt ned i procenter, men hoooold nu op for en øl der venter jer. Vi smagte denne øl i den danske forsommer og for én af ØJ-nisserne står den på top 3 over bedste IPA'er i 2025. \nWeekenden er over os. ØJ drysser humlesne. Livet er godt. ",
    untappdlink:
      "https://untappd.com/b/other-half-brewing-co-green-dots/4048213",
    dato: "05",
  },
  {
    bryggeri: "Timber Ales",
    navn: "Vanilla Lumberjack Style",
    land: "USA",
    Alkohol: 12,
    brødtekst:
      'Vi bliver i USA, men skifter den lyse humlevæske ud med en omgang mørke, gyldne dråber fra Timbers Ales. \nVi har tre gange tidligere haft stouts med fra Timber Ales og særligt ""Chasing Darkness"" og ""Blended With Lumber #3"" vakte stor glæde blandt det drikkende folk. Vi greb straks muligheden da vi igen fik mulighed for at stacke op på en omgang Timber Ales stout. Her får I en mørk basse der har hygget sig med vaniljekorn og ahornsirup. Den har IKKE ligget på fade, men hvis man lige husker tilbage på ""Chasing Darkness"", så husker man måske en KÆMPE øl der ikke havde været på fade. Vi tror på det samme her! ',
    untappdlink:
      "https://untappd.com/b/timber-ales-vanilla-lumberjack-style/6093780",
    dato: "06",
  },
  {
    bryggeri: "Verdant",
    navn: "It’s Cliched to be Cynical at Christmas",
    land: "England",
    Alkohol: "6,5",
    brødtekst:
      "Så er der juleøl, det går jo ikke med en kalender uden en RIGTIG juleøl, selvom vi vist har præsteret netop det op til flere gange, men i år har vores britiske favoritter fra Verdant begået denne lille perle af en IPA, som så tilmed har en julet navn og udseende. Så den måtte vi have med. Vi håber i nyder denne humlesuppe som er tilsat Mosaic, Galaxy og Strata.",
    untappdlink:
      "https://untappd.com/b/verdant-brewing-co-it-s-cliched-to-be-cynical-at-christmas/6435185",
    dato: "07",
  },
  {
    bryggeri: "De La Senne",
    navn: "Taras Boulba",
    land: "Belgien",
    Alkohol: "4,5",
    brødtekst:
      "I kender parolen, det meste i vores kalender er enten humlet, surt eller mørkt, men af og til finder vi også plads til en afstikker. De afstikkere er faktisk af flere omgange kommet fra belgiske Brasserie de la Senne. Et bryggeri som er kendt for nogle mere traditionelle ølstile. Dagens øl er ingen undtagelse, da vi har med en humlet belgisk blonde at gøre. Forvent en frisk lille flaske, som den perfekte start på ØJ’s uge to.",
    untappdlink:
      "https://untappd.com/b/brasserie-de-la-senne-taras-boulba/13355",
    dato: "08",
  },
  {
    bryggeri: "Ārpus X Outer Range Brewing Co",
    navn: "Watermelon X Mint X Lime Smoothie Sour Ale",
    land: "Letland/USA",
    Alkohol: "4,5",
    brødtekst:
      'De seneste 3-5 år er smoothie sours blevet en rimelig hype ting. En ting der nok lidt får folk i ""love it or hate it""-mode. Hvis man husker tilbage til d. 4. december, så ved man at Ārpus har lavet en række colabs i år. Her får I endnu en af dem og nu sammen med amerikanske Outer Range Brewing Co. \nOg du siger, at du vil godt vide hvorfor man nu kalder det en smoothie sour? Det vil vi godt fortælle dig. Det der sker er, at du hælder en væske op og denne væske er tyk og cremet som en smoothie - fyldt med frugtsedimenter. Kan vi anbefale at du drikker denne og springer morgenmaden over? Det kunne vi måske godt, men det må vi sikkert ikke.\nNyd en af årets frrrrrrrrrække øl!',
    untappdlink:
      "https://untappd.com/b/arpus-brewing-co-arpus-x-outer-range-brewing-co-watermelon-x-mint-x-lime-smoothie-sour-ale/6447593",
    dato: "09",
  },
  {
    bryggeri: "Evil Twin NYC",
    navn: "The Great Nothern #49",
    land: "USA",
    Alkohol: "12,8",
    brødtekst:
      "OKOKOKOK! Mikkels onde bror, Jeppe, har sit kære bryggeri i New York, men han er jo dansk og man kunne da godt argumenterer for at øllen som minimum er halvdansker. \nEvil Twin NYC haft i nogle år haft gang i deres ambitiøse Great Northern Barre-Ages Series. I en kælder sort som kul eksperimenterer de med at fadlagre alle mulige forskellige mørke øl i LAAAANG tid og så blander de øllene sammen på kryds og tværs og lader dem fermenterer videre. Her får i en strong ale (og nej... heller ikke i dag vil vi spilde jeres tid på at beskrive forskel på strong ale og stout) der har været på camping i en Willet Bourbon-tønde i knap tre år og blendet med barleywine. \nHar vi tidligere sagt hvor begejstrede vi er for bryggerier der laver små dåser af eksklusiv øl som man bare lige kan sidde og drikke for sig selv? \n",
    untappdlink:
      "https://untappd.com/b/evil-twin-brewing-nyc-the-great-northern-barrel-aged-series-49-released-01-31-25/6141927",
    dato: "10",
  },
  {
    bryggeri: "Bad Seed",
    navn: "Super Fuzz",
    land: "Danmark",
    Alkohol: 8,
    brødtekst:
      "Fra halvdansk til heldansk. Fra mørkeland til humleland. \nSpørger man os, så er Bad Seed er et af de mest spændende danske bryggerier for tiden. De laver knivskarpe west coast IPA'er, laver moderne west coast IPA'er som både har det tørhumlede og det bitre, de laver virkelig gode stouts (til virkelig gode penge!) og så har de også fået gang i at lave de tørhumlede og tågede new england IPA'er. \nI det skal vi have en DIPA fra deres hånd og I kan forvente (og vi håber på) en PIVFRISK og lys DIPA med kæmpe meget smæk på humlen. Forvent tropiske frugter, stenfrugt og citrus. \nUngerne får fredagsslik. Og det gør du også. For det fortjener du. For du har været godt på arbejdet i denne uge. Og du har været sød ved folk omkring dig. Og nu skal du være sød ved dig selv. ",
    untappdlink: "https://untappd.com/b/bad-seed-brewing-super-fuzz/6425151",
    dato: "11",
  },
  {
    bryggeri: "Fat Orange Cat",
    navn: "Roll Me One Of Those Cowboy with Chocolate, Coffee & Caramel",
    land: "USA",
    Alkohol: 13,
    brødtekst:
      "I dag byder vi hjerteligt velkommen til et nyt ØJ-bryggeri: amerikanske Fat Orange Cat\nFOC laver både humle, surt og sort og vi var så heldige at få lov til at købe ind da der kom en sendig til DK tidligt på året. Roll Me One... er en stout-serie med forskellige adjunctsammensætninger. Intet fadlagret, bare god gammeldaws stuuuut med chokolade, kaffe og karamel. Vi forventer noget i retningen af en dessertstout med more is more-viben kørende for sig. \nUngerne får fredagsslik. Og det gør du også. For det fortjener du. For du har været godt på arbejdet i denne uge. Og du har været sød ved folk omkring dig. Og nu skal du være sød ved dig selv. ",
    untappdlink:
      "https://untappd.com/b/fat-orange-cat-brew-co-roll-me-one-of-those-cowboy-with-chocolate-caramel-and-coffee/6086000",
    dato: "12",
  },
  {
    bryggeri: "Fuerst Wiacek ",
    navn: "Hotline ",
    land: "Tyskland",
    Alkohol: 8,
    brødtekst:
      "I dag skal vi have en af de der øl der ikke er så meget nyt at sige om. DIPA? Det kender i. Måske I skal se noget PL-bold, skiskydning eller andet sportsguf. Passer perfekt til. Og tyske Fuerst Wiacek laver sædvanligvis snorlige IPA/DIPA og der er absolut ingen grund til at forvente anden end en hamrende lækker DIPA til din lørdag aften",
    untappdlink:
      "https://untappd.com/b/fuerst-wiacek-berlin-hotline-2025/6430164",
    dato: "13",
  },
  {
    bryggeri: "Other Half",
    navn: "Dank Ivy",
    land: "USA",
    Alkohol: "7,2",
    brødtekst:
      "Og så troede I nok at forkælelserne med Other Half måtte stoppe. Men nej. ØJ vil jer kun det bedste og endnu en OH-øl skal I da have. Kommer der mon flere fra OH? Ingen ved det... eller... vi ved det. Men ved I det? Det gør I kun hvis I har snydt foran. Og det har I måske... eller måske ikke. Men i dag skal I bare nyde denne luksusøl og nyde 3. Søndag i advent. ",
    untappdlink: "https://untappd.com/b/other-half-brewing-co-dank-ivy/4368954",
    dato: "14",
  },
  {
    bryggeri: "Westbrook",
    navn: "Gose",
    land: "USA",
    Alkohol: 4,
    brødtekst:
      "Westbrook har lavet en legendarisk gose - og det er denne. Vi har tidligere fået en variant med agurk og den var lidt meget a-gurk i det. Men denne her fuldstændig plain gose fra Westbrook skuffer simpelthen bare aldrig. Det er en satans god øl med lige præcis den salt og koriander i som der nu skal være i, når man vil lave en klassisk gose. Ingen frugt. Ikke dikkedarer. Bare en sur/salt øl til at klare den sur-salte start på ugen du har gang i. \nP.s. Deres limeudgave af gosen er VIRKELIG fræk også!",
    untappdlink: "https://untappd.com/b/westbrook-brewing-co-gose/155824",
    dato: "15",
  },
  {
    bryggeri: "Arpus x Messorem",
    navn: "TDH Superdelic X Nectaron X Motueka X Citra DIPA",
    land: "Letland/Canada",
    Alkohol: 8,
    brødtekst:
      "For tredje gang skal vi have fat i et af Ārpus' collabs - denne gang med canadiske Messorem. Messorem har ramt Danmark i 2025 og deres hypede øl har levet op til deres rygter - for træfsikkerheden har været 100% på det vi har smagt på dem. Virkelig velbryggede øl der matcher de bedste amerikanske humlebryggere.\nI dag står den på DIPA og vi gider ikke sige mere end det - for vi ved at næsten alle elsker DIPA selvom DIPA ikke er så spændende. Men sommetider vil man ikke have det spændende. Sommetider vil man godt bare have det rart. Og det er faktisk og bare helt i orden. ",
    untappdlink:
      "https://untappd.com/b/arpus-brewing-co-arpus-x-messorem-tdh-superdelic-x-nectaron-x-motueka-x-citra-dipa/6447588",
    dato: "16",
  },
  {
    bryggeri: "Cantillon",
    navn: "Gueuze 100% Lambic Bio",
    land: "Belgien",
    Alkohol: 5,
    brødtekst:
      "Hvis man har flere år på bagen som del af ØJ-fællesskabet, så ved man også at vi ynder at have en gueuze med fra et af vores to yndlingslambikbryggerier - 3 Fonteinen eller Cantillon. I år er turen kommet til Cantillons gueuze. \nFor de uindivede er der her tale om spontangæret belgisk ale, som efterfølgende har haft tid på træfade. På et tidspunkt render deres brygmester rundt og sampler smagsprøver fra tønderne og beslutter derefter hvordan han vil blande forskellige tønder af 1, 2 og 3 år gammel lambik. Efterfølgende fermenterer det videre på flasker - også her det får sin karbonering. \nCantillons gueuze er typisk lidt mindre karboneret end andre gueuzer og har sin helt egen karakterfulde smag - man er sjældent i tvivl om at det er Cantillon-gueuze man har fået ind i svælget. \nHyg jer med lidt sur julestemning!",
    untappdlink:
      "https://untappd.com/b/brasserie-cantillon-gueuze-100-lambic-bio/56829",
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
      "Verdant, Verdant, Verdant. Ja, ja, ja. Der har efterhånden været mange øl fra Verdant i kalenderen igennem årene, men vi er lige stoked hver gang vi skal servere det for jer. \nDer er svært at sige mere om Verdant eller om IPA, så lad os i stedet dykke ned i humlerne. Nectaron® er udviklet af firmaet NZ Hops og har taget 17 år at opdyrke. Den er ny, den er hypet og den skulle ananas, passionsfrugt og stenfrugter. Ved siden af Nectaron\u0012® suppleres der op med Idaho7 og Citra. \nForvent en yderst frugtet IPA i den tropiske ende af frugtskalaen. ",
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
      "WHAT? SKER DER?\nTroede I lige at man da kunne regne med at man ikke får øl fra samme bryggeri to dage i streg? Og hvis man gør, så kan man da ikke få samme ølstil to dage i streg?\nThink again! \nIntet er sikkert i øljulekalendere og humlebussen fra Verdant kører igen en IPA ud til folket. En juicy blanding af humleklassikerne Simcoe, Citra, Mosaic og Nelson Sauvin. ",
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
      "AleSmith Brewing Company er et legendarisk amerikans bryggeri som i særdeleshed er kendt for deres ekstremt populære klassiker “Speedway Stout”. De har redet på bølgen og lavet et væld af forskellige udgaver. I skal i dag stifte bekendtskab med en bourbonfadlagret udgave med vietnamesisk kaffe. Det bliver sikkert rimelig crazy lækkert! \n",
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
      "SURPRISE! Vi var simpelthen så umådeligt heldige at vi fik lov til at købe hele to forskellige flasker Cantillon. Og hvilken bedre måde at fejre juleferien på end at få sig en øl med kirsebær i? \nVi er igen ude i en lambik og her får i en såkaldt Kriek. En kriek består af et blend af lambik der har ligget og gæret med kirsebær og ufrugtet lambik.\nEndnu en sur (med vilje) øl der burde stå som et smukt kontrapunkt til den fløde- og smørfyldte julemad.",
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
      "Vi prøver igen med historiens dyreste julekalender øl, som delvist financieres af sidste års infected mushroom fra Prairie. Jackie O’s er kendt for deres fadlagerede stouts og vi har fået fat i en af de mere eksklusive fra deres hånd. Forvent masser af vanilje og smæk fra bourbon tønderne. Forvent ikke inficeret øl, men dråber af himmelsk stout af gedigen, amerikansk superkvalitet. Det har, som altid, været en KÆMPE fornøjelse at være jeres værter i denne december. Vi glæder os allerede til næste år! ",
    untappdlink:
      "https://untappd.com/b/jackie-o-s-brewery-forward-into-yesterday/4585575",
    dato: "24",
  },
] as const;
