import { prompt } from 'inquirer';
import { Compass } from './models/compass';
import { Command, Instructions } from './models/instructions';
import { Area } from './models/plateau';
import { RoverPosition } from './models/rover';

export function parseArea(input: string): Area | undefined {
  const area = input.match(/^(?<width>\d+) (?<height>\d+)/)?.groups;
  if (!area) return undefined;

  const width = parseInt(area.width, 10);
  const height = parseInt(area.height, 10);
  return { width, height };
}

export function parseLandingPosition(input: string): RoverPosition | undefined {
  const coordinates = input.match(/^(?<x>\d+) (?<y>\d+) (?<direction>[NESW])/)?.groups;
  if (!coordinates) return undefined;

  const x = parseInt(coordinates.x, 10);
  const y = parseInt(coordinates.y, 10);
  const direction = coordinates.direction as Compass;

  return { x, y, direction };
}

export function parseInstructions(input: string): Instructions | undefined {
  const parsed = input.match(new RegExp(`^(?<instructions>[${Command.M}${Command.L}${Command.R}]+)$`))?.groups;
  if (!parsed) return undefined;

  return parsed.instructions.split('') as Instructions;
}

function sizeOfPlateauValidation(input: string): boolean | string {
  return parseArea(input) ? true : 'Valid format example: 9 7';
}

function landingPositionValidation(input: string): boolean | string {
  return parseLandingPosition(input) ? true : 'Valid format example: 3 4 N';
}

function instructionsValidation(input: string): boolean | string {
  return parseInstructions(input) ? true : 'Valid commands: LRM';
}

export async function askPlateauSize(): Promise<Area | undefined> {
  const { size } = await prompt({
    type: 'input',
    message: 'Plateau:',
    name: 'size',
    validate: sizeOfPlateauValidation,
  });

  return parseArea(size);
}

export async function askRoverLandingCoordinates(roverName: string): Promise<RoverPosition | undefined> {
  const { landingCoordinates } = await prompt({
    type: 'input',
    message: `${roverName} Landing:`,
    name: 'landingCoordinates',
    validate: landingPositionValidation,
  });

  return parseLandingPosition(landingCoordinates);
}

export async function askInstructions(roverName: string): Promise<Instructions | undefined> {
  const { instructions } = await prompt({
    type: 'input',
    message: `${roverName} Instructions:`,
    name: 'instructions',
    validate: instructionsValidation,
  });

  return parseInstructions(instructions);
}
