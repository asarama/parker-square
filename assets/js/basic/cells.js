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