import { images } from "@/lib/images";

export type Project = {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  image: string;
  areas: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    id: "firesafe",
    title: "FireSafe Project",
    shortTitle: "FireSafe",
    description:
      "FireSafe is a NewMaster Health and Safety initiative that helps homes and businesses prevent and manage fire risks.",
    image: images.fireTraining,
    areas: [
      "Fire risk assessments",
      "Fire hazard identification",
      "Fire safety guidance",
      "Fire prevention education",
      "Emergency drills",
      "Fire extinguisher provision",
      "Fire extinguisher inspections",
      "Fire extinguisher placement",
      "Follow-up safety recommendations",
    ],
    impact:
      "FireSafe promotes continuous fire prevention and preparedness by helping ensure recommendations are implemented and fire protection equipment remains accessible and functional. The project aims to reduce fire-related injuries, property loss, and emergencies.",
  },
  {
    id: "school-safety",
    title: "School Safety Project",
    shortTitle: "School Safety",
    description:
      "The School Safety Project helps schools identify, prevent, and manage health and safety risks affecting students, teachers, staff, facilities, and school operations.",
    image: images.school,
    areas: [
      "School facility assessments",
      "Fire safety",
      "Sanitation",
      "Occupational health",
      "Emergency preparedness",
      "Infection prevention",
      "Environmental hazards",
      "School vehicle safety",
      "Pre-trip vehicle inspections",
      "Disease outbreak support",
      "Public health emergency support",
      "Follow-up safety assessments",
    ],
    impact:
      "The project aims to strengthen the culture of safety within schools, prevent injuries and illness, and create safer learning and working environments for students, teachers, and staff.",
  },
  {
    id: "hesdep",
    title: "Health and Safety in Development Programs (HeSDeP)",
    shortTitle: "HeSDeP",
    description:
      "HeSDeP is a NewMaster Health and Safety initiative that integrates health, safety, and risk management into development projects and community programmes.",
    image: images.remoteSite,
    areas: [
      "Risk assessments",
      "Hazard identification",
      "Safety planning",
      "Health and safety training",
      "Emergency preparedness",
      "Follow-up monitoring",
      "Worker protection",
      "Beneficiary protection",
      "Community safety",
      "Project asset protection",
    ],
    impact:
      "HeSDeP helps development programmes achieve their objectives while protecting workers, beneficiaries, communities, and project assets. The initiative promotes development that considers health, safety, and human well-being as part of successful programme delivery.",
  },
  {
    id: "travel-safe",
    title: "Travel Safe Project",
    shortTitle: "Travel Safe",
    description:
      "Travel Safe is a NewMaster Health and Safety initiative focused on improving health and safety across public transport, private transport, ambulances, tourism, and travel environments.",
    image: images.travel,
    areas: [
      "Transport operator health and safety inspections",
      "Fire extinguisher checks",
      "First aid kit inspections",
      "Essential vehicle safety checks",
      "Public ambulance inspections",
      "Private ambulance inspections",
      "Ambulance equipment assessments",
      "Tourist health and safety guidance",
      "Destination risk awareness",
      "Travel safety precautions",
    ],
    impact:
      "Travel Safe aims to make journeys safer from the vehicle to the destination by improving preparedness, equipment safety, operator awareness, ambulance readiness, and traveller understanding of potential risks.",
  },
];