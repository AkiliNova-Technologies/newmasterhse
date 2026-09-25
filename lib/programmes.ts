import {
  GraduationCap,
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
    bannerImage: images.bannerInstitute,
    bannerImageAlt: "Ugandan professionals taking part in workplace health and safety training",
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
    bannerImage: images.bannerClinic,
    bannerImageAlt:
      "Ugandan clinician providing an occupational health consultation",
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
];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
