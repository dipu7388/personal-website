export interface Contact{
  title: string;
  subHeading: string;
  desc: string;
  mobileNumber: string;
  address: string;
  email: string;
  socialLinks: SocialLink[];
  copyright: string;
  logoText:string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}
