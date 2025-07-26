import { RateLimiter, HOUR } from "@convex-dev/rate-limiter";
import { components } from "./_generated/api";

// @ts-ignore - Rate limiter types mismatch
export const rateLimiter = new RateLimiter(components.rateLimiter, {
  sendEmailInvite: { kind: "fixed window", rate: 3, period: 24 * HOUR },
});
