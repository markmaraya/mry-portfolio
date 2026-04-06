export interface ContactData {
  label: string;
  iconPlain: string;
  iconOriginal: string;
  link: string;
  hoverColor: string;
}

export const contactData: ContactData[] = [
  {
    label: "LinkedIn",
    iconPlain: "simple-icons:linkedin",
    iconOriginal: "logos:linkedin-icon",
    link: "https://linkedin.com/in/mark-maraya/",
    hoverColor: "#0a66c2",
  },
  {
    label: "Gmail",
    iconPlain: "simple-icons:gmail",
    iconOriginal: "logos:google-gmail",
    link: "mailto:markanthonymaraya@gmail.com",
    hoverColor: "#ea4335",
  },
  {
    label: "GitHub",
    iconPlain: "simple-icons:github",
    iconOriginal: "simple-icons:github",
    link: "https://github.com/markmaraya",
    hoverColor: "#0fbf3e",
  },
  {
    label: "CV",
    iconPlain: "mdi:file-download",
    iconOriginal: "mdi:file-download",
    link: "/yourcv.pdf",
    hoverColor: "#f5f5eb",
  },
];
