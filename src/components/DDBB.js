export default function getProductsFromDDBB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 2000);
  });
}

const product = `[{
        "id": 1,
        "name": "Ham - Black Forest",
        "price": 234,
        "stock": 81
      }, {
        "id": 2,
        "name": "Pasta - Bauletti, Chicken White",
        "price": 812,
        "stock": 87
      }, {
        "id": 3,
        "name": "Food Colouring - Blue",
        "price": 125,
        "stock": 13
      }, {
        "id": 4,
        "name": "Soup Campbells Beef With Veg",
        "price": 108,
        "stock": 59
      }, {
        "id": 5,
        "name": "Creme De Menth - White",
        "price": 929,
        "stock": 90
      }, {
        "id": 6,
        "name": "Carrots - Purple, Organic",
        "price": 988,
        "stock": 74
      }, {
        "id": 7,
        "name": "Beef - Sushi Flat Iron Steak",
        "price": 304,
        "stock": 6
      }, {
        "id": 8,
        "name": "Ecolab - Hobart Washarm End Cap",
        "price": 991,
        "stock": 75
      }, {
        "id": 9,
        "name": "Asparagus - White, Canned",
        "price": 423,
        "stock": 85
      }, {
        "id": 10,
        "name": "Rhubarb",
        "price": 670,
        "stock": 44
      }, {
        "id": 11,
        "name": "Beef - Tenderloin Tails",
        "price": 531,
        "stock": 54
      }, {
        "id": 12,
        "name": "Wine - Pinot Noir Latour",
        "price": 447,
        "stock": 59
      }, {
        "id": 13,
        "name": "Vinegar - Balsamic, White",
        "price": 552,
        "stock": 72
      }, {
        "id": 14,
        "name": "Shrimp - 150 - 250",
        "price": 709,
        "stock": 16
      }, {
        "id": 15,
        "name": "Almonds Ground Blanched",
        "price": 557,
        "stock": 25
      }, {
        "id": 16,
        "name": "Bread - Italian Roll With Herbs",
        "price": 140,
        "stock": 3
      }, {
        "id": 17,
        "name": "Chef Hat 25cm",
        "price": 155,
        "stock": 47
      }, {
        "id": 18,
        "name": "Creamers - 10%",
        "price": 104,
        "stock": 68
      }, {
        "id": 19,
        "name": "Flower - Potmums",
        "price": 649,
        "stock": 81
      }, {
        "id": 20,
        "name": "The Pop Shoppe - Cream Soda",
        "price": 629,
        "stock": 16
      }, {
        "id": 21,
        "name": "Chocolate - Dark",
        "price": 787,
        "stock": 66
      }, {
        "id": 22,
        "name": "Soup - Clam Chowder, Dry Mix",
        "price": 178,
        "stock": 35
      }, {
        "id": 23,
        "name": "Carrots - Mini, Stem On",
        "price": 763,
        "stock": 12
      }, {
        "id": 24,
        "name": "Juice - Tomato, 48 Oz",
        "price": 545,
        "stock": 71
      }, {
        "id": 25,
        "name": "Hot Chocolate - Individual",
        "price": 658,
        "stock": 24
      }, {
        "id": 26,
        "name": "Lobster - Baby, Boiled",
        "price": 369,
        "stock": 28
      }, {
        "id": 27,
        "name": "Squash - Sunburst",
        "price": 721,
        "stock": 13
      }, {
        "id": 28,
        "name": "Compound - Pear",
        "price": 406,
        "stock": 17
      }, {
        "id": 29,
        "name": "Juice - Propel Sport",
        "price": 223,
        "stock": 58
      }, {
        "id": 30,
        "name": "Wine - Magnotta, White",
        "price": 313,
        "stock": 63
      }, {
        "id": 31,
        "name": "Croissant, Raw - Mini",
        "price": 741,
        "stock": 6
      }, {
        "id": 32,
        "name": "Wine - Casillero Del Diablo",
        "price": 265,
        "stock": 12
      }, {
        "id": 33,
        "name": "Spice - Peppercorn Melange",
        "price": 771,
        "stock": 37
      }, {
        "id": 34,
        "name": "Puree - Mocha",
        "price": 901,
        "stock": 6
      }, {
        "id": 35,
        "name": "Asparagus - Green, Fresh",
        "price": 701,
        "stock": 15
      }, {
        "id": 36,
        "name": "Cumin - Whole",
        "price": 211,
        "stock": 57
      }, {
        "id": 37,
        "name": "Temperature Recording Station",
        "price": 851,
        "stock": 49
      }, {
        "id": 38,
        "name": "Wine - Zinfandel Rosenblum",
        "price": 807,
        "stock": 23
      }, {
        "id": 39,
        "name": "Salmon - Whole, 4 - 6 Pounds",
        "price": 454,
        "stock": 6
      }, {
        "id": 40,
        "name": "Bols Melon Liqueur",
        "price": 637,
        "stock": 32
      }, {
        "id": 41,
        "name": "Mushroom - Enoki, Fresh",
        "price": 628,
        "stock": 52
      }, {
        "id": 42,
        "name": "Island Oasis - Sweet And Sour Mix",
        "price": 810,
        "stock": 100
      }, {
        "id": 43,
        "name": "Wine - White, Cooking",
        "price": 430,
        "stock": 9
      }, {
        "id": 44,
        "name": "Soup - Campbells Beef Noodle",
        "price": 258,
        "stock": 38
      }, {
        "id": 45,
        "name": "Cookie Dough - Oatmeal Rasin",
        "price": 223,
        "stock": 91
      }, {
        "id": 46,
        "name": "Beer - Sleeman Fine Porter",
        "price": 557,
        "stock": 52
      }, {
        "id": 47,
        "name": "Fruit Mix - Light",
        "price": 822,
        "stock": 49
      }, {
        "id": 48,
        "name": "Onions - White",
        "price": 787,
        "stock": 45
      }, {
        "id": 49,
        "name": "Truffle Paste",
        "price": 325,
        "stock": 71
      }, {
        "id": 50,
        "name": "Shortbread - Cookie Crumbs",
        "price": 567,
        "stock": 8
      }, {
        "id": 51,
        "name": "Aspic - Amber",
        "price": 465,
        "stock": 75
      }, {
        "id": 52,
        "name": "Trueblue - Blueberry Cranberry",
        "price": 275,
        "stock": 57
      }, {
        "id": 53,
        "name": "Tomatoes - Cherry, Yellow",
        "price": 665,
        "stock": 81
      }, {
        "id": 54,
        "name": "Wine - Merlot Vina Carmen",
        "price": 899,
        "stock": 49
      }, {
        "id": 55,
        "name": "Potatoes - Idaho 80 Count",
        "price": 807,
        "stock": 57
      }, {
        "id": 56,
        "name": "Vermacelli - Sprinkles, Assorted",
        "price": 881,
        "stock": 50
      }, {
        "id": 57,
        "name": "Cornish Hen",
        "price": 485,
        "stock": 64
      }, {
        "id": 58,
        "name": "Peas Snow",
        "price": 850,
        "stock": 52
      }, {
        "id": 59,
        "name": "Island Oasis - Banana Daiquiri",
        "price": 511,
        "stock": 63
      }, {
        "id": 60,
        "name": "Rootbeer",
        "price": 112,
        "stock": 9
      }, {
        "id": 61,
        "name": "Quiche Assorted",
        "price": 491,
        "stock": 83
      }, {
        "id": 62,
        "name": "Wine - White, French Cross",
        "price": 550,
        "stock": 83
      }, {
        "id": 63,
        "name": "Dooleys Toffee",
        "price": 146,
        "stock": 62
      }, {
        "id": 64,
        "name": "Pail - 4l White, With Handle",
        "price": 140,
        "stock": 48
      }, {
        "id": 65,
        "name": "Island Oasis - Ice Cream Mix",
        "price": 203,
        "stock": 42
      }, {
        "id": 66,
        "name": "Salmon - Smoked, Sliced",
        "price": 919,
        "stock": 70
      }, {
        "id": 67,
        "name": "Beer - Corona",
        "price": 280,
        "stock": 79
      }, {
        "id": 68,
        "name": "Tarragon - Fresh",
        "price": 557,
        "stock": 61
      }, {
        "id": 69,
        "name": "Haggis",
        "price": 486,
        "stock": 84
      }, {
        "id": 70,
        "name": "Garlic - Peeled",
        "price": 291,
        "stock": 63
      }, {
        "id": 71,
        "name": "Flour - Semolina",
        "price": 561,
        "stock": 19
      }, {
        "id": 72,
        "name": "Wine - Fat Bastard Merlot",
        "price": 284,
        "stock": 13
      }, {
        "id": 73,
        "name": "Carbonated Water - Strawberry",
        "price": 412,
        "stock": 83
      }, {
        "id": 74,
        "name": "Bread - Wheat Baguette",
        "price": 187,
        "stock": 76
      }, {
        "id": 75,
        "name": "Appetizer - Spring Roll, Veg",
        "price": 453,
        "stock": 68
      }, {
        "id": 76,
        "name": "Beer - Mcauslan Apricot",
        "price": 626,
        "stock": 76
      }, {
        "id": 77,
        "name": "Yogurt - Assorted Pack",
        "price": 843,
        "stock": 91
      }, {
        "id": 78,
        "name": "Cattail Hearts",
        "price": 466,
        "stock": 30
      }, {
        "id": 79,
        "name": "Muffin Mix - Banana Nut",
        "price": 933,
        "stock": 81
      }, {
        "id": 80,
        "name": "Tomato Puree",
        "price": 260,
        "stock": 77
      }, {
        "id": 81,
        "name": "Wine - Magnotta - Red, Baco",
        "price": 898,
        "stock": 55
      }, {
        "id": 82,
        "name": "Shichimi Togarashi Peppeers",
        "price": 315,
        "stock": 40
      }, {
        "id": 83,
        "name": "Ham - Black Forest",
        "price": 342,
        "stock": 92
      }, {
        "id": 84,
        "name": "Olives - Kalamata",
        "price": 519,
        "stock": 82
      }, {
        "id": 85,
        "name": "Jolt Cola - Electric Blue",
        "price": 340,
        "stock": 25
      }, {
        "id": 86,
        "name": "Bar Nature Valley",
        "price": 601,
        "stock": 93
      }, {
        "id": 87,
        "name": "Aspic - Amber",
        "price": 845,
        "stock": 82
      }, {
        "id": 88,
        "name": "Cheese - Havarti, Salsa",
        "price": 623,
        "stock": 91
      }, {
        "id": 89,
        "name": "Potatoes - Yukon Gold, 80 Ct",
        "price": 377,
        "stock": 3
      }, {
        "id": 90,
        "name": "Chocolate - Milk, Callets",
        "price": 518,
        "stock": 27
      }, {
        "id": 91,
        "name": "Energy Drink - Redbull 355ml",
        "price": 381,
        "stock": 56
      }, {
        "id": 92,
        "name": "Dried Figs",
        "price": 754,
        "stock": 22
      }, {
        "id": 93,
        "name": "Hummus - Spread",
        "price": 843,
        "stock": 46
      }, {
        "id": 94,
        "name": "Beef Cheek Fresh",
        "price": 339,
        "stock": 64
      }, {
        "id": 95,
        "name": "Lamb - Whole, Fresh",
        "price": 301,
        "stock": 54
      }, {
        "id": 96,
        "name": "Peppercorns - Green",
        "price": 354,
        "stock": 53
      }, {
        "id": 97,
        "name": "Soup Knorr Chili With Beans",
        "price": 333,
        "stock": 71
      }, {
        "id": 98,
        "name": "Milk - Chocolate 250 Ml",
        "price": 204,
        "stock": 32
      }, {
        "id": 99,
        "name": "Appetizer - Mushroom Tart",
        "price": 976,
        "stock": 49
      }, {
        "id": 100,
        "name": "Peppercorns - Green",
        "price": 274,
        "stock": 91
      }]`;
