import { Modifier } from "@/types/modifier";
import { Team } from "@/types/team";

const modifiers: Modifier[] = [
  {
    name: "Aftermath",
    team: Team.Crewmate,
    color: "#A6FFA6",
    description:
      "Po śmierci, jego zabójca jest zmuszony do użycia umiejętności.",
  },
  {
    name: "Bait",
    team: Team.Crewmate,
    color: "#33B3B3",
    description: "Po śmierci, automatycznie zgłasza zabójstwo jako morderca.",
  },
  {
    name: "Diseased",
    team: Team.Crewmate,
    color: "#7F7F7F",
    description: "Po zabiciu, zwiększa cooldown zabójcy.",
  },
  {
    name: "Frosty",
    team: Team.Crewmate,
    color: "#99FFFF",
    description: "Po zabiciu, spowalnia zabójcę na krótki czas.",
  },
  {
    name: "Multitasker",
    team: Team.Crewmate,
    color: "#FF804D",
    description: "Interfejs zadań jest częściowo przezroczysty.",
  },
  {
    name: "Torch",
    team: Team.Crewmate,
    color: "#FFFF99",
    description: "Przy sabotaży, zasięg widzenia nie jest zmniejszany.",
  },
  {
    name: "Celebrity",
    team: Team.Crewmate,
    color: "#FF9999",
    description:
      "Pokazuje wszystkich podczas spotkania dokładne miejsce i czas zabójstwa tego gracza.",
  },
  {
    name: "Taskmaster",
    team: Team.Crewmate,
    color: "#669966",
    description: "Losowo ukańcza jedno zadanie po każdym spotkaniu.",
  },
  {
    name: "Button Barry",
    color: "#E600FF",
    description:
      "Może zwołać zebranie w dowolnym miejscu na mapie, nawet podczas sabotażu.",
  },
  {
    name: "Flash",
    color: "#FF8080",
    description: "Jest szybszy od innych graczy.",
  },
  {
    name: "Giant",
    color: "#FFB34D",
    description: "Jest większy, ale i wolniejszy niż inni gracze.",
  },
  {
    name: "Lovers",
    color: "#FF66CC",
    description:
      "Dwóch graczy połączonych ze sobą. Jeżeli jeden z nich umrze, drugi również. Mają do dyspozycji prywatny czat.",
  },
  {
    name: "Mini",
    color: "#CCFFE6",
    description: "Jest mniejszy niż inni gracze.",
  },
  {
    name: "Radar",
    color: "#FF0080",
    description: "Zawsze wie, gdzie jest inny najbliski gracz.",
  },
  {
    name: "Shy",
    color: "#FFB3CC",
    description: "Staje się niewidoczny, gdy stoi w miejscu.",
  },
  {
    name: "Sixth Sense",
    color: "#D9FF8C",
    description: "Widzi, kto wchodzi z nim w interakcję.",
  },
  {
    name: "Sleuth",
    color: "#803333",
    description:
      "Zyskuje wiedze, za zgłaszanie martwych ciał. Podczas spotkań, widzi role innych graczy, których zgłosił.",
  },
  {
    name: "Tiebreaker",
    color: "#99E699",
    description:
      "Jego głos liczy się tylko, gdy wynikiem głosowania jest remis.",
  },
  {
    name: "Immovable",
    color: "#E6E6CC",
    description:
      "Zachowuje miejsce podczas wszelkich wydarzeń takich jak spotkania, transport czy rozproszenie.",
  },
  {
    name: "Satellite",
    color: "#0099CC",
    description: "Może jednorazowo wykryć wszystkie martwe ciała na mapie.",
  },
  {
    name: "Disperser",
    team: Team.Impostor,
    color: "#FF1919",
    description:
      "Ma jednorazową umiejętność, by wysłać wszystkich graczy do losowej wentylacji.",
  },
  {
    name: "Double Shot",
    team: Team.Impostor,
    color: "#FF1919",
    description:
      "Dostaje dostaje dodatkową szanse na odgadnięcie roli innego gracza.",
  },
  {
    name: "Saboteur",
    team: Team.Impostor,
    color: "#FF1919",
    description: "Cooldown umiejętności sabotażu jest zmniejszony.",
  },
  {
    name: "Underdog",
    team: Team.Impostor,
    color: "#FF1919",
    description:
      "Domyślnie, jego cooldown zabójstwa jest zmniejszony, lecz jeżeli jest ostatnim zabójcą, cooldown zabójstwa jest zmniejszony.",
  },
];
export default modifiers;
