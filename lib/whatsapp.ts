export const WHATSAPP_NUMBER = "971565376630";

export function whatsappUrl(message: string): string {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
