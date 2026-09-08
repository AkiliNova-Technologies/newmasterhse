import {
  GraduationCap,
  Layers,
  ShoppingBag,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { images } from "@/lib/images";
import { INSTITUTE_NAME } from "@/lib/site";

export type ProgrammeSection = {
  kind: "intro" | "items" | "cards" | "prose";
  label?: string;
  title?: string;
  description?: string | string[];
  items?: string[];
  image?: string;
  imageAlt?: string;
  cards?: {
    title: string;
    description: string;
    variant: "navy" | "orange";
  }[];
};

export type Programme = {
  id: string;
  slug: string;
  title: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerImage: string;
  bannerImageAlt: string;
  description: string;
  image?: string;
  imageAlt?: string;
  icon: LucideIcon;
  /** Body sections rendered by ProgrammeDetail. Optional for programmes with a bespoke page body (e.g. Institute). */
  sections?: ProgrammeSection[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    primaryExternal?: boolean;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

/**
 * Centralised programme data for the Programmes section.
 *
 * External platform URLs (e.g. a booking platform, shop or portal) are not yet
 * configured. When a real destination is supplied, set `primaryExternal: true`
 * and point `primaryHref` at the platform URL — the CTA then renders as an
 * external link. Until then, CTAs route to internal destinations on purpose so users are
 * never sent to placeholder URLs.
 */
export const programmes: Programme[] = [
  {
    id: "institute",
    slug: "institute",
    title: INSTITUTE_NAME,
    bannerTitle: "Institute",
    bannerDescription:
      "Practical workplace health and safety training for workers, supervisors and organisational teams.",
    bannerImage: "/images/banners/institute-training.jpg",
    bannerImageAlt: "Employees taking part in professional workplace training",
    description:
      "Practical workplace health, safety and environmental training delivered by the NewMaster Institute of Health & Safety.",
    icon: GraduationCap,
    cta: {
      title: "Build your team's safety competence",
      description:
        "Discuss your training needs with our team and we will help you identify the practical programmes that fit your workplace, roles and risks.",
      primaryLabel: "Discuss Training Needs",
      primaryHref: "/contact",
      secondaryLabel: "Back to Programmes",
      secondaryHref: "/programmes",
    },
  },
  {
    id: "st-atanansi-occupational-medical-clinic",
    slug: "st-atanansi-occupational-medical-clinic",
    title: "St Atanansi Occupational Medical Clinic",
    bannerTitle: "St Atanansi Occupational Medical Clinic",
    bannerDescription:
      "Occupational and workplace health services delivered as a programme area within NewMaster Health and Safety.",
    bannerImage: "/images/banners/specialised-medical-support.jpg",
    bannerImageAlt:
      "Medical professional providing occupational health support",
    description:
      "Occupational medical clinic providing clinical health services and workplace medical support.",
    image: images.medicalClinic,
    imageAlt:
      "Occupational health professional at the St Atanansi clinic",
    icon: Stethoscope,
    sections: [
      {
        kind: "intro",
        label: "About the Clinic",
        title: "St Atanansi Occupational Medical Clinic",
        description: [
          "St Atanansi Occupational Medical Clinic is a programme area within the NewMaster Health and Safety ecosystem, focused on occupational and workplace health services.",
          "Support focuses on medical examinations, fitness-to-work assessments, health surveillance, workplace screening and occupational medical reporting — helping organisations protect employee health at every stage of employment.",
        ],
        image: images.medicalClinic,
        imageAlt:
          "Occupational health professional at the St Atanansi clinic",
      },
      {
        kind: "items",
        label: "Occupational Medical Services",
        title: "Workplace health support from examination to reporting",
        items: [
          "Pre-employment medical examinations",
          "Periodic medical examinations",
          "Exit medical examinations",
          "Fitness-to-work assessments",
          "Return-to-work assessments",
          "Health surveillance",
          "Workplace medical screening",
          "Occupational medical reports",
          "Health risk assessments",
        ],
      },
      {
        kind: "items",
        label: "Screening and Vaccination Support",
        title: "Assessment, investigation and prevention",
        items: [
          "Audiometry",
          "Vision screening",
          "Spirometry",
          "Laboratory investigations",
          "Respirator fit testing",
          "Vaccination programmes",
        ],
      },
      {
        kind: "cards",
        label: "How We Support Workplaces",
        title: "Practical occupational health guidance",
        cards: [
          {
            title: "Workplace Health Guidance",
            description:
              "Clinic support helps employers understand occupational health findings, act on recommendations and strengthen preventive health measures in the workplace.",
            variant: "navy",
          },
          {
            title: "Preventive Occupational Health",
            description:
              "Prevention-focused support that complements workplace safety programmes, helping identify health risks early through screening, surveillance and medical assessment.",
            variant: "orange",
          },
        ],
      },
      {
        kind: "prose",
        label: "Who We Support",
        title: "Organisations and workforces",
        description:
          "Organisations across construction, manufacturing, healthcare, hospitality, transport and corporate workplaces that need occupational medical support for their employees.",
      },
    ],
    cta: {
      title: "Occupational health for your workforce",
      description:
        "Enquire about occupational medical services for your organisation and our team will help you identify the support your workplace needs.",
      primaryLabel: "Enquire About Clinic Services",
      primaryHref: "/contact",
      secondaryLabel: "Explore Occupational Health Services",
      secondaryHref: "/services#occupational-health",
    },
  },
  {
    id: "flavia",
    slug: "flavia",
    title: "Flavia",
    bannerTitle: "Flavia",
    bannerDescription:
      "A programme area operated within the NewMaster Health and Safety ecosystem.",
    bannerImage: "/images/banners/services-safety-professional.jpg",
    bannerImageAlt: "NewMaster Health and Safety professionals at work",
    description:
      "One of the programme areas operated within NewMaster Health and Safety.",
    icon: Layers,
    // TODO: Replace the placeholder copy below with approved programme
    // content once NewMaster Health and Safety supplies Flavia's official
    // description, purpose and any platform destination.
    sections: [
      {
        kind: "intro",
        label: "About Flavia",
        title: "Flavia",
        description:
          "Flavia is one of the programme areas operated by NewMaster Health and Safety.",
      },
      {
        kind: "prose",
        label: "Programme Information",
        title: "Further details coming soon",
        description:
          "Detailed information about this programme is being prepared. Please check back soon, or contact our team for more information.",
      },
    ],
    cta: {
      title: "Learn more about Flavia",
      description:
        "Contact our team for information about this programme and how it operates within NewMaster Health and Safety.",
      primaryLabel: "Talk to Our Team",
      primaryHref: "/contact",
      secondaryLabel: "Back to Programmes",
      secondaryHref: "/programmes",
    },
  },
  {
    id: "safety-shop",
    slug: "safety-shop",
    title: "Safety Shop",
    bannerTitle: "Safety Shop",
    bannerDescription:
      "Access to health and safety products, equipment and supplies associated with NewMaster Health and Safety.",
    bannerImage: "/images/banners/services-safety-professional.jpg",
    bannerImageAlt: "NewMaster Health and Safety workplace safety support",
    description: "Workplace safety equipment and resources.",
    image: images.safetyShop,
    imageAlt: "Personal protective equipment and safety products",
    icon: ShoppingBag,
    sections: [
      {
        kind: "intro",
        label: "About Safety Shop",
        title: "Safety Shop",
        description: [
          "Safety Shop is a NewMaster Health and Safety programme providing access to health and safety products, equipment and supplies.",
          "Products support the safety equipment and supplies that organisations need for workplace health and safety — from personal protective equipment to first aid and fire safety equipment.",
        ],
        image: images.safetyShop,
        imageAlt: "Personal protective equipment and safety products",
      },
      {
        kind: "items",
        label: "Product Areas",
        title: "Safety equipment and supplies",
        items: [
          "Safety equipment",
          "First aid supplies",
          "Fire safety equipment",
          "Personal protective equipment (PPE)",
          "Workplace safety products",
          "Inspection-related products",
          "Emergency preparedness supplies",
        ],
      },
      {
        kind: "prose",
        label: "How Safety Shop Connects to Our Services",
        title: "Products that support safer workplaces",
        description:
          "Safety Shop products complement NewMaster's services and projects — first aid supplies support first aid room setup and first aid box inspections, fire safety equipment supports fire risk assessments and extinguisher checks, and PPE supports workplace safety training.",
      },
    ],
    cta: {
      title: "Equip your workplace for safety",
      description:
        "Enquire about safety products and supplies for your organisation, or explore our services for support that complements them.",
      primaryLabel: "Enquire About Safety Products",
      primaryHref: "/contact",
      secondaryLabel: "Back to Programmes",
      secondaryHref: "/programmes",
    },
  },
];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}