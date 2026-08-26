import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { INSTITUTE_NAME } from "@/lib/site";
import { images } from "@/lib/images";
import { serviceCategories } from "@/lib/services";

const trainingProgrammes =
  serviceCategories.find((service) => service.id === "training-certification")
    ?.includes ?? [];

export const metadata = {
  title: INSTITUTE_NAME,
  description:
    "The NewMaster Institute of Health & Safety is the professional training arm of NewMaster Health and Safety, delivering practical workplace health and safety programmes.",
};

export default function InstitutePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        title="Institute"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institute" },
        ]}
      />
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label text-navy/70 mb-4">About the Institute</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                {INSTITUTE_NAME}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Institute is NewMaster&apos;s professional training arm. We help organisations
                build practical competence in workplace health, safety, emergency response and
                management system awareness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Training is designed around workplace realities in Uganda and the wider African
                market, with programmes focused on practical skills, clear responsibilities and
                safer day-to-day work.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src={images.institute}
                alt="African employees attending a professional safety training session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="section-label text-navy/70 mb-4">Training Programmes</div>
            <h2 className="text-3xl font-bold text-navy mb-8">
              Practical programmes for modern workplaces
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {trainingProgrammes.map((item) => (
                <div key={item} className="flex items-start gap-2 bg-gray-50 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-navy font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy text-white rounded-2xl p-8 diagonal-pattern">
              <h3 className="text-2xl font-bold mb-3">Corporate Training</h3>
              <p className="text-white/80 leading-relaxed">
                Programmes can be delivered for a specific organisation, site or contractor
                group. Content can be adjusted to industry hazards, shift patterns and internal
                procedures.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy mb-3">Practical Safety Training</h3>
              <p className="text-gray-600 leading-relaxed">
                We emphasise practical skills — first aid, fire response, working at heights,
                confined space awareness and PPE use — so people can apply what they learn at
                work.
              </p>
            </div>
          </div>

          <div>
            <div className="section-label text-navy/70 mb-4">Who We Train</div>
            <h2 className="text-3xl font-bold text-navy mb-4">Workers, supervisors and teams</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed">
              We train employees, supervisors, safety officers, contractors and leadership teams
              across construction, manufacturing, healthcare, hospitality, transport, offices and
              other workplaces. Programmes are selected according to role and risk, not a single
              standard course for everyone.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
