import Image from "next/image";
import { images } from "@/lib/images";
import { getTeamMembers, isSanityCdnImageUrl, sanityImageUrl } from "@/lib/sanity";

const disciplines = [
  {
    title: "Occupational Health Professionals",
    description:
      "Practitioners supporting medical examinations, fitness-to-work assessments, surveillance and occupational medical reporting.",
    image: images.medicalPros,
  },
  {
    title: "Safety & Environmental Consultants",
    description:
      "Advisers who assess workplace risk, support audits, inspections and environmental health practice.",
    image: images.consultants,
  },
  {
    title: "Medical Professionals",
    description:
      "Clinicians supporting workplace medical care, screening, vaccination programmes and on-site Medical Clinics.",
    image: images.occupationalHealth,
  },
  {
    title: "Training Facilitators",
    description:
      "Facilitators delivering practical programmes through the NewMaster Institute of Health & Safety.",
    image: images.trainers,
  },
];

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function Team() {
  const teamMembers = await getTeamMembers();

  return (
    <section id="team" className="relative bg-white pb-16 sm:pb-16 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 dotted-pattern opacity-30 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="section-label text-navy/70 text-sm sm:text-base">
            Our Professional Team
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            <span className="text-navy">Disciplines that work</span>{" "}
            <span className="text-orange-500 italic">together</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            NewMaster Health and Safety brings together professionals across occupational health,
            medical practice, safety and environmental consulting, and training. This
            multidisciplinary approach helps connect clinical, technical and practical workplace
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
          {disciplines.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                />
              </div>
              <div className="p-5 sm:p-6 flex-grow">
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 pt-12 sm:pt-16 border-t border-navy/10">
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-4">
            <div className="section-label text-navy/70 text-sm sm:text-base">Meet the Team</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy">
              The people behind the expertise
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our team brings clinical insight, technical knowledge and a shared commitment to
              healthier, safer workplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.length ? teamMembers.map((member) => {
              const imageUrl = sanityImageUrl(member.photo);
              const bypassImageOptimizer = isSanityCdnImageUrl(imageUrl);

              return (
                <article
                  key={member._id}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-navy/5">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={`${member.name}, ${member.role}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                        unoptimized={bypassImageOptimizer}
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={`Profile placeholder for ${member.name}`}
                        className="flex h-full items-center justify-center bg-navy text-4xl font-bold tracking-wider text-white"
                      >
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 flex-grow">
                    <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-2">
                      {member.role}
                    </p>
                    <h3 className="text-xl font-bold text-navy mb-3">{member.name}</h3>
                    {member.bio && <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-wrap">{member.bio}</p>}
                  </div>
                </article>
              );
            }) : (
              <p className="text-sm leading-relaxed text-gray-600 sm:col-span-2 sm:text-base lg:col-span-3 xl:col-span-4">
                Our multidisciplinary team is available to support your workplace health and safety needs.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
