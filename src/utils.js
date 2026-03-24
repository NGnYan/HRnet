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
