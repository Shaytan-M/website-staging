export const CONTACT_BODY_LIMIT = 20_000;

export type ContactField =
  | "firstName"
  | "lastName"
  | "email"
  | "company"
  | "phone"
  | "message"
  | "turnstileToken";

export type ContactData = Record<ContactField | "website", string>;

export type ContactValidation =
  | { ok: true; data: ContactData }
  | { ok: false; error: string; field?: ContactField };

export const CONTACT_FIELD_LIMITS: Record<keyof ContactData, number> = {
  firstName: 100,
  lastName: 100,
  email: 254,
  company: 200,
  phone: 50,
  message: 5_000,
  website: 200,
  turnstileToken: 2_048,
};

function textValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validatePhone(phone: string): string | null {
  const value = phone.trim();

  if (!value) return null;

  if (!/^[+0-9()\s-]+$/.test(value)) {
    return "Please use only numbers and valid phone formatting characters.";
  }

  if ((value.match(/\+/g) ?? []).length > 1 ||
      (value.includes("+") && !value.startsWith("+"))) {
    return "The + sign is only allowed at the beginning.";
  }

  let depth = 0;

  for (const char of value) {
    if (char === "(") depth++;
    if (char === ")") depth--;

    if (depth < 0 || depth > 1) {
      return "Please check the phone number parentheses.";
    }
  }

  if (depth !== 0) {
    return "Please check the phone number parentheses.";
  }

  const digits = value.replace(/\D/g, "");

  if (digits.length < 7 || digits.length > 15) {
    return "Phone number must contain between 7 and 15 digits.";
  }

  return null;
}


export function validateContactPayload(value: unknown): ContactValidation {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, error: "Invalid request." };
  }

  const input = value as Record<string, unknown>;

  const data = Object.fromEntries(
    Object.keys(CONTACT_FIELD_LIMITS).map((key) => [
      key,
      textValue(input[key]),
    ]),
  ) as ContactData;

  for (const [field, limit] of Object.entries(CONTACT_FIELD_LIMITS) as Array<
    [keyof ContactData, number]
  >) {
    if (data[field].length > limit) {
      return {
        ok: false,
        field: field === "website" ? undefined : field,
        error: "Please shorten this field and try again.",
      };
    }
  }

  for (const field of ["firstName", "lastName", "email", "message"] as const) {
    if (!data[field]) {
      return {
        ok: false,
        field,
        error: "Please complete this required field.",
      };
    }
  }

  const emailRegex =
    /^[^\s@]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/;

  if (!emailRegex.test(data.email)) {
    return {
      ok: false,
      field: "email",
      error: "Please enter a valid email address.",
    };
  }

  const phoneError = validatePhone(data.phone);

  if (phoneError) {
    return {
      ok: false,
      field: "phone",
      error: phoneError,
    };
  }

  return { ok: true, data };
}

