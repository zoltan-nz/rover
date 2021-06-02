import { Compass } from './compass';
import { Instructions } from './instructions';

export interface RoverPosition {
  x: number;
  y: number;
  direction: Compass;
}

export class Rover implements RoverPosition {
  name: string;

  x: number;
  y: number;
  direction: Compass;

  #instructions: Instructions = [];

  constructor(name: string, { x, y, direction }: RoverPosition) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  turnRight(): void {
    switch (this.direction) {
      case Compass.N:
        this.direction = Compass.E;
        break;
      case Compass.E:
        this.direction = Compass.S;
        break;
      case Compass.S:
        this.direction = Compass.W;
        break;
      case Compass.W:
        this.direction = Compass.N;
        break;
    }
  }

  turnLeft(): void {
    switch (this.direction) {
      case Compass.N:
        this.direction = Compass.W;
        break;
      case Compass.E:
        this.direction = Compass.N;
        break;
      case Compass.S:
        this.direction = Compass.E;
        break;
      case Compass.W:
        this.direction = Compass.S;
        break;
    }
  }

  moveForward(): void {
    switch (this.direction) {
      case Compass.N:
        this.y++;
        break;
      case Compass.E:
        this.x++;
        break;
      case Compass.S:
        this.y--;
        break;
      case Compass.W:
        this.x--;
        break;
    }
  }

  get instructions(): Instructions {
    return this.#instructions;
  }

  set instructions(instructions: Instructions) {
    this.#instructions = instructions;
  }

  executeInstructions(): void {
    throw new Error('Not implemented yet');
  }
}
