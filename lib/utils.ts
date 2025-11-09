export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDateToPhoenixISO(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/Phoenix",
  })
    .format(date)
    .replace(/(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}):(\d{2}):(\d{2})/, "$3-$1-$2T$4:$5:$6-07:00");
}

export function formatDisplayDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Phoenix",
  }).format(date);
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Image helper functions - returns image paths based on naming convention
// Files are named: 1031-exchange-{slug}-{stateAbbr}.{ext} for locations
// Files are named: 1031-exchange-{slug}-phoenix-az.{ext} for property types
// Next.js Image component will handle missing images gracefully

export function getLocationImageSrc(slug: string): string {
  const baseName = `1031-exchange-${slug}`;
  // Try common extensions, Next.js will handle 404s
  return `/locations/${baseName}.webp`;
}

export function getPropertyTypeImageSrc(slug: string): string {
  const baseName = `1031-exchange-${slug}-phoenix-az`;
  // Try common extensions, Next.js will handle 404s
  return `/property-types/${baseName}.jpg`;
}

