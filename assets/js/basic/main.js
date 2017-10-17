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