import { GALLERY_MEDIA, type GalleryMediaKey } from "./images";

export type GalleryCategory =
  | "All"
  | "Cultural Events"
  | "Sports"
  | "Celebrations"
  | "Campus Life"
  | "Academic Activities";

export type GalleryPhotoItem = {
  id: string;
  mediaKey: GalleryMediaKey;
  src: string;
  alt: string;
  caption: string;
};

export type GalleryAlbum = {
  id: string;
  slug: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  eventTag: string;
  shortDescription: string;
  coverImage: string;
  secondaryCovers: [string, string];
  featured?: boolean;
  images: GalleryPhotoItem[];
};

export const GALLERY_CATEGORIES: readonly GalleryCategory[] = [
  "All",
  "Cultural Events",
  "Sports",
  "Celebrations",
  "Campus Life",
  "Academic Activities",
] as const;

type PhotoSeed = {
  mediaKey: GalleryMediaKey;
  caption: string;
};

function createAlbumPhotos(
  albumSlug: string,
  albumTitle: string,
  seeds: PhotoSeed[]
): GalleryPhotoItem[] {
  return seeds.map((seed, index) => {
    const asset = GALLERY_MEDIA[seed.mediaKey];
    return {
      id: `${albumSlug}-photo-${index + 1}`,
      mediaKey: seed.mediaKey,
      src: asset.src,
      alt: `${albumTitle} — ${seed.caption}`,
      caption: seed.caption,
    };
  });
}

export const GALLERY_ALBUMS_DATA: GalleryAlbum[] = [
  {
    id: "album-annual-function",
    slug: "annual-function",
    title: "Annual Function Celebration",
    category: "Cultural Events",
    eventTag: "Flagship Cultural Evening",
    shortDescription:
      "Student performances in classical dance, drama, music, and anchoring on the grand annual stage.",
    coverImage: GALLERY_MEDIA.culturalEvents.src,
    secondaryCovers: [
      GALLERY_MEDIA.sanskarCulture.src,
      GALLERY_MEDIA.campusMain.src,
    ],
    featured: true,
    images: createAlbumPhotos("annual-function", "Annual Function Celebration", [
      { mediaKey: "culturalEvents", caption: "Grand stage opening & Ganesha Vandana" },
      { mediaKey: "sanskarCulture", caption: "Traditional devotional presentation by students" },
      { mediaKey: "campusMain", caption: "Welcoming dignitaries, parents & guests" },
      { mediaKey: "happyStudents", caption: "Pre-primary little stars cultural performance" },
      { mediaKey: "morningAssembly", caption: "Lamp lighting & blessing ceremony with Swamiji" },
      { mediaKey: "classroomLearning", caption: "Backstage preparation & rehearsal moments" },
      { mediaKey: "sportsDay", caption: "Energetic thematic & prop dance showcase" },
      { mediaKey: "campusBuilding", caption: "Illuminated SSIS Ranip campus venue" },
      { mediaKey: "culturalEvents", caption: "Patriotic group dance & choreography" },
      { mediaKey: "sanskarCulture", caption: "Classical folk & musical ensemble" },
      { mediaKey: "happyStudents", caption: "Joyful primary wing stage performance" },
      { mediaKey: "campusMain", caption: "Audience applause & proud parent moments" },
      { mediaKey: "morningAssembly", caption: "Honouring student achievers & mentors" },
      { mediaKey: "classroomLearning", caption: "Student anchors hosting the evening" },
      { mediaKey: "culturalEvents", caption: "Grand finale performance by senior students" },
      { mediaKey: "campusBuilding", caption: "Campus evening ambiance & celebration" },
      { mediaKey: "sanskarCulture", caption: "Traditional attire & cultural expression" },
      { mediaKey: "sportsDay", caption: "Synchronized group formation on stage" },
      { mediaKey: "happyStudents", caption: "Smiling performers after their act" },
      { mediaKey: "campusMain", caption: "Memorable group photograph at closing" },
    ]),
  },
  {
    id: "album-sports-day",
    slug: "sports-day",
    title: "Annual Sports Day & Athletics",
    category: "Sports",
    eventTag: "Sports & Khel Mahakumbh",
    shortDescription:
      "Torch-bearing ceremonies, track events, Kabaddi, Volleyball, and team spirit across our 3 play areas.",
    coverImage: GALLERY_MEDIA.sportsDay.src,
    secondaryCovers: [
      GALLERY_MEDIA.morningAssembly.src,
      GALLERY_MEDIA.campusBuilding.src,
    ],
    images: createAlbumPhotos("sports-day", "Annual Sports Day & Athletics", [
      { mediaKey: "sportsDay", caption: "Opening march-past & torch-bearing ceremony" },
      { mediaKey: "morningAssembly", caption: "Sportsmanship oath-taking with Principal Sir" },
      { mediaKey: "campusBuilding", caption: "SSIS Ranip outdoor sports ground & courts" },
      { mediaKey: "happyStudents", caption: "Pre-primary & junior fun race events" },
      { mediaKey: "campusMain", caption: "House teams cheering on the field" },
      { mediaKey: "sportsDay", caption: "Track sprints & relay competitions" },
      { mediaKey: "culturalEvents", caption: "Yoga, Karate & physical drill display" },
      { mediaKey: "classroomLearning", caption: "Indoor games — Chess, Carom & Table Tennis" },
      { mediaKey: "sportsDay", caption: "Volleyball & Kabaddi inter-house matches" },
      { mediaKey: "morningAssembly", caption: "Medal distribution & trophy presentation" },
      { mediaKey: "happyStudents", caption: "Junior athletes celebrating teamwork" },
      { mediaKey: "campusMain", caption: "Supervised coaching & warm-up sessions" },
      { mediaKey: "campusBuilding", caption: "Evening practice on the 2-acre campus" },
      { mediaKey: "sportsDay", caption: "Tug of War & athletic strength events" },
      { mediaKey: "sanskarCulture", caption: "Discipline, unity & team leadership" },
      { mediaKey: "morningAssembly", caption: "Honouring District, State & National stars" },
      { mediaKey: "happyStudents", caption: "Active play in the shaded kids zone" },
      { mediaKey: "sportsDay", caption: "Closing parade & group celebration" },
    ]),
  },
  {
    id: "album-cultural-festivals",
    slug: "cultural-festivals",
    title: "Festivals & Cultural Celebrations",
    category: "Celebrations",
    eventTag: "Navratri · Janmashtami · Guru Purnima",
    shortDescription:
      "Vibrant campus celebrations of Navratri Garba, Janmashtami Dahi Handi, Guru Purnima, Diwali, and Shakotsav.",
    coverImage: GALLERY_MEDIA.sanskarCulture.src,
    secondaryCovers: [
      GALLERY_MEDIA.culturalEvents.src,
      GALLERY_MEDIA.happyStudents.src,
    ],
    images: createAlbumPhotos("cultural-festivals", "Festivals & Cultural Celebrations", [
      { mediaKey: "sanskarCulture", caption: "Guru Purnima special assembly & bhajans" },
      { mediaKey: "culturalEvents", caption: "Navratri Garba & Dandiya Raas in traditional attire" },
      { mediaKey: "happyStudents", caption: "Janmashtami Radha-Krishna fancy dress & Dahi Handi" },
      { mediaKey: "morningAssembly", caption: "Morning prayer & festival blessings" },
      { mediaKey: "campusMain", caption: "Shakotsav traditional community feast & Katha" },
      { mediaKey: "classroomLearning", caption: "Diwali diya painting & classroom rangoli" },
      { mediaKey: "sanskarCulture", caption: "Eco-friendly Ganesh Chaturthi idol crafting" },
      { mediaKey: "happyStudents", caption: "Rakshabandhan handmade rakhi competition" },
      { mediaKey: "culturalEvents", caption: "Christmas tree decoration & spirit of giving" },
      { mediaKey: "campusBuilding", caption: "Festively decorated SSIS Ranip courtyard" },
      { mediaKey: "sportsDay", caption: "Makarsankranti Kite Festival on campus" },
      { mediaKey: "sanskarCulture", caption: "Rathyatra Utsav devotion & student participation" },
      { mediaKey: "morningAssembly", caption: "Teacher's Day & Gandhi Jayanti tributes" },
      { mediaKey: "happyStudents", caption: "Rainy Day & Children's Day joyful activities" },
      { mediaKey: "culturalEvents", caption: "SSIS HAAT student funfair & stalls" },
      { mediaKey: "classroomLearning", caption: "Fireless cooking creative competition" },
      { mediaKey: "campusMain", caption: "Students & teachers celebrating together" },
      { mediaKey: "sanskarCulture", caption: "Holi spring celebration of unity" },
      { mediaKey: "happyStudents", caption: "Joyful memories with classmates & mentors" },
      { mediaKey: "campusBuilding", caption: "Traditional values in modern campus life" },
    ]),
  },
  {
    id: "album-national-celebrations",
    slug: "national-celebrations",
    title: "Independence & Republic Day",
    category: "Celebrations",
    eventTag: "15th August & 26th January",
    shortDescription:
      "Flag hoisting, National Anthem, march-past parades, and patriotic student performances honouring India.",
    coverImage: GALLERY_MEDIA.campusMain.src,
    secondaryCovers: [
      GALLERY_MEDIA.morningAssembly.src,
      GALLERY_MEDIA.sportsDay.src,
    ],
    images: createAlbumPhotos("national-celebrations", "Independence & Republic Day", [
      { mediaKey: "campusMain", caption: "Tricolour flag hoisting in the presence of Swamiji" },
      { mediaKey: "morningAssembly", caption: "Collective National Anthem & salute" },
      { mediaKey: "sportsDay", caption: "Disciplined student march-past parade" },
      { mediaKey: "culturalEvents", caption: "Patriotic songs & historical drama acts" },
      { mediaKey: "happyStudents", caption: "Leaders Day dress-up as national icons" },
      { mediaKey: "campusBuilding", caption: "Patriotic campus decor & tricolour ribbons" },
      { mediaKey: "sanskarCulture", caption: "Inspiring speeches on the Indian Constitution" },
      { mediaKey: "classroomLearning", caption: "Awareness banners on climate & science" },
      { mediaKey: "campusMain", caption: "Students saluting freedom fighters" },
      { mediaKey: "culturalEvents", caption: "Rhythmic patriotic group dance" },
      { mediaKey: "morningAssembly", caption: "Principal Sir addressing the school gathering" },
      { mediaKey: "happyStudents", caption: "Primary wing children waving the tricolour" },
      { mediaKey: "sportsDay", caption: "Synchronized parade formation on campus" },
      { mediaKey: "sanskarCulture", caption: "Gandhi Jayanti truth & non-violence assembly" },
      { mediaKey: "campusBuilding", caption: "Morning sunlight over the Ranip campus" },
      { mediaKey: "classroomLearning", caption: "Poster & essay tributes by students" },
      { mediaKey: "campusMain", caption: "Unity in diversity across all wings" },
      { mediaKey: "morningAssembly", caption: "Closing sweets distribution & smiles" },
    ]),
  },
  {
    id: "album-campus-life",
    slug: "campus-life",
    title: "Campus Life & Classrooms",
    category: "Campus Life",
    eventTag: "2-Acre AC Ranip Campus",
    shortDescription:
      "Everyday learning inside air-conditioned smart classrooms, labs, library, music studio, and morning assemblies.",
    coverImage: GALLERY_MEDIA.campusBuilding.src,
    secondaryCovers: [
      GALLERY_MEDIA.classroomLearning.src,
      GALLERY_MEDIA.happyStudents.src,
    ],
    images: createAlbumPhotos("campus-life", "Campus Life & Classrooms", [
      { mediaKey: "campusBuilding", caption: "2-acre serene SSIS Ranip school premises" },
      { mediaKey: "classroomLearning", caption: "Air-conditioned smart classroom with ICT" },
      { mediaKey: "happyStudents", caption: "Happy pre-primary learners discovering together" },
      { mediaKey: "morningAssembly", caption: "Peaceful morning prayer & daily reflection" },
      { mediaKey: "campusMain", caption: "Broad airy corridors & sunlit study spaces" },
      { mediaKey: "classroomLearning", caption: "Interactive teacher-student mentorship" },
      { mediaKey: "sanskarCulture", caption: "Values, discipline & respectful school culture" },
      { mediaKey: "sportsDay", caption: "Active break time & outdoor play" },
      { mediaKey: "happyStudents", caption: "Collaborative group projects & peer learning" },
      { mediaKey: "campusBuilding", caption: "Safe, CCTV-monitored school campus" },
      { mediaKey: "culturalEvents", caption: "Multi-purpose auditorium activities" },
      { mediaKey: "classroomLearning", caption: "Focused board & competitive exam preparation" },
      { mediaKey: "morningAssembly", caption: "School-wide announcements & recognitions" },
      { mediaKey: "campusMain", caption: "Parent-teacher meetings & community bond" },
      { mediaKey: "happyStudents", caption: "Creative art, music & dance sessions" },
      { mediaKey: "campusBuilding", caption: "Dedicated computer & science laboratory wing" },
      { mediaKey: "sanskarCulture", caption: "Library reading hours & curiosity" },
      { mediaKey: "classroomLearning", caption: "English & Gujarati medium learning streams" },
      { mediaKey: "sportsDay", caption: "Healthy routines & physical wellness" },
      { mediaKey: "campusMain", caption: "A welcoming place to learn, belong & grow" },
    ]),
  },
  {
    id: "album-academic-exhibitions",
    slug: "academic-exhibitions",
    title: "Aakruti Exhibition & Activities",
    category: "Academic Activities",
    eventTag: "Science, Maths, IT & Excursions",
    shortDescription:
      "Hands-on working models at Exhibition 'Aakruti', science labs, and educational trips to ISRO & Science City.",
    coverImage: GALLERY_MEDIA.classroomLearning.src,
    secondaryCovers: [
      GALLERY_MEDIA.happyStudents.src,
      GALLERY_MEDIA.campusMain.src,
    ],
    images: createAlbumPhotos("academic-exhibitions", "Aakruti Exhibition & Activities", [
      { mediaKey: "classroomLearning", caption: "Exhibition 'Aakruti' — live Science & Maths models" },
      { mediaKey: "happyStudents", caption: "Young innovators explaining working projects" },
      { mediaKey: "campusMain", caption: "Parents & visitors touring exhibition zones" },
      { mediaKey: "campusBuilding", caption: "Hands-on Physics, Chemistry & Biology lab sessions" },
      { mediaKey: "culturalEvents", caption: "Creative Social Studies & English displays" },
      { mediaKey: "morningAssembly", caption: "Awarding best student project teams" },
      { mediaKey: "classroomLearning", caption: "IT, computer lab & digital learning demos" },
      { mediaKey: "sanskarCulture", caption: "Environmental conservation & tree plantation models" },
      { mediaKey: "happyStudents", caption: "Curiosity-driven learning for primary students" },
      { mediaKey: "sportsDay", caption: "Outdoor observation & nature park excursions" },
      { mediaKey: "campusMain", caption: "Media interaction & student presentations" },
      { mediaKey: "classroomLearning", caption: "Electronics & disaster management working models" },
      { mediaKey: "campusBuilding", caption: "Science City & ISRO educational trip inspiration" },
      { mediaKey: "morningAssembly", caption: "Quizzes, recitations & academic seminars" },
      { mediaKey: "happyStudents", caption: "Teamwork & problem-solving in action" },
      { mediaKey: "culturalEvents", caption: "Celebrating creativity across every grade" },
    ]),
  },
];

export function getAllAlbumSlugs(): string[] {
  return GALLERY_ALBUMS_DATA.map((album) => album.slug);
}

export function getAlbumBySlug(slug: string): GalleryAlbum | undefined {
  return GALLERY_ALBUMS_DATA.find((album) => album.slug === slug);
}

export function getFeaturedAlbum(): GalleryAlbum {
  return (
    GALLERY_ALBUMS_DATA.find((album) => album.featured) ??
    GALLERY_ALBUMS_DATA[0]
  );
}
