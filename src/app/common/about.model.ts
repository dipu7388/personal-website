export interface About {
  title: string;
  position: string;
  desc: string;
  name: string;
  address: Address[];
  email: string;
  freelance: string;
  resumelink: string;
  age: number;
  yearOfBirth: number;
  services: Service[];
  profilePic: string;
  mobileNumber: string;
}

export interface Service {
  name: string;
  icon: string;
  desc: string;
}

export interface Address {
  addressType: string;
  addr: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
}
