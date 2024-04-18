
// Define the structure for booking information
interface BookingInfo {
  user: string;
  date: string;
}

// Define the structure for a phone
export interface Phone {
  phone: { user: any; date: string; };
  brand: string;
  model: string;
  os_version: string;
  screen_size: string;
  available: boolean;
  booking_info: BookingInfo | null;
  id: number;
}
  export interface DatabaseSchema {
    phones: Phone[];
  }