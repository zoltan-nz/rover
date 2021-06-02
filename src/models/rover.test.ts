import { Compass } from './compass';
import { Command } from './instructions';
import { Rover } from './rover';

describe('Rover', () => {
  it('creates a Rover with name', () => {
    const rover = new Rover('Rover1', { x: 1, y: 2, direction: Compass.E });
    expect(rover.x).toEqual(1);
    expect(rover.y).toEqual(2);
    expect(rover.direction).toEqual(Compass.E);
  });

  it('can turn right', () => {
    const rover = new Rover('Rover1', { x: 0, y: 0, direction: Compass.S });
    expect(rover.direction).toEqual(Compass.S);

    rover.turnRight();
    expect(rover.direction).toEqual(Compass.W);

    rover.turnRight();
    expect(rover.direction).toEqual(Compass.N);

    rover.turnRight();
    expect(rover.direction).toEqual(Compass.E);

    rover.turnRight();
    expect(rover.direction).toEqual(Compass.S);
  });

  it('can turn left', () => {
    const rover = new Rover('Rover1', { x: 0, y: 0, direction: Compass.S });
    expect(rover.direction).toEqual(Compass.S);

    rover.turnLeft();
    expect(rover.direction).toEqual(Compass.E);

    rover.turnLeft();
    expect(rover.direction).toEqual(Compass.N);

    rover.turnLeft();
    expect(rover.direction).toEqual(Compass.W);

    rover.turnLeft();
    expect(rover.direction).toEqual(Compass.S);
  });

  it('can move forward', () => {
    const rover = new Rover('Rover1', { x: 5, y: 5, direction: Compass.N });
    expect([rover.x, rover.y]).toEqual([5, 5]);
    rover.moveForward();
    expect([rover.x, rover.y]).toEqual([5, 6]);
    rover.turnLeft();
    rover.moveForward();
    expect([rover.x, rover.y, rover.direction]).toEqual([4, 6, Compass.W]);
    rover.turnLeft();
    rover.moveForward();
    rover.turnLeft();
    rover.moveForward();
    expect([rover.x, rover.y, rover.direction]).toEqual([5, 5, Compass.E]);
  });

  test('instructions', () => {
    const rover = new Rover('Rover1', { x: 5, y: 5, direction: Compass.N });
    rover.instructions = [Command.R, Command.L, Command.M];
    expect(rover.instructions).toEqual(['R', 'L', 'M']);
  });
});
