import { SITE_IMAGES } from "@/lib/constants";

export type GalleryMediaKey =
  | "campusMain"
  | "campusBuilding"
  | "classroomLearning"
  | "sportsDay"
  | "culturalEvents"
  | "sanskarCulture"
  | "happyStudents"
  | "morningAssembly";

export type GalleryMediaAsset = {
  key: GalleryMediaKey;
  src: string;
  defaultAlt: string;
  subject: string;
};

// Centralized media registry referencing verified SSIS Ranip Cloudinary assets.
// Replace or add image URLs here (or in SITE_IMAGES) to update all albums automatically.
export const GALLERY_MEDIA: Record<GalleryMediaKey, GalleryMediaAsset> = {
  campusMain: {
    key: "campusMain",
    src: SITE_IMAGES.heroSlide2,
    defaultAlt: "SSIS Ranip Campus & Student Gathering",
    subject: "Campus & Assembly",
  },
  campusBuilding: {
    key: "campusBuilding",
    src: SITE_IMAGES.galleryBanner,
    defaultAlt: "SSIS Ranip 2-Acre School Campus Building",
    subject: "School Premises",
  },
  classroomLearning: {
    key: "classroomLearning",
    src: SITE_IMAGES.aboutStoryPhoto,
    defaultAlt: "Students Engaged in Interactive Classroom Learning",
    subject: "Classroom & Academics",
  },
  sportsDay: {
    key: "sportsDay",
    src: SITE_IMAGES.academicsBanner,
    defaultAlt: "Annual Sports Day & Athletic Activities at SSIS Ranip",
    subject: "Sports & Athletics",
  },
  culturalEvents: {
    key: "culturalEvents",
    src: SITE_IMAGES.careersBanner,
    defaultAlt: "Cultural & Annual Function Celebrations at SSIS Ranip",
    subject: "Cultural Celebration",
  },
  sanskarCulture: {
    key: "sanskarCulture",
    src: SITE_IMAGES.heroSlide5,
    defaultAlt: "Guru Purnima & Traditional Sanskar Activities",
    subject: "Tradition & Sanskars",
  },
  happyStudents: {
    key: "happyStudents",
    src: SITE_IMAGES.homeAboutPhoto,
    defaultAlt: "Pre-Primary & Primary Students Learning Together",
    subject: "Student Life",
  },
  morningAssembly: {
    key: "morningAssembly",
    src: SITE_IMAGES.homeSportsPhoto,
    defaultAlt: "Students Gathered for Morning Prayer & School Reflection",
    subject: "Assembly & Prayer",
  },
};
