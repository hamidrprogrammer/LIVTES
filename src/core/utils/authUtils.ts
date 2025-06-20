export const decodeJwt = (token: string): { exp?: number; [key: string]: unknown } | null => {
  try {
    const base64Url = token.split(
      

    )[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};

export const isTokenValid = (token: string | null): boolean => {
  if (!token) {
    return false;
  }
  const decoded = decodeJwt(token);
  if (!decoded || !decoded.exp) {
    return false;
  }
  const now = Date.now();
  const isValid = decoded.exp * 1000 > now;
  return isValid;
};


