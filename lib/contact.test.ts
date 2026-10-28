import { describe, expect, it } from "vitest";
import { validateContactPayload } from "./contact";

const validPayload = {
  firstName: " Ada ",
  lastName: " Lovelace ",
  email: " ada@example.com ",
  company: " Analytical Engines ",
  phone: " 555-0100 ",
  message: " Please contact me. ",
  website: "",
  turnstileToken: "token",
};

describe("validateContactPayload", () => {
  it("normalizes a valid payload", () => {
    const result = validateContactPayload(validPayload);

    expect(result).toEqual({
      ok: true,
      data: {
        firstName: "Ada",
        lastName: "Lovelace",
        email: "ada@example.com",
        company: "Analytical Engines",
        phone: "555-0100",
        message: "Please contact me.",
        website: "",
        turnstileToken: "token",
      },
    });
  });

  it("rejects non-object input", () => {
    expect(validateContactPayload(null)).toEqual({
      ok: false,
      error: "Invalid request.",
    });
  });

  it("identifies the first missing required field", () => {
    const result = validateContactPayload({
      ...validPayload,
      firstName: " ",
    });

    expect(result).toEqual({
      ok: false,
      field: "firstName",
      error: "Please complete this required field.",
    });
  });

  it("rejects an invalid email address", () => {
    const result = validateContactPayload({
      ...validPayload,
      email: "not-an-email",
    });

    expect(result).toEqual({
      ok: false,
      field: "email",
      error: "Please enter a valid email address.",
    });
  });

  it("rejects fields over their maximum length", () => {
    const result = validateContactPayload({
      ...validPayload,
      message: "x".repeat(5_001),
    });

    expect(result).toEqual({
      ok: false,
      field: "message",
      error: "Please shorten this field and try again.",
    });
  });
});
