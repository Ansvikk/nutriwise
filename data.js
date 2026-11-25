// Illustrative values per serving, not validated food composition or live prices.
// categories: veg, egg, meat; tags identify major ingredients for simple exclusion.
const FOODS = [
 {id:'oats',name:'Oats with milk',slot:'breakfast',kcal:320,protein:14,cost:35,category:'veg',tags:['milk']},
 {id:'poha',name:'Vegetable poha',slot:'breakfast',kcal:310,protein:7,cost:30,category:'veg',tags:['peanut']},
 {id:'idli',name:'Idli and sambar',slot:'breakfast',kcal:340,protein:12,cost:40,category:'veg',tags:[]},
 {id:'besan',name:'Besan chilla',slot:'breakfast',kcal:350,protein:16,cost:35,category:'veg',tags:[]},
 {id:'eggb',name:'Egg bhurji and roti',slot:'breakfast',kcal:390,protein:22,cost:48,category:'egg',tags:['egg','wheat']},
 {id:'upma',name:'Vegetable upma',slot:'breakfast',kcal:340,protein:9,cost:32,category:'veg',tags:['wheat']},
 {id:'dalrice',name:'Dal and rice',slot:'lunch',kcal:550,protein:19,cost:55,category:'veg',tags:[]},
 {id:'rajma',name:'Rajma and rice',slot:'lunch',kcal:600,protein:21,cost:65,category:'veg',tags:[]},
 {id:'paneer',name:'Paneer and roti',slot:'lunch',kcal:640,protein:29,cost:85,category:'veg',tags:['milk','wheat']},
 {id:'chole',name:'Chole and rice',slot:'lunch',kcal:580,protein:20,cost:60,category:'veg',tags:[]},
 {id:'soymeal',name:'Soy chunks and rice',slot:'lunch',kcal:570,protein:33,cost:55,category:'veg',tags:['soy']},
 {id:'chicken',name:'Chicken curry and rice',slot:'lunch',kcal:660,protein:43,cost:105,category:'meat',tags:[]},
 {id:'banana',name:'Banana and roasted chana',slot:'snack',kcal:240,protein:9,cost:22,category:'veg',tags:[]},
 {id:'curd',name:'Curd and fruit',slot:'snack',kcal:210,protein:10,cost:32,category:'veg',tags:['milk']},
 {id:'peanuts',name:'Roasted peanuts and fruit',slot:'snack',kcal:290,protein:11,cost:25,category:'veg',tags:['peanut']},
 {id:'sprouts',name:'Sprouts chaat',slot:'snack',kcal:230,protein:13,cost:30,category:'veg',tags:[]},
 {id:'eggs',name:'Boiled eggs and fruit',slot:'snack',kcal:250,protein:15,cost:36,category:'egg',tags:['egg']},
 {id:'khichdi',name:'Moong dal khichdi',slot:'dinner',kcal:520,protein:18,cost:50,category:'veg',tags:[]},
 {id:'rotisabzi',name:'Roti, sabzi and dal',slot:'dinner',kcal:590,protein:22,cost:65,category:'veg',tags:['wheat']},
 {id:'paneerd',name:'Paneer rice bowl',slot:'dinner',kcal:630,protein:30,cost:88,category:'veg',tags:['milk']},
 {id:'soyd',name:'Soy and vegetable pulao',slot:'dinner',kcal:580,protein:30,cost:58,category:'veg',tags:['soy']},
 {id:'eggd',name:'Egg curry and rice',slot:'dinner',kcal:600,protein:28,cost:68,category:'egg',tags:['egg']},
 {id:'chickend',name:'Chicken and vegetable rice',slot:'dinner',kcal:650,protein:42,cost:110,category:'meat',tags:[]}
];
if(typeof module!=='undefined') module.exports={FOODS};
