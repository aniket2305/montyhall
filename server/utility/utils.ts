export type Doors = "one" | "two" | "three";

/*
 * @function getDoorWithPrize
 * @return random door with prize from set of doors
 */

const getDoorWithPrize = (doors: Doors[]) =>
  doors[Math.floor(Math.random() * doors.length)];

/*
 * @function getDoorUserSelection
 * @return random player selection door from set of doors
 */
const getDoorUserSelection = (doors: Doors[]) =>
  doors[Math.floor(Math.random() * doors.length)];

/*
 * @function getRevealedDoor
 * @return door which does not have price and not selected by player
 */
export const getRevealedDoor = (
  doors: Doors[],
  doorWithPrize: Doors,
  doorSelected: Doors
) =>
  doors.find(
    (door) => door !== doorWithPrize && door !== doorSelected
  ) as Doors;

/*
 * @function getRemainedDoor
 * @return remaining door except previously selected choice and revealed door by host
 */
export const getRemainedDoor = (
  doors: Doors[],
  revealedDoor: Doors,
  doorSelected: Doors
) => doors.find((door) => door !== revealedDoor && door !== doorSelected);

/*
 * @function getResult
 * @param numSimulations{number} - number of simulation
 * @param isDoorSwitched{boolean} - if player decides to switch door
 * @return result based on number of simulation and player's door selection choice
 */
export function getResult(numSimulations: number, isDoorSwitched: boolean) {
  const {
    winCountNoSwitch,
    lossCountNoSwitch,
    winCountSwitch,
    lossCountSwitch,
  } = getWinLossCount(numSimulations, isDoorSwitched);

  const totalNoSwitch = winCountNoSwitch + lossCountNoSwitch;
  const totalSwitch = winCountSwitch + lossCountSwitch;

  return {
    noSwitchedDoor: {
      winCount: winCountNoSwitch,
      lossCount: lossCountNoSwitch,
      winPercentage:
        totalNoSwitch === 0 ? 0 : (winCountNoSwitch / totalNoSwitch) * 100,
    },
    switchedDoor: {
      winCount: winCountSwitch,
      lossCount: lossCountSwitch,
      winPercentage:
        totalSwitch === 0 ? 0 : (winCountSwitch / totalSwitch) * 100,
    },
  };
}

/*
 * @function getWinLossCount
 * @param numSimulations{number} - number of simulation
 * @param isDoorSwitched{boolean} - if player decides to switch door
 * @return total number of win and loss count
 */

function getWinLossCount(numSimulations: number, isDoorSwitched: boolean) {
  let winCountNoSwitch = 0;
  let lossCountNoSwitch = 0;
  let winCountSwitch = 0;
  let lossCountSwitch = 0;

  for (let i = 0; i < numSimulations; i++) {
    const doors: Doors[] = ["one", "two", "three"];

    const doorWithPrize = getDoorWithPrize(doors);
    const doorSelected = getDoorUserSelection(doors);

    const revealedDoor = getRevealedDoor(doors, doorWithPrize, doorSelected);

    if (isDoorSwitched) {
      const newSwitchedDoor = getRemainedDoor(
        doors,
        revealedDoor,
        doorSelected
      );
      newSwitchedDoor === doorWithPrize ? winCountSwitch++ : lossCountSwitch++;
    } else {
      doorSelected === doorWithPrize ? winCountNoSwitch++ : lossCountNoSwitch++;
    }
  }

  return {
    winCountSwitch,
    lossCountSwitch,
    winCountNoSwitch,
    lossCountNoSwitch,
  };
}
