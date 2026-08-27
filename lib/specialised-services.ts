import { images } from "@/lib/images";

export type SpecialisedService = {
  slug: string;
  title: string;
  category: string;
  targetSector: string;
  serviceType: string;
  description: string;
  overview: string;
  image: string;
  offerings: string[];
  whoItSupports: string;
  howItWorks: string[];
};

export const specialisedServices: SpecialisedService[] = [
  {
    slug: "on-site-medical-clinics",
    title: "On-Site Medical Clinics",
    category: "Medical Clinic",
    targetSector: "Industrial, construction and corporate workplaces",
    serviceType: "On-site medical support",
    description:
      "Medical support provided directly at client workplaces or project sites, so employees can access occupational and emergency medical care without leaving the work environment.",
    overview:
      "An on-site Medical Clinic brings occupational health support closer to where work happens. Clinics can be established for ongoing operations or for time-bound projects, depending on workforce size, site risk and operational needs.",
    image: images.medicalClinic,
    offerings: [
      "On-site occupational medical consultations",
      "First-response and emergency medical support",
      "Fitness-to-work and return-to-work assessments",
      "Treatment of minor workplace injuries and illnesses",
      "Health screening and surveillance support",
      "Referral coordination for higher-level care",
    ],
    whoItSupports:
      "Organisations that need medical presence at a workplace, project camp or industrial site rather than relying only on off-site facilities.",
    howItWorks: [
      "Review site risks, workforce size and medical coverage needs",
      "Define clinic scope, staffing and operating hours",
      "Set up the Medical Clinic at the workplace or project site",
      "Deliver day-to-day occupational and emergency medical support",
      "Report findings and recommend improvements as operations evolve",
    ],
  },
  {
    slug: "corporate-health-camps",
    title: "Corporate Health Camps",
    category: "Workplace Screening",
    targetSector: "Offices, factories and multi-site organisations",
    serviceType: "Temporary screening programmes",
    description:
      "Temporary workplace health screening and wellness programmes designed to assess employee health, identify risks and support prevention at scale.",
    overview:
      "Corporate Health Camps bring screening services to the workplace for a defined period. They are useful when organisations want to reach many employees efficiently while keeping disruption to operations as low as possible.",
    image: images.healthCamp,
    offerings: [
      "Workplace medical screening",
      "Basic vital signs and targeted health checks",
      "Selected laboratory investigations where indicated",
      "Health education and prevention messaging",
      "Occupational medical reporting for participating employees",
      "Follow-up recommendations for identified concerns",
    ],
    whoItSupports:
      "Employers seeking organised health screening for teams, departments or entire workforces without establishing a permanent clinic.",
    howItWorks: [
      "Agree screening objectives, locations and employee groups",
      "Plan camp logistics, staffing and medical protocols",
      "Deliver screening and wellness activities at the workplace",
      "Provide individual findings through appropriate medical channels",
      "Share aggregated, non-identifiable programme insights where useful",
    ],
  },
  {
    slug: "remote-site-medical-support",
    title: "Remote Site Medical Support",
    category: "Field Operations",
    targetSector: "Industrial, construction, infrastructure and remote operations",
    serviceType: "Field medical support",
    description:
      "Health and emergency medical support for industrial, construction, infrastructure or remote operations where workers are away from urban healthcare facilities.",
    overview:
      "Remote operations need medical planning that matches distance, terrain, shift patterns and emergency evacuation realities. Remote Site Medical Support helps organisations keep workers safer when access to hospitals is limited.",
    image: images.remoteSite,
    offerings: [
      "Site medical coverage planning",
      "Emergency medical support for remote operations",
      "Stabilisation and referral support",
      "Occupational health screening for field teams",
      "Coordination with site emergency response arrangements",
      "Advice on medical supplies and clinic setup for remote sites",
    ],
    whoItSupports:
      "Projects and operations in industrial, construction, infrastructure or remote environments where on-site medical capability is essential.",
    howItWorks: [
      "Assess location, access routes and operational hazards",
      "Define medical coverage, equipment and emergency pathways",
      "Deploy medical support appropriate to the site",
      "Provide ongoing care and incident response support",
      "Review coverage as the project or operation changes",
    ],
  },
  {
    slug: "pre-deployment-medical-screening",
    title: "Pre-Deployment Medical Screening",
    category: "Fitness for Work",
    targetSector: "Project, field and high-risk workplace deployments",
    serviceType: "Medical fitness assessment",
    description:
      "Medical fitness assessment before deployment to specific workplaces or operational environments, helping organisations place people in roles they can perform safely.",
    overview:
      "Pre-deployment screening looks at the demands of a destination role or site and assesses whether an employee is medically fit for that environment. It supports safer placement decisions before work begins.",
    image: images.preDeployment,
    offerings: [
      "Role- and site-specific fitness-to-work assessments",
      "Medical history review and targeted examinations",
      "Laboratory investigations where clinically indicated",
      "Vaccination review based on destination risk",
      "Occupational medical reports for deployment decisions",
      "Recommendations for work restrictions or follow-up where needed",
    ],
    whoItSupports:
      "Organisations deploying staff to project sites, industrial operations, remote locations or other environments with specific health demands.",
    howItWorks: [
      "Define the destination role, environment and medical requirements",
      "Conduct the pre-deployment medical assessment",
      "Complete indicated investigations and vaccinations",
      "Issue an occupational medical report",
      "Advise on fitness, restrictions or further evaluation",
    ],
  },
  {
    slug: "workforce-vaccination-programmes",
    title: "Workforce Vaccination Programmes",
    category: "Prevention",
    targetSector: "Workplaces with infectious disease and travel-related risk",
    serviceType: "Coordinated vaccination",
    description:
      "Coordinated vaccinations based on workplace risk and employee requirements, delivered as organised programmes rather than one-off individual appointments.",
    overview:
      "Vaccination programmes help organisations protect employees against selected vaccine-preventable diseases that are relevant to their work, travel or site conditions. Vaccines are offered according to occupational risk and applicable medical protocols.",
    image: images.vaccination,
    offerings: [
      "Risk-based vaccination planning",
      "Hepatitis B vaccination",
      "Tetanus vaccination",
      "Typhoid vaccination",
      "Yellow Fever vaccination where indicated",
      "On-site or coordinated programme delivery",
      "Record-keeping support for participating employees",
    ],
    whoItSupports:
      "Employers that need organised vaccination coverage for staff exposed to workplace, travel or site-related infectious disease risks.",
    howItWorks: [
      "Identify occupational vaccination needs for the workforce",
      "Plan programme logistics, consent and medical protocols",
      "Deliver vaccinations at the workplace or an agreed location",
      "Document doses according to medical requirements",
      "Advise on boosters or follow-up where indicated",
    ],
  },
  {
    slug: "occupational-hygiene",
    title: "Occupational Hygiene",
    category: "Exposure Control",
    targetSector: "Manufacturing, mining, construction and industrial sites",
    serviceType: "Assessment and control",
    description:
      "Assessment and control of workplace exposure to noise, dust, chemicals, heat, vibration, biological hazards and other occupational hazards.",
    overview:
      "Occupational hygiene focuses on the conditions that can harm health over time. We help organisations understand exposure, interpret findings and identify practical controls that reduce risk at source wherever possible.",
    image: images.hygiene,
    offerings: [
      "Noise exposure assessment",
      "Dust and airborne contaminant assessment",
      "Chemical exposure assessment",
      "Heat stress assessment",
      "Vibration exposure assessment",
      "Biological hazard review",
      "Control recommendations and workplace improvement support",
    ],
    whoItSupports:
      "Workplaces where employees may be exposed to physical, chemical or biological hazards that require measurement, interpretation and control.",
    howItWorks: [
      "Review processes, tasks and likely exposure pathways",
      "Plan and conduct occupational hygiene assessments",
      "Interpret findings against workplace risk and applicable guidance",
      "Recommend practical engineering, administrative and PPE controls",
      "Support follow-up monitoring where required",
    ],
  },
  {
    slug: "workplace-wellness-programmes",
    title: "Workplace Wellness Programmes",
    category: "Wellbeing",
    targetSector: "Corporate, industrial and multi-site organisations",
    serviceType: "Prevention and wellbeing programmes",
    description:
      "Programmes supporting employee health, prevention and wellbeing so organisations can complement occupational health services with practical workplace wellness support.",
    overview:
      "Workplace Wellness Programmes focus on prevention, health education and sustainable wellbeing habits. They are designed around workplace realities rather than generic wellness campaigns.",
    image: images.wellness,
    offerings: [
      "Workplace wellness programme design",
      "Health education sessions",
      "Screening-linked wellbeing follow-up",
      "Lifestyle and prevention messaging",
      "Support for fatigue, stress and healthy working habits",
      "Integration with occupational health findings where appropriate",
    ],
    whoItSupports:
      "Organisations that want structured wellbeing support alongside medical, safety and training services.",
    howItWorks: [
      "Understand workforce needs and operational constraints",
      "Design a practical wellness programme",
      "Deliver sessions, screening or support activities",
      "Encourage participation without disrupting operations",
      "Review uptake and refine the programme over time",
    ],
  },
];

export function getSpecialisedService(slug: string) {
  return specialisedServices.find((service) => service.slug === slug);
}
