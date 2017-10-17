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