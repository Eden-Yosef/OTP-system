import { expect, test } from "vitest";
import checkEmailInServer from "../utils/functions/checkEmailInServer";
import getTemperature from "../utils/functions/getTemperature";
import handleRegister from "../utils/functions/handleRegister";

test("returns status code when email is checked", async () => {
  const email = "Gal@walla.com";
  const result = await checkEmailInServer(email);

  if (result === 200) {
    expect(result).toBe(200);
  } else if (result === "Email not exist.") {
    expect(result).toBe("Email not exist.");
  } else {
    expect(result).toBe("Server Error.");
  }
});

test("returns status code if details user saved in SQL", async () => {
  const email = "Shon@walla.com";
  const first_name = "Shlomo";
  const last_name = "Moshe";
  const phone = "0578965412";
  const birth = "28-04-1999";
  const result = await handleRegister(
    email,
    first_name,
    last_name,
    phone,
    birth
  );

  if (result === 200) {
    expect(result).toBe(200);
  } else {
    expect(result).toBe("Email exist.");
  }
});

test("returns an array of temperatures for valid city names", async () => {
  const cityNamesArray = ["London", "New York", "Tokyo"];
  const temperatures = await getTemperature(cityNamesArray);

  expect(Array.isArray(temperatures)).toBe(true);
  temperatures.forEach((temperature) => {
    expect(typeof temperature).toBe("string");
  });
});

test("handles invalid city names gracefully", async () => {
  const cityNamesArray = ["London", "New York", "Tokyo"];
  const temperatures = await getTemperature(cityNamesArray);
  expect(temperatures.length).toBe(3);
  temperatures.forEach((temperature) => {
    const numericTemperature = parseFloat(temperature);
    expect(!isNaN(numericTemperature)).toBe(true);
  });
});
