import { Part } from '../types';

const PART_NAMES = [
  'Фільтр масляний',
  'Гальмівні колодки',
  'Свічка запалювання',
  'Ремінь ГРМ',
  'Амортизатор передній',
  'Повітряний фільтр',
] as const;

const ANALOG_BRANDS = ['BOSCH', 'MANN', 'FEBI', 'TRW', 'VALEO'] as const;

function pick<T extends readonly string[]>(items: T): T[number] {
  return items[Math.floor(Math.random() * items.length)];
}

function uniqueId(): string {
  return crypto.randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase();
}

export function makePart(overrides: Partial<Part> = {}): Part {
  const id = uniqueId();

  return {
    name: `${pick(PART_NAMES)} ${id}`,
    origNumber: `04465-${id}`,
    analog: `${pick(ANALOG_BRANDS)}-${id}`,
    quantity: 10,
    brand: pick(ANALOG_BRANDS),
    place: `A-${id.slice(0, 3)}`,
    ...overrides,
  };
}
