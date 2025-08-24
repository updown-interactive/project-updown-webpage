import { goto } from "$app/navigation";


export function goToContact(topic: string) {
    goto('/contact?topic=' + topic);
}