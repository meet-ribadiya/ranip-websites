import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/ui/PageIntro";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/constants";

export const metadata: Metadata = { title: "School Gallery", description: "A look at learning and campus life at Shree Swaminarayan International School, Ranip." };

export default function GalleryPage() {
  const photos = GALLERY_IMAGES.map((photo, index) => { const categoryId = photo.category.toLowerCase(); const categoryAnchor = GALLERY_IMAGES.findIndex((entry) => entry.category === photo.category) === index ? categoryId : undefined; return <figure id={categoryAnchor} key={photo.src} className={`gallery-card ${index === 2 || index === 5 ? "lg:translate-y-8" : ""}`}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" /><figcaption className="gallery-caption">{photo.category}</figcaption></figure>; });
  return (
    <>
      <PageIntro eyebrow="Life at SSIS" title="A little glimpse of school life." description="Learning happens in the questions, the teamwork and the moments students share along the way." image="/banner66-scaled.webp" breadcrumb="Gallery" />
      <section id="photos" className="section-space bg-[#F5F7FA]"><div className="section-container"><SectionHeading eyebrow="Moments from campus" title="The SSIS experience, in pictures" description="Explore the places and activities that make up life at our school." /><div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{photos}</div></div></section>
      <section id="videos" className="section-space bg-white"><div className="section-container grid items-center gap-8 rounded-[2rem] bg-[#10284B] p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow eyebrow-light">Keep exploring</p><h2 className="mt-3 font-serif text-3xl font-semibold">See more of life at SSIS</h2><p className="mt-3 max-w-xl leading-7 text-white/75">Visit our social channels for school updates, campus moments and videos.</p></div><a href="https://www.youtube.com/c/ssisranip" target="_blank" rel="noopener noreferrer" className="btn-primary w-fit">Visit our YouTube <span aria-hidden="true">↗</span></a></div></section>
    </>
  );
}
