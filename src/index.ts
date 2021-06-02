import { Plateau } from './models/plateau';
import { Rover } from './models/rover';
import { askInstructions, askPlateauSize, askRoverLandingCoordinates } from './questions';
import { Simulator } from './simulator';

const NUMBER_OF_ROVERS = 2;

export async function run(/* argv?: string[] */): Promise<void> {
  const plateauSize = await askPlateauSize();
  if (!plateauSize) throw new Error('Unexpected Plateau Size');
  const plateau = new Plateau(plateauSize);

  const rovers: Rover[] = [];
  for (let n = 1; n <= NUMBER_OF_ROVERS; n++) {
    const roverName = `Rover${n}`;

    const roverCoordinates = await askRoverLandingCoordinates(roverName);
    if (!roverCoordinates) throw new Error('Unexpected Rover Coordinates');

    const instructions = await askInstructions(roverName);
    if (!instructions) throw new Error('Unexpected Instructions');

    const rover = new Rover(roverName, roverCoordinates);
    rover.instructions = instructions;

    rovers.push(rover);
  }

  const simulator = new Simulator(plateau, rovers);
  if (!simulator.areLandingCoordinatesValid())
    console.error(`${simulator.roversWithInvalidCoordinates.map(r => r.name)} would land outside of the Plateau.`);

  console.info('Simulation is not fully implemented yet...');
  rovers.forEach(rover => console.log(`${rover.name}:`, rover.x, rover.y, rover.direction));
}
