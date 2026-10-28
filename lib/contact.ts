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

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return {
      ok: false,
      field: "email",
      error: "Please enter a valid email address.",
    };
  }

  return { ok: true, data };
}
