import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import tableStyle from "../../styles/lib/components/table.scss?inline";
import paginationStyle from "../../styles/lib/demo/pagination.scss?inline";
import {
  VirtualizerHostElement,
  virtualize,
  virtualizerRef,
} from "@lit-labs/virtualizer/virtualize.js";
import { repeat } from "lit/directives/repeat.js";

export interface GridProps {
  wrapperProps?: object;
  tableCaption?: string;
  pageSize: number;
  itemsPerPageSelector?: Array<number>;
  showBorders: boolean;
  enableFiltering: boolean;
  enableColumnResizing: boolean;
  enableColumnReordering: boolean;
  // enableColumnHiding: boolean;
  enableInfiniteScroll: boolean;
  enablePagination: boolean;
  enableGlobalSearch: boolean;
  enableStickyHeader: boolean;
  enableSorting: boolean;
  columns: Array<any>;
  dataSource: Array<any>;
  sortedColumns: Array<string>;
  sortAscending: boolean;
}

interface FilteredColumns {
  key: string;
  type: string;
  value: string;
}

@customElement("studs-grid")
export class StudsGrid extends LitElement {
  // Table Properties
  @property({ type: Object }) wrapperProps: GridProps["wrapperProps"] = {};
  @property({ type: String }) tableCaption?: GridProps["tableCaption"];
  @property({ type: Number }) pageSize: GridProps["pageSize"] = 10;
  @property({ type: Array })
  itemsPerPageSelector?: GridProps["itemsPerPageSelector"] = [10, 25, 50, 100];
  @property({ type: Boolean }) showBorders: GridProps["showBorders"] = true;
  @property({ type: Boolean }) enableFiltering: GridProps["enableFiltering"] =
    true;
  @property({ type: Boolean })
  enableColumnResizing: GridProps["enableColumnResizing"] = true;
  @property({ type: Boolean })
  enableColumnReordering: GridProps["enableColumnReordering"] = true;
  // @property({ type: Boolean }) enableColumnHiding: boolean = true;
  @property({ type: Boolean })
  enableInfiniteScroll: GridProps["enableInfiniteScroll"] = true;
  @property({ type: Boolean }) enablePagination: GridProps["enablePagination"] =
    true;
  @property({ type: Boolean })
  enableGlobalSearch: GridProps["enableGlobalSearch"] = true;
  @property({ type: Boolean })
  enableStickyHeader: GridProps["enableStickyHeader"] = true;
  @property({ type: Boolean }) enableSorting: GridProps["enableSorting"] = true;

  @property({ type: Array }) columns: GridProps["columns"] = [
    {
      key: "id",
      label: "Id",
      display: {
        direction: "rtl",
      },
      sort: {
        desc: false,
      },
      searchable: true,
      type: "number",
    },
    {
      key: "first_name",
      label: "First Name",
      searchable: {
        dataSource: [
          "Christina",
          "Seline",
          "Emili",
          "North",
          "Cash",
          "Gaylord",
          "Dorey",
          "Myca",
          "Gunter",
        ],
      },
    },
    {
      key: "last_name",
      label: "Last Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "gender",
      label: "Gender",
    },
    {
      key: "ip",
      label: "IP Address",
    },
  ];
  @property({ type: Array }) dataSource: GridProps["dataSource"] = [
    {
      id: 0,
      first_name: "Shanna",
      last_name: "Barrows",
      email: "Everette.Cormier64@yahoo.com",
      gender: "female",
      ip: "71.186.167.238",
    },
    {
      id: 1,
      first_name: "Alexys",
      last_name: "Toy",
      email: "Iva_Parisian@yahoo.com",
      gender: "female",
      ip: "235.124.161.47",
    },
    {
      id: 2,
      first_name: "Rodrigo",
      last_name: "Bosco",
      email: "Jessica_Cole35@gmail.com",
      gender: "female",
      ip: "175.73.241.77",
    },
    {
      id: 3,
      first_name: "Alexa",
      last_name: "Bergstrom",
      email: "Ollie.Mante36@gmail.com",
      gender: "female",
      ip: "134.244.232.31",
    },
    {
      id: 4,
      first_name: "Lolita",
      last_name: "Ferry",
      email: "Ezequiel_Kassulke@gmail.com",
      gender: "male",
      ip: "121.159.48.194",
    },
    {
      id: 5,
      first_name: "Jazmin",
      last_name: "Torp",
      email: "Grace_Upton@yahoo.com",
      gender: "female",
      ip: "181.161.198.211",
    },
    {
      id: 6,
      first_name: "Connor",
      last_name: "Hodkiewicz",
      email: "Caterina91@gmail.com",
      gender: "male",
      ip: "9.131.209.42",
    },
    {
      id: 7,
      first_name: "Mina",
      last_name: "Kertzmann",
      email: "Dallas72@hotmail.com",
      gender: "female",
      ip: "121.219.135.220",
    },
    {
      id: 8,
      first_name: "Adele",
      last_name: "Nicolas",
      email: "Jermaine_Goldner85@gmail.com",
      gender: "female",
      ip: "229.21.52.24",
    },
    {
      id: 9,
      first_name: "Ardella",
      last_name: "Bahringer",
      email: "Tevin.Huel56@gmail.com",
      gender: "male",
      ip: "49.155.144.50",
    },
    {
      id: 10,
      first_name: "Sonny",
      last_name: "Leffler",
      email: "Esteban83@gmail.com",
      gender: "female",
      ip: "108.212.132.174",
    },
    {
      id: 11,
      first_name: "Ken",
      last_name: "Spinka-D'Amore",
      email: "Sean.Schulist91@gmail.com",
      gender: "male",
      ip: "11.8.95.78",
    },
    {
      id: 12,
      first_name: "Herta",
      last_name: "Rolfson",
      email: "Durward_Pollich@yahoo.com",
      gender: "female",
      ip: "241.175.255.137",
    },
    {
      id: 13,
      first_name: "Jovanny",
      last_name: "Kub",
      email: "Effie91@gmail.com",
      gender: "male",
      ip: "89.169.48.130",
    },
    {
      id: 14,
      first_name: "Aiden",
      last_name: "Weimann",
      email: "Carmela_Johnston@yahoo.com",
      gender: "female",
      ip: "212.80.17.136",
    },
    {
      id: 15,
      first_name: "Ken",
      last_name: "Johnson",
      email: "Reva.Bechtelar@gmail.com",
      gender: "female",
      ip: "88.11.164.200",
    },
    {
      id: 16,
      first_name: "Victoria",
      last_name: "Dickinson",
      email: "Travon_Quigley@gmail.com",
      gender: "female",
      ip: "184.150.129.166",
    },
    {
      id: 17,
      first_name: "Quinten",
      last_name: "Kuvalis",
      email: "Kiera26@hotmail.com",
      gender: "female",
      ip: "134.203.19.2",
    },
    {
      id: 18,
      first_name: "Dixie",
      last_name: "Shields",
      email: "Aglae82@yahoo.com",
      gender: "male",
      ip: "229.0.191.220",
    },
    {
      id: 19,
      first_name: "Kylie",
      last_name: "Ziemann",
      email: "Rogers_Nicolas69@gmail.com",
      gender: "male",
      ip: "244.123.148.47",
    },
    {
      id: 20,
      first_name: "Willy",
      last_name: "Stracke",
      email: "Keagan.Balistreri1@gmail.com",
      gender: "female",
      ip: "186.154.15.125",
    },
    {
      id: 21,
      first_name: "Zelda",
      last_name: "Bosco",
      email: "Keaton81@yahoo.com",
      gender: "male",
      ip: "91.72.27.143",
    },
    {
      id: 22,
      first_name: "Madelynn",
      last_name: "Heathcote-Lemke",
      email: "Gina_Bailey@gmail.com",
      gender: "male",
      ip: "109.107.154.171",
    },
    {
      id: 23,
      first_name: "Rosalind",
      last_name: "Baumbach",
      email: "Georgianna.Emard92@hotmail.com",
      gender: "female",
      ip: "30.30.43.176",
    },
    {
      id: 24,
      first_name: "Tomas",
      last_name: "Grady",
      email: "Destini.Brekke88@yahoo.com",
      gender: "male",
      ip: "211.7.126.127",
    },
    {
      id: 25,
      first_name: "Kristian",
      last_name: "Kovacek",
      email: "Alysson94@yahoo.com",
      gender: "female",
      ip: "157.120.168.72",
    },
    {
      id: 26,
      first_name: "Agnes",
      last_name: "Bosco",
      email: "Michaela.Strosin@gmail.com",
      gender: "male",
      ip: "217.118.139.215",
    },
    {
      id: 27,
      first_name: "Jairo",
      last_name: "Runte",
      email: "Pierre93@yahoo.com",
      gender: "female",
      ip: "224.179.205.23",
    },
    {
      id: 28,
      first_name: "Stevie",
      last_name: "Bechtelar",
      email: "Christa_Ebert59@hotmail.com",
      gender: "female",
      ip: "15.241.254.140",
    },
    {
      id: 29,
      first_name: "Kobe",
      last_name: "Pouros",
      email: "Mariana_Harvey@hotmail.com",
      gender: "male",
      ip: "76.129.128.41",
    },
    {
      id: 30,
      first_name: "Ally",
      last_name: "Schumm",
      email: "Annetta_Bernhard@hotmail.com",
      gender: "male",
      ip: "172.165.107.232",
    },
    {
      id: 31,
      first_name: "Merle",
      last_name: "Rowe",
      email: "Napoleon_Erdman31@yahoo.com",
      gender: "female",
      ip: "74.2.91.243",
    },
    {
      id: 32,
      first_name: "Cornell",
      last_name: "Daugherty",
      email: "Antonetta.Jenkins49@gmail.com",
      gender: "male",
      ip: "181.160.142.153",
    },
    {
      id: 33,
      first_name: "Reuben",
      last_name: "Lehner",
      email: "Barton94@hotmail.com",
      gender: "male",
      ip: "2.63.72.249",
    },
    {
      id: 34,
      first_name: "Kelly",
      last_name: "Kovacek",
      email: "Ebony65@gmail.com",
      gender: "female",
      ip: "186.24.16.188",
    },
    {
      id: 35,
      first_name: "Ashley",
      last_name: "Haag",
      email: "Alek_Olson@gmail.com",
      gender: "female",
      ip: "203.149.156.109",
    },
    {
      id: 36,
      first_name: "Rodger",
      last_name: "Sipes-Schinner",
      email: "Nolan.Yundt25@yahoo.com",
      gender: "male",
      ip: "79.139.24.196",
    },
    {
      id: 37,
      first_name: "Carlo",
      last_name: "Auer",
      email: "Brady19@gmail.com",
      gender: "female",
      ip: "133.34.41.185",
    },
    {
      id: 38,
      first_name: "Addison",
      last_name: "Friesen",
      email: "Loyal.Kihn@gmail.com",
      gender: "female",
      ip: "34.63.4.245",
    },
    {
      id: 39,
      first_name: "Xavier",
      last_name: "Wiza-Schuster",
      email: "Lavern_Nikolaus99@hotmail.com",
      gender: "male",
      ip: "166.133.51.142",
    },
    {
      id: 40,
      first_name: "Herta",
      last_name: "Baumbach",
      email: "Margarett21@gmail.com",
      gender: "male",
      ip: "85.107.2.171",
    },
    {
      id: 41,
      first_name: "Alexandro",
      last_name: "Bednar-Mann",
      email: "Lavada.Luettgen31@gmail.com",
      gender: "female",
      ip: "197.145.194.150",
    },
    {
      id: 42,
      first_name: "Edison",
      last_name: "Homenick",
      email: "Elza90@yahoo.com",
      gender: "female",
      ip: "131.136.68.3",
    },
    {
      id: 43,
      first_name: "Marley",
      last_name: "Bernhard",
      email: "Titus80@hotmail.com",
      gender: "male",
      ip: "225.13.116.107",
    },
    {
      id: 44,
      first_name: "Eric",
      last_name: "Emmerich",
      email: "Ari.Ernser-Emmerich@hotmail.com",
      gender: "female",
      ip: "76.102.114.36",
    },
    {
      id: 45,
      first_name: "Logan",
      last_name: "Shields",
      email: "Cesar91@yahoo.com",
      gender: "male",
      ip: "65.40.169.11",
    },
    {
      id: 46,
      first_name: "Dawn",
      last_name: "Effertz",
      email: "Clark.Schumm@hotmail.com",
      gender: "female",
      ip: "220.153.43.246",
    },
    {
      id: 47,
      first_name: "Bertrand",
      last_name: "Powlowski",
      email: "Aiden_Auer93@yahoo.com",
      gender: "female",
      ip: "15.201.58.26",
    },
    {
      id: 48,
      first_name: "Ulices",
      last_name: "McKenzie",
      email: "Janis31@gmail.com",
      gender: "female",
      ip: "165.190.14.4",
    },
    {
      id: 49,
      first_name: "Tamara",
      last_name: "Sauer",
      email: "Litzy91@hotmail.com",
      gender: "male",
      ip: "158.30.212.116",
    },
    {
      id: 50,
      first_name: "Gertrude",
      last_name: "Erdman",
      email: "Freida.Medhurst-Botsford62@yahoo.com",
      gender: "male",
      ip: "35.154.183.207",
    },
    {
      id: 51,
      first_name: "Kaelyn",
      last_name: "Price",
      email: "Vita.Kovacek@gmail.com",
      gender: "female",
      ip: "137.141.136.103",
    },
    {
      id: 52,
      first_name: "Micaela",
      last_name: "Donnelly",
      email: "Quinton_Fritsch@hotmail.com",
      gender: "female",
      ip: "66.248.80.7",
    },
    {
      id: 53,
      first_name: "Darby",
      last_name: "Walter",
      email: "Wendell_Huels82@gmail.com",
      gender: "male",
      ip: "137.66.56.138",
    },
    {
      id: 54,
      first_name: "Pearl",
      last_name: "Beahan",
      email: "Ardith.Dicki65@gmail.com",
      gender: "female",
      ip: "77.170.157.159",
    },
    {
      id: 55,
      first_name: "Herminia",
      last_name: "Grant",
      email: "Delia.Olson@yahoo.com",
      gender: "female",
      ip: "155.210.60.11",
    },
    {
      id: 56,
      first_name: "Matilda",
      last_name: "Heidenreich",
      email: "Ozella.Bernier87@gmail.com",
      gender: "female",
      ip: "140.40.230.55",
    },
    {
      id: 57,
      first_name: "Clifton",
      last_name: "Bradtke",
      email: "Alexandria_Windler@hotmail.com",
      gender: "female",
      ip: "94.215.24.213",
    },
    {
      id: 58,
      first_name: "Isabella",
      last_name: "Aufderhar",
      email: "Orland.Balistreri@yahoo.com",
      gender: "male",
      ip: "68.53.105.64",
    },
    {
      id: 59,
      first_name: "Margarett",
      last_name: "Haag",
      email: "Lenore25@hotmail.com",
      gender: "female",
      ip: "6.71.18.106",
    },
    {
      id: 60,
      first_name: "Eldred",
      last_name: "Bayer",
      email: "Lauriane_Schuppe@yahoo.com",
      gender: "female",
      ip: "59.21.154.220",
    },
    {
      id: 61,
      first_name: "Chanel",
      last_name: "Zemlak",
      email: "Grady_Stroman84@yahoo.com",
      gender: "male",
      ip: "91.106.37.195",
    },
    {
      id: 62,
      first_name: "Georgette",
      last_name: "Shanahan",
      email: "Beverly_Donnelly54@hotmail.com",
      gender: "male",
      ip: "66.24.186.219",
    },
    {
      id: 63,
      first_name: "Nova",
      last_name: "Schmeler",
      email: "Wilber_Hirthe23@yahoo.com",
      gender: "female",
      ip: "212.4.185.32",
    },
    {
      id: 64,
      first_name: "Bettie",
      last_name: "Breitenberg",
      email: "Kristopher_Spencer74@gmail.com",
      gender: "female",
      ip: "105.63.183.67",
    },
    {
      id: 65,
      first_name: "Manuel",
      last_name: "Dach",
      email: "Karlie_Ullrich79@hotmail.com",
      gender: "male",
      ip: "21.199.247.18",
    },
    {
      id: 66,
      first_name: "Austyn",
      last_name: "Heaney",
      email: "Antonietta69@yahoo.com",
      gender: "male",
      ip: "249.54.61.235",
    },
    {
      id: 67,
      first_name: "Dorian",
      last_name: "Veum",
      email: "Gordon.Christiansen@gmail.com",
      gender: "male",
      ip: "191.243.206.98",
    },
    {
      id: 68,
      first_name: "Emmy",
      last_name: "Jenkins",
      email: "Amos89@yahoo.com",
      gender: "male",
      ip: "13.169.188.29",
    },
    {
      id: 69,
      first_name: "Anastasia",
      last_name: "Gutmann",
      email: "Eleanore_Torp18@gmail.com",
      gender: "male",
      ip: "235.215.59.140",
    },
    {
      id: 70,
      first_name: "Sydnee",
      last_name: "Stroman",
      email: "Schuyler10@gmail.com",
      gender: "female",
      ip: "57.226.168.63",
    },
    {
      id: 71,
      first_name: "Tanner",
      last_name: "Reynolds",
      email: "Keely_Hills@gmail.com",
      gender: "male",
      ip: "164.206.101.169",
    },
    {
      id: 72,
      first_name: "Laury",
      last_name: "Hammes",
      email: "Dillan12@yahoo.com",
      gender: "male",
      ip: "29.63.4.240",
    },
    {
      id: 73,
      first_name: "Tiara",
      last_name: "Koch",
      email: "Aubree.Kautzer@yahoo.com",
      gender: "female",
      ip: "224.23.199.58",
    },
    {
      id: 74,
      first_name: "Jade",
      last_name: "Jast-Jacobson",
      email: "Andreanne_Stamm28@hotmail.com",
      gender: "female",
      ip: "27.216.3.127",
    },
    {
      id: 75,
      first_name: "Emie",
      last_name: "Wiegand",
      email: "Margarett6@yahoo.com",
      gender: "female",
      ip: "144.111.17.21",
    },
    {
      id: 76,
      first_name: "Frederik",
      last_name: "Dietrich",
      email: "Jazmyn_Stanton58@hotmail.com",
      gender: "female",
      ip: "223.87.107.154",
    },
    {
      id: 77,
      first_name: "Daron",
      last_name: "McGlynn",
      email: "Alex14@gmail.com",
      gender: "female",
      ip: "140.36.5.71",
    },
    {
      id: 78,
      first_name: "Wendy",
      last_name: "Denesik",
      email: "Tyree_Larson@yahoo.com",
      gender: "female",
      ip: "248.104.100.234",
    },
    {
      id: 79,
      first_name: "Beatrice",
      last_name: "Wilderman-Senger",
      email: "Christian_Daugherty36@gmail.com",
      gender: "male",
      ip: "106.133.210.147",
    },
    {
      id: 80,
      first_name: "Ansley",
      last_name: "O'Conner",
      email: "Michale_Adams@yahoo.com",
      gender: "female",
      ip: "40.179.223.6",
    },
    {
      id: 81,
      first_name: "Maude",
      last_name: "Kessler",
      email: "Fatima_Streich@hotmail.com",
      gender: "male",
      ip: "24.162.96.136",
    },
    {
      id: 82,
      first_name: "Gardner",
      last_name: "Halvorson",
      email: "Darian25@hotmail.com",
      gender: "male",
      ip: "120.85.12.213",
    },
    {
      id: 83,
      first_name: "Bartholome",
      last_name: "Bauch-Cremin",
      email: "Robb_Willms39@yahoo.com",
      gender: "male",
      ip: "48.55.61.198",
    },
    {
      id: 84,
      first_name: "Darius",
      last_name: "Kreiger",
      email: "Kaylah1@yahoo.com",
      gender: "female",
      ip: "185.109.106.108",
    },
    {
      id: 85,
      first_name: "Niko",
      last_name: "Fahey",
      email: "Florence45@gmail.com",
      gender: "male",
      ip: "46.11.224.111",
    },
    {
      id: 86,
      first_name: "Carroll",
      last_name: "Hahn",
      email: "Dawson.Larkin34@gmail.com",
      gender: "male",
      ip: "127.1.25.220",
    },
    {
      id: 87,
      first_name: "Katrine",
      last_name: "Zemlak-Stroman",
      email: "Raina1@gmail.com",
      gender: "female",
      ip: "222.231.196.247",
    },
    {
      id: 88,
      first_name: "Britney",
      last_name: "Abbott",
      email: "Breanne56@yahoo.com",
      gender: "female",
      ip: "22.17.186.246",
    },
    {
      id: 89,
      first_name: "Anika",
      last_name: "Reilly",
      email: "Sammie96@yahoo.com",
      gender: "male",
      ip: "118.24.238.157",
    },
    {
      id: 90,
      first_name: "Tyrel",
      last_name: "Treutel",
      email: "Leo.Blick97@yahoo.com",
      gender: "female",
      ip: "74.83.187.117",
    },
    {
      id: 91,
      first_name: "Dell",
      last_name: "Russel",
      email: "Delphine_Rutherford58@yahoo.com",
      gender: "female",
      ip: "26.36.32.5",
    },
    {
      id: 92,
      first_name: "Adelbert",
      last_name: "Huel",
      email: "Emerald.Krajcik@yahoo.com",
      gender: "male",
      ip: "246.123.237.86",
    },
    {
      id: 93,
      first_name: "Bethany",
      last_name: "Russel",
      email: "Aubrey.Bradtke@gmail.com",
      gender: "female",
      ip: "1.175.155.65",
    },
    {
      id: 94,
      first_name: "Jermain",
      last_name: "Kohler",
      email: "Kaela_Doyle@yahoo.com",
      gender: "female",
      ip: "149.32.124.148",
    },
    {
      id: 95,
      first_name: "Marquis",
      last_name: "Green-Strosin",
      email: "Herminia_Muller@gmail.com",
      gender: "female",
      ip: "48.255.228.18",
    },
    {
      id: 96,
      first_name: "Ryan",
      last_name: "Gislason",
      email: "Faustino5@yahoo.com",
      gender: "male",
      ip: "3.39.216.194",
    },
    {
      id: 97,
      first_name: "Tito",
      last_name: "Ullrich",
      email: "Dominic.Price54@hotmail.com",
      gender: "female",
      ip: "168.45.117.40",
    },
    {
      id: 98,
      first_name: "Lilla",
      last_name: "Fadel",
      email: "Verla90@gmail.com",
      gender: "male",
      ip: "149.212.112.56",
    },
    {
      id: 99,
      first_name: "Libby",
      last_name: "Frami",
      email: "Kianna_Corwin91@hotmail.com",
      gender: "female",
      ip: "223.13.168.210",
    },
    {
      id: 100,
      first_name: "Yvonne",
      last_name: "Veum",
      email: "Abdul41@hotmail.com",
      gender: "female",
      ip: "94.3.216.147",
    },
    {
      id: 101,
      first_name: "Gabrielle",
      last_name: "King",
      email: "Brant95@gmail.com",
      gender: "male",
      ip: "210.76.238.217",
    },
    {
      id: 102,
      first_name: "Arvel",
      last_name: "Koch",
      email: "Elliott_Beier39@yahoo.com",
      gender: "female",
      ip: "193.150.4.195",
    },
    {
      id: 103,
      first_name: "Keith",
      last_name: "Larson-Adams",
      email: "Alverta.Carter@hotmail.com",
      gender: "female",
      ip: "147.245.73.124",
    },
    {
      id: 104,
      first_name: "Mohammad",
      last_name: "Boyer",
      email: "Nayeli56@hotmail.com",
      gender: "female",
      ip: "19.101.112.144",
    },
    {
      id: 105,
      first_name: "Leonard",
      last_name: "Feil",
      email: "Alyson22@yahoo.com",
      gender: "female",
      ip: "62.82.69.137",
    },
    {
      id: 106,
      first_name: "Jaeden",
      last_name: "Renner",
      email: "Tyshawn.Brekke34@yahoo.com",
      gender: "female",
      ip: "195.204.186.102",
    },
    {
      id: 107,
      first_name: "Orie",
      last_name: "Kirlin",
      email: "Gabriella_Jerde57@yahoo.com",
      gender: "male",
      ip: "35.124.80.128",
    },
    {
      id: 108,
      first_name: "Tremayne",
      last_name: "Keeling-Pollich",
      email: "Joe_Mayer@hotmail.com",
      gender: "male",
      ip: "187.170.115.69",
    },
    {
      id: 109,
      first_name: "Odie",
      last_name: "Schumm",
      email: "Anissa_Gusikowski@gmail.com",
      gender: "male",
      ip: "189.21.159.78",
    },
    {
      id: 110,
      first_name: "Herminio",
      last_name: "Stracke",
      email: "Dolores_Kertzmann22@hotmail.com",
      gender: "male",
      ip: "48.59.107.243",
    },
    {
      id: 111,
      first_name: "Marcelo",
      last_name: "Emard",
      email: "Mackenzie11@yahoo.com",
      gender: "male",
      ip: "195.64.208.203",
    },
    {
      id: 112,
      first_name: "Louvenia",
      last_name: "Terry",
      email: "Ayden39@yahoo.com",
      gender: "male",
      ip: "101.210.61.155",
    },
    {
      id: 113,
      first_name: "Arjun",
      last_name: "Goldner",
      email: "Emory.Koepp96@gmail.com",
      gender: "male",
      ip: "178.219.209.246",
    },
    {
      id: 114,
      first_name: "Madonna",
      last_name: "Hyatt",
      email: "Kaleb_Conn@yahoo.com",
      gender: "male",
      ip: "49.158.227.110",
    },
    {
      id: 115,
      first_name: "Beth",
      last_name: "Smitham-Crona",
      email: "Megane48@gmail.com",
      gender: "female",
      ip: "157.63.9.180",
    },
    {
      id: 116,
      first_name: "Bryana",
      last_name: "Welch",
      email: "John25@hotmail.com",
      gender: "male",
      ip: "72.56.241.21",
    },
    {
      id: 117,
      first_name: "Marguerite",
      last_name: "Pouros",
      email: "Kevin49@hotmail.com",
      gender: "male",
      ip: "242.220.194.205",
    },
    {
      id: 118,
      first_name: "Moises",
      last_name: "Kautzer",
      email: "Rosa_Kemmer@hotmail.com",
      gender: "female",
      ip: "76.145.83.51",
    },
    {
      id: 119,
      first_name: "Uriel",
      last_name: "Huel",
      email: "Sarai_Corwin6@gmail.com",
      gender: "female",
      ip: "123.6.11.229",
    },
    {
      id: 120,
      first_name: "Kristopher",
      last_name: "Mills",
      email: "Emmitt.Zieme67@yahoo.com",
      gender: "female",
      ip: "62.231.126.209",
    },
    {
      id: 121,
      first_name: "Zetta",
      last_name: "Fadel",
      email: "Victoria.Jones@hotmail.com",
      gender: "female",
      ip: "120.41.118.81",
    },
    {
      id: 122,
      first_name: "Darius",
      last_name: "Kuhn",
      email: "Demarco_OKon30@yahoo.com",
      gender: "male",
      ip: "152.30.220.19",
    },
    {
      id: 123,
      first_name: "Catalina",
      last_name: "Muller-Ledner",
      email: "Joannie_Stehr@hotmail.com",
      gender: "female",
      ip: "127.197.65.221",
    },
    {
      id: 124,
      first_name: "Morris",
      last_name: "Homenick",
      email: "Tyrell.Crist@hotmail.com",
      gender: "female",
      ip: "16.143.228.31",
    },
    {
      id: 125,
      first_name: "Elmira",
      last_name: "Boyle",
      email: "Logan.Keebler@hotmail.com",
      gender: "female",
      ip: "35.96.224.35",
    },
    {
      id: 126,
      first_name: "Perry",
      last_name: "Runte",
      email: "Cleveland29@yahoo.com",
      gender: "female",
      ip: "127.52.156.178",
    },
    {
      id: 127,
      first_name: "Dale",
      last_name: "Mann",
      email: "Camilla42@yahoo.com",
      gender: "female",
      ip: "46.145.35.12",
    },
    {
      id: 128,
      first_name: "Marjory",
      last_name: "Heidenreich",
      email: "Liam60@hotmail.com",
      gender: "female",
      ip: "230.240.158.50",
    },
    {
      id: 129,
      first_name: "Axel",
      last_name: "Corwin",
      email: "Gregg_Swaniawski@yahoo.com",
      gender: "male",
      ip: "74.18.208.200",
    },
    {
      id: 130,
      first_name: "Hollis",
      last_name: "Howe",
      email: "Annabell_DAmore57@yahoo.com",
      gender: "male",
      ip: "108.225.123.75",
    },
    {
      id: 131,
      first_name: "Carter",
      last_name: "Roberts",
      email: "Darlene_Rice@gmail.com",
      gender: "male",
      ip: "240.88.165.228",
    },
    {
      id: 132,
      first_name: "Sonya",
      last_name: "Runolfsdottir",
      email: "Arthur_Brekke@hotmail.com",
      gender: "female",
      ip: "13.36.113.13",
    },
    {
      id: 133,
      first_name: "Mack",
      last_name: "Emmerich",
      email: "Kirsten.Weissnat@hotmail.com",
      gender: "female",
      ip: "165.136.149.212",
    },
    {
      id: 134,
      first_name: "Shanie",
      last_name: "Cummings",
      email: "Marlen.Turcotte@gmail.com",
      gender: "female",
      ip: "21.153.200.127",
    },
    {
      id: 135,
      first_name: "Eleanora",
      last_name: "Emard",
      email: "Lupe_Lueilwitz71@gmail.com",
      gender: "male",
      ip: "70.74.72.234",
    },
    {
      id: 136,
      first_name: "Coy",
      last_name: "Swift",
      email: "Maya_Rosenbaum@hotmail.com",
      gender: "male",
      ip: "112.156.241.99",
    },
    {
      id: 137,
      first_name: "Darrick",
      last_name: "Schmidt",
      email: "Adaline_Jones@gmail.com",
      gender: "female",
      ip: "199.78.39.56",
    },
    {
      id: 138,
      first_name: "Kiley",
      last_name: "Roob",
      email: "Piper.Quitzon@gmail.com",
      gender: "male",
      ip: "132.175.198.141",
    },
    {
      id: 139,
      first_name: "Marcella",
      last_name: "Halvorson",
      email: "Delphia31@hotmail.com",
      gender: "male",
      ip: "246.214.197.141",
    },
    {
      id: 140,
      first_name: "Arvel",
      last_name: "Powlowski",
      email: "Cleta_Koelpin92@gmail.com",
      gender: "male",
      ip: "118.53.130.158",
    },
    {
      id: 141,
      first_name: "Alessandra",
      last_name: "Douglas",
      email: "Lesley70@gmail.com",
      gender: "female",
      ip: "94.153.225.30",
    },
    {
      id: 142,
      first_name: "Annabell",
      last_name: "White",
      email: "Eleanore.Breitenberg@gmail.com",
      gender: "female",
      ip: "224.212.143.29",
    },
    {
      id: 143,
      first_name: "Jean",
      last_name: "Schowalter",
      email: "Kayleigh_Harris@yahoo.com",
      gender: "male",
      ip: "7.53.99.253",
    },
    {
      id: 144,
      first_name: "Delta",
      last_name: "Casper",
      email: "Taurean_Tromp@hotmail.com",
      gender: "female",
      ip: "207.92.168.113",
    },
    {
      id: 145,
      first_name: "Leslie",
      last_name: "O'Reilly",
      email: "Anne_Brown@gmail.com",
      gender: "female",
      ip: "76.149.249.76",
    },
    {
      id: 146,
      first_name: "Cornelius",
      last_name: "Hoppe",
      email: "Breanne34@gmail.com",
      gender: "female",
      ip: "122.13.176.30",
    },
    {
      id: 147,
      first_name: "Lonie",
      last_name: "Dicki",
      email: "Oliver55@gmail.com",
      gender: "female",
      ip: "106.243.255.178",
    },
    {
      id: 148,
      first_name: "Aletha",
      last_name: "Jacobson",
      email: "Trisha_Osinski@yahoo.com",
      gender: "male",
      ip: "31.95.209.10",
    },
    {
      id: 149,
      first_name: "Jarrell",
      last_name: "Bednar",
      email: "Kirsten_Wisoky46@yahoo.com",
      gender: "male",
      ip: "210.61.127.174",
    },
    {
      id: 150,
      first_name: "Burdette",
      last_name: "Runolfsson",
      email: "Freddie_Anderson89@yahoo.com",
      gender: "male",
      ip: "227.81.19.226",
    },
    {
      id: 151,
      first_name: "Antonetta",
      last_name: "McClure",
      email: "Enos75@gmail.com",
      gender: "female",
      ip: "155.235.82.130",
    },
    {
      id: 152,
      first_name: "Ellen",
      last_name: "Boyer",
      email: "Milan_Hirthe47@hotmail.com",
      gender: "male",
      ip: "121.192.144.78",
    },
    {
      id: 153,
      first_name: "Dan",
      last_name: "Luettgen",
      email: "Abigale_Bednar@yahoo.com",
      gender: "male",
      ip: "245.27.242.147",
    },
    {
      id: 154,
      first_name: "Casimir",
      last_name: "Cruickshank",
      email: "Royal.Keebler@hotmail.com",
      gender: "male",
      ip: "37.62.31.215",
    },
    {
      id: 155,
      first_name: "Wilford",
      last_name: "Schamberger-Upton",
      email: "Taya5@hotmail.com",
      gender: "male",
      ip: "37.99.72.19",
    },
    {
      id: 156,
      first_name: "Bryce",
      last_name: "Schmeler",
      email: "Eli83@hotmail.com",
      gender: "male",
      ip: "108.2.184.238",
    },
    {
      id: 157,
      first_name: "Samantha",
      last_name: "Lebsack",
      email: "Micheal.Heller-Kirlin63@yahoo.com",
      gender: "female",
      ip: "138.197.183.22",
    },
    {
      id: 158,
      first_name: "Maci",
      last_name: "Schmidt",
      email: "Ulices94@yahoo.com",
      gender: "female",
      ip: "170.51.178.35",
    },
    {
      id: 159,
      first_name: "Jasmin",
      last_name: "Hagenes",
      email: "Haley.Renner0@yahoo.com",
      gender: "female",
      ip: "230.248.215.79",
    },
    {
      id: 160,
      first_name: "Glenda",
      last_name: "Senger",
      email: "Alfred.Schaden-Senger@hotmail.com",
      gender: "male",
      ip: "20.170.138.83",
    },
    {
      id: 161,
      first_name: "Lottie",
      last_name: "Nitzsche",
      email: "Ethel.Brekke81@hotmail.com",
      gender: "male",
      ip: "250.213.84.151",
    },
    {
      id: 162,
      first_name: "Agustina",
      last_name: "Pfeffer",
      email: "Javier87@hotmail.com",
      gender: "female",
      ip: "139.188.21.223",
    },
    {
      id: 163,
      first_name: "Breanna",
      last_name: "Luettgen",
      email: "Jenifer40@gmail.com",
      gender: "male",
      ip: "84.233.244.138",
    },
    {
      id: 164,
      first_name: "Darian",
      last_name: "Skiles",
      email: "Harley_Farrell33@gmail.com",
      gender: "female",
      ip: "16.219.160.160",
    },
    {
      id: 165,
      first_name: "Kylie",
      last_name: "Wolff",
      email: "Valerie76@gmail.com",
      gender: "male",
      ip: "154.106.113.10",
    },
    {
      id: 166,
      first_name: "Estefania",
      last_name: "Schinner",
      email: "Waino88@gmail.com",
      gender: "female",
      ip: "63.47.216.117",
    },
    {
      id: 167,
      first_name: "Alta",
      last_name: "Hamill",
      email: "Darrion.Wehner84@hotmail.com",
      gender: "male",
      ip: "116.163.20.123",
    },
    {
      id: 168,
      first_name: "Elvera",
      last_name: "Goodwin",
      email: "Amari_Stehr55@yahoo.com",
      gender: "female",
      ip: "4.43.27.171",
    },
    {
      id: 169,
      first_name: "Kavon",
      last_name: "Mante",
      email: "Alexane64@hotmail.com",
      gender: "female",
      ip: "247.234.115.223",
    },
    {
      id: 170,
      first_name: "Jailyn",
      last_name: "Price",
      email: "Coby_Stokes17@gmail.com",
      gender: "female",
      ip: "8.82.116.126",
    },
    {
      id: 171,
      first_name: "Libby",
      last_name: "Sipes",
      email: "Dangelo.Franey@hotmail.com",
      gender: "male",
      ip: "160.181.199.19",
    },
    {
      id: 172,
      first_name: "Benedict",
      last_name: "Ernser",
      email: "Colt4@gmail.com",
      gender: "male",
      ip: "168.32.150.153",
    },
    {
      id: 173,
      first_name: "Nicholas",
      last_name: "Bogan",
      email: "Bryce.Doyle@yahoo.com",
      gender: "female",
      ip: "186.193.80.24",
    },
    {
      id: 174,
      first_name: "Katheryn",
      last_name: "Schuster-Cruickshank",
      email: "Rigoberto67@gmail.com",
      gender: "male",
      ip: "164.152.42.123",
    },
    {
      id: 175,
      first_name: "Kay",
      last_name: "Howe",
      email: "Kayla_Feeney5@gmail.com",
      gender: "male",
      ip: "35.84.254.165",
    },
    {
      id: 176,
      first_name: "Amya",
      last_name: "Mayert",
      email: "Marcel34@gmail.com",
      gender: "male",
      ip: "170.137.71.181",
    },
    {
      id: 177,
      first_name: "Seth",
      last_name: "Labadie",
      email: "Baron_Goodwin23@hotmail.com",
      gender: "female",
      ip: "30.252.18.144",
    },
    {
      id: 178,
      first_name: "Beatrice",
      last_name: "Bogan",
      email: "Lewis.Kautzer12@hotmail.com",
      gender: "female",
      ip: "147.212.80.19",
    },
    {
      id: 179,
      first_name: "Dorris",
      last_name: "Flatley",
      email: "Edison.Wuckert75@hotmail.com",
      gender: "male",
      ip: "90.233.224.13",
    },
    {
      id: 180,
      first_name: "Timmy",
      last_name: "Steuber",
      email: "Gerard_Von@gmail.com",
      gender: "female",
      ip: "149.214.2.136",
    },
    {
      id: 181,
      first_name: "Joesph",
      last_name: "Williamson",
      email: "Halle_Hettinger@hotmail.com",
      gender: "male",
      ip: "72.175.0.81",
    },
    {
      id: 182,
      first_name: "Hilma",
      last_name: "Mosciski",
      email: "Jedediah_Zemlak@gmail.com",
      gender: "male",
      ip: "134.52.109.255",
    },
    {
      id: 183,
      first_name: "Brian",
      last_name: "Kulas",
      email: "Michaela56@gmail.com",
      gender: "male",
      ip: "108.95.188.153",
    },
    {
      id: 184,
      first_name: "Shanel",
      last_name: "Smitham",
      email: "Ibrahim_Morar@gmail.com",
      gender: "female",
      ip: "216.210.146.221",
    },
    {
      id: 185,
      first_name: "Beverly",
      last_name: "Howe",
      email: "Elza60@hotmail.com",
      gender: "male",
      ip: "66.0.112.239",
    },
    {
      id: 186,
      first_name: "Bonnie",
      last_name: "Aufderhar",
      email: "June.Graham45@hotmail.com",
      gender: "female",
      ip: "165.218.232.72",
    },
    {
      id: 187,
      first_name: "Cale",
      last_name: "Jaskolski",
      email: "Katelynn.Zboncak@yahoo.com",
      gender: "male",
      ip: "202.3.25.140",
    },
    {
      id: 188,
      first_name: "Tanner",
      last_name: "Abshire",
      email: "Dedrick80@yahoo.com",
      gender: "male",
      ip: "85.178.178.181",
    },
    {
      id: 189,
      first_name: "Jada",
      last_name: "Legros",
      email: "Leonie8@yahoo.com",
      gender: "male",
      ip: "193.66.183.4",
    },
    {
      id: 190,
      first_name: "Katharina",
      last_name: "Lesch",
      email: "Jett_Mertz82@gmail.com",
      gender: "female",
      ip: "248.163.59.34",
    },
    {
      id: 191,
      first_name: "Leonor",
      last_name: "Nader",
      email: "Pearline80@gmail.com",
      gender: "male",
      ip: "33.103.161.23",
    },
    {
      id: 192,
      first_name: "Leila",
      last_name: "Reinger",
      email: "Alexane_Rohan@gmail.com",
      gender: "female",
      ip: "22.113.29.181",
    },
    {
      id: 193,
      first_name: "Litzy",
      last_name: "Howe",
      email: "Molly.Howell95@gmail.com",
      gender: "female",
      ip: "37.195.146.144",
    },
    {
      id: 194,
      first_name: "Loma",
      last_name: "Wilderman-Rempel",
      email: "Chester.Lind60@hotmail.com",
      gender: "male",
      ip: "87.202.203.92",
    },
    {
      id: 195,
      first_name: "Walker",
      last_name: "Wiegand",
      email: "Kirsten93@gmail.com",
      gender: "female",
      ip: "196.60.210.111",
    },
    {
      id: 196,
      first_name: "Barney",
      last_name: "Bailey",
      email: "Carmel_Batz@yahoo.com",
      gender: "female",
      ip: "255.41.223.190",
    },
    {
      id: 197,
      first_name: "Candace",
      last_name: "West",
      email: "Meggie_Nolan@yahoo.com",
      gender: "male",
      ip: "12.221.80.248",
    },
    {
      id: 198,
      first_name: "Kathleen",
      last_name: "Collier",
      email: "Madalyn.Hickle51@yahoo.com",
      gender: "male",
      ip: "39.153.43.83",
    },
    {
      id: 199,
      first_name: "Ariel",
      last_name: "Bergstrom",
      email: "Angeline79@hotmail.com",
      gender: "female",
      ip: "92.72.62.133",
    },
    {
      id: 200,
      first_name: "Ruth",
      last_name: "Buckridge",
      email: "Triston.Larson@gmail.com",
      gender: "female",
      ip: "69.20.178.187",
    },
    {
      id: 201,
      first_name: "Sonia",
      last_name: "Padberg-Krajcik",
      email: "Graciela34@yahoo.com",
      gender: "male",
      ip: "10.116.114.102",
    },
    {
      id: 202,
      first_name: "Monique",
      last_name: "Halvorson",
      email: "Adriel_Hackett@hotmail.com",
      gender: "male",
      ip: "61.197.156.101",
    },
    {
      id: 203,
      first_name: "Peggie",
      last_name: "Jast",
      email: "Peter19@hotmail.com",
      gender: "female",
      ip: "6.223.46.191",
    },
    {
      id: 204,
      first_name: "Leora",
      last_name: "Dicki",
      email: "Alta.Raynor@gmail.com",
      gender: "female",
      ip: "2.136.83.199",
    },
    {
      id: 205,
      first_name: "Isabel",
      last_name: "Gerlach",
      email: "Kianna.Zieme@hotmail.com",
      gender: "male",
      ip: "66.72.90.64",
    },
    {
      id: 206,
      first_name: "Felix",
      last_name: "Windler",
      email: "Jannie12@hotmail.com",
      gender: "male",
      ip: "65.130.117.165",
    },
    {
      id: 207,
      first_name: "Gianni",
      last_name: "Reinger",
      email: "Valentin_Ward@gmail.com",
      gender: "male",
      ip: "114.29.107.86",
    },
    {
      id: 208,
      first_name: "Lonzo",
      last_name: "Oberbrunner",
      email: "Eugene.Treutel81@hotmail.com",
      gender: "female",
      ip: "22.147.47.236",
    },
    {
      id: 209,
      first_name: "Maurice",
      last_name: "Jacobi",
      email: "Jermey.McDermott4@gmail.com",
      gender: "female",
      ip: "242.225.116.26",
    },
    {
      id: 210,
      first_name: "Michale",
      last_name: "Donnelly",
      email: "Josianne19@yahoo.com",
      gender: "female",
      ip: "92.206.159.16",
    },
    {
      id: 211,
      first_name: "Ramiro",
      last_name: "Johnston",
      email: "Camilla57@yahoo.com",
      gender: "male",
      ip: "103.160.71.190",
    },
    {
      id: 212,
      first_name: "Jennings",
      last_name: "Daniel",
      email: "Blanca13@hotmail.com",
      gender: "female",
      ip: "250.206.84.232",
    },
    {
      id: 213,
      first_name: "Sabina",
      last_name: "Deckow",
      email: "Kailey.Davis43@hotmail.com",
      gender: "female",
      ip: "36.151.187.130",
    },
    {
      id: 214,
      first_name: "Nicolas",
      last_name: "Ziemann",
      email: "Karl_Smith0@hotmail.com",
      gender: "female",
      ip: "46.93.21.178",
    },
    {
      id: 215,
      first_name: "Erica",
      last_name: "Shanahan",
      email: "Kevon.Nolan@gmail.com",
      gender: "male",
      ip: "105.160.38.147",
    },
    {
      id: 216,
      first_name: "Godfrey",
      last_name: "Yost",
      email: "Domingo58@yahoo.com",
      gender: "male",
      ip: "165.117.198.95",
    },
    {
      id: 217,
      first_name: "Neva",
      last_name: "Mitchell",
      email: "Kiara_Beatty75@yahoo.com",
      gender: "female",
      ip: "134.127.188.242",
    },
    {
      id: 218,
      first_name: "Vergie",
      last_name: "Gusikowski",
      email: "Kristian_Hammes75@hotmail.com",
      gender: "male",
      ip: "82.225.16.123",
    },
    {
      id: 219,
      first_name: "Velva",
      last_name: "Mraz",
      email: "Junior29@yahoo.com",
      gender: "male",
      ip: "114.66.125.246",
    },
    {
      id: 220,
      first_name: "Zoey",
      last_name: "Bode",
      email: "Joseph_Kuhic38@yahoo.com",
      gender: "male",
      ip: "133.77.14.221",
    },
    {
      id: 221,
      first_name: "Garland",
      last_name: "Zulauf",
      email: "Cleo_Kunze@hotmail.com",
      gender: "male",
      ip: "132.91.235.94",
    },
    {
      id: 222,
      first_name: "Adonis",
      last_name: "Hayes",
      email: "Skyla.McDermott@gmail.com",
      gender: "female",
      ip: "63.19.255.225",
    },
    {
      id: 223,
      first_name: "Zoila",
      last_name: "Carter",
      email: "Edwardo_Turner@hotmail.com",
      gender: "female",
      ip: "164.54.250.86",
    },
    {
      id: 224,
      first_name: "Nettie",
      last_name: "Hilpert",
      email: "Rahsaan_Zemlak49@hotmail.com",
      gender: "male",
      ip: "87.27.230.92",
    },
    {
      id: 225,
      first_name: "Mina",
      last_name: "Adams",
      email: "Davon.Cruickshank72@yahoo.com",
      gender: "male",
      ip: "147.161.48.232",
    },
    {
      id: 226,
      first_name: "Bonnie",
      last_name: "Jacobi",
      email: "Aglae.Fay@yahoo.com",
      gender: "male",
      ip: "8.115.9.53",
    },
    {
      id: 227,
      first_name: "Wallace",
      last_name: "Koch",
      email: "Gladys4@gmail.com",
      gender: "female",
      ip: "69.212.227.178",
    },
    {
      id: 228,
      first_name: "Carley",
      last_name: "Graham",
      email: "Miguel.Kling@yahoo.com",
      gender: "female",
      ip: "232.167.183.73",
    },
    {
      id: 229,
      first_name: "Oceane",
      last_name: "Medhurst",
      email: "Anibal42@hotmail.com",
      gender: "male",
      ip: "179.128.74.184",
    },
    {
      id: 230,
      first_name: "Rigoberto",
      last_name: "Labadie",
      email: "Kelton.Watsica@gmail.com",
      gender: "female",
      ip: "83.201.49.244",
    },
    {
      id: 231,
      first_name: "Reagan",
      last_name: "Wolff",
      email: "Dawn7@yahoo.com",
      gender: "male",
      ip: "33.158.37.222",
    },
    {
      id: 232,
      first_name: "Orlando",
      last_name: "Lesch",
      email: "Daija55@gmail.com",
      gender: "female",
      ip: "16.65.220.170",
    },
    {
      id: 233,
      first_name: "Gustave",
      last_name: "Daugherty",
      email: "Daphney.Ruecker@hotmail.com",
      gender: "female",
      ip: "180.97.191.61",
    },
    {
      id: 234,
      first_name: "Danial",
      last_name: "Beier",
      email: "Yolanda.Tremblay50@gmail.com",
      gender: "male",
      ip: "168.108.175.109",
    },
    {
      id: 235,
      first_name: "Seth",
      last_name: "Treutel",
      email: "Felicity.Pouros-Ratke@gmail.com",
      gender: "female",
      ip: "193.208.148.16",
    },
    {
      id: 236,
      first_name: "Chesley",
      last_name: "Carter",
      email: "Sienna65@hotmail.com",
      gender: "male",
      ip: "192.101.34.65",
    },
    {
      id: 237,
      first_name: "Brayan",
      last_name: "Wisoky",
      email: "Murphy.Becker91@gmail.com",
      gender: "male",
      ip: "50.36.180.166",
    },
    {
      id: 238,
      first_name: "Desmond",
      last_name: "Carroll",
      email: "Jarrett_Konopelski@yahoo.com",
      gender: "female",
      ip: "12.47.123.34",
    },
    {
      id: 239,
      first_name: "Joanne",
      last_name: "MacGyver",
      email: "Carmella65@hotmail.com",
      gender: "female",
      ip: "41.152.83.89",
    },
    {
      id: 240,
      first_name: "Fredy",
      last_name: "Hartmann",
      email: "Clement.Schoen@yahoo.com",
      gender: "female",
      ip: "48.67.187.41",
    },
    {
      id: 241,
      first_name: "Leda",
      last_name: "Halvorson",
      email: "Arden.Blick-Kerluke12@hotmail.com",
      gender: "female",
      ip: "247.119.64.125",
    },
    {
      id: 242,
      first_name: "Abbey",
      last_name: "Yundt-Doyle",
      email: "Hank6@gmail.com",
      gender: "female",
      ip: "8.230.244.75",
    },
    {
      id: 243,
      first_name: "Genesis",
      last_name: "McLaughlin",
      email: "Jess_Beer38@gmail.com",
      gender: "male",
      ip: "124.250.175.95",
    },
    {
      id: 244,
      first_name: "Callie",
      last_name: "Heller",
      email: "Cathryn.Blanda@hotmail.com",
      gender: "male",
      ip: "226.149.83.41",
    },
    {
      id: 245,
      first_name: "Simone",
      last_name: "Bashirian",
      email: "Evert25@yahoo.com",
      gender: "male",
      ip: "39.37.250.212",
    },
    {
      id: 246,
      first_name: "Einar",
      last_name: "Mraz",
      email: "Dakota_Mann@gmail.com",
      gender: "female",
      ip: "76.28.93.63",
    },
    {
      id: 247,
      first_name: "Sonya",
      last_name: "Funk",
      email: "Jessika.Braun@gmail.com",
      gender: "female",
      ip: "185.55.65.40",
    },
    {
      id: 248,
      first_name: "Isac",
      last_name: "Murray",
      email: "Matilde1@yahoo.com",
      gender: "female",
      ip: "112.80.5.156",
    },
    {
      id: 249,
      first_name: "Ashtyn",
      last_name: "Miller",
      email: "Zoie.Balistreri41@hotmail.com",
      gender: "female",
      ip: "44.255.236.56",
    },
  ];
  @property({ type: Array }) sortedColumns: GridProps["sortedColumns"] = [];
  @property({ type: Boolean }) sortAscending: GridProps["sortAscending"] = true;

  @state() protected _searchTerm: string = "";
  @state() protected _currentPage: number = 1;
  @state() protected _psuedoCurrentPage: number = this._currentPage;
  @state() protected _filteredColumns: Array<FilteredColumns> = [];
  @state() protected _lastVisible: number = 0;

  // protected updated(
  //   _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  // ): void {
  //   if (this.enableInfiniteScroll) this.addIntersectionObserver();
  // }

  static styles = [unsafeCSS(tableStyle), unsafeCSS(paginationStyle)];

  protected get data() {
    return this.dataSource;
  }

  /** Functions
   * 1. Filters
   */

  protected get filterSearchResults() {
    return this.data.filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(this._searchTerm.toLowerCase())
      );
    });
  }

  /**
   * Getters and Setters
   */

  protected filterResults(data: object[]) {
    if (data) {
      const filtered = data.filter((row: any) => {
        const filteredResults = this._filteredColumns.every((column) => {
          const value = row[column.key];
          switch (column.type) {
            case "contains":
              return String(value)
                .toLowerCase()
                .includes(column.value.toLowerCase());
            case "greater than":
              return parseInt(value) > parseInt(column.value);
            case "less than":
              return parseInt(value) < parseInt(column.value);
            case "equals":
              if (parseInt(column.value)) {
                return parseInt(value) === parseInt(column.value);
              }
              return value === column.value;
            case "not equals":
              if (parseInt(column.value)) {
                return parseInt(value) !== parseInt(column.value);
              }
              return value !== column.value;
            default:
              return true;
          }
        });
        return filteredResults;
      });
      if (filtered.length === 0) return data;
      return filtered;
    }
  }

  // Getters

  protected get filteredData() {
    const filterColumns = this._filteredColumns.length > 0;

    if (filterColumns && this._searchTerm) {
      const searchFilter = this.filterSearchResults;
      return this.filterResults(searchFilter);
    }
    if (filterColumns) {
      return this.filterResults(this.data);
    }

    if (this._searchTerm) return this.filterSearchResults;

    return this.data;
  }

  protected get totalPages() {
    if (this.filteredData)
      return Math.ceil(this.filteredData.length / this.pageSize);
  }

  protected get startIndex() {
    return (this._currentPage - 1) * this.pageSize;
  }

  protected get endIndex() {
    return this.startIndex + this.pageSize;
  }

  protected get isVirtualizedEnabled() {
    // Getter that checks length of items and value of enableInfiniteScroll
    if (this.filteredData) {
      if (
        this.filteredData?.length > this.pageSize &&
        this.enableInfiniteScroll
      )
        return true;
    }
    return false;
  }

  protected set setPage(page: number) {
    this._currentPage = page;
    this._psuedoCurrentPage = page;
  }

  /**
   * Render Items
   */

  protected renderColumnFilterField(key: string) {
    if (this.enableFiltering) {
      const column = this._filteredColumns.find((column) => column.key === key);
      const inputValue = column ? column?.value : "";
      const selectValue = column ? column?.type : "contains";
      // TODO : Implement filtering for equals, not equals, greater than, less than, contains
      // const type = "contains";

      return html`
        <form>
          <select name="type" @input=${this.onFilterType} .value=${selectValue}>
            <option>contains</option>
            <option>greater than</option>
            <option>less than</option>
            <option>equals</option>
            <option>not equals</option>
          </select>
          <input
            name=${key}
            type="text"
            @input=${this.onFilterInput}
            .value=${inputValue}
          />
        </form>
      `;
    }
  }

  protected renderCaption() {
    if (this.tableCaption) {
      return html` <caption>
        ${this.tableCaption}
      </caption>`;
    }
  }

  public sortOrders: { [key: string]: boolean } = {};
  @state() private _draggableColumn?: number;

  protected renderColumns() {
    if (this.columns) {
      return map(this.columns, (column, index) => {
        return html`
          <th
            id=${column.key}
            .key=${column.key}
            draggable=${this.enableColumnReordering &&
            this._draggableColumn === index}
            @dragstart=${(event: DragEvent) => {
              event.stopPropagation();
              event?.dataTransfer?.setData("type", "column");
              // @ts-ignore
              event?.dataTransfer?.setData("data", index);
            }}
            @drop=${(event: DragEvent) => {
              event.preventDefault();
              const fromIndex = event?.dataTransfer?.getData("data");
              const toIndex = index;
              // @ts-ignore
              if (fromIndex !== toIndex) {
                // Update columns array with new order
                const newColumns = [...this.columns];
                // @ts-ignore
                const [removed] = newColumns.splice(fromIndex, 1);
                // removed.key = this.columns[toIndex].key; // change the name of the key to its intended key
                newColumns.splice(toIndex, 0, removed);
                this.columns = newColumns;
                // Update dataSource array with new order
                const newDataSource = [...this.data].reduce((acc, row) => {
                  const newRow = this.reorderObject(
                    row,
                    //@ts-ignore
                    parseInt(fromIndex, 10),
                    toIndex
                  );

                  return [...acc, newRow];
                }, []);
                this.dataSource = newDataSource;
                this._draggableColumn = undefined;
              }
            }}
            @dragover=${(event: DragEvent) => {
              event.preventDefault();
            }}
          >
            ${this.enableColumnReordering
              ? html`<div
                  class="reorder-handle"
                  @mousedown=${() => {
                    console.log("mousedown");
                    this._draggableColumn = index;
                    console.log(this._draggableColumn);
                  }}
                  @mouseup=${() => {
                    console.log("mouseup");
                  }}
                >
                  ☰
                </div>`
              : ``}
            <p
              @click=${(event: MouseEvent) =>
                this.onSortTable(column.key, event)}
            >
              ${column.label}
              ${this.sortedColumns.includes(column.key) &&
              this.sortOrders[column.key] !== null
                ? html`<span
                    >${this.sortOrders[column.key] ? "↑" : "↓"}
                    ${this.sortedColumns?.length > 1
                      ? this.sortedColumns.findIndex((i) => i === column.key) +
                        1
                      : ""}</span
                  >`
                : ""}
            </p>
            ${this.renderColumnFilterField(column.key)}
            ${this.enableColumnResizing
              ? html`<div
                  class="resize-handle"
                  @mousedown=${this.onMouseMoveDown}
                >
                  ↔
                </div>`
              : ""}
          </th>
        `;
      });
    }
  }

  @state() protected _startIndex: number = 0;
  @state() protected _endIndex: number = 0;
  @state() protected _offset: number = 0;

  protected renderRows() {
    if (this.data) {
      this._startIndex = (this._currentPage - 1) * this.pageSize;
      this._endIndex = this._startIndex + this.pageSize + this._offset;

      const item = (row: { [x: string]: any }, index: number) => {
        return html`
          <tr
            data-index=${index}
            draggable=${this.enableColumnReordering}
            @dragstart=${(event: DragEvent) => {
              event?.dataTransfer?.setData("type", "row");
              // @ts-ignore
              event?.dataTransfer?.setData("data", index);
            }}
            @drop=${(event: DragEvent) => {
              event.preventDefault();
              const fromIndex = event?.dataTransfer?.getData("data");
              const toIndex = index;
              // @ts-ignore
              if (fromIndex !== toIndex) {
                // Update dataSource array with new order
                const newDataSource = [...this.data];
                // @ts-ignore
                const [removed] = newDataSource.splice(fromIndex, 1);
                newDataSource.splice(toIndex, 0, removed);
                this.dataSource = newDataSource;
              }
            }}
            @dragover=${(event: DragEvent) => {
              event.preventDefault();
            }}
          >
            ${Object.keys(row).map((key) => html`<td>${row[key]}</td>`)}
          </tr>
        `;
      };

      const rows = this.isVirtualizedEnabled
        ? virtualize({
            scroller: true,
            items: this.filteredData?.slice(this._startIndex, this._endIndex),
            renderItem: (row, index) => {
              return item(row, index);
            },
          })
        : repeat(
            // @ts-ignore
            this.filteredData?.slice(this._startIndex, this._endIndex),
            (row) => row.id,
            (row, index) => {
              return item(row, index);
            }
          );
      return rows;
    }

    return null;
  }

  private renderPaginationPages() {
    if (this.totalPages) {
      if (this.totalPages > 10) {
        const _firstPages: number[] = Array.from(
          { length: 3 },
          (_, i) => i + 1
        );
        const _middlePages: number[] = [
          this._psuedoCurrentPage - 2,
          this._psuedoCurrentPage - 1,
          this._psuedoCurrentPage,
          this._psuedoCurrentPage + 1,
          this._psuedoCurrentPage + 2,
          // @ts-ignore
        ].filter((page) => page > 3 && page < this.totalPages - 2);
        const endingPages: number[] = Array.from(
          { length: 3 },
          // @ts-ignore
          (_, i) => this.totalPages - i
        ).reverse();
        const pages = [..._firstPages, ..._middlePages, ...endingPages];
        return pages.map(
          (page) => html`
            <li
              class="page-item ${this._psuedoCurrentPage === page
                ? "active"
                : ""}"
            >
              <a
                class="page-link"
                href="#"
                @click=${
                  // @ts-ignore
                  () => this.onPageClick(page)
                }
                >${page}</a
              >
            </li>
          `
        );
      } else {
        const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        return pages.map(
          (page) => html`
            <li
              class="page-item ${this._psuedoCurrentPage === page
                ? "active"
                : ""}"
            >
              <a
                class="page-link"
                href="#"
                @click=${
                  // @ts-ignore
                  () => this.onPageClick(page)
                }
                >${page}</a
              >
            </li>
          `
        );
      }
    }
  }

  private renderPagination() {
    if (this.enablePagination)
      return html`
        <nav>
          <ul class="pagination">
            <li
              class="page-item ${this._psuedoCurrentPage === 1
                ? "disabled"
                : ""}"
            >
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                @click=${this.onPreviousClick}
              >
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            ${this.renderPaginationPages()}
            <li
              class="page-item ${this._psuedoCurrentPage === this.totalPages
                ? "disabled"
                : ""}"
            >
              <a
                class="page-link"
                href="#"
                aria-label="Next"
                @click=${this.onNextClick}
              >
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      `;
  }

  render() {
    const classes = {
      grid: true,
      "-virtualized": this.isVirtualizedEnabled,
    };
    const contentClasses = {
      content: true,
      "-withBorder": this.showBorders,
    };
    const theadClasses = {
      "-sticky": this.enableStickyHeader,
    };

    return html`
      <div class=${classMap(classes)} style=${this.wrapperProps}>
        <div class="grid -header">
          <input
            type="text"
            placeholder="Search..."
            .value=${this._searchTerm}
            @input=${this.onSearch}
          />
        </div>
        <div class=${classMap(contentClasses)}>
          <!-- @scroll=${this.onTableScroll} -->
          <table
            @scroll=${this.isVirtualizedEnabled ? this.onTableScroll : null}
          >
            ${this.renderCaption()}
            <thead class=${classMap(theadClasses)}>
              <tr>
                ${this.renderColumns()}
              </tr>
            </thead>
            <tbody
              @rangeChanged=${(e: any) => {
                this._lastVisible = e.last - 8;
              }}
            >
              ${this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
      <div class="tableFooter -actions">
        <div class="page-size">
          <label for="pageSize">Page Size:</label>
          <select
            class="form-control"
            id="pageSize"
            .value=${this.pageSize}
            @change="${(e: any) => {
              this.pageSize = parseInt(e?.target.value);
              this.setPage = 1; // Reset the pagination
            }}"
          >
            ${map(this.itemsPerPageSelector, (item) => {
              return html`
                <option value="${item}" selected=${this.pageSize === item}>
                  ${item}
                </option>
              `;
            })}
          </select>
        </div>
        <div class="page-input">
          <label for="page">Page:</label>
          <input
            class="form-control"
            type="number"
            .value=${this._psuedoCurrentPage}
            @input=${this.onPageInputChange}
          />
        </div>
      </div>
      ${this.renderPagination()}
    `;
  }

  /**
   * Event Handlers
   */

  /**
   * 1. Resizable Columns
   */

  @state() protected _startX: number = 0;
  @state() protected _pressed: HTMLElement | undefined;
  @state() protected _startWidth: number = 0;

  private onMouseMoveDown(e: any) {
    e.stopPropagation();
    this._pressed = e.target;
    this._startX = e.clientX;
    this._startWidth = e.target.closest("th").offsetWidth;

    this.addEventListener("mousemove", this.onMouseMove);
    this.addEventListener("mouseup", this.onMouseMoveUp);
  }

  private onMouseMoveUp() {
    this._pressed = undefined;
    this._startWidth = 0;
    this._startX = 0;
    this.removeEventListener("mousemove", this.onMouseMove);
    this.removeEventListener("mouseup", this.onMouseMoveUp);
  }

  private onMouseMove(e: any) {
    if (this._pressed) {
      const th = this._pressed.closest("th");
      const delta = e.clientX - this._startX;
      const width = Math.max(this._startWidth + delta, 50);

      // @ts-ignore
      th.style.width = `${width}px`;
    }
  }

  /**
   * 2. Virtualized / Infinite Scroll
   */
  @query("tbody") tableBodyRef!: VirtualizerHostElement;
  @query("table") tableRef!: HTMLTableElement;
  private _prevScrollDirection: number = 0;

  private onTableScroll(e: any) {
    if (this.enablePagination) {
      if (this._currentPage > 1) {
        const page = Math.floor(
          (this._currentPage * this.pageSize + this._lastVisible) /
            this.pageSize
        );
        if (page !== this._psuedoCurrentPage) {
          this._psuedoCurrentPage = page <= 0 ? 1 : page;
          this.requestUpdate();
        }
      } else {
        const page = Math.ceil(this._lastVisible / this.pageSize);
        if (page !== this._psuedoCurrentPage) {
          this._psuedoCurrentPage = page <= 0 ? 1 : page;
          this.requestUpdate();
        }
      }
    }
    const { scrollTop: scrollPosition } = e.target;
    if (scrollPosition % 15 === 0) {
      const scrollDirection =
        scrollPosition > this._prevScrollDirection ? "down" : "up";
      const end = this._offset;
      if (scrollDirection === "down") {
        const endOffset =
          end + 50 >= this.data?.length ? this.data?.length : end + 50;
        this._offset = endOffset;
        this.requestUpdate();
      }

      this._prevScrollDirection = scrollPosition;
    }
  }

  /**
   * 3. Pagination
   */

  private onPageClick(page: number) {
    this.setPage = page;
    this._lastVisible = 0;
    this._offset = 0;

    console.log(this._lastVisible);

    this.tableBodyRef[virtualizerRef]
      ?.element(this._lastVisible)
      ?.scrollIntoView();
  }

  private onPageInputChange(e: InputEvent) {
    const value = (e.target as HTMLInputElement).value;
    this.setPage = parseInt(value);
    this._lastVisible = 0;
    this._offset = 0;

    this.tableBodyRef[virtualizerRef]
      ?.element(this._lastVisible)
      ?.scrollIntoView();
  }

  private onPreviousClick() {
    if (this._currentPage > 1) {
      this.setPage = this._currentPage - 1;
      this._lastVisible = 0;
      this._offset = 0;

      this.tableBodyRef[virtualizerRef]
        ?.element(this._lastVisible)
        ?.scrollIntoView();
    }
  }

  private onNextClick() {
    // @ts-ignore
    if (this._currentPage < this.totalPages) {
      this.setPage = this._currentPage + 1;
      this._lastVisible = 0;
      this._offset = 0;

      this.tableBodyRef[virtualizerRef]
        ?.element(this._lastVisible)
        ?.scrollIntoView();
    }
  }

  /**
   * 4. Search
   */

  private onSearch(e: any) {
    this.setPage = 1;
    this._searchTerm = e?.target.value;
  }

  /**
   * 5. Filtering
   */

  private onFilterType(e: InputEvent | any) {
    const name = e?.target.parentElement?.querySelector("input")?.name;
    const value = e?.target.value;
    const column = this._filteredColumns.find((column) => column.key === name);
    if (column) {
      const newData = this._filteredColumns.map((el) => {
        if (el.key == name)
          return Object.assign({}, el, { type: value, value: column?.value });
        return el;
      });

      this._filteredColumns = newData;
    } else {
      const newData = [
        ...this._filteredColumns,
        { key: name, type: value, value: "" },
      ];
      this._filteredColumns = newData;
    }
  }

  private onFilterInput(e: InputEvent | any) {
    const name = e?.target.name;
    const value = e?.target.value;
    const select = e?.target.parentElement?.querySelector("select")?.value;
    const column = this._filteredColumns.find((column) => column.key === name);
    if (column) {
      const newData = this._filteredColumns.map((el) => {
        if (el.key == name)
          return Object.assign({}, el, { type: select, value });
        return el;
      });

      this._filteredColumns = newData;
    } else {
      const newData = [
        ...this._filteredColumns,
        { key: name, type: "contains", value },
      ];
      this._filteredColumns = newData;
    }
  }

  /**
   * 6. Sorting
   */

  public clickCounts: { [key: string]: number } = {};

  // Store the original order of the data
  private originalData: Array<any> = [...this.dataSource];

  private onSortTable(column: string, event: MouseEvent) {
    if (!this.enableSorting) {
      return;
    }

    // Initialize the click count for the column if it doesn't exist
    if (!this.clickCounts[column]) {
      this.clickCounts[column] = 0;
    }

    // Increment the click count for the column
    this.clickCounts[column]++;

    if (event.shiftKey) {
      // If the Shift key is held down, add the column to sortedColumns
      if (!this.sortedColumns.includes(column)) {
        this.sortedColumns.push(column);
      }
    } else {
      // If the Shift key is not held down, replace sortedColumns with the column
      this.sortedColumns = [column];
    }

    // Depending on the click count, set the sort order or reset the column to default order
    if (this.clickCounts[column] % 3 === 1) {
      this.sortOrders[column] = true;
    } else if (this.clickCounts[column] % 3 === 2) {
      this.sortOrders[column] = false;
    } else {
      //@ts-ignore
      this.sortOrders[column] = null; // Reset to default order
    }

    if (this.sortOrders[column] === null) {
      // If the sort order is null, revert to the original order
      this.dataSource = [...this.originalData];
    } else {
      // Otherwise, sort the data
      this.dataSource.sort((a, b) => {
        for (let i = 0; i < this.sortedColumns.length; i++) {
          const col = this.sortedColumns[i];
          if (a[col] < b[col]) {
            return this.sortOrders[col] ? -1 : 1;
          } else if (a[col] > b[col]) {
            return this.sortOrders[col] ? 1 : -1;
          }
        }
        return 0;
      });
    }

    this.requestUpdate();
  }

  /**
   * 7. Drag and Drop Columns
   */

  private reorderObject(obj: object, fromIndex: number, toIndex: number) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const removedKey = keys.splice(fromIndex, 1)[0];
    const removedValue = values.splice(fromIndex, 1)[0];
    keys.splice(toIndex, 0, removedKey);
    values.splice(toIndex, 0, removedValue);
    const reordered: any = {};
    keys.forEach((key, index) => {
      reordered[key] = values[index];
    });
    return reordered;
  }

  /**
   * Bugs
   * ?PageSize Option
   * ?Page Change Scroll Reset
   * ?Virtualize Scroll Apperance
   */

  /** Possible features to add
   * !Checkbox Selection
   */

  /**
   * !25 - 50 Row Offset
   */
}
