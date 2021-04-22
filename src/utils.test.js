import {randomPosition} from './utils.js';

describe('randomPosition', () => {
  it("always returns a random number between 0 and scope", () => {
    const scope = 500;
    for(let i = 0; i < 1000; i++) {
      const position = randomPosition(scope);
      const positionInt = parseInt(position);
      expect(positionInt).toBeGreaterThan(-1);
      expect(positionInt).toBeLessThan(scope+1);
    }
  });

  it('returns a string with px at the end', () => {
    const position = randomPosition(5);
    expect(position.length).toBe(3);
    expect(position[position.length-1]).toBe("x");
    expect(position[position.length-2]).toBe("p");
  })
});