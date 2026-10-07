export interface DemoFormData {
  contactName: string;
  email: string;
  phone: string;
  city: string;
  storeName: string;
  role?: string;
}

export interface ValidationErrors {
  contactName?: string;
  email?: string;
  phone?: string;
  city?: string;
  storeName?: string;
  role?: string;
}

export const VALID_ROLES = [
  "Optical Store Owner",
  "Outlet / Store Manager",
  "Optometrist / Eye Doctor",
  "Workshop / Fitting Head",
  "Admin / Accountant",
  "Others",
] as const;

export function validateContactName(name: string): string | null {
  if (!name || typeof name !== "string") return "Full name is required";
  const trimmed = name.trim();
  if (trimmed.length < 2) return "Name must be at least 2 characters";
  if (trimmed.length > 60) return "Name cannot exceed 60 characters";
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
    return "Name should contain letters only";
  }
  return null;
}

export function validateEmail(email: string): string | null {
  if (!email || typeof email !== "string") return "Email address is required";
  const trimmed = email.trim();
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) {
    return "Please enter a valid email address (e.g. name@domain.com)";
  }
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone || typeof phone !== "string") return "Phone number is required";
  const cleanDigits = phone.replace(/\D/g, "");

  let standard10 = cleanDigits;
  if (cleanDigits.length === 12 && cleanDigits.startsWith("91")) {
    standard10 = cleanDigits.slice(2);
  } else if (cleanDigits.length === 11 && cleanDigits.startsWith("0")) {
    standard10 = cleanDigits.slice(1);
  }

  if (standard10.length !== 10) {
    return "Please enter a valid 10-digit mobile number";
  }
  if (!/^[6-9]\d{9}$/.test(standard10)) {
    return "Mobile number must start with 6, 7, 8, or 9";
  }
  return null;
}

export function validateCity(city: string): string | null {
  if (!city || typeof city !== "string") return "City is required";
  const trimmed = city.trim();
  if (trimmed.length < 2) return "City must be at least 2 characters";
  if (trimmed.length > 60) return "City cannot exceed 60 characters";
  return null;
}

export function validateStoreName(store: string): string | null {
  if (!store || typeof store !== "string") return "Store name is required";
  const trimmed = store.trim();
  if (trimmed.length < 2) return "Store name must be at least 2 characters";
  if (trimmed.length > 100) return "Store name cannot exceed 100 characters";
  return null;
}

export function validateDemoForm(data: Partial<DemoFormData>): {
  isValid: boolean;
  errors: ValidationErrors;
  sanitized?: DemoFormData;
} {
  const errors: ValidationErrors = {};

  const nameErr = validateContactName(data.contactName || "");
  if (nameErr) errors.contactName = nameErr;

  const emailErr = validateEmail(data.email || "");
  if (emailErr) errors.email = emailErr;

  const phoneErr = validatePhone(data.phone || "");
  if (phoneErr) errors.phone = phoneErr;

  const cityErr = validateCity(data.city || "");
  if (cityErr) errors.city = cityErr;

  const storeErr = validateStoreName(data.storeName || "");
  if (storeErr) errors.storeName = storeErr;

  const isValid = Object.keys(errors).length === 0;

  if (!isValid) {
    return { isValid: false, errors };
  }

  // Normalize phone to clean 10 digits
  let cleanDigits = (data.phone || "").replace(/\D/g, "");
  if (cleanDigits.length === 12 && cleanDigits.startsWith("91")) cleanDigits = cleanDigits.slice(2);
  if (cleanDigits.length === 11 && cleanDigits.startsWith("0")) cleanDigits = cleanDigits.slice(1);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

  return {
    isValid: true,
    errors: {},
    sanitized: {
      contactName: escapeHtml((data.contactName || "").trim()),
      email: (data.email || "").trim().toLowerCase(),
      phone: cleanDigits,
      city: escapeHtml((data.city || "").trim()),
      storeName: escapeHtml((data.storeName || "").trim()),
      role: data.role ? escapeHtml(data.role.trim()) : "Optical Store Owner",
    },
  };
}
