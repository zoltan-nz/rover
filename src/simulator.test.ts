import { Compass } from './models/compass';
import { Plateau } from './models/plateau';
import { Rover } from './models/rover';
import { Simulator } from './simulator';

describe('Simulator', () => {
  it('should accept Plateau and rovers', () => {
    const plateau = new Plateau({ width: 5, height: 5 });
    const rover1 = new Rover('Rover1', { x: 1, y: 2, direction: Compass.E });
    const rover2 = new Rover('Rover2', { x: 3, y: 4, direction: Compass.S });
    const rovers = [rover1, rover2];

    const simulator = new Simulator(plateau, rovers);

    expect(simulator.rovers).toEqual(rovers);
    expect(simulator.plateau).toEqual(plateau);
    expect(simulator.step).toEqual(0);
  });

  describe('areLandingCoordinatesValid', () => {
    it('should be true when rovers land inside the Plateau', () => {
      const plateau = new Plateau({ width: 5, height: 5 });
      const rover1 = new Rover('Rover1', { x: 1, y: 2, direction: Compass.E });
      const rover2 = new Rover('Rover2', { x: 3, y: 4, direction: Compass.S });
      const rovers = [rover1, rover2];

      const simulator = new Simulator(plateau, rovers);

      expect(simulator.areLandingCoordinatesValid()).toBeTruthy();
      expect(simulator.roversWithInvalidCoordinates.length).toEqual(0);
    });

    it('should be false when one of the rovers would land outside the Plateau', () => {
      const plateau = new Plateau({ width: 0, height: 0 });
      const rover1 = new Rover('Rover1', { x: 0, y: 0, direction: Compass.E });
      const rover2 = new Rover('Rover2', { x: 3, y: 4, direction: Compass.S });
      const rovers = [rover1, rover2];

      const simulator = new Simulator(plateau, rovers);

      expect(simulator.areLandingCoordinatesValid()).toBeFalsy();
      expect(simulator.roversWithInvalidCoordinates).toEqual([rover2]);
    });
  });
});
