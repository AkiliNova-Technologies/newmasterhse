import { images } from "@/lib/images";

export type ServiceCategory = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  includes: string[];
  outcome: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "occupational-health",
    title: "Occupational Health Services",
    shortTitle: "Occupational Health",
    description:
      "Protect employee health at every stage of employment through medical examinations, fitness-to-work assessments, health surveillance, workplace screening and occupational medical reporting.",
    image: images.occupationalHealth,
    includes: [
      "Pre-employment medical examinations",
      "Periodic medical examinations",
      "Exit medical examinations",
      "Fitness-to-work assessments",
      "Return-to-work assessments",
      "Health surveillance",
      "Workplace medical screening",
      "Respirator fit testing",
      "Hearing conservation programmes",
      "Audiometry",
      "Vision screening",
      "Spirometry",
      "Laboratory investigations",
      "Vaccination programmes",
      "Occupational medical reports",
      "Health risk assessments",
      "Corporate medical camps",
    ],
    outcome:
      "Clearer fitness-to-work decisions, earlier identification of occupational health risks, and stronger workplace health programmes that support safer work.",
  },
  {
    id: "safety-environmental-consulting",
    title: "Safety & Environmental Consulting",
    shortTitle: "Safety & Environmental Consulting",
    description:
      "Identify hazards, assess risks, investigate incidents and strengthen safety and environmental management systems so organisations can operate more safely and meet their compliance obligations.",
    image: images.safetyConsulting,
    includes: [
      "Occupational safety and health compliance audits",
      "Workplace risk assessments",
      "Hazard Identification and Risk Assessment (HIRA)",
      "Job Safety Analysis (JSA)",
      "Incident and accident investigation",
      "Fire safety audits",
      "Workplace ergonomics assessments",
      "Noise surveys",
      "Environmental audits",
      "Environmental Impact Assessment support",
      "Waste management planning",
      "Emergency response planning",
      "Contractor safety management",
      "Safety policy development",
      "Workplace inspection programmes",
    ],
    outcome:
      "A clearer picture of workplace risk, practical control measures, and safety systems that support day-to-day operations.",
  },
  {
    id: "training-certification",
    title: "Training & Certification",
    shortTitle: "Training & Certification",
    description:
      "Build practical competence through workplace health, safety and environmental training delivered by the NewMaster Institute of Health & Safety. Programmes can be scheduled or customised for your organisation.",
    image: images.training,
    includes: [
      "First Aid Training",
      "Fire Safety Training",
      "HSE Awareness Training",
      "Risk Assessment Training",
      "Incident Investigation Training",
      "ISO 45001 / Occupational Health & Safety Management Systems",
      "ISO 14001 / Environmental Management Systems",
      "ISO 9001 awareness",
      "Defensive Driving",
      "Working at Heights",
      "Confined Space Safety",
      "PPE Use",
      "Food Safety",
      "HACCP Awareness",
      "Basic Life Support",
    ],
    outcome:
      "A workforce with practical skills to recognise hazards, respond to emergencies and apply safer working methods.",
  },
];

export const laboratoryInvestigations = [
  "Full Blood Count",
  "Liver Function Tests",
  "Renal Function Tests",
  "Fasting Blood Sugar",
  "Lipid Profile",
  "Malaria screening",
  "Tuberculosis screening",
  "HIV testing subject to appropriate consent and medical protocols",
];

export const vaccinations = [
  "Hepatitis B",
  "Tetanus",
  "Typhoid",
  "Yellow Fever",
];
