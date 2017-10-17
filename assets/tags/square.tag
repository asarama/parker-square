<square>

    <div class="mainContainer">
            
        <div class="leftColumn center">

            <button onclick="randomValues()">Randomize</button>
            <button onclick="solve()">Solve it!</button>
            
            <table id="mainSquare" class="board">
                <tr>
                    <td id="one"></td>
                    <td id="two"></td>
                    <td id="three"></td>
                </tr>
                <tr>
                    <td id="four"></td>
                    <td id="five"></td>
                    <td id="six"></td>
                </tr>
                <tr>
                    <td id="seven"></td>
                    <td id="eight"></td>
                    <td id="nine"></td>
                </tr>
            </table>

        </div>
        
        <div class="rightColumn center">
            
            <sums></sums>
            
        </div>

    </div>
    
    <script>
        riot.mount('sums');
    </script>
    
</square>