import cityPhoto from "../assets/images/welcome-hero/banner.jpg";
import housePhoto from "../images/room.jpg";

// Demo sadrzaj. Zameniti pravim oglasima i kontakt podacima pre objavljivanja.
// position i zoom biraju isecak slike; pravim fotografijama ne trebaju.

export const CONTACT = {
  email: "kontakt@example.com",
  phone: "+381 00 000 0000",
  address: "Niš, Srbija",
};

const city = (position, zoom) => ({ src: cityPhoto, position, zoom });
const house = (position, zoom) => ({ src: housePhoto, position, zoom });

const CITY_VIEWS = [city("50% 60%", 1), city("93% 38%", 2.6), city("54% 42%", 2.6), city("70% 92%", 2.2)];
const HOUSE_VIEWS = [house("48% 42%", 2), house("76% 72%", 2.2), house("28% 78%", 2.2), house("60% 90%", 1.6)];

export const LISTINGS = [
  {
    id: 1,
    deal: "Kupovina",
    title: "Trosoban stan sa pogledom na reku",
    location: "Beograd, Novi Beograd",
    price: 185000,
    area: 74,
    rooms: 3,
    type: "Stan",
    updatedAt: "2026-10-28",
    description:
      "Svetao trosoban stan na višem spratu, sa velikom dnevnom sobom i pogledom na reku. Prostorije su funkcionalno raspoređene, a prevoz i prodavnice su na nekoliko minuta hoda.",
    details: { Sprat: "9 / 14", Grejanje: "Centralno", "Godina izgradnje": 2016, Parking: "Garažno mesto" },
    photos: [city("17% 45%", 2.4), ...CITY_VIEWS],
  },
  {
    id: 2,
    deal: "Kupovina",
    title: "Porodična kuća sa dvorištem",
    location: "Niš, Medijana",
    price: 240000,
    area: 165,
    rooms: 5,
    type: "Kuća",
    updatedAt: "2026-10-22",
    description:
      "Prostrana porodična kuća sa uređenim dvorištem i garažom. Prizemlje čine dnevna soba, trpezarija i kuhinja, a spavaće sobe su na spratu.",
    details: { Spratnost: "Pr + 1", Grejanje: "Etažno na gas", "Godina izgradnje": 2019, Parking: "Garaža" },
    photos: [house("50% 62%", 1.15), ...HOUSE_VIEWS],
  },
  {
    id: 3,
    deal: "Kupovina",
    title: "Dvosoban stan u novogradnji",
    location: "Novi Sad, Liman",
    price: 128000,
    area: 52,
    rooms: 2,
    type: "Stan",
    updatedAt: "2026-11-02",
    description:
      "Moderan dvosoban stan u novoj zgradi sa liftom. Odličan izbor za mlade parove ili kao investicija, u blizini keja i fakulteta.",
    details: { Sprat: "3 / 6", Grejanje: "Centralno", "Godina izgradnje": 2025, Parking: "Spoljno mesto" },
    photos: [city("54% 42%", 2.6), ...CITY_VIEWS],
  },
  {
    id: 4,
    deal: "Kupovina",
    title: "Kuća sa garažom za dva vozila",
    location: "Kragujevac, Centar",
    price: 198000,
    area: 140,
    rooms: 4,
    type: "Kuća",
    updatedAt: "2026-10-15",
    description:
      "Lepo održavana kuća blizu centra grada, sa dvostrukom garažom i pristupom sa mirne ulice. Spremna je za useljenje.",
    details: { Spratnost: "Pr + 1", Grejanje: "Etažno na gas", "Godina izgradnje": 2014, Parking: "Garaža za dva vozila" },
    photos: [house("28% 78%", 2.2), ...HOUSE_VIEWS],
  },
  {
    id: 5,
    deal: "Kupovina",
    title: "Četvorosoban stan na visokom spratu",
    location: "Beograd, Vračar",
    price: 310000,
    area: 96,
    rooms: 4,
    type: "Stan",
    updatedAt: "2026-10-30",
    description:
      "Komforan četvorosoban stan sa panoramskim pogledom na grad. Ima dva kupatila, zasebnu kuhinju i veliku terasu.",
    details: { Sprat: "15 / 20", Grejanje: "Centralno", "Godina izgradnje": 2020, Parking: "Garažno mesto" },
    photos: [city("93% 38%", 2.6), ...CITY_VIEWS],
  },
  {
    id: 6,
    deal: "Kupovina",
    title: "Dvospratna kuća u mirnom kraju",
    location: "Niš, Pantelej",
    price: 215000,
    area: 150,
    rooms: 5,
    type: "Kuća",
    updatedAt: "2026-09-30",
    description:
      "Kuća na dva nivoa u tihom delu grada, sa puno prirodnog svetla i malim dvorištem. Pogodna za veću porodicu.",
    details: { Spratnost: "Pr + 1", Grejanje: "Etažno na gas", "Godina izgradnje": 2012, Parking: "Dvorište" },
    photos: [house("48% 42%", 2), ...HOUSE_VIEWS],
  },
  {
    id: 7,
    deal: "Iznajmljivanje",
    title: "Garsonjera blizu centra",
    location: "Niš, Centar",
    price: 280,
    area: 32,
    rooms: 1,
    type: "Stan",
    updatedAt: "2026-11-01",
    description:
      "Kompletno opremljena garsonjera, idealna za studente ili jednu osobu. Centar grada je na par minuta hoda.",
    details: { Sprat: "2 / 5", Grejanje: "Centralno", "Godina izgradnje": 2008, Parking: "Ulični" },
    photos: [city("6% 48%", 2.6), ...CITY_VIEWS],
  },
  {
    id: 8,
    deal: "Iznajmljivanje",
    title: "Dvosoban stan sa terasom",
    location: "Novi Sad, Grbavica",
    price: 520,
    area: 55,
    rooms: 2,
    type: "Stan",
    updatedAt: "2026-10-25",
    description:
      "Namešten dvosoban stan sa zastakljenom terasom i liftom u zgradi. Dostupan za dugoročan najam.",
    details: { Sprat: "4 / 7", Grejanje: "Centralno", "Godina izgradnje": 2018, Parking: "Spoljno mesto" },
    photos: [city("35% 42%", 2.6), ...CITY_VIEWS],
  },
  {
    id: 9,
    deal: "Iznajmljivanje",
    title: "Kuća sa baštom",
    location: "Beograd, Zemun",
    price: 900,
    area: 120,
    rooms: 4,
    type: "Kuća",
    updatedAt: "2026-10-18",
    description:
      "Nameštena kuća sa baštom i garažom, u mirnom naselju. Pogodna za porodicu koja želi više prostora.",
    details: { Spratnost: "Pr + 1", Grejanje: "Etažno na gas", "Godina izgradnje": 2015, Parking: "Garaža" },
    photos: [house("76% 72%", 2.2), ...HOUSE_VIEWS],
  },
];
