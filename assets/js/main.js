/***********************************************************\
|* Author: Arsham Eslami                                   *|
|* Email Address: arshameslami@gmail.com                   *|
|* ------------------------------------------------------- *|
|* Filename: cells.js                                      *|
\***********************************************************/

// Check If ParkerSquare Object Exists.

if (typeof ParkerSquare === 'undefined') {
    var ParkerSquare = {};
}

/**
 * <i>Cells</i> class is used for managing the values of each cell in the square.
 */

ParkerSquare.Cells = function() {
    
    /******************\
    |* CORE VARIABLES *|
    \******************/
    
    var that = this;
    
    /***************\
    |* GET METHODS *|
    \***************/
    
    /**
     * Gets the values of all square cells
     * 
     * @author    Arsham Eslami <arshameslami@gmail.com>
     * @version   1.0.0
     * 
     * @param {Boolean} getFromDom
     *   Whether we should get the square from memory or DOM
     * @return {Array}
     *   Returns a 2D array with square cell values
     */
    
    this.getAll = function(getFromDom) {
        
        if (!getFromDom) {
            
            return this.all;
            
        } else {
            
            var square = [];
            var table = document.getElementById("mainSquare");
            var tableRows = table.children[0].children;

            
            for (var y = 0; y < tableRows.length; y++) {

                for (var x = 0; x < tableRows[y].cells.length; x++) {
                    if (!square[y]) {
                        square[y] = [];
                    }
                    square[y][x] = parseInt(tableRows[y].cells[x].innerText);

                }

            }
            
            return square;   
            
        }    
        
        
    };
    
};
/***********************************************************\
|* Author: Arsham Eslami                                   *|
|* Email Address: arshameslami@gmail.com                   *|
|* ------------------------------------------------------- *|
|* Filename: main.js                                       *|
\***********************************************************/


//Create our main classe and call the init function

function init() {
    
    // Core Variables.
    var Parameters = new ParkerSquare.Parameters();
    Parameters.init();
    
    
};

//Check if DOM is ready
//https://stackoverflow.com/questions/1206937/javascript-domready
var domReady = (function (){
    var arrDomReadyCallBacks = [] ;
    function excuteDomReadyCallBacks(){
        for (var i=0; i < arrDomReadyCallBacks.length; i++) {
            arrDomReadyCallBacks[i]();
        }
        arrDomReadyCallBacks = [] ;
    }

    return function (callback){
        arrDomReadyCallBacks.push(callback);
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener ) {
            document.addEventListener('DOMContentLoaded', excuteDomReadyCallBacks, false);
        }
        /* Safari, iCab, Konqueror */
        if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
            browserTypeSet = true ;
            var DOMLoadTimer = setInterval(function () {
                if (/loaded|complete/i.test(document.readyState)) {
                    //callback();
                    excuteDomReadyCallBacks();
                    clearInterval(DOMLoadTimer);
                }
            }, 10);
        }
        /* Other web browsers */
        window.onload = excuteDomReadyCallBacks
    }
})();

/**
 * Check if document is ready. If so call the init function. 
 * 
 * @author    Arsham Eslami <arshameslami@gmail.com>
 * @version   1.0.0
 * 
 * @return Void
 */

function checkInit() {
    if (domReady) {
        init();
        clearInterval(checkInitInterval);
    }
};
var checkInitInterval = setInterval(checkInit, 100);
/***********************************************************\
|* Author: Arsham Eslami                                   *|
|* Email Address: arshameslami@gmail.com                   *|
|* ------------------------------------------------------- *|
|* Filename: parameters.js                                 *|
\***********************************************************/

// Check If ParkerSquare Object Exists.

if (typeof ParkerSquare === 'undefined') {
    var ParkerSquare = {};
}

/**
 * <i></i> class is used for managing the values of each cell in the square.
 */

ParkerSquare.Parameters = function() {
    
    /******************\
    |* CORE VARIABLES *|
    \******************/
    
    var that = this;
    var cells = new ParkerSquare.Cells();
    
    /*******************\
    |* OTHER VARIABLES *|
    \********(**********/
    if (!ParkerSquare.Data) {
        ParkerSquare.Data = {};
    }
    
    /***************\
    |* GET METHODS *|
    \***************/
    
    /**
     * Gets a parameter with a provided key.
     * 
     * @author    Arsham Eslami <arshameslami@gmail.com>
     * @version   1.0.0
     * 
     * @param {String} paramKey
     *   Parameter key, ex. <i>appProtocol</i>.
     * @return {Mixed}
     *   Value of a parameter with a provided key.
     */
    
    this.get = function(paramKey) {
        return (typeof ParkerSquare.Data[paramKey] === 'undefined') ? '' : ParkerSquare.Data[paramKey];
    };
    
    /***************\
    |* SET METHODS *|
    \***************/
    
    /**
     * Sets a parameter with a provided key.
     * 
     * @author    Arsham Eslami <arshameslami@gmail.com>
     * @version   1.0.0
     * 
     * @param {String} paramKey 
     *   Parameter key, ex. <i>appProtocol</i>.
     * @param {Mixed} paramValue
     *   Paramater value, it can be anything.
     * @return {Void}
     */
    
    this.set = function(paramKey, paramValue) {
        ParkerSquare.Data[paramKey] = paramValue;
    };
    
    /****************\
    |* CORE METHODS *|
    \****************/
    
    /**
     * Generates inital set of parameters
     * 
     * @author    Arsham Eslami <arshameslami@gmail.com>
     * @version   1.0.0
     *
     * @return {Void}
     */
    
    this.init = function() {
        
        this.setInitialState();
        
    };
    
    /**
     * Set inital page state.
     * 
     * @author    Djordje Jocic <office@djordjejocic.com>
     * @copyright 2017 Aiva Labs
     * @version   1.0.0
     *
     * @return void
     */
    
    this.setInitialState = function() {
        
        // Set Location Parameters..
        ParkerSquare.Data.square = cells.getAll(true);
        
    };
    
};
function randomValues() {
    var table = document.getElementById('threeByThree');
    var listOfNumberElements = table.getElementsByTagName('td');
    
    for (var key in listOfNumberElements) {
        listOfNumberElements[key].innerHTML = Math.floor(Math.random() * 101);
    }
    
    updateSums();
    
}
var rowSums = [
    { index: 1, sum: 0 },
    { index: 2, sum: 0 },
    { index: 3, sum: 0 }
];

var columnSums = [
    { index: 1, sum: 0 },
    { index: 2, sum: 0 },
    { index: 3, sum: 0 }
];

var diagonalSums = [
    { index: 1, sum: 0 },
    { index: 2, sum: 0 }
];

function updateSums() {
    console.log("Hello");
}