/**
 * Utility functions for the aircraft application
 */

/**
 * Sanitize user input to prevent XSS attacks
 * @param input - Raw user input string
 * @returns Sanitized string safe for use in the application
 */
export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>\"']/g, '');
};

/**
 * Format engine type for display in French
 * @param engineType - Engine type from the aircraft data
 * @returns Formatted French display name
 */
export const formatEngineType = (engineType: string): string => {
  const engineLabels: Record<string, string> = {
    'Jet': 'Réacteur',
    'Turboprop': 'Turbopropulseur',
    'Piston': 'Piston',
    'Propfan': 'Propfan',
    'Radial': 'Radial',
    'Ducted Fan': 'Soufflante Carénée',
    'Piston / Turboprop': 'Piston / Turbopropulseur',
    'Radial / Turboprop': 'Radial / Turbopropulseur',
    'Turboprop / Jet': 'Turbopropulseur / Réacteur',
    'Turbine': 'Turbine'
  };
  return engineLabels[engineType] || engineType;
};

/**
 * Log error with context for debugging
 * @param context - Where the error occurred
 * @param error - The error object or message
 */
export const logError = (context: string, error: unknown): void => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[${context}] ${message}`);
};

/**
 * Validate if URL is accessible (for image loading)
 * @param url - URL to validate
 * @returns Promise that resolves if URL is accessible
 */
export const validateImageUrl = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

/**
 * Truncate text to specific length with ellipsis
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns Truncated text
 */
export const truncateText = (text: string, length: number): string => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};
