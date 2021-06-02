import { Plateau } from './models/plateau';
import { Rover } from './models/rover';

export class Simulator {
  step = 0;
  roversWithInvalidCoordinates: Rover[] = [];

  constructor(public plateau: Plateau, public rovers: Rover[]) {}

  areLandingCoordinatesValid(): boolean {
    if (this.step !== 0) throw new Error('Please validate landing coordinates before running the simulation');

    return this.rovers
      .map(rover => this.plateau.isValid(rover.x, rover.y))
      .reduce((sum, isValid, index) => {
        if (!isValid) {
          this.roversWithInvalidCoordinates.push(this.rovers[index]);
        }

        return isValid && sum;
      }, true);
  }

  areRoversCollided(): boolean {
    throw new Error('Not implemented yet');
  }

  async execute(): Promise<void> {
    throw new Error('Not implemented yet');
  }
}
