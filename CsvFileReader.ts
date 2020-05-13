import fc from 'fs';

// From typescript-the-complete-developers-guide

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) { }

  read(): void {
    this.data = fc
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        }
      );
  }
}
