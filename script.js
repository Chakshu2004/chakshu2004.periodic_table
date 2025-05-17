const elements = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "x": 1,
    "y": 1,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "x": 18,
    "y": 1,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "x": 1,
    "y": 2,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "x": 2,
    "y": 2,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "x": 13,
    "y": 2,
    "state": "solid",
    "type": "metalloid"
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "x": 14,
    "y": 2,
    "state": "solid",
    "type": "nonmetal"
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "x": 15,
    "y": 2,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "x": 16,
    "y": 2,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "x": 17,
    "y": 2,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "x": 18,
    "y": 2,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodium",
    "x": 1,
    "y": 3,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "x": 2,
    "y": 3,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "x": 13,
    "y": 3,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicon",
    "x": 14,
    "y": 3,
    "state": "solid",
    "type": "metalloid"
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "x": 15,
    "y": 3,
    "state": "solid",
    "type": "nonmetal"
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Sulfur",
    "x": 16,
    "y": 3,
    "state": "solid",
    "type": "nonmetal"
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "x": 17,
    "y": 3,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argon",
    "x": 18,
    "y": 3,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potassium",
    "x": 1,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "x": 2,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "x": 3,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "x": 4,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadium",
    "x": 5,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "x": 6,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "x": 7,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Iron",
    "x": 8,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "x": 9,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "x": 10,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Copper",
    "x": 11,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "x": 12,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "x": 13,
    "y": 4,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "x": 14,
    "y": 4,
    "state": "solid",
    "type": "metalloid"
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsenic",
    "x": 15,
    "y": 4,
    "state": "solid",
    "type": "metalloid"
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenium",
    "x": 16,
    "y": 4,
    "state": "solid",
    "type": "nonmetal"
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromine",
    "x": 17,
    "y": 4,
    "state": "liquid",
    "type": "nonmetal"
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "x": 18,
    "y": 4,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "x": 1,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "x": 2,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "x": 3,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "x": 4,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "x": 5,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "x": 6,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "x": 7,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "x": 8,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "x": 9,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "x": 10,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Silver",
    "x": 11,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "x": 12,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indium",
    "x": 13,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Tin",
    "x": 14,
    "y": 5,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "x": 15,
    "y": 5,
    "state": "solid",
    "type": "metalloid"
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "x": 16,
    "y": 5,
    "state": "solid",
    "type": "metalloid"
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Iodine",
    "x": 17,
    "y": 5,
    "state": "solid",
    "type": "nonmetal"
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "x": 18,
    "y": 5,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Cesium",
    "x": 1,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Barium",
    "x": 2,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "x": 3,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "x": 4,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "x": 5,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Tungsten",
    "x": 6,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "x": 7,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmium",
    "x": 8,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "x": 9,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "x": 10,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Gold",
    "x": 11,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "x": 12,
    "y": 6,
    "state": "liquid",
    "type": "metal"
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "x": 13,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Lead",
    "x": 14,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "x": 15,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonium",
    "x": 16,
    "y": 6,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Astatine",
    "x": 17,
    "y": 6,
    "state": "solid",
    "type": "nonmetal"
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radon",
    "x": 18,
    "y": 6,
    "state": "gas",
    "type": "nonmetal"
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francium",
    "x": 1,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radium",
    "x": 2,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Thorium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "x": 3,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "x": 4,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "x": 5,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "x": 6,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "x": 7,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "x": 8,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "x": 9,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "x": 10,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "x": 11,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "x": 12,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "x": 13,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "x": 14,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "x": 15,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "x": 16,
    "y": 7,
    "state": "solid",
    "type": "metal"
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "x": 17,
    "y": 7,
    "state": "solid",
    "type": "nonmetal"
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "x": 18,
    "y": 7,
    "state": "solid",
    "type": "nonmetal"
  }
]
;

document.addEventListener('DOMContentLoaded', () => {
  const mainTable = document.getElementById('table');
  const lanthTable = document.getElementById('lanth-table');
  const actinTable = document.getElementById('actin-table');

  elements.forEach(el => {
    const div = document.createElement('div');
    div.className = `element ${el.state} ${el.type}`;
    div.innerHTML = `
      <div class="tooltip">
        <strong>${el.name}</strong><br>
        Atomic No: ${el.number}<br>
        Type: ${el.type}<br>
        State: ${el.state}
      </div>
      <div class="number">${el.number}</div>
      <div class="symbol">${el.symbol}</div>
      <div class="name">${el.name}</div>
    `;
    if (el.number >= 57 && el.number <= 71) {
      lanthTable.appendChild(div);
    } else if (el.number >= 89 && el.number <= 103) {
      actinTable.appendChild(div);
    } else {
      div.style.gridColumn = el.x;
      div.style.gridRow = el.y;
      mainTable.appendChild(div);
    }
  });

  const stateFilter = document.getElementById('state');
  const typeFilter = document.getElementById('type');
  const searchInput = document.getElementById('search');

  function applyFilters() {
    const state = stateFilter.value;
    const type = typeFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    document.querySelectorAll('.element').forEach(el => {
      const matchesState = (state === 'all') || el.classList.contains(state);
      const matchesType = (type === 'all') || el.classList.contains(type);
      const symbol = el.querySelector('.symbol').textContent.toLowerCase();
      const name = el.querySelector('.name').textContent.toLowerCase();
      const matchesSearch = symbol.includes(searchTerm) || name.includes(searchTerm);
      el.classList.toggle('hidden', !(matchesState && matchesType && matchesSearch));
    });
  }

  stateFilter.addEventListener('change', applyFilters);
  typeFilter.addEventListener('change', applyFilters);
  searchInput.addEventListener('input', applyFilters);
});
