import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "Home", href: "\\#hero" },
  { label: "About", href: "\\#about" },
 
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/thinkT?mibextid=kFxxJD",
    icon: FaFacebook,
  },
  {
    href: "https://github.com/ThinkT",
    icon: FaGithub,
  },
] as const;
