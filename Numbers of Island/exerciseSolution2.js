/**
 * @param {character[][]} grid
 * @return {number}
 */

const mark_current_island = (grid, i, j, rows, cols) => {
  if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== "1") return;

  grid[i][j] = "2";

  //recursive call

  mark_current_island(grid, i + 1, j, rows, cols); //Down
  mark_current_island(grid, i, j + 1, rows, cols); //Rigth
  mark_current_island(grid, i - 1, j, rows, cols); //Top
  mark_current_island(grid, i, j - 1, rows, cols); //Left
};

const numIslands = (grid) => {
  let rows = grid.length;

  if (rows === 0) return 0;

  let cols = grid[0].length;

  let no_of_islands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        mark_current_island(grid, i, j, rows, cols);
        no_of_islands += 1;
      }
    }
  }
  return no_of_islands;
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
