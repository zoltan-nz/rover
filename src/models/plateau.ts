export interface Area {
  width: number;
  height: number;
}

export class Plateau implements Area {
  width: number;
  height: number;

  constructor({ width, height }: Area) {
    if (width < 0 || height < 0 || !Number.isInteger(width) || !Number.isInteger(height))
      throw new Error('Plateau size should be 0 or positive integer');
    this.width = width;
    this.height = height;
  }

  isValid(x: number, y: number): boolean {
    return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
  }
}
