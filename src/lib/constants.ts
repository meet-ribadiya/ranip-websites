// Site constants and data

export const SITE_CONFIG = {
  name: "Shree Swaminarayan International School",
  shortName: "SSIS Ranip",
  tagline: "Igniting Minds, Shaping Futures",
  description:
    "Shree Swaminarayan International School in Ranip, Ahmedabad, brings learning, curiosity and enduring values together for growing minds.",
  address:
    "Near GST Railway Crossing, Balol Nagar Cross Road, Ranip, Ahmedabad – 382480, Gujarat, India",
  phones: ["7575028282", "7575038282", "7575048282", "7575058282"],
  landline: "079-27528282",
  whatsapp: "+917574078282",
  email: "info@ssisranip.com",
  erpLogin:
    "https://www.vidyalayaschoolsoftware.com/erp-login?OrgGroupId=rAhZljsgT/0UHW7tIK9Nmw==",
  admissionUrl:
    "https://ssis.onlinevidyalaya.net/Pages/OnlineAdmission/AdmissionInquiryForm.aspx?OrgGroupId=2649",
  social: {
    facebook: "https://www.facebook.com/ssisranipindia",
    youtube: "https://www.youtube.com/c/ssisranip",
    twitter: "https://www.twitter.com/ssisranipindia",
    instagram: "https://www.instagram.com/ssisranip",
  },
  vision:
    "The school's vision is to ignite a thirst for knowledge in children, encouraging them to continue learning and growing according to their individual choices.",
  mission:
    "Do the prayer, achieve Sanskars, persevere your strength, achieve success.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Our Story", href: "/about-us#our-story" },
      { label: "Our Values", href: "/about-us#our-values" },
      { label: "Our Vision", href: "/about-us#our-vision" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Learning Approach", href: "/academics#learning-approach" },
      { label: "For Families", href: "/academics#parents-corner" },
      { label: "For Students", href: "/academics#students-corner" },
      { label: "Facilities", href: "/academics#facilities" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo Gallery", href: "/gallery#photos" },
      { label: "School Videos", href: "/gallery#videos" },
      { label: "Events", href: "/gallery#events" },
      { label: "Sports", href: "/gallery#sports" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: "/banner5.jpg",
    title: "Igniting Minds,",
    titleHighlight: "Shaping Futures",
    subtitle: "A place where curiosity, knowledge and enduring values grow together.",
    cta: "Explore Admissions",
    ctaLink: SITE_CONFIG.admissionUrl,
  },
  {
    id: 2,
    image: "/banner11.webp",
    title: "Nurturing",
    titleHighlight: "Young Scholars",
    subtitle:
      "Room to learn, ask questions and discover new interests along the way.",
    cta: "Our Programs",
    ctaLink: "/academics",
  },
  {
    id: 3,
    image: "/banner2.webp",
    title: "Values &",
    titleHighlight: "Excellence",
    subtitle:
      "Building character through learning rooted in Swaminarayan values.",
    cta: "About SSIS",
    ctaLink: "/about-us",
  },
  {
    id: 4,
    image: "/banner44.webp",
    title: "Sports &",
    titleHighlight: "Beyond",
    subtitle:
      "Finding confidence, teamwork and joy in movement and creative pursuits.",
    cta: "See Gallery",
    ctaLink: "/gallery",
  },
  {
    id: 5,
    image: "/banner6.webp",
    title: "A Legacy of",
    titleHighlight: "Learning",
    subtitle:
      "A learning community in Ranip, Ahmedabad, ready for each child’s next chapter.",
    cta: "Learn More",
    ctaLink: "/about-us",
  },
];

export const GALLERY_IMAGES = [
  { src: "/banner11.webp", alt: "School Campus", category: "Campus" },
  { src: "/banner2.webp", alt: "Students Learning", category: "Academics" },
  { src: "/banner44.webp", alt: "Sports Day", category: "Sports" },
  { src: "/banner5.jpg", alt: "School Events", category: "Events" },
  { src: "/banner6.webp", alt: "Cultural Activities", category: "Culture" },
  { src: "/banner66-scaled.webp", alt: "School Building", category: "Campus" },
  { src: "/bg-kids2-min-1.jpg", alt: "Happy Students", category: "Students" },
  { src: "/result-bg.webp", alt: "Students gathered for a school assembly", category: "Assembly" },
];

export const FACILITIES = [
  { name: "Smart Classrooms", icon: "monitor" },
  { name: "Science Labs", icon: "flask" },
  { name: "Computer Lab", icon: "cpu" },
  { name: "Library", icon: "book" },
  { name: "Sports Ground", icon: "activity" },
  { name: "Indoor Games", icon: "zap" },
  { name: "Music Room", icon: "music" },
  { name: "Art Studio", icon: "palette" },
  { name: "Canteen", icon: "coffee" },
  { name: "Medical Room", icon: "heart" },
  { name: "CCTV Security", icon: "shield" },
  { name: "School Bus", icon: "truck" },
];
