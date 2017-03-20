/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Uitleg van deze opdrachten:
	 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
	 * Je mag me bij elke opdracht om hulp vragen
	 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
	 */
	console.log(5);
	/**
	 * Opdracht 1: primitives
	 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
	 * 
	 * 5 variabelen met daarin een string
	 * 5 variabelen met daarin een number
	 * 5 variabelen met daarin een boolean
	 * **/
	var school = "mediacollege";
	var city = "Amsterdam";
	var country = "Nederland";
	var adress = "contact weg";
	var catogory = "MBO";
	
	var number = 36;
	var students = 2000;
	var birth_day = 27;
	var birth_month = 6;
	var birth_year = 1998;
	
	var man = true;
	var Mediadeveloper = true;
	var Mediadevormgever = false;
	var Horizoncollege = false;
	var mediacollege = true;
	
	/** Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
	* van Media Development producten (apps, sites, etc.)
	* Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
	*/
	
	/**
	 * Opdracht 2: Arrays
	 * Bedenk 3 arrays en vul ze met primitives
	 * console.log de lengte van de arrays
	 *
	 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
	 **/
	
	var education = ["mediadeveloper", "gamedevelepor", "mediavormgever", "gameartist"];
	
	var Students = ["lucas", "sjaak", "tom", "Willem", "bas", "jelle", "tristan"];
	
	var schools = ["Mediacollege", "Horizoncollege", "ROC"];
	
	console.log(schools.length);
	
	/**
	 * Opdracht 3: Arrays push
	 * Maak een lege array aan
	 * push er een string in
	 */
	
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Kiwi");
	
	/**
	 * Opdracht 4: Array splice
	 * Maak een array aan en vul hem met namen
	 * Gooi de naam op de 1e plek weg
	 * Gooi de naam op de 3e plek weg
	 */
	
	var names = ['sjaak', 'tom', 'lucas', 'willem'];
	
	names;
	
	/**
	 * Opdracht 5: Objects
	 * Maak van 10 objecten uit je dagelijkse leven een object
	 *
	 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
	 */
	
	/**
	 * Opdracht 6: Functions
	 * Bedenk 4 functies die handig zouden kunnen zijn
	 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
	 * console.log( value * multiplier)
	 */
	
	/**
	 * Opdracht 7: Function & objects
	 * Maak een functie die een firstName en lastName verwacht als parameter
	 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
	 * roep deze functie aan en console.log() de waarde
	 */
	
	/**
	 * Opdracht 8: Functions, objects
	 * Maak een object genaamd 'student'
	 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
	 */
	
	/**
	 * Opdracht 9: Functions, objects
	 * Maak een object genaamd 'student'
	 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
	 */
	
	/**
	 * Opdracht 10: Arrays & for loops
	 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
	 * Schrijf een for loop om alle namen in de Array te laten zien
	 */

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map