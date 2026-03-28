import { describe, it, expect } from "vitest";
import { emailRegex, nameRegex, zipCodeRegex } from "../utils";

describe("emailRegex", () => {
  it("validates a correct email", () => {
    expect(emailRegex.test("test@example.com")).toBe(true);
  });

  it("rejects an email without @", () => {
    expect(emailRegex.test("testexample.com")).toBe(false);
  });

  it("rejects an email without domain", () => {
    expect(emailRegex.test("test@")).toBe(false);
  });
});

describe("nameRegex", () => {
  it("validates a simple name", () => {
    expect(nameRegex.test("Alice")).toBe(true);
  });

  it("validates a name with accent", () => {
    expect(nameRegex.test("Élodie")).toBe(true);
  });

  it("rejects a name with numbers", () => {
    expect(nameRegex.test("Alice123")).toBe(false);
  });
});

describe("zipCodeRegex", () => {
  it("validates a 5-digit zip code", () => {
    expect(zipCodeRegex.test("10001")).toBe(true);
  });

  it("rejects a 4-digit zip code", () => {
    expect(zipCodeRegex.test("1000")).toBe(false);
  });

  it("rejects a zip code with letters", () => {
    expect(zipCodeRegex.test("1000A")).toBe(false);
  });
});
