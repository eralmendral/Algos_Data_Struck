function matrix(n) {
  const results = [];  // the number of sub array depends on N
   
  for(let i = 0; i < n; i++) {
      results.push([]);
  }
    
 let counter = 1;
 let startRow = 0;
 let endRow = n - 1;
 let startCol = 0;
 let endCol = n - 1;

    while(startCol <= endCol && startRow <= endRow) {
        // top row
        for(let i = startCol; i<= endCol; i++){
            results[startRow][i] = counter;
            counter++;
        }
        // increment row
        startRow++;
    

        // Right Column
        for(let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // Bottom row
        for(let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start Column
        for(let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }
        startCol++;

    }
   console.log(results);

  return results;
}

matrix(5);

module.exports = matrix;

// tips:
/*
1. assign values to array indeces even no initialized
2. counter variable, and var to keep track of start and end, col and row.
3. top rown
4. right column, once right row is done
5. decrement right column
6. bottom row
7. start col
8. start row
*/