export class Grid {
  constructor(rows, cols) {
    this.rowsCount = rows;
    this.colsCount = cols;
    this.grid = new Array(rows * cols).fill(undefined); 
  }

    // Bruges når man skal tage imod både rows og cols
  normalize(rowOrObj, col) {
    if (typeof rowOrObj === "object") {
      return { row: rowOrObj.row, col: rowOrObj.col };
    } else {
      return { row: rowOrObj, col: col };
    }
  }

  indexFor(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    if (
      row < 0 ||
      row >= this.rowsCount ||
      column < 0 ||
      column >= this.colsCount
    )
      return undefined;
    return row * this.colsCount + column;
  }

  rowColFor(index) {
    if (index < 0 || index >= this.grid.length) return undefined;
    const row = Math.floor(index / this.colsCount);
    const col = index % this.colsCount;
    return { row, col };
  }

  set(rowOrObj, col, value) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    const index = this.indexFor(row, column);
    if (index !== undefined) {
      this.grid[index] = value;
    }
  }


  get(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    const index = this.indexFor(row, column);
    return index !== undefined ? this.grid[index] : undefined;
  }

  neighbours(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    const possibleNeighbours = [
      { row: row - 1, col: column }, // North
      { row: row + 1, col: column }, // South
      { row: row, col: column - 1 }, // West
      { row: row, col: column + 1 }, // East
    ];
    return possibleNeighbours.filter(
      ({ row, col }) => this.indexFor(row, col) !== undefined
    );
  }


  neighbourValues(rowOrObj, col) {
    return this.neighbours(rowOrObj, col).map(({ row, col }) =>
      this.get(row, col)
    );
  }


  nextInRow(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    return this.get(row, column + 1) !== undefined
      ? { row, col: column + 1, value: this.get(row, column + 1) }
      : undefined;
  }


  nextInCol(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    return this.get(row + 1, column) !== undefined
      ? { row: row + 1, col: column, value: this.get(row + 1, column) }
      : undefined;
  }


  north(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    return this.get(row - 1, column) !== undefined
      ? { row: row - 1, col: column, value: this.get(row - 1, column) }
      : undefined;
  }

  south(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    return this.get(row + 1, column) !== undefined
      ? { row: row + 1, col: column, value: this.get(row + 1, column) }
      : undefined;
  }

  west(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    return this.get(row, column - 1) !== undefined
      ? { row, col: column - 1, value: this.get(row, column - 1) }
      : undefined;
  }


  east(rowOrObj, col) {
    const { row, col: column } = this.normalize(rowOrObj, col);
    return this.get(row, column + 1) !== undefined
      ? { row, col: column + 1, value: this.get(row, column + 1) }
      : undefined;
  }

  rows() {
    return this.rowsCount;
  }

  cols() {
    return this.colsCount;
  }

  size() {
    return this.rowsCount * this.colsCount;
  }

  fill(value) {
    this.grid.fill(value);
  }
}
