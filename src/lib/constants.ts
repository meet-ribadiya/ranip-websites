// ============================================================================
// CENTRALIZED CONTENT & IMAGES CONFIGURATION
// Edit text content, contact details, links, and image paths in THIS single
// file to update the entire SSIS Ranip website automatically.
// ============================================================================

export const SITE_IMAGES = {
  logo: "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177269/logo-ssisranip.webp",
  ogImage:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner11.webp",
  defaultPageBanner:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner11.webp",
  homeAboutPhoto:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177269/bg-kids2-min-1.jpg",
  homeSportsPhoto:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/result-bg.webp",
  aboutStoryPhoto:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner2.webp",
  academicsBanner:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177269/banner44.webp",
  galleryBanner:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177269/banner66-scaled.webp",
  careersBanner:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner5.jpg",
  contactBanner:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner11.webp",
  heroSlide1:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner5.jpg",
  heroSlide2:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner11.webp",
  heroSlide3:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner2.webp",
  heroSlide4:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177269/banner44.webp",
  heroSlide5:
    "https://res.cloudinary.com/dhyji1ffs/image/upload/v1795177268/banner6.webp",
} as const;

export const SITE_CONFIG = {
  name: "Shree Swaminarayan International School",
  shortName: "SSIS Ranip",
  tagline: "Igniting Minds, Shaping Futures",
  established: "2012",
  trustName: "Shree Swaminarayan Vishvamangal Gurukul Trust, Saij, Kalol (Est. 1992)",
  campusSize: "2-Acre Serene Campus in Ranip, Ahmedabad",
  studentStrength: "3,000+ Students",
  affiliation: "Govt. Recognised School (S.S.C., H.S.C. & CBSE Streams — English & Gujarati Medium)",
  description:
    "Welcome to Shree Swaminarayan International School (SSIS) in Ranip, Ahmedabad. Whether you are from any part of the city or state, or from elsewhere in India, we aim to help you make the best of educational opportunity that SSIS can offer you.",
  address:
    "Near GST Railway Crossing, Balol Nagar Cross Road, Ranip, Ahmedabad – 382480, Gujarat – India",
  phones: ["7575028282", "7575038282", "7575048282", "7575058282"],
  primaryPhone: "+917575038282",
  landline: "079-27528282",
  whatsapp: "+917574078282",
  email: "ssisranip@gmail.com",
  secondaryEmail: "info@ssisranip.com",
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
  prayerQuote:
    "Prayer is the raising of one's mind and heart to God or the requesting of good things from God.",
  aboutVisionHeadline: "WE BELIEVE THAT HAPPY CHILD IS A SUCCESSFUL ONE.",
  aboutVisionText:
    "Welcome to the world of SSIS, where education means all-round development of the child. We don't only teach, we groom the personality of children. Our vision is to develop well-rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated. We are committed to providing a positive, safe and stimulating environment for children to learn, where all are valued. We give a lot of importance to making discipline a core value, encouraging students to develop a sense of responsibility through a well-planned academic schedule.",
  aboutMissionHeadline: "TEACH, INSPIRE, TRANSFORM AND NURTURE STUDENTS.",
  aboutMissionText:
    "Our mission is to develop young minds with active and creative thinking, a sense of understanding and compassion for others, and the courage to act on their beliefs. We stress the total development of each child: spiritual, moral, intellectual, social, emotional, and physical.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "About SSIS", href: "/about-us#our-story" },
      { label: "Director's Message", href: "/about-us#directors-message" },
      { label: "Principal's Message", href: "/about-us#principals-message" },
      { label: "Faculty & Staff", href: "/about-us#faculty-and-staff" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Courses (JEE & NEET)", href: "/academics#courses" },
      { label: "Facilities", href: "/academics#facilities" },
      { label: "Parent's Corner", href: "/academics#parents-corner" },
      { label: "Student's Corner", href: "/academics#students-corner" },
      { label: "School News", href: "/academics#news" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo Gallery & Albums", href: "/gallery#photos" },
      { label: "Video Gallery", href: "/gallery#videos" },
      { label: "Events (26 Celebrations)", href: "/gallery#events" },
      { label: "Sports & Achievements", href: "/gallery#sports" },
      { label: "Tours & Excursions", href: "/gallery#tours" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: SITE_IMAGES.heroSlide1,
    title: "Igniting Minds,",
    titleHighlight: "Shaping Futures",
    subtitle:
      "The school's vision is to ignite a thirst for knowledge in children, encouraging them to continue learning and growing according to their individual choices.",
    cta: "Rolling Admissions Open",
    ctaLink: SITE_CONFIG.admissionUrl,
  },
  {
    id: 2,
    image: SITE_IMAGES.heroSlide2,
    title: "Do The Prayer,",
    titleHighlight: "Achieve Sanskars",
    subtitle:
      "Persevere your strength, achieve success. Blending India's rich cultural and spiritual heritage with contemporary education since 2012.",
    cta: "Explore Courses",
    ctaLink: "/academics#courses",
  },
  {
    id: 3,
    image: SITE_IMAGES.heroSlide3,
    title: "A Happy Child Is A",
    titleHighlight: "Successful One",
    subtitle:
      "Over 3,000 students learning in a serene 2-acre air-conditioned campus in the heart of Ranip, Ahmedabad.",
    cta: "About Our School",
    ctaLink: "/about-us",
  },
  {
    id: 4,
    image: SITE_IMAGES.heroSlide4,
    title: "Excellence In",
    titleHighlight: "Sports & Beyond",
    subtitle:
      "It's not the will to win that matters—everyone has that. It's the will to prepare to win that matters.",
    cta: "Sports & Achievements",
    ctaLink: "/gallery#sports",
  },
  {
    id: 5,
    image: SITE_IMAGES.heroSlide5,
    title: "Teach, Inspire,",
    titleHighlight: "Transform & Nurture",
    subtitle:
      "Pre-Primary, Primary, Secondary & Higher Secondary (Science & Commerce) with specialized JEE & NEET preparation.",
    cta: "Campus Facilities",
    ctaLink: "/academics#facilities",
  },
];

export const ABOUT_PARAGRAPHS = [
  "Welcome to Shree Swaminarayan International School (SSIS). Whether you are from any part of the city or state, or from elsewhere in India we aim to help you make the best of educational opportunity that SSIS can offer you.",
  "SSIS is located in a serene environment of Ranip Area in Ahmedabad city and it has earned its name within a short time challenging competitive schools around with the strength of 3000 in 5 years; it commands all the facilities and amenities necessary for top class education anywhere in the country.",
  "Though the climate is warm here, we facilitate our students with a pleasant class environment with AC connections. Being a developing industrial city with a multilingual and multi-regional locality, there is an integrated community that benefits from our presence. Shree Swaminarayan International School is a Govt. recognised school affiliated with S.S.C. board offering Pre-Primary, Primary, and Secondary & Sr. Secondary Education. The Pre-Primary Programme is provided for children in the lower school (3 – 5 years of age). The Primary School consists of students aged 6 – 13 years and the Secondary & Sr. Secondary consists of students from age group 14 to 17 years.",
  "Our school is co-educational, has a diverse community and a low student-teacher ratio. The essential spirit of SSIS is to provide a supportive atmosphere which challenges students to excel.",
  "SSIS offers a global and comprehensive study that nourishes students with skills necessary for good, life-long work habits. We believe in education that stimulates intellectual curiosity, critical thinking and problem solving and allows students to be continually challenged at an appropriate level. The curriculum is structured in a way that enables students to become independent, well-balanced, active and caring members of society.",
];

export const DIRECTORS_MESSAGE = {
  title: "Director’s Message",
  subtitle: "Honorable Managing Trustee",
  paragraphs: [
    "Located on a 2-acre campus in Ranip, in the heart of city Ahmedabad, SSIS (Shree Swaminarayan International School) Ranip (Established in 2012) is yet another initiative to blend India’s rich cultural and spiritual heritage with contemporary education pedagogies and technologies of the west, to offer holistic secondary and Higher Secondary education. SSIS is a constituent institution of Shree Swaminarayan Vishvamangal Gurukul Trust of Saij, Kalol village in Gandhinagar district established in 1992. The trust is completely devoted to the noble cause of spreading education in the region.",
    "The trust also runs several other premier institutions including B.Ed College, PTC College, Pharmacy College, Diploma & Degree Engineering, PG in Engineering, PSM Hospital, Physiotherapy College, and Ayurvedic College & Hospital.",
  ],
  sisterInstitutes: [
    "B.Ed College",
    "PTC College",
    "Pharmacy College",
    "Diploma & Degree Engineering",
    "PG in Engineering",
    "PSM Hospital",
    "Physiotherapy College",
    "Ayurvedic College & Hospital",
  ],
};

export const PRINCIPALS_MESSAGE = {
  title: "Principal’s Message",
  subtitle: "From the Principal's Desk",
  paragraphs: [
    "Welcome to the world of SSIS where education means all-round development of the child. We don’t only teach, we groom the personality of children. No false commitments, we give what we say. We give a lot of importance to making discipline a core value, encouraging students to develop a sense of responsibility through a well-planned academic schedule.",
    "The school has a well-planned curriculum so that co-curricular activities are also given due importance. Finally, I want to assure you that the Management and our team of experienced teachers are doing their best to give your child the required edge to make his/her mark in this global world.",
  ],
};

export const FACULTY_LIST = [
  { sr: 1, subject: "Chemistry", qualification: "M.Sc, B.Ed", post: "Principal", medium: "English Medium" },
  { sr: 2, subject: "A/C & Statistics", qualification: "M.Com, B.Ed", post: "Asst. Teacher", medium: "English Medium" },
  { sr: 3, subject: "Gujarati", qualification: "M.A, B.Ed", post: "Asst. Teacher", medium: "English Medium" },
  { sr: 4, subject: "Physical Training (PT)", qualification: "B.P.Ed, M.Ed", post: "PTI", medium: "English Medium" },
  { sr: 5, subject: "English & SST", qualification: "M.A, B.Ed", post: "Asst. Teacher", medium: "English Medium" },
  { sr: 6, subject: "Science", qualification: "M.Sc, B.Ed", post: "Asst. Teacher", medium: "English Medium" },
  { sr: 7, subject: "Economics & B.A.", qualification: "M.Com, B.Ed", post: "Asst. Teacher", medium: "English Medium" },
  { sr: 8, subject: "Hindi & Sanskrit", qualification: "M.A, B.Ed", post: "Asst. Teacher", medium: "English Medium" },
  { sr: 9, subject: "A/C & Statistics", qualification: "M.Com, B.Ed", post: "Asst. Teacher", medium: "English Medium" },
  { sr: 10, subject: "Maths & Science", qualification: "B.E. & B.Ed (Pursuing)", post: "Asst. Teacher", medium: "English Medium" },
  { sr: 11, subject: "Economics & B.A.", qualification: "M.A., B.Ed", post: "Asst. Teacher", medium: "Gujarati Medium" },
  { sr: 12, subject: "Gujarati", qualification: "M.A., B.Ed", post: "Asst. Teacher", medium: "Gujarati Medium" },
  { sr: 13, subject: "A/C & Statistics", qualification: "M.Com, B.Ed", post: "Asst. Teacher", medium: "Gujarati Medium" },
  { sr: 14, subject: "English", qualification: "M.A., B.Ed", post: "Asst. Teacher", medium: "Gujarati Medium" },
];

export const ACADEMIC_WINGS = [
  { level: "Pre-Primary Programme", ageGroup: "Ages 3 – 5 Years", details: "Play-based foundational learning, curiosity, motor skills, and joyful early socialization." },
  { level: "Primary School (1st to 8th)", ageGroup: "Ages 6 – 13 Years", details: "Strong conceptual foundations across languages, mathematics, science, social studies, and ICT." },
  { level: "CBSE Stream (1st to 9th)", ageGroup: "CBSE Curriculum", details: "National curriculum promoting analytical inquiry, project work, and holistic development." },
  { level: "Secondary School (9th & 10th)", ageGroup: "Ages 14 – 15 Years", details: "Rigorous board exam preparation, weekly testing, lab work, and structured revision." },
  { level: "Higher Secondary (11th & 12th)", ageGroup: "Science & Commerce (Ages 16 – 17)", details: "Dedicated Science (JEE/NEET integrated) and Commerce streams with expert faculty." },
];

export const COURSES_HIGHLIGHTS = [
  "Teachers are well experienced having experience of up to 30 years.",
  "Several faculty members are Gold Medalists in their subjects.",
  "Faculty members with experience setting papers for 12th Board Exams.",
  "Experienced teachers holding advanced qualifications such as PhD, MPhil, and MPharma.",
  "In Day Care we provide guaranteed result-oriented mentoring.",
  "Dedicated Day Care facility for intensive practice of NEET & JEE.",
  "Stress-free education environment designed for conceptual clarity.",
  "Every week SSIS conducts weekly tests of the main subjects.",
  "Comprehensive Unit Tests are conducted every 2 months.",
  "Semester exams are conducted at the end of every 6 months.",
  "For Board students, SSIS conducts practice exams starting from January itself so students can solve maximum papers.",
  "Pre-board exams are conducted to give students an authentic board exam atmosphere before their final board exams.",
  "Practical laboratory work is conducted regularly in school providing hands-on practice.",
  "Teachers actively cooperate with students and solve all their academic doubts.",
];

export const FACILITY_NEEDS = [
  "To illustrate concepts",
  "Provide opportunity for firsthand experience",
  "For experimentation and demonstration",
  "For scientific investigation and discovery",
  "To provide diversity of thoughts",
  "For observation and inquiry",
  "For development of scientific attitudes and skills",
  "To protect the individual and also provide comfort",
];

export const FACILITIES = [
  {
    name: "School Premises (2-Acre Campus)",
    icon: "building",
    description:
      "Located on a 2-acre campus in Ranip, in the heart of Ahmedabad. Our classrooms are designed to let in sufficient natural sunlight and facilitate good ventilation. Special attention is paid to indoor and outdoor activity centers allowing smooth movement of students.",
  },
  {
    name: "AC Smart Classrooms",
    icon: "monitor",
    description:
      "Spacious and fully air-conditioned classrooms that are airy, well-ventilated, and have adequate natural light with broad corridors on each floor. Equipped with ICT, overhead LCD projectors, interactive Promethean flat panels, audio-visual facilities, and age-appropriate furniture. After-class tutorial sessions are conducted to help students clarify doubts.",
  },
  {
    name: "Multi-Purpose Auditorium",
    icon: "sparkles",
    description:
      "Equipped with a wall-sized projector display, modern audio-visual system, sound room, stage, and separate dressing rooms meeting all fire and emergency safety parameters. Hosts school assemblies, drama, guest lectures, seminars, quizzes, parent orientations, and festivals like Garba, Janmashtami, Teacher's Day, Diwali, and Christmas.",
  },
  {
    name: "Science Laboratories",
    icon: "flask",
    description:
      "Dedicated General Science, Mathematics, Physics, Chemistry, and Biology laboratories for Primary, Secondary, and Senior Secondary sections in concurrence with GSEB norms. Every year the latest instruments, specimens, and charts are added for hands-on experimental learning.",
  },
  {
    name: "Computer Labs",
    icon: "cpu",
    description:
      "Air-conditioned computer labs with high-speed broadband connectivity and Microsoft Campus Agreement software (Windows 10, Visual Studio, .NET, MSDN). Maintains a 1:1 machine-to-student ratio with timetabled practical sessions twice a week.",
  },
  {
    name: "School Library",
    icon: "book",
    description:
      "A rich collection of engaging fiction, non-fiction, and picture story books in a peaceful ambience. Every class has a weekly timetabled library lesson teaching library skills, literature appreciation, and research skills, with a 2-week book borrowing program.",
  },
  {
    name: "Three Playgrounds & Sports Courts",
    icon: "trophy",
    description:
      "Three distinct play areas: outdoor sports field, indoor game room (chess, carom, table tennis), and an exclusive shaded kids' sand play area for pre-primary. Includes Basketball court, Volleyball court, Kabaddi ground, plus regular expert coaching in Karate, Yoga, and Kung-fu.",
  },
  {
    name: "AC Dance Hall",
    icon: "sparkles",
    description:
      "Spacious air-conditioned dance hall on the first floor where students attend twice-weekly sessions learning rhythm, flexibility, coordination, and expression across classical, western, contemporary, and folk dance styles.",
  },
  {
    name: "Soundproof Music Room",
    icon: "music",
    description:
      "Soundproof music studio with accomplished music faculty and instruments including guitars, keyboards, and drum sets for both classical and western music. Every child is encouraged to learn at least one musical instrument starting from pre-primary.",
  },
  {
    name: "Medical & First Aid Infirmary",
    icon: "heart",
    description:
      "Well-equipped infirmary providing immediate first-aid under the supervision of a full-time doctor and nurse. Every student undergoes regular termly medical check-ups with individual health records maintained.",
  },
  {
    name: "Safe Transportation Fleet",
    icon: "bus",
    description:
      "Fleet of school buses and vans across all major routes equipped with CCTV surveillance, first-aid kits, fire extinguishers, communication facilities, trained drivers, and bus hostesses, plus a dedicated emergency vehicle.",
  },
  {
    name: "24×7 Security & Safety",
    icon: "shield",
    description:
      "Comprehensive campus security with regular fire and safety drills, periodically inspected fire and security equipment, strict visitor verification, and strong partnership with the local police department.",
  },
  {
    name: "Hygienic School Canteen",
    icon: "coffee",
    description:
      "Spacious canteen operating Monday to Saturday with comfortable seating, healthy low-oil cooking, salads, fruits, yogurts, and hot lunches with changing daily menus. Weekly pest control and strict hygiene protocols with headgear, aprons, and gloves.",
  },
  {
    name: "Creative Art Room",
    icon: "palette",
    description:
      "Dedicated creative space where students explore drawing, painting, eco-friendly idol crafting, rakhi making, diya painting, and visual arts.",
  },
];

export const PARENTS_CORNER = {
  guidelineQuote:
    "In a day, a child spends one-fourth of his time in school and three-fourths of his time with his parents. Understanding this fact, parents should never think that by sending their ward to a good school, they have got rid of their responsibilities. The parents and the teachers work in partnership for the all-round development of a child. It is important to teach students to respect school discipline and be proud of it.",
  regularityPoints: [
    "Parents must ensure that their wards join the school on the notified date at the beginning of the term or after each vacation.",
    "Parents should revise lessons done in class and check that the child completes homework regularly.",
    "Parents should take an active and helpful interest in the activities of the school and ensure timely submission of Assignments and Projects.",
    "The Almanac / Annual Planner provides complete information about exam dates, holidays, and the academic pattern of the child—please check it regularly and stay updated.",
  ],
  ptmSchedule: [
    { sr: "1", event: "Annual Parent Orientation Programme", timing: "Beginning of Academic Term (June) — Friday" },
    { sr: "2", event: "Periodic Test – 1 & PTM (Classes I to V)", timing: "Last Week of July" },
    { sr: "3", event: "Periodic Test – 1 & PTM (Classes VI to IX)", timing: "First Week of August" },
  ],
};

export const STUDENTS_CORNER = {
  rules: [
    "It is compulsory for students to come in proper school uniform every day.",
    "Students must attend school regularly—minimum 80% attendance of working days is mandatory. In case of absence, parents must give prior notice to the school.",
    "No parent is allowed to go directly to the classroom to meet their ward or teacher during school hours.",
    "Always leave school classrooms, labs, and campus areas in a clean and orderly condition after use.",
    "Students must not leave the classroom without the teacher's permission.",
    "Students should strictly follow the healthy food menu prescribed by the school.",
  ],
  timings: [
    {
      group: "Classes 1st to 8th",
      weekdays: "Monday – Friday: 7:00 AM to 12:20 PM",
      saturday: "Saturday: 12:20 PM to 3:30 PM",
    },
    {
      group: "Classes 9th, 10th, 11th & 12th",
      weekdays: "Monday – Friday: 7:00 AM to 12:20 PM",
      saturday: "Saturday: 7:10 AM to 10:40 AM",
    },
  ],
};

export const SCHOOL_NEWS = [
  {
    title: "Exhibition “Aakruti” — The Concept of Creation",
    date: "2nd October (Gandhi Jayanti)",
    description:
      "On Gandhi Jayanti, SSIS organized the grand 'Aakruti' exhibition where students demonstrated logical, technical, and intellectual skills across live projects in Science, Maths, IT, Social Studies, and English. The event received media coverage from Metro Times-News and News 9 India Gujarati with enthusiastic parent participation.",
  },
  {
    title: "7th Annual Function Celebration",
    date: "20th February",
    description:
      "A grand platform for students to showcase their talent in singing, dancing, acting, and anchoring under expert guidance. Graced by eminent dignitaries including Prof. Hiroyuki Sato (Tokyo University, Japan), Cabinet Minister Kunvarji Bavaliya, MLA Shri Bhupendrabhai Patel, MLA Shri Arvindbhai Patel, and Gujarati artist Vijay Suvada.",
  },
  {
    title: "Shakotsav Celebration — “भुक्खे भजन ना होये गोपाला”",
    date: "9th February",
    description:
      "Keeping in mind the famous saying that one cannot worship God on an empty stomach, Shree Swaminarayan Trust organizes 'Shakotsav' every year after three days of Katha, serving traditional delicacies of Brinjal (Aubergine) curry, Millet bread (Rotla), and Kadhi-Khichdi.",
  },
  {
    title: "Republic Day Celebration",
    date: "26th January",
    description:
      "Organized in the presence of our Swamiji and Principal Sir to honor the day the Constitution of India came into effect, featuring flag hoisting and patriotic song and dance performances by students.",
  },
  {
    title: "Independence Day Parade & Awareness",
    date: "15th August",
    description:
      "Celebrated with flag hoisting, the National Anthem, patriotic songs, and a special CBSE student parade highlighting global warming solutions and scientific displays on the mysteries of Black Holes.",
  },
  {
    title: "Annual Sports Day Celebration",
    date: "24th December",
    description:
      "Inaugurated in the presence of Swamiji and Principal Sir with torch-bearing and oath-taking ceremonies to foster sportsmanship, unity, discipline, and physical fitness among students.",
  },
  {
    title: "Digital Learning & Online Webinars",
    date: "Continuous Learning Initiative",
    description:
      "SSIS provides uninterrupted digital classes, educational webinars, and online cultural festival activities so learning never stops under any circumstance.",
  },
];

export const GALLERY_IMAGES = [
  { src: SITE_IMAGES.heroSlide2, alt: "School Campus & Assembly", category: "Campus" },
  { src: SITE_IMAGES.heroSlide3, alt: "Students Learning in Classroom", category: "Academics" },
  { src: SITE_IMAGES.heroSlide4, alt: "Annual Sports Day", category: "Sports" },
  { src: SITE_IMAGES.heroSlide1, alt: "Cultural & Festival Celebrations", category: "Events" },
  { src: SITE_IMAGES.heroSlide5, alt: "Guru Purnima & Sanskar Activities", category: "Culture" },
  { src: SITE_IMAGES.galleryBanner, alt: "SSIS Ranip 2-Acre Campus Building", category: "Campus" },
  { src: SITE_IMAGES.homeAboutPhoto, alt: "Pre-Primary & Primary Students", category: "Students" },
  { src: SITE_IMAGES.homeSportsPhoto, alt: "Morning Prayer & Assembly", category: "Assembly" },
];

export const GALLERY_ALBUMS = [
  "15th August Celebration",
  "Guru Purnima",
  "Janmashtami Celebration",
  "Rathyatra Utsav",
  "English Medium Exhibition & Movie Promotion",
  "School Campus & Ground",
  "International Yoga Day",
  "Parent's Meet & Orientation",
  "Rakhi Day Celebration",
  "Annual Sports Day",
  "KG Students & Activities",
  "Gujarati Medium Classroom",
  "Christmas Celebration",
  "Gujarati Day Celebration",
];

export const VIDEO_GALLERY = [
  {
    id: "mgXxgO869TA",
    title: "SSIS Ranip — Annual Function Highlights I",
    url: "https://www.youtube.com/watch?v=mgXxgO869TA",
    thumbnail: SITE_IMAGES.heroSlide1,
  },
  {
    id: "GBS9CU_3jaI",
    title: "SSIS Ranip — Annual Function Highlights II",
    url: "https://www.youtube.com/watch?v=GBS9CU_3jaI",
    thumbnail: SITE_IMAGES.heroSlide5,
  },
  {
    id: "pgD-b2Oc6oM",
    title: "SSIS Ranip — Cultural Performances & Celebrations",
    url: "https://www.youtube.com/watch?v=pgD-b2Oc6oM",
    thumbnail: SITE_IMAGES.homeAboutPhoto,
  },
];

export const EVENTS_IMPORTANCE = [
  {
    title: "To Develop Emotional Intelligence",
    description:
      "The interaction and conversation elicited by events help students build relationships, understand different perspectives, engage with diverse cultures, and expand their social circle.",
  },
  {
    title: "To Take a Refreshing Break",
    description:
      "All work with no breaks diminishes productivity. Healthy celebration breaks maintain top study performance, increase focus, reduce stress, and help students retain what they learn.",
  },
  {
    title: "To Build Lifelong Relationships",
    description:
      "Participating in on-campus social events enables students to collaborate with peers who share common interests, developing communication, leadership, and teamwork skills.",
  },
];

export const SCHOOL_EVENTS = [
  {
    name: "1. World Environment Day",
    description: "Celebrated with tree plantation drives, speeches on reducing environmental pollution, conserving forests, and gifting saplings to students.",
  },
  {
    name: "2. World Yoga Day",
    description: "Students participate in campus and city-wide yoga sessions led by sports teachers, learning the importance of physical and mental wellbeing.",
  },
  {
    name: "3. Rainy Day Celebration",
    description: "Organized every year for pre-primary children who bring colorful umbrellas and raincoats to enjoy rain dances and music on our campus.",
  },
  {
    name: "4. Guru Purnima Celebration",
    description: "Celebrated in the month of Ashadh with special assemblies, speeches, songs, bhajans, and blessings from Swamiji and Principal Sir honoring teachers and Gurus.",
  },
  {
    name: "5. Friendship Day",
    description: "Celebrated in the first week of August with friendship bands, handmade cards, and activities that strengthen the bond between students and mentors.",
  },
  {
    name: "6. Rakshabandhan Celebration",
    description: "Students across all classes craft handmade rakhis using decorative threads, mirrors, pearls, and flowers, celebrating the bond of protection and harmony.",
  },
  {
    name: "7. Independence Day",
    description: "Features Chief Guest flag hoisting, march-past parades, patriotic dances, speeches, and historical skits remembering India's freedom fighters.",
  },
  {
    name: "8. Janmashtami Celebration",
    description: "Special assembly with Radha-Krishna fancy dress, devotional dances, group songs, and an exciting courtyard Dahi Handi celebration.",
  },
  {
    name: "9. SSIS HAAT (Student Funfair)",
    description: "An entrepreneurial funfair for students, teachers, and parents featuring food stalls, mehandi, craft stalls, and games that teach practical sales and marketing skills.",
  },
  {
    name: "10. Science Exhibition",
    description: "Students aged 10–18 exhibit static and working models in electronics, environment, everyday science, and disaster management to visitors and parents.",
  },
  {
    name: "11. Ganesh Chaturthi Pooja",
    description: "Students craft eco-friendly Ganesha idols, participate in traditional Aarti with Principal Sir and teachers, and perform eco-friendly campus Visarjan.",
  },
  {
    name: "12. Teacher's Day (5th September)",
    description: "Commemorating Dr. Sarvepalli Radhakrishnan's birthday—senior students step into the role of teachers to conduct junior classes alongside cultural games and performances.",
  },
  {
    name: "13. Gandhi Jayanti (2nd October)",
    description: "Special assembly honoring Mahatma Gandhi's philosophy of truth and non-violence with bhajans, poems, and young children dressing up as Bapu.",
  },
  {
    name: "14. Navratri Garba Festival",
    description: "Begins with Maa Durga Aarti followed by vibrant Garba and Dandiya Raas in traditional attire, celebrating the nine forms of Goddess Durga.",
  },
  {
    name: "15. Children's Day (14th November)",
    description: "A joyful day dedicated to students with games, dance parties for junior wings, and inspiring speeches by secondary students.",
  },
  {
    name: "16. Diwali Celebration",
    description: "Competitions in diya painting, lantern making, classroom decoration, and vibrant rangolis celebrating the victory of light over darkness and knowledge over ignorance.",
  },
  {
    name: "17. POGO Channel Interactive Activities",
    description: "Special interactive assembly programs for Classes 1 to 8 encouraging creative learning, quizzes, and fun prizes.",
  },
  {
    name: "18. Christmas Celebration (25th December)",
    description: "Celebrates the spirit of giving with letters to Santa, Christmas tree decorations, handmade gifts, and joyful festivities across the school.",
  },
  {
    name: "19. Girl Child Awareness (Sanitation & Hygiene)",
    description: "Annual health, hygiene, and sanitation awareness workshops conducted with medical experts to empower and educate girl students.",
  },
  {
    name: "20. Kite Festival (Makarsankranti)",
    description: "The campus is decorated as a traditional harvest village while students and teachers fly colorful kites with music and share festive snacks.",
  },
  {
    name: "21. Fireless Cooking Competition",
    description: "An innovative competition for students and parents to prepare nutritious, creative dishes without fire—awarded with medals and certificates.",
  },
  {
    name: "22. Leaders Day",
    description: "Students dress up as iconic national leaders like Mahatma Gandhi, Sardar Vallabhbhai Patel, Jawaharlal Nehru, and Lal Bahadur Shastri and deliver patriotic speeches.",
  },
  {
    name: "23. Charity & Social Welfare Drives",
    description: "Students and parents craft items to raise funds for orphanages, old age homes, and relief funds, visiting elders and learning empathy and real-world values.",
  },
  {
    name: "24. Shakotsav Tradition",
    description: "Inspired by Shreeji Maharaj's historic 1877 Loya village celebration, SSIS hosts a 3-day Katha followed by traditional Brinjal curry, Millet Rotla, and Kadhi-Khichdi.",
  },
  {
    name: "25. Grand Annual Function",
    description: "A flagship cultural extravaganza featuring Ganesha Vandana, drama, Mission Mangal prop dances, and eminent guests like Kirtidan Gadhvi, Vijay Suvada, and Prof. Hiroyuki Sato.",
  },
  {
    name: "26. Holi Celebration",
    description: "Welcoming spring and celebrating the triumph of good over evil with safe, joyful festivities of color, unity, and gratitude.",
  },
];

export const SPORTS_DATA = {
  quote:
    "“It’s not the will to win that matters—everyone has that. It’s the will to prepare to win that matters.”",
  intro:
    "At SSIS, we nurture students so that they show excellence not only in academics but also in sports. Daily physical exercise develops physical strength, emotional fitness, leadership decision-making, tactical discipline, and self-confidence. We provide both supervised coaching by expert trainers and dedicated evening practice sessions.",
  facilities: ["Basketball Court", "Volleyball Court", "Table Tennis Room", "Kabaddi Ground", "Karate & Martial Arts Arena", "Skating Rink Practice"],
  achievements: [
    "6 SSIS students won a total of 12 medals at the Goa Skating Festival – 2020 held in Goa and were selected for the International Skating Competition in Malaysia.",
    "SSIS students won 3 medals (1 Gold Medal and 2 Bronze Medals) at the 28th Shito-Ryu Showakan District Karate Tournament.",
    "Volleyball team of SSIS won the Taluka Level Inter-School Tournament.",
    "Kho-Kho team of SSIS won the Taluka Level Inter-School Tournament.",
    "Kabaddi team of SSIS won the Taluka Level Inter-School Tournament.",
    "Tug of War team of SSIS won the Khel Mahakumbh Championship.",
  ],
  shiningStars: [
    { name: "Shah Suraj", sport: "Swimming", level: "National Level" },
    { name: "Mistry Dhrumil", sport: "Volleyball", level: "State Level" },
    { name: "Yadav Abhishek", sport: "Kabaddi", level: "District Level" },
    { name: "Chaudhary Pramod", sport: "Kabaddi", level: "District Level" },
    { name: "Dabhi Tushar", sport: "Kabaddi, Shotput & 2nd in Javelin Throw", level: "District Level & Khel Mahakumbh" },
    { name: "Vyas Jay", sport: "2nd in Discus Throw", level: "Khel Mahakumbh" },
  ],
};

export const TOURS_DATA = {
  quote:
    "“I hear and I forget, I see and I remember, I do and I understand.”",
  taglines: [
    "Taking time to live life will only inspire your work.",
    "Every experience holds a gift for your growth and awakening.",
  ],
  pillars: [
    { title: "Reinforcement", text: "Reinforces classroom concepts through real-world observation." },
    { title: "Engagement", text: "Turns trips into mobile classrooms with hands-on inquiry and projects." },
    { title: "Socialization", text: "Teaches teamwork, group responsibility, and respect for public spaces." },
    { title: "Exposure", text: "Gives every child the opportunity to explore new places and overcome fears." },
    { title: "Curiosity", text: "Sparks deeper questions about science, history, nature, and professions." },
    { title: "Retention", text: "Visual, lived memories help children retain knowledge for a lifetime." },
  ],
  educationalTrips: [
    {
      place: "ISRO (Indian Space Research Organisation)",
      description:
        "Students visit the space centre where ISRO scientists explain working rocket models, space operations, and satellite technology—inspiring dreams of becoming astronauts and space scientists.",
    },
    {
      place: "Divya Bhaskar Printing Press",
      description:
        "An inside look at how one of India's largest newspapers prints and distributes papers to 1.5 crore households in Gujarat using four-color high-speed automated reel presses.",
    },
    {
      place: "Gujarat Science City, Hebatpur",
      description:
        "Features the IMAX 3D Theatre, Energy Park, Hall of Science, Planet Earth, Life Science Park, and musical fountains—blending scientific discovery with joy.",
    },
    {
      place: "Sabarmati Gandhi Ashram",
      description:
        "Students explore the pre-independence era museum, observe the Charkha spinning wheel, learn Mahatma Gandhi's life values, and bond over traditional childhood games.",
    },
    {
      place: "Adalaj Ni Vav (Historic Stepwell)",
      description:
        "Built in 1499 Descending five stories deep, students study the marvelous Indo-Islamic stone carvings, water conservation heritage, and history of Gujarat.",
    },
    {
      place: "Indroda Nature & Dinosaur Park",
      description:
      "Acquaints students with diverse flora, avian species, wildlife, and environmental conservation in an engaging outdoor setting.",
    },
  ],
  picnicsAndTours: [
    {
      place: "Water Parks (Splash, Ajwa, Gujarat Fun World)",
      description: "Full-day recreational outings featuring wave pools, water slides, and lazy rivers after completing study portions in advance.",
    },
    {
      place: "Theme Parks (Essel World, Imagicaa, Rushivan)",
      description: "Exciting rides and group bonding experiences conducted with comprehensive student safety and teacher supervision.",
    },
    {
      place: "Polo Forest Adventure Trek (Vijaynagar)",
      description: "One-day nature and trekking camp exploring flora and fauna, Sharaneshwar Shiva Temple, Lakhena Na Dera Jain temples, Harnav dam, and an evening resort bonfire.",
    },
    {
      place: "Higher Secondary Resort Retreats (Dev's Camp, Orsang Camp)",
      description: "Stress-free retreats for senior students featuring adventure activities, workshops, bird watching, and mentor bonding.",
    },
    {
      place: "Outstation Tours: Goa, Jodhpur & Jaisalmer",
      description:
        "Multi-day educational and cultural tours—including a 4-day Goa coastal & cruise tour, exploring the Blue City of Jodhpur (Marwar forts & palaces), and the Golden City of Jaisalmer (Thar Desert, Havelis, and traditional Rajasthani hospitality).",
    },
  ],
};


// ─── Centralized Page Hero Intros ───────────────────────────────────────────
export const PAGE_INTROS = {
  about: {
    eyebrow: "About SSIS Ranip",
    title: "Where education means",
    titleHighlight: "all-round development of the child.",
    description:
      "Welcome to Shree Swaminarayan International School (SSIS). Whether you are from any part of the city or state, or from elsewhere in India, we aim to help you make the best of educational opportunity that SSIS can offer you.",
    image: SITE_IMAGES.defaultPageBanner,
  },
  academics: {
    eyebrow: "Academics, Courses & Campus Life",
    title: "Comprehensive education from",
    titleHighlight: "Pre-Primary to JEE & NEET.",
    description:
      "Explore our academic streams, JEE & NEET preparation, 14 state-of-the-art campus facilities, Parent's Corner, Student's Corner, and latest school news.",
    image: SITE_IMAGES.academicsBanner,
  },
  gallery: {
    eyebrow: "Life at SSIS Ranip",
    title: "Gallery, Events, Sports &",
    titleHighlight: "Educational Excursions.",
    description:
      "Explore our campus moments, 26 cultural and academic celebrations, state & national sports champions, and educational trips across India.",
    image: SITE_IMAGES.galleryBanner,
  },
  careers: {
    eyebrow: "Careers at SSIS Ranip",
    title: "Help young minds discover",
    titleHighlight: "what’s possible.",
    description:
      "Join a 3,000+ student school community in Ranip, Ahmedabad built around academic excellence, Sanskars, and all-round development.",
    image: SITE_IMAGES.careersBanner,
  },
  contact: {
    eyebrow: "We’re Here to Help",
    title: "Let’s talk about",
    titleHighlight: "your child’s next step.",
    description:
      "Contact Shree Swaminarayan International School in Ranip, Ahmedabad for admissions enquiries, campus tours, and academic information.",
    image: SITE_IMAGES.contactBanner,
  },
  privacyPolicy: {
    eyebrow: "Legal & Privacy",
    title: "Privacy",
    titleHighlight: "Policy",
    description:
      "How Shree Swaminarayan International School, Ranip collects, uses, and safeguards your information.",
    image: SITE_IMAGES.defaultPageBanner,
  },
  termCondition: {
    eyebrow: "Terms of Use",
    title: "Term &",
    titleHighlight: "Condition",
    description:
      "Website terms and conditions governing the use of ssisranip.com.",
    image: SITE_IMAGES.defaultPageBanner,
  },
  refundCancellation: {
    eyebrow: "Admissions Policy",
    title: "Refund &",
    titleHighlight: "Cancellation",
    description:
      "Guidelines and rules regarding admission cancellation and fee refund.",
    image: SITE_IMAGES.defaultPageBanner,
  },
} as const;

// ─── Homepage Component Content ─────────────────────────────────────────────
export const HERO_STATS = [
  { label: "3,000+ Students", sub: "2-Acre AC Campus" },
  { label: "Est. 2012", sub: "Gurukul Trust (1992)" },
] as const;

export const EXPERIENCE_PILLARS = [
  {
    id: "all-round",
    number: "01",
    iconKey: "book" as const,
    title: "All-Round Development",
    summary: "We believe that a happy child is a successful one.",
    details:
      "We don't only teach—we groom the personality of children in a welcoming, safe, and air-conditioned learning environment where every achievement is celebrated.",
  },
  {
    id: "sanskars",
    number: "02",
    iconKey: "heart" as const,
    title: "Sanskars & Discipline",
    summary: "Blending India's spiritual heritage with modern education.",
    details:
      "Discipline and a sense of responsibility are nurtured as core values through a well-planned academic and co-curricular schedule rooted in Swaminarayan Sanskars.",
  },
  {
    id: "transform",
    number: "03",
    iconKey: "sparkles" as const,
    title: "Teach, Inspire & Transform",
    summary: "Holistic growth guided by faculty with up to 30 years' experience.",
    details:
      "We stress the total development of each child—spiritual, moral, intellectual, social, emotional, and physical—so students thrive with confidence.",
  },
];

export const HOME_FEATURED_NEWS = [
  {
    title: "Exhibition “Aakruti” — The Concept of Creation",
    date: "2nd October (Gandhi Jayanti)",
    summary:
      "Students showcased live projects across Science, Maths, IT, Social Studies, and English with media coverage.",
    description:
      "On Gandhi Jayanti, SSIS organized the grand 'Aakruti' exhibition where students demonstrated logical, technical, and intellectual skills across live projects in Science, Maths, IT, Social Studies, and English. The event received media coverage from Metro Times-News and News 9 India Gujarati with enthusiastic parent participation.",
  },
  {
    title: "7th Annual Function Celebration",
    date: "20th February",
    summary:
      "A grand showcase of singing, dancing, drama, and anchoring graced by eminent national & international guests.",
    description:
      "A grand platform for students to showcase their talent in singing, dancing, acting, and anchoring under expert guidance. Graced by eminent dignitaries including Prof. Hiroyuki Sato (Tokyo University, Japan), Cabinet Minister Kunvarji Bavaliya, MLA Shri Bhupendrabhai Patel, MLA Shri Arvindbhai Patel, and Gujarati artist Vijay Suvada.",
  },
  {
    title: "Shakotsav Celebration — “भुक्खे भजन ना होये गोपाला”",
    date: "9th February",
    summary:
      "Traditional annual Trust celebration after three days of Katha serving Brinjal curry, Millet Rotla, and Kadhi-Khichdi.",
    description:
      "Keeping in mind the famous saying that one cannot worship God on an empty stomach, Shree Swaminarayan Trust organizes 'Shakotsav' every year after three days of Katha, serving traditional delicacies of Brinjal (Aubergine) curry, Millet bread (Rotla), and Kadhi-Khichdi.",
  },
];

export const LIFE_AT_SSIS_SPOTLIGHT = [
  {
    src: SITE_IMAGES.heroSlide2,
    alt: "School Campus & Assembly",
    category: "Campus",
    title: "2-Acre Serene Campus",
    subtitle:
      "Bright, ventilated spaces built for joyful everyday learning in Ranip.",
    albumHref: "/gallery/campus-life",
  },
  {
    src: SITE_IMAGES.heroSlide3,
    alt: "Students Learning in Classroom",
    category: "Academics",
    title: "Interactive Classrooms",
    subtitle:
      "Air-conditioned smart learning rooms inspiring curiosity and confidence.",
    albumHref: "/gallery/academic-exhibitions",
  },
  {
    src: SITE_IMAGES.heroSlide4,
    alt: "Annual Sports Day",
    category: "Sports",
    title: "Sports & Teamwork",
    subtitle:
      "Torch-bearing ceremonies, Khel Mahakumbh spirit, and active play.",
    albumHref: "/gallery/sports-day",
  },
  {
    src: SITE_IMAGES.heroSlide1,
    alt: "Cultural & Festival Celebrations",
    category: "Events",
    title: "26 Annual Celebrations",
    subtitle:
      "From Annual Function and Garba to Shakotsav and Science Exhibitions.",
    albumHref: "/gallery/annual-function",
  },
];

// ─── About Us Stats, Values & Careers Qualities ─────────────────────────────
export const ABOUT_STATS = [
  {
    id: "established",
    label: "Established",
    target: 2012,
    suffix: "",
    useComma: false,
    sub: "In Ranip, Ahmedabad",
    iconKey: "calendar" as const,
  },
  {
    id: "trust-legacy",
    label: "Trust Legacy",
    target: 1992,
    suffix: "",
    useComma: false,
    sub: "Vishvamangal Gurukul Trust",
    iconKey: "landmark" as const,
  },
  {
    id: "students",
    label: "Student Strength",
    target: 3000,
    suffix: "+",
    useComma: true,
    sub: "Earned in 5 Years",
    iconKey: "users" as const,
  },
  {
    id: "campus",
    label: "Campus Area",
    target: 2,
    suffix: " Acres",
    useComma: false,
    sub: "Fully Air-Conditioned Classrooms",
    iconKey: "pin" as const,
  },
];

export const GROWTH_PILLARS = [
  "Spiritual",
  "Moral",
  "Intellectual",
  "Social",
  "Emotional",
  "Physical",
] as const;

export const CAREER_QUALITIES = [
  {
    number: "01",
    iconKey: "heart" as const,
    title: "Care with purpose",
    text: "Help create a respectful, disciplined, and supportive environment where every learner feels valued and inspired.",
  },
  {
    number: "02",
    iconKey: "lightbulb" as const,
    title: "A curious mindset",
    text: "Bring strong subject expertise, fresh teaching ideas, and a genuine commitment to continuous personal growth.",
  },
  {
    number: "03",
    iconKey: "users" as const,
    title: "A team approach",
    text: "Collaborate alongside experienced educators and engaged families to support the all-round growth of every student.",
  },
] as const;
