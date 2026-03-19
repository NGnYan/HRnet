/**
 * Regex to validate a basic email format (e.g. user@example.com).
 */
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Regex to validate a name (letters, spaces, hyphens, apostrophes).
 */
export const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

/**
 * Regex to validate a US zip code (exactly 5 digits).
 */
export const zipCodeRegex = /^\d{5}$/;

/**
 * Sanitizes a string input to prevent basic XSS attacks.
 * Note: React already escapes displayed content by default.
 * This function adds an extra layer of protection for text fields.
 *
 * @param {string} input - The input string to sanitize.
 * @returns {string} The sanitized string, or the original value if not a string.
 *
 * Protections applied:
 * - Strips HTML tags        → prevents <script>alert(1)</script>
 * - Strips javascript:      → prevents javascript:alert(1)
 */
export function sanitizeInput(input) {
  if (typeof input !== "string") return input;
  return input.replace(/<[^>]*>/g, "").replace(/javascript\s*:/gi, "");
}
