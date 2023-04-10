import { Doors, getRemainedDoor, getRevealedDoor } from "../utility/utils";

describe("Result utility test", () => {
  test("get revealed door", async () => {
    const doors: Doors[] = ["one", "two", "three"];

    expect(getRevealedDoor(doors, "two", "three")).toEqual("one");
  });

  test("get remained door", async () => {
    const doors: Doors[] = ["one", "two", "three"];

    expect(getRemainedDoor(doors, "three", "one")).toEqual("two");
  });
});
