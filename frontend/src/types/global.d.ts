declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'set',
      eventName: string,
      parameters?: {
        event_category?: string;
        event_label?: string;
        value?: number;
      }
    ) => void;
  }
}

export {};