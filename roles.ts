import { Role } from "@/types/role";
import { Team } from "@/types/team";
import { Type } from "@/types/type";

const roles: Role[] = [
  {
    name: "Altruist",
    team: Team.Crewmate,
    type: Type.Protective,
    color: "#660000",
    description: {
      short: "Może wskrzeszać martwych graczy.",
      long: "Rola, która może wskrzesić wszystkich graczy w danym obszarze. Po użyciu umiejętności nie może się ruszać, a wszyscy zabójcy zobaczą jego lokalizację.",
    },
  },
  {
    name: "Engineer",
    team: Team.Crewmate,
    type: Type.Support,
    color: "#FFA60A",
    description: {
      short:
        "Jest w stanie natychmiastowo naprawić sabotaż oraz korzystać z wentylacji.",
      long: "Rola, która może naprawić każdy sabotaż z dowolnego miejsca na mapie. Może również korzystać z wentylacji w celu szybkiego przemieszczania się po mapie.",
    },
  },
  {
    name: "Imitator",
    team: Team.Crewmate,
    type: Type.Support,
    color: "#B3D94D",
    description: {
      short: "Posiada zdolność do naśladowania roli martwych graczy.",
      long: "Rola, która może naśladować role martwych graczy. Podczas głosowania może wybrać jednego martwego gracza, którego będzie naśladować podczas następnej tury.",
    },
  },
  {
    name: "Investigator",
    team: Team.Crewmate,
    type: Type.Investigative,
    color: "#00B3B3",
    description: {
      short: "Widzi ślady stóp innych graczy na mapie.",
      long: "Rola, która widzi ślady stóp innych graczy na mapie. Każdy ślad znika po określonym czasie.",
    },
  },
  {
    name: "Medic",
    team: Team.Crewmate,
    type: Type.Protective,
    color: "#006600",
    description: {
      short:
        "Może nałożyć tarczę na jednego z graczy by ochronić go przed śmiercią.",
      long: "Rola, która może ochronić jednego gracza przed śmiercią poprzez nadanie mu tarczy. Dodatkowo, medyk dostaje informację, gdy zdrajca próbuje zabić chronionego gracza.",
    },
  },
  {
    name: "Medium",
    team: Team.Crewmate,
    type: Type.Support,
    color: "#A680FF",
    description: {
      short: "Jest w stanie zobaczyć duchy martwych graczy.",
      long: "Rola, która po użyciu umiejętności może zobaczyć jednego z duchów martwych graczy. Może również komunikować się z przywołanym duchem.",
    },
  },
  {
    name: "Mystic",
    team: Team.Crewmate,
    type: Type.Investigative,
    color: "#4D99E6",
    description: {
      short: "Otrzymuje powiadomienie o morderstwie i jego lokalizacji.",
      long: "Rola, która w przypadku morderstwa dostaje o nim informację. Widzi on również strzałkę wskazującą kierunek, w którym znajduje się ciało.",
    },
  },
  {
    name: "Oracle",
    team: Team.Crewmate,
    type: Type.Protective,
    color: "#BF00BF",
    description: {
      short:
        "Posiada wiele umiejętności, działających na zasadzie zwierzeń o podejrzanych.",
      long: "Rola, której umiejętności polegają na zwierzeniach graczy o zdrajcach. Podczas każdego spotkania, dostają informację o podejrzanych, mogą również dać graczowi immunitet na głosowanie. Po śmierci, spowiedź ostatniego gracza zostaje ujawniona.",
    },
  },
  {
    name: "Politician",
    team: Team.Crewmate,
    type: Type.Support,
    color: "#660099",
    description: {
      short: "Po pomyślnym przeprowadzeniu kampanii, może zostać Mayorem.",
      long: "Rola, która może przeprowadzić kampanię do innych graczy. Po pomyślnym przeprowadzeniu kampanii dla przynajmniej połowy graczy, może ogłosić się jako Mayor. Po nieudanej kampanii, musi poczekać turę, aby przeprowadzić kolejną.",
    },
    alternativeRoles: [
      {
        name: "Mayor",
        color: "#704FA8",
        description: "Posiada dwa dodatkowe głosy podczas głosowania.",
      },
    ],
  },
  {
    name: "Prosecutor",
    team: Team.Crewmate,
    type: Type.Support,
    color: "#B38000",
    description: {
      short: "Ma moc do wyrzucenia jednego gracza z gry podczas spotkania.",
      long: "Rola, która raz na całą rundę może wyrzucić jednego gracza z gry. Jeżeli włączone, po wyrzuceniu niewinnego gracza, ginie. Ponadto, widzi on źródło każdego głosu.",
    },
  },
  {
    name: "Seer",
    team: Team.Crewmate,
    type: Type.Investigative,
    color: "#FFCC80",
    description: {
      short: "Może zobaczyć, czy gracz należy do dobrej czy złej drużyny.",
      long: "Rola, która po użyciu umiejętności może zobaczyć, czy gracz należy do dobrej bądź złej drużyny.",
    },
  },
  {
    name: "Sheriff",
    team: Team.Crewmate,
    type: Type.Killing,
    color: "#FFFF00",
    description: {
      short: "Ma zdolność do zabijania innych graczy.",
      long: "Rola, która ma umiejętność zabijania innych graczy. Jeżeli użyje jej na niewinnej osobie, umiera, a niewinny gracz zostaje przy życiu.",
    },
  },
  {
    name: "Snitch",
    team: Team.Crewmate,
    type: Type.Investigative,
    color: "#D4B038",
    description: {
      short: "Posiada możliwość do znalezienia zdracjów.",
      long: "Rola, która po ukończeniu wszystkich zadań, dostaje informację o tym, gdzie znajdują się zdrajcy i kim są. Przed ukończeniem ostatniego zadania, zdrajcy dostają informację o jego lokalizacji.",
    },
  },
  {
    name: "Spy",
    team: Team.Crewmate,
    type: Type.Investigative,
    color: "#CCA3CC",
    description: {
      short: "Widzi informację o lokalizacji każdego z graczy na mapie.",
      long: "Rola, która w panelu admina widzi informację o lokalizacji każdego z graczy na mapie.",
    },
  },
  {
    name: "Swapper",
    team: Team.Crewmate,
    type: Type.Support,
    color: "#66E666",
    description: {
      short: "Jest w stanie podmienić głosy dwóch graczy.",
      long: "Rola, która może podmienić głosy pomiędzy dwoma graczami. Głosy na pierwszego gracza zostają podmienione na głosy drugiego gracza i odwrotnie.",
    },
  },
  {
    name: "Transporter",
    team: Team.Crewmate,
    type: Type.Support,
    color: "#00EDFF",
    description: {
      short: "Może zamienić dwóch graczy miejscami.",
      long: "Rola, która po użyciu umiejętności może w podmienić lokalizację dwóch graczy. Każdy z graczy zostaje wtedy teleportowany a na ich ekranie pojawia się niebieski błysk.",
    },
  },
  {
    name: "Trapper",
    team: Team.Crewmate,
    type: Type.Investigative,
    color: "#A6D1B3",
    description: {
      short: "Jest w stanie rozmieścić pułapki na graczy wokół mapy.",
      long: "Rola, która może rozstawiać pułapki, które po aktywowaniu przez gracza pokazują informację o tym, kto ją aktywował podczas najbliższego spotkania.",
    },
  },
  {
    name: "Veteran",
    team: Team.Crewmate,
    type: Type.Killing,
    color: "#998040",
    description: {
      short:
        "Może wejść w stan wyczulenia, aby zabić gracza który mu przeszkodzi.",
      long: "Rola, która po użyciu umiejętności może wejść w stan wyczulenia na określony czas. Po aktywacji stanu wyczulenia, gracz, który spróbuje użyć na nim swojej umiejętności, zostaje zabity.",
    },
  },
  {
    name: "Vigilante",
    team: Team.Crewmate,
    type: Type.Killing,
    color: "#FFFF99",
    description: {
      short: "Ma opcję zabicia gracza podczas spotkania.",
      long: "Rola, która posiada umiejętność zabicia wybranego gracza podczas spotkania, jeżeli odgadnie jego rolę. Jeżeli jego wybór będzie błędny, zginie.",
    },
  },
  {
    name: "Aurial",
    color: "#B34D99",
    team: Team.Crewmate,
    type: Type.Investigative,
    description: {
      short: "Widzi, gdy inny gracz w pobliżu użyje swojej umiejętności.",
      long: "Rola, która widzi, gdy ktoś w pobliżu użyje swojej umiejętności. Pojawia mu się wtedy wskaźnik do miejsca, w którym użyta została umiejętność.",
    },
  },
  {
    name: "Deputy",
    color: "#FFCC00",
    team: Team.Crewmate,
    type: Type.Killing,
    description: {
      short:
        "Może zaznaczyć jednego gracza i otrzymać powiadomienie o jego zabójstwie.",
      long: "Rola, która po użyciu umiejętności może zaznaczyć jednego gracza. Jeżeli gracz zostanie zabity, dostaje o tym powiadomienie. Dodatkowo, podczas spotkania może spróbować zabić mordercę. Jeżeli trafi, morderca ginie, jeżeli nie, nic się nie dzieje.",
    },
  },
  {
    name: "Detective",
    color: "#4D4DFF",
    team: Team.Crewmate,
    type: Type.Investigative,
    description: {
      short: "Ma umiejętność do analizowania ciał martwych graczy.",
      long: "Rola, która może analizowac sceny zbrodni. Po analizie ciała, może sprawdzać graczy, czy byli w pobliżu ciała. Jeżeli gracz był w pobliżu, pojawi się czerwone oznaczenie, jeżeli nie, oznaczenie będzie zielone.",
    },
  },
  {
    name: "Haunter",
    color: "#D4D4D4",
    team: Team.Crewmate,
    type: Type.Investigative,
    description: {
      short: "Po ukończeniu wszystkich zadań, ujawnia wszystkich zabójców.",
      long: "Rola, która może pojawić się po śmierci gracza. Po ukończeniu wszystkich zadań, ujawnia wszystkich zabójców podczas najbliższego spotkania. Jeżeli zostanie nakryty, jego umiejętność znika.",
    },
  },
  {
    name: "Hunter",
    color: "#29AB87",
    team: Team.Crewmate,
    type: Type.Killing,
    description: {
      short: "Może zabijać ludzi, którzy w jego okolicy użyli umiejętności.",
      long: "Rola, która może zabijać graczy, którzy w jego okolicy użyli umiejętności. Jeżeli zabiją niewinnego gracza, nic się nie dzieje.",
    },
  },
  {
    name: "Jailor",
    color: "#A6A6A6",
    team: Team.Crewmate,
    type: Type.Killing,
    description: {
      short: "Może zamknąć gracza w więzieniu i ograniczyć mu umiejętności.",
      long: "Rola, która może zamknąć wybranego gracza w więzieniu. Uwięziony gracz nie może uczestniczyć w spotkaniach i może komunikować się tylko z Jailorem. Może również zabić uwięzionego gracza, ale jeżeli będzie on niewinny, straci swoją umiejętność.",
    },
  },
  {
    name: "Lookout",
    color: "#33FF66",
    team: Team.Crewmate,
    type: Type.Investigative,
    description: {
      short: "Posiada możliwość obserwacji innych graczy.",
      long: "Rola, która ma umiejętność obserwacji innych graczy. Podczas spotkań, widzi wszystkich graczy, który weszli w interakcję z obserwowanym graczem.",
    },
  },
  {
    name: "Tracker",
    color: "#009900",
    team: Team.Crewmate,
    type: Type.Investigative,
    description: {
      short: "Jest w stanie śledzić innych graczy.",
      long: "Rola, która może śledzić określoną liczbę graczy. Po użyciu umiejętności na graczu, widzi jego lokalizację z dokładnością do określonej ilości czasu.",
    },
  },
  {
    name: "Warden",
    color: "#9900FF",
    team: Team.Crewmate,
    type: Type.Protective,
    description: {
      short: "Może umocnić innego gracza, częściowo chroniąc go przed innymi.",
      long: "Rola, która może wzmocnić innego gracza. Wzmocniony gracz jest chroniony przed umiejętnościami innych graczy, ale nie przed bezpośrednimi zabójstwami. Jeżeli ktoś spróbuje wejść w interakcję, zarówno Warden jak i gracz dostają powiadomienie.",
    },
  },
  {
    name: "Plumber",
    color: "#CC6600",
    team: Team.Crewmate,
    type: Type.Support,
    description: {
      short: "Może wyrzucać graczy z wentylacji oraz ją blokować.",
      long: "Rola, która ma dwie umiejętności. Jedną z nich jest wyrzucenie wszystkich graczy przebywający w wentylacji. Drugą jest postawienie blokady na wentylacji, uniemożliwiając innym graczom korzystanie z niej.",
    },
  },
  {
    name: "Cleric",
    color: "#00FFB3",
    team: Team.Crewmate,
    type: Type.Protective,
    description: {
      short: "Może usuwać negatywne efekty z graczy oraz objąć ich ochroną.",
      long: "Rola, która posiada dwie umiejętności chroniące graczy. Jedna z nich usuwa wszystkie negatywne efekty u danego gracza, a druga tymczasowo chroni go przed śmiercią.",
    },
  },
  {
    name: "Amnesiac",
    team: Team.Neutral,
    type: Type.Benign,
    color: "#80B3FF",
    description: {
      short: "Nie ma zadań, ale może ukraść rolę z ciała martwego gracza.",
      long: "Rola, która nie posiada żadnych zadań na start i warunków wygrania. Po znalezieniu martwego ciała, może przejąć jego rolę. Po przejęciu roli, warunki wygrania zmieniają się na te, które miał martwy gracz.",
    },
  },
  {
    name: "Guardian Angel",
    team: Team.Neutral,
    type: Type.Benign,
    color: "#B3FFFF",
    description: {
      short: "Jego zadaniem jest ochrona wybranego gracza.",
      long: "Rola, która za wszelką cenę musi obronić wyznaczonego gracza przed śmiercią. Jeżeli gracz zginie, Guardian Angel również umiera.",
    },
    alternativeRoles: [
      {
        name: "Jester",
        color: "#FFBFCC",
        description: "(Jeżeli cel zginie)",
      },
      {
        name: "Amnesiac",
        color: "#80B3FF",
        description: "(Jeżeli cel zginie)",
      },
      {
        name: "Survivor",
        color: "#FFE64D",
        description: "(Jeżeli cel zginie)",
      },
      {
        name: "Crewmate",
        color: "#8CFFFF",
        description: "(Jeżeli cel zginie)",
      },
      {
        name: "Mercenary",
        color: "#8C6699",
        description: "(Jeżeli cel zginie)",
      }
    ],
  },
  {
    name: "Survivor",
    team: Team.Neutral,
    type: Type.Benign,
    color: "#FFE64D",
    description: {
      short: "Wygrywa, jeżeli przeżyje do końca rundy.",
      long: "Rola, która wygrywa jeżeli przeżyje do końca rundy. jeżeli jednak, wygrana neutralna zabójcza rola bądź Loversi, przegrywa.",
    },
  },
  {
    name: "Executioner",
    team: Team.Neutral,
    type: Type.Evil,
    color: "#8C4005",
    description: {
      short: "Wygrywa grę, jeżeli jego cel zostanie wyrzucony podczas spotkania.",
      long: "Rola, której ma spowodować, że gracz wylosowany na początku rundy zostanie wyrzucony. Jeżeli mu się to uda, wygrywa.",
    },
    alternativeRoles: [
      {
        name: "Jester",
        color: "#FFBFCC",
        description: "(Jeżeli cel zginie)",
      },
      {
        name: "Amnesiac",
        color: "#80B3FF",
        description: "(Jeżeli cel zginie)",
      },
      {
        name: "Survivor",
        color: "#FFE64D",
        description: "(Jeżeli cel zginie)",
      },
      {
        name: "Crewmate",
        color: "#8CFFFF",
        description: "(Jeżeli cel zginie)",
      },
      {
        name: "Mercenary",
        color: "#8C6699",
        description: "(Jeżeli cel zginie)",
      }
    ],
  },
  {
    name: "Jester",
    team: Team.Neutral,
    type: Type.Evil,
    color: "#FFBFCC",
    description: {
      short: "Jego celem jest bycie wyrzuconym z gry.",
      long: "Rola, której celem jest bycie wyrzuconym z gry. Jeżeli mu się to uda, wygrywa. Jeżeli włączone, może używać wentylacji, do szybkiego przemieszczania się po mapie.",
    },
  },
  {
    name: "Soul Collector",
    team: Team.Neutral,
    type: Type.Killing,
    color: "#99FFCC",
    description: {
      short: "Zabija poprzez zbieranie dusz nie pozostawiając ciał.",
      long: "Rola, która zabija poprzez zbieranie dusz graczy. Po użyciu umiejętności na graczu, zabija go pozostawiając jego duszę, ale nie ciało.",
    },
  },
  {
    name: "Arsonist",
    team: Team.Neutral,
    type: Type.Killing,
    color: "#FF4D00",
    description: {
      short: "Wygrywa grę, jeżeli uda mu się podpalić wszystkich graczy.",
      long: "Rola, która wygrywa grę, jeżeli uda jej się zabić innych graczy. Może oblewać innych graczy benzyną, a następnie podpalić wszystkich, których wcześniej oblał w swoim otoczenia.",
    },
  },
  {
    name: "Juggernaut",
    team: Team.Neutral,
    type: Type.Killing,
    color: "#8C004D",
    description: {
      short: "Jego warunkiem wygrania jest zabicie wszystkich graczy.",
      long: "Rola, której celem jest zabicie wszystkich graczy. Cooldown zabójstwa zmniejsza się z każdym morderstwem przez co może on nawet wynosić 0 sekund. Jeżeli włączon, może używać wentylacji, do szybkiego przemieszczania się po mapie.",
    },
  },
  {
    name: "Plaguebearer",
    team: Team.Neutral,
    type: Type.Killing,
    color: "#E6FFB3",
    description: {
      short: "Celem tej roli jest zarażenie wszystkich graczy.",
      long: "Rola, która ma na celu zabicie zarażenie wszystkich graczy. Każdy zarażony gracz rozprzestrzenia zarazę. Po zarażeniu wszystkich zostaje rolą Pestilence.",
    },
    alternativeRoles: [
      {
        name: "Pestilence",
        color: "#4D4D4D",
        description: "Jest niezniszczalny i może zostać jedynie wygłosowany.",
      },
    ],
  },
  {
    name: "Werewolf",
    team: Team.Neutral,
    type: Type.Killing,
    color: "#A86629",
    description: {
      short: "By wygać, musi zabić wszystkich graczy podczas szału.",
      long: "Rola, która ma na cel zabić wszystkich graczy. Zabijać może tylko podczas szału, który powiększa zasięg widzenia, a cooldown zabójstw jest bardzo krótki.",
    },
  },
  {
    name: "Vampire",
    team: Team.Neutral,
    type: Type.Killing,
    color: "#262626",
    description: {
      short: "W celu wygrania, musi zagryźć wszystkich graczy.",
      long: "Rola, której zadaniem jest zabić wszystkich graczy. Posiada on umiejętność ugryzienia, która po użyciu zamienia gracza w wampira. Jeżeli w rundzie jest już drugi wampir bądź ugryziony gracz nie jest Crewmatem, ginie.",
    },
  },
  {
    name: "Glitch",
    team: Team.Neutral,
    type: Type.Killing,
    color: "#00FF00",
    description: {
      short: "Ma na celu pozbycie się wszystkich innych graczy.",
      long: "Rola, której celem jest pozbycie się wszystkich innych graczy. Może on hackować innych uniemożliwiając im wykonywanie zadań i zgłaszanie ciał. Może on również udawać innych graczy.",
    },
  },
  {
    name: "Doomsayer",
    color: "#00FF80",
    team: Team.Neutral,
    type: Type.Evil,
    description: {
      short:
        "Wygrywa grę, jeżeli podczas spotkania odgadnie role określonej ilości graczy.",
      long: "Rola, która ma na celu pozbycie się trzech graczy, odgadując ich role. Jeżeli żywych jest tylko dwóch graczy, ma on odgadnąć tylko ich role. Dodatkowo, posiadają umiejętność, która podpowiada mu role określonych graczy.",
    },
  },
  {
    name: "Phantom",
    color: "#662961",
    team: Team.Neutral,
    type: Type.Evil,
    description: {
      short:
        "Ma za zadanie ukończyć wszystkie swoje zadania nie zostając złapanym.",
      long: "Rola, która po śmierci staje się częściowo niewidzialnym. Ma on wtedy ukończyć wszystkie swoje zadania, nie zostając złapanym przez innych graczy.",
    },
  },
  {
    name: "Mercenary",
    color: "#8C6699",
    team: Team.Neutral,
    type: Type.Benign,
    description: {
      short: "Może chronić graczy przed innymi.",
      long: "Rola, która po użyciu umiejętności może chronić gracza przed innymi. Przy interakcji z chronionym graczem, dostaje on walutę, którą może wykorzystywać do przekupstwa innych graczy.",
    },
  },
  {
    name: "Blackmailer",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Support,
    description: {
      short: "Może wyciszyć graczy podczas spotkania.",
      long: "Rola, która może wyciszyć określoną liczbę graczy podczas spotkania. Jeżeli włączone, tylko wyciszeni gracze widzą, że nie mogą rozmawiać.",
    },
  },
  {
    name: "Bomber",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Killing,
    description: {
      short: "Może podłożyć bombę, wysadzając wszystkich w jej zasięgu.",
      long: "Rola, która ma umiejętność podłożenia bomby, która aktywuje się po określonym czasie. Po aktywacji, zabija wszystkich graczy w zasięgu.",
    },
  },
  {
    name: "Escapist",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Concealing,
    description: {
      short: "Posiada umiejętność teleportacji do wyznaczonego miejsca.",
      long: "Rola, która raz na turę może wyznaczyć miejsce na mapie, w które chce się teleportować.",
    },
  },
  {
    name: "Hypnotist",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Support,
    description: {
      short:
        "Jest w stanie hipnotozować graczy i rozprzestrzeniać masową histerię.",
      long: "Rola, która może hipnotyzować graczy, a następnie wypuścić masową histerię. Podczas histerii, gracze widzą wszystkich jako samych siebie, zakamuflowanych badź niewidzialnych. Po śmierci, hipnoza u wszystkich graczy znika.",
    },
  },
  {
    name: "Janitor",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Support,
    description: {
      short: "Może pozbyć się ciał martwych graczy.",
      long: "Rola, która może wyczyścić ciało, aby nikt nie mógł go zobaczyć. Cooldown sprzątania ciała i zabójstwa jest współdzielony, więc musi wybrać, którą umiejętność chce użyć.",
    },
  },
  {
    name: "Miner",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Support,
    description: {
      short: "Jest w stanie tworzyć nowe venty na mapie.",
      long: "Rola, która może tworzyć nowe venty do szybszego poruszania się po mapie. Utworzone venty mogą łączyć się tylko z tymi, utworzonymi przez gracza.",
    },
  },
  {
    name: "Morphling",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Concealing,
    description: {
      short: "Może zmieniać się w innych graczy.",
      long: "Rola, która może zmieniać się w innych graczy. Na początku każdej tury, może wybrać jednego gracza, którego chce zbadać. Może on wtedy zamienić się w kązdego zbadanego wcześniej gracza na określona ilość czasu.",
    },
  },
  {
    name: "Swooper",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Concealing,
    description: {
      short: "Posiada umiejętność pozostania niewidzialnym.",
      long: "Rola, która może na określony czas stać się niewidzialna.",
    },
  },
  {
    name: "Traitor",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Killing,
    description: {
      short:
        "Zdrajca, który ma szansę pojawienia się w grze, jeżeli inni zabójcy zginą zbyt szybko.",
      long: "Rola, która pojawia się, gdy inni zabójcy zginą przed określonym momentem gry. Nie ma żadnych dodatkowych umiejętności i jego jedynym zadaniem jest pomszczenie swoich poprzedników.",
    },
  },
  {
    name: "Undertaker",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Support,
    description: {
      short: "Może przenosić ciała martwych graczy.",
      long: "Rola, która może przenosić ciała martwych graczy w inne miejsce na mapie.",
    },
  },
  {
    name: "Warlock",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Killing,
    description: {
      short: "Przycisk zabójstwa działa na zasadzie ładowania.",
      long: "Rola, której umiejętność zabójstwa wymaga ładowania przed użyciem. Po naładowaniu może on zabić nieograniczoną liczbę graczy przez określony czas. Po wyładowaniu, musi ponownie naładować umiejętność.",
    },
  },
  {
    name: "Venerer",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Concealing,
    description: {
      short: "Zdobywa umiejętności za dokonywanie zabójstw.",
      long: "Rola, która zdobywa umiejętności za zabijanie innych graczy. Po pierwszym morderstwie, może się kamuflować, po drugim, biegać, a po trzecim, spowodować, że każdy inny gracz jest spowolniony przez określony czas. Wszystkie umiejętności aktywowane w tym samym momencie i współdzialą jeden cooldown.",
    },
  },
  {
    name: "Grenadier",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Concealing,
    description: {
      short: "Posiada zdolnośc do rzucania granatów dymnych.",
      long: "Rola, która może wyrzucać granaty dymne, które po upadku na ziemię, oślepia graczy w określonym zasięgu. Granat nie może zostac wyrzucony podczas sabotażu.",
    },
  },
  {
    name: "Scavenger",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Killing,
    description: {
      short:
        "Ma za zadanie zabicie określonych graczy, za co zmniejsza mu się cooldown zabójstwa.",
      long: "Rola, której celem jest zabicie wylosowanego gracza. Jeżeli mu się uda, cooldown umiejętności zabójstwa zmniejsza się o określoną ilość sekund, w przeciwnym wypadku, wydłuża się. Dodatkowo każdy wybrany gracz jest wskazany strzałką.",
    },
  },
  {
    name: "Eclipsal",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Concealing,
    description: {
      short: "Może oślepiać innych graczy.",
      long: "Rola, która może oślepiać innych graczy w określonym zasięgu. Oślepieni gracze widzą tylko mapę przez określony czas.",
    },
  },
  {
    name: "Time Lord",
    color: "#0000FF",
    team: Team.Crewmate,
    type: Type.Support,
    description: {
      short: "Może cofnąć czas o określoną ilość sekund.",
      long: "Rola, która może cofnąć czas o określoną ilość sekund. Po użyciu umiejętności, lokalizacja graczy oraz morderstwa cofają się o określoną ilość sekund.",
    },
    isExclusive: true,
  },
  {
    name: "President",
    color: "#704FA8",
    team: Team.Crewmate,
    type: Type.Support,
    description: {
      short: "Ma dodatkowe głosy podczas głosowania.",
      long: "Rola, która może głosować kilka razy. Jeżeli wstrzyma się od głosowania, jego głos może zostać użyty podczas nastepnego spotkania.",
    },
    isExclusive: true,
  },
  {
    name: "Foreteller",
    color: "#00FF80",
    team: Team.Neutral,
    type: Type.Evil,
    description: {
      short:
        "Wygrywa grę, jeżeli podczas spotkania odgadnie role określonej ilości graczy.",
      long: "Rola, która wygrywa, jeżeli odgadnie role określonej ilości graczy. Po odgadnięciu roli, dostaje informację o tym, czy zgadł czy nie. Jeżeli nie zgadnie, jego umiejętność zostaje zablokowana do następnego spotkania.",
    },
    isExclusive: true,
  },
  {
    name: "Pirate",
    color: "#EBC13D",
    team: Team.Neutral,
    type: Type.Evil,
    description: {
      short: "Jego celem jest wygranie wyznaczonej liczby pojedynków.",
      long: "Rola, która podczas rundy, może wyzwać innego gracza na pojedynek. Podczas spotkania, każdy z graczy wybiera jeden atak/obronę. Jeżeli wygra pirat, zabija przeciwnika. Jeżeli przegra, nic się nie dzieje.",
    },
    isExclusive: true,
  },
  {
    name: "Undercover",
    color: "#002600",
    team: Team.Crewmate,
    type: Type.Support,
    description: {
      short: "Zostaje losową rolą pod przykryciem.",
      long: "Rola, która na początku rundy zostaje losową rolą pod przykryciem. Role zabijające, widzą jego rolę.",
    },
    isExclusive: true,
  },
  {
    name: "Baker",
    color: "#FFB380",
    team: Team.Neutral,
    type: Type.Apocalypse,
    description: {
      short: "Ma możliwość rozdawania chleba innym graczom.",
      long: "Rola, która ma własną drużynę jak i umiejętność zmiany roli. Może rozdawać chleb innym graczom. Po rozdaniu odpowiedniej ilości, zostaje rolą Famine.",
    },
    alternativeRoles: [
      {
        name: "Famine",
        color: "#FFB380",
        description:
          "Jest niezniszczalny. Może zabierać chleb innym graczom. Jeżeli gracz nie ma chleba, umiera. Ponadto, po spotkaniu, zabiera jeden chleb każdemu graczowi.",
      },
    ],
    isExclusive: true,
  },
  {
    name: "Berserker",
    color: "#FF4F00",
    team: Team.Neutral,
    type: Type.Apocalypse,
    description: {
      short:
        "Ma możliwość zabijania innych graczy, a jego cooldown zabójstwa stopniowo się zmniejsza.",
      long: "Rola, która ma własną drużynę jak i umiejętność zmiany roli. może zabijać innych graczy. Po każdym zabójstwie, cooldown umiejętności zabójstwa zmniejsza się o określoną ilość sekund. Po zabiciu odpowiedniej ilości graczy, zostaje rolą War.",
    },
    alternativeRoles: [
      {
        name: "War",
        color: "#FF4F00",
        description:
          "Jest niezniszczalny. Może zabijać innych graczy, a jego cooldown jest bardzo mały.",
      },
    ],
    isExclusive: true,
  },
  {
    name: "Sniper",
    color: "#FF1919",
    team: Team.Impostor,
    type: Type.Concealing,
    description: {
      short: "Może celować w innych graczy.",
      long: "Rola, która może celować przed zabójstwem. Wycelowani gracze mogą być zabici przez Snajpera z daleka. Jeżeli każdy gracz będzie wycelowany, wszyscy dostają informację gdzie się znajduje i mogą go zastrzelić.",
    },
    isExclusive: true,
  },
  {
    name: "Monarch",
    color: "#9628C8",
    team: Team.Crewmate,
    type: Type.Support,
    description: {
      short: "Może pasować innych graczy.",
      long: "Rola, która może pasować innych graczy. Jeżeli gracz zostanie pasowany, ma on dodatkowy głos podczas głosowania.",
    },
    isExclusive: true,
  },
  {
    name: "Serial Killer",
    color: "#1D4CFB",
    team: Team.Neutral,
    type: Type.Killing,
    description: {
      short: "Jest seryjnym mordercą.",
      long: "Rola, może zabijać innych graczy. Po zdobyciu określonej liczby zabójstw, przez określony czas, wpada w żądzę krwi, podczas której jego cooldown zabójstwa jest zmniejszony. Może popadać on w głębszą żądzę krwi, co jeszcze bardziej zmniejsza cooldown zabójstwa. Po zakończeniu, jego cooldown zabójstwa wraca do normalnego.",
    },
    isExclusive: true,
  },
  {
    name: "Tavern Keeper",
    color: "#8C4514",
    team: Team.Crewmate,
    type: Type.Investigative,
    description: {
      short: "Może blokować umiejętności innych graczy.",
      long: "Rola, która może blokować umiejętności innych graczy.",
    },
    isExclusive: true,
  },
  {
    name: "Sage",
    color: "#4B0082",
    team: Team.Crewmate,
    type: Type.Investigative,
    description: {
      short: "Może porównywać wymagania wygranej dwóch graczy.",
      long: "Rola, która może porównywać wymagania wygranej dwóch graczy. Dowiaduje sie wtedy, czy oba wymagania mogą być spełnione w tym samym czasie. Czasem wynik analizy może nie byc dokładny.",
    },
    isExclusive: true,
  },
];
export default roles;
