<sums>
    <h4>Rows</h4>
    <li each={ rowSums }>
        <label class="sumLabel">
            { index } : { sum } 
        </label>
    </li>
    
    <h4>Columns</h4>
    <li each={ columnSums }>
        <label class="sumLabel">
            { index } : { sum }
        </label>
    </li>
    
    <h4>Diagonals</h4>
    <li each={ diagonalSums }>
        <label class="sumLabel">
            { index } : { sum }
        </label>
    </li>
</sums>