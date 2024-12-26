declare global {
    interface Window {
        FB: any;
        dataLayer: any; // Add this line for dataLayer
    }
}
export {};