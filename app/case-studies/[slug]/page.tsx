import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import CaseStudyDetails from "./CaseStudyDetails";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";

const caseStudies = [
  {
    slug: "project-slug-one",
    title: "[PROJECT TITLE]",
    subtitle: "[Brief subtitle describing the project outcome]",
    description:
      "[Brief description of the project — what challenge the client faced, what NewMaster did, and the outcome achieved.]",
    heroImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop",
    location: "[LOCATION]",
    industry: "Oil & Gas",
    duration: "[DURATION]",
    year: "[YEAR]",
    category: "Workplace Safety",
    client: "[CLIENT NAME]",
    challenge:
      "[Describe the specific workplace health and safety challenge the client was facing — e.g., rising incident rates, regulatory compliance gaps, lack of safety systems, health exposure concerns, or inadequate emergency preparedness.]",
    approach: [
      "[Step 1 — e.g., Conducted comprehensive workplace safety audit across all operational sites]",
      "[Step 2 — e.g., Performed hazard identification and risk assessments for key operational areas]",
      "[Step 3 — e.g., Developed tailored safety management system aligned with regulatory requirements]",
      "[Step 4 — e.g., Delivered customized training programs for employees and leadership]",
      "[Step 5 — e.g., Established safety KPIs and performance monitoring systems]",
    ],
    solution:
      "[Describe the integrated solution NewMaster delivered — the combination of services, systems, training, or programs implemented to address the client's challenges and strengthen their workplace health and safety.]",
    results: [
      {
        metric: "[XX]%",
        label: "[Result description — e.g., Reduction in workplace incidents]",
      },
      {
        metric: "[XX]+",
        label: "[Result description — e.g., Employees trained]",
      },
      {
        metric: "[XX]%",
        label: "[Result description — e.g., Improvement in compliance scores]",
      },
      {
        metric: "[XX]%",
        label: "[Result description — e.g., Reduction in lost time injuries]",
      },
    ],
    testimonial: {
      quote:
        "[Client testimonial about working with NewMaster — describing the impact of the services provided and the experience of the partnership.]",
      author: "[CLIENT CONTACT NAME]",
      role: "[CLIENT CONTACT ROLE]",
      company: "[CLIENT COMPANY NAME]",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Workplace Safety",
      "Risk Assessment",
      "Safety Training",
    ],
  },
  {
    slug: "project-slug-two",
    title: "[PROJECT TITLE]",
    subtitle: "[Brief subtitle describing the project outcome]",
    description:
      "[Brief description of the project — what challenge the client faced, what NewMaster did, and the outcome achieved.]",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    location: "[LOCATION]",
    industry: "Healthcare",
    duration: "[DURATION]",
    year: "[YEAR]",
    category: "Occupational Health",
    client: "[CLIENT NAME]",
    challenge:
      "[Describe the specific occupational health challenge — e.g., need for health surveillance program, medical examination systems, infection prevention, or staff wellness concerns.]",
    approach: [
      "[Step 1]",
      "[Step 2]",
      "[Step 3]",
      "[Step 4]",
      "[Step 5]",
    ],
    solution:
      "[Describe the integrated occupational health solution NewMaster delivered.]",
    results: [
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]+",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
    ],
    testimonial: {
      quote:
        "[Client testimonial about working with NewMaster.]",
      author: "[CLIENT CONTACT NAME]",
      role: "[CLIENT CONTACT ROLE]",
      company: "[CLIENT COMPANY NAME]",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Occupational Health",
      "Health Surveillance",
      "Medical Examinations",
    ],
  },
  {
    slug: "project-slug-three",
    title: "[PROJECT TITLE]",
    subtitle: "[Brief subtitle describing the project outcome]",
    description:
      "[Brief description of the project.]",
    heroImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
    location: "[LOCATION]",
    industry: "Manufacturing",
    duration: "[DURATION]",
    year: "[YEAR]",
    category: "Environmental Health",
    client: "[CLIENT NAME]",
    challenge:
      "[Describe the environmental or industrial hygiene challenge — e.g., noise exposure, air quality, chemical exposure, dust monitoring, or ventilation concerns.]",
    approach: [
      "[Step 1]",
      "[Step 2]",
      "[Step 3]",
      "[Step 4]",
      "[Step 5]",
    ],
    solution:
      "[Describe the environmental health and industrial hygiene solution delivered.]",
    results: [
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
    ],
    testimonial: {
      quote:
        "[Client testimonial.]",
      author: "[CLIENT CONTACT NAME]",
      role: "[CLIENT CONTACT ROLE]",
      company: "[CLIENT COMPANY NAME]",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Environmental Health",
      "Industrial Hygiene",
      "Exposure Assessment",
    ],
  },
  {
    slug: "project-slug-four",
    title: "[PROJECT TITLE]",
    subtitle: "[Brief subtitle describing the project outcome]",
    description:
      "[Brief description of the project.]",
    heroImage:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=600&fit=crop",
    location: "[LOCATION]",
    industry: "Construction",
    duration: "[DURATION]",
    year: "[YEAR]",
    category: "Training & Capacity Building",
    client: "[CLIENT NAME]",
    challenge:
      "[Describe the training or capacity building challenge — e.g., lack of safety competence, high incident rates, need for certified training programs, or workforce skills gaps.]",
    approach: [
      "[Step 1]",
      "[Step 2]",
      "[Step 3]",
      "[Step 4]",
      "[Step 5]",
    ],
    solution:
      "[Describe the training and capacity building solution delivered.]",
    results: [
      {
        metric: "[XX]+",
        label: "[Result description — e.g., Employees trained]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
    ],
    testimonial: {
      quote:
        "[Client testimonial.]",
      author: "[CLIENT CONTACT NAME]",
      role: "[CLIENT CONTACT ROLE]",
      company: "[CLIENT COMPANY NAME]",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Training & Capacity Building",
      "Safety Training",
      "Corporate Training",
    ],
  },
  {
    slug: "project-slug-five",
    title: "[PROJECT TITLE]",
    subtitle: "[Brief subtitle describing the project outcome]",
    description:
      "[Brief description of the project.]",
    heroImage:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=600&fit=crop",
    location: "[LOCATION]",
    industry: "Mining",
    duration: "[DURATION]",
    year: "[YEAR]",
    category: "Workplace Safety",
    client: "[CLIENT NAME]",
    challenge:
      "[Describe the workplace safety challenge.]",
    approach: [
      "[Step 1]",
      "[Step 2]",
      "[Step 3]",
      "[Step 4]",
      "[Step 5]",
    ],
    solution:
      "[Describe the solution delivered.]",
    results: [
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
    ],
    testimonial: {
      quote:
        "[Client testimonial.]",
      author: "[CLIENT CONTACT NAME]",
      role: "[CLIENT CONTACT ROLE]",
      company: "[CLIENT COMPANY NAME]",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Workplace Safety",
      "Safety Audits",
      "Risk Management",
    ],
  },
  {
    slug: "project-slug-six",
    title: "[PROJECT TITLE]",
    subtitle: "[Brief subtitle describing the project outcome]",
    description:
      "[Brief description of the project.]",
    heroImage:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&h=600&fit=crop",
    location: "[LOCATION]",
    industry: "Government",
    duration: "[DURATION]",
    year: "[YEAR]",
    category: "Regulatory Compliance",
    client: "[CLIENT NAME]",
    challenge:
      "[Describe the compliance challenge — e.g., regulatory gaps, audit preparation, policy development, or legal register requirements.]",
    approach: [
      "[Step 1]",
      "[Step 2]",
      "[Step 3]",
      "[Step 4]",
      "[Step 5]",
    ],
    solution:
      "[Describe the regulatory compliance solution delivered.]",
    results: [
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
      {
        metric: "[XX]%",
        label: "[Result description]",
      },
    ],
    testimonial: {
      quote:
        "[Client testimonial.]",
      author: "[CLIENT CONTACT NAME]",
      role: "[CLIENT CONTACT ROLE]",
      company: "[CLIENT COMPANY NAME]",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    relatedServices: [
      "Regulatory Compliance",
      "Compliance Audits",
      "Policy Development",
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found | NewMaster Occupational Health & Safety",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${study.title} | NewMaster Occupational Health & Safety Case Study`,
    description: study.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((s) => s.slug !== slug)
    .slice(0, 2)
    .map((study) => ({
      slug: study.slug,
      title: study.title,
      description: study.description,
      image: study.heroImage,
      category: study.category,
    }));

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CaseStudyDetails study={study} />
      {relatedStudies.length > 0 && (
        <RelatedCaseStudies studies={relatedStudies} />
      )}
      <Newsletter />
      <Footer />
    </main>
  );
}