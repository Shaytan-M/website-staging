import { afterEach, describe, expect, it } from "vitest";
import { proxy } from "./proxy";

const originalVercelEnv = process.env.VERCEL_ENV;

afterEach(() => {
  if (originalVercelEnv === undefined) {
    delete process.env.VERCEL_ENV;
  } else {
    process.env.VERCEL_ENV = originalVercelEnv;
  }
});

describe("preview indexing policy", () => {
  it("adds noindex to preview responses", () => {
    process.env.VERCEL_ENV = "preview";

    const response = proxy();

    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
  });

  it("does not add noindex to production responses", () => {
    process.env.VERCEL_ENV = "production";

    const response = proxy();

    expect(response.headers.get("X-Robots-Tag")).toBeNull();
  });
});
