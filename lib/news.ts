import { images } from "@/lib/images";

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "improving-workplace-emergency-preparedness",
    title: "Improving Workplace Emergency Preparedness",
    excerpt:
      "Practical steps organisations can take to prepare people, procedures and equipment before an emergency occurs.",
    category: "Workplace Safety",
    date: "12 August 2026",
    readTime: "6 min read",
    image: images.newsEmergency,
    content: `
      <p>Emergency preparedness is most effective when it is planned before an incident happens. Workplaces that wait until a fire, medical emergency or chemical release occurs often lose valuable minutes because roles are unclear and equipment is not ready.</p>
      <h2>Start with realistic scenarios</h2>
      <p>Identify the emergencies that are most likely in your operations: fire, medical emergencies, confined space incidents, vehicle accidents, chemical exposure or severe weather. The right plan depends on the work you actually do, not a generic template.</p>
      <h2>Make roles visible</h2>
      <p>Employees should know who raises the alarm, who guides evacuation, who provides first aid and who contacts emergency services. Simple role cards and regular drills help people act under pressure.</p>
      <h2>Check equipment and access</h2>
      <p>First aid kits, fire extinguishers, assembly points and emergency exits only help if they are accessible, inspected and understood. Preparedness includes maintenance, not only documentation.</p>
      <p>This article is educational content intended to support workplace health and safety discussions. It does not describe a specific NewMaster Health and Safety client engagement.</p>
    `,
  },
  {
    slug: "why-periodic-medical-examinations-matter",
    title: "Why Periodic Medical Examinations Matter",
    excerpt:
      "Periodic occupational medical examinations help organisations monitor worker health over time and support safer placement decisions.",
    category: "Occupational Health",
    date: "29 July 2026",
    readTime: "7 min read",
    image: images.newsMedical,
    content: `
      <p>Pre-employment medicals are only the starting point. Periodic medical examinations help organisations understand whether work exposures, job demands or health changes are affecting an employee’s fitness for their role.</p>
      <h2>A risk-based approach</h2>
      <p>Not every role needs the same examination. Frequency and content should reflect hazards such as noise, dust, chemicals, heat, night work or physically demanding tasks.</p>
      <h2>What periodic examinations can support</h2>
      <ul>
        <li>Early identification of occupational health concerns</li>
        <li>Fitness-to-work and return-to-work decisions</li>
        <li>Hearing, vision, respiratory and other targeted surveillance</li>
        <li>Clearer occupational medical records over time</li>
      </ul>
      <p>When findings are acted on — through follow-up, work adjustments or improved controls — examinations become a prevention tool rather than a paperwork exercise.</p>
      <p>This article is educational content and does not report a specific NewMaster event or client result.</p>
    `,
  },
  {
    slug: "creating-a-stronger-safety-culture",
    title: "Creating a Stronger Safety Culture",
    excerpt:
      "Safety culture grows when leadership, supervisors and workers treat hazard reporting and safe work as part of everyday operations.",
    category: "Safety Culture",
    date: "15 July 2026",
    readTime: "6 min read",
    image: images.newsCulture,
    content: `
      <p>Policies and training matter, but they are not enough on their own. A stronger safety culture exists when people feel able to stop unsafe work, report hazards and discuss incidents without fear of blame.</p>
      <h2>Visible leadership</h2>
      <p>Supervisors and managers shape culture through daily choices: whether they wear PPE, whether they rush a task, and how they respond when someone raises a concern.</p>
      <h2>From reporting to learning</h2>
      <p>Incident and near-miss reports are most useful when they lead to practical changes. Closing the loop with the people who reported the issue builds trust.</p>
      <h2>Competence and conversation</h2>
      <p>Toolbox talks, inspections and practical training keep safety present. Culture is built in conversations at the workplace, not only in annual workshops.</p>
      <p>This article is educational content for organisations seeking to strengthen workplace safety culture.</p>
    `,
  },
  {
    slug: "managing-occupational-health-risks-in-growing-businesses",
    title: "Managing Occupational Health Risks in Growing Businesses",
    excerpt:
      "As organisations expand sites, shifts and contractor numbers, occupational health systems need to grow with the work.",
    category: "Occupational Health",
    date: "2 July 2026",
    readTime: "6 min read",
    image: images.newsRisk,
    content: `
      <p>Growth often introduces new hazards before systems catch up. Additional sites, night shifts, contractors and machinery can change exposure profiles quickly.</p>
      <h2>Scale the basics first</h2>
      <p>Medical examinations, health surveillance, first aid coverage and clear incident pathways should expand with headcount and locations. A process that worked for one site may not be enough for five.</p>
      <h2>Do not overlook contractors</h2>
      <p>Many growing businesses rely on contractors. Occupational health and safety expectations should be clear in contractor management, not assumed.</p>
      <h2>Use information, not guesswork</h2>
      <p>Risk assessments, workplace inspections and occupational medical findings help leaders decide where to invest. Growth is safer when decisions are based on actual workplace conditions.</p>
      <p>This article is educational content about occupational health in expanding organisations.</p>
    `,
  },
  {
    slug: "understanding-workplace-risk-assessments",
    title: "Understanding Workplace Risk Assessments",
    excerpt:
      "A workplace risk assessment is a structured way to identify hazards, estimate risk and decide which controls should come first.",
    category: "Risk Management",
    date: "18 June 2026",
    readTime: "5 min read",
    image: images.newsAssessment,
    content: `
      <p>Risk assessment is not a form to file and forget. It is a method for understanding how people can be harmed and what should be done about it.</p>
      <h2>Identify, evaluate, control</h2>
      <p>Teams walk through tasks and workplaces to identify hazards, consider likelihood and severity, and select controls. Hierarchy of controls still applies: eliminate or reduce risk at source before relying on PPE.</p>
      <h2>Involve the people who do the work</h2>
      <p>Employees closest to the task often see hazards that documents miss. Job Safety Analysis and HIRA are more accurate when operators and supervisors participate.</p>
      <h2>Keep assessments alive</h2>
      <p>New equipment, layout changes, contractors and incidents should trigger a review. A dated assessment that no longer matches the workplace provides false comfort.</p>
      <p>This article is educational content explaining workplace risk assessment practice.</p>
    `,
  },
  {
    slug: "preparing-employees-for-fire-emergencies",
    title: "Preparing Employees for Fire Emergencies",
    excerpt:
      "Fire emergency preparedness combines clear evacuation routes, trained people and equipment that actually works when needed.",
    category: "Fire Safety",
    date: "4 June 2026",
    readTime: "5 min read",
    image: images.newsFire,
    content: `
      <p>Fire emergencies develop quickly. Employees need to know how to raise the alarm, which route to take and where to assemble, without waiting for instructions that may never come.</p>
      <h2>Know the workplace</h2>
      <p>Evacuation plans should reflect actual layouts, including stores, workshops, kitchens and temporary project sites. Blocked exits and locked gates turn a manageable fire into a serious event.</p>
      <h2>Train for action</h2>
      <p>Fire safety training helps people use extinguishers correctly, understand when not to fight a fire, and support colleagues who need assistance during evacuation.</p>
      <h2>Inspect and drill</h2>
      <p>Extinguishers, alarms and emergency lighting need inspection. Drills reveal confusion that paperwork cannot. After each drill, close the gaps that were observed.</p>
      <p>This article is educational content on fire emergency preparedness and does not describe a specific NewMaster training event.</p>
    `,
  },
];

export const newsCategories = [
  "All Categories",
  ...Array.from(new Set(newsArticles.map((article) => article.category))),
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
