import User from "@models/User";

test("it should be ok", () => {
  const user = new User();
  user.name = "Lutero";

  expect(user.name).toEqual("Lutero");
});
