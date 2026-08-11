import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import InsightDetails from "./insightDetails";
import RelatedInsights from "@/components/RelatedInsights";

const insights = [
  {
    slug: "building-proactive-safety-culture",
    title: "Building a Proactive Safety Culture: Where to Start",
    subtitle: "Practical steps organizations can take to move beyond compliance and embed safety into everyday operations",
    description:
      "Practical steps organizations can take to move beyond compliance and build a workplace culture where safety is everyone's responsibility.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    category: "Workplace Safety",
    date: "[DATE]",
    author: "[AUTHOR NAME]",
    authorRole: "HSE Manager",
    authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">Many organizations approach workplace safety as a compliance requirement — policies on paper, mandatory training sessions, and incident reports filed after something goes wrong. But truly safe workplaces go far beyond meeting regulatory minimums. They build a proactive safety culture where every employee, from leadership to frontline workers, takes ownership of safety.</p>
      
      <h2>What Is a Proactive Safety Culture?</h2>
      <p>A proactive safety culture is one where hazards are identified and addressed before they cause harm. In these organizations, safety is not a separate function managed by an HSE department — it is integrated into how work is planned, executed, and reviewed every day.</p>
      <p>Organizations with strong safety cultures report fewer incidents, higher employee engagement, lower absenteeism, and stronger operational performance. Safety and productivity are not competing priorities — they reinforce each other.</p>
      
      <h2>Five Steps to Start Building a Proactive Safety Culture</h2>
      
      <h3>1. Leadership Commitment That Is Visible</h3>
      <p>Safety culture starts at the top. Leaders must demonstrate through their actions — not just their words — that safety is a genuine priority. This means participating in safety walks, discussing safety in operational meetings, and allocating adequate resources for safety initiatives.</p>
      
      <h3>2. Hazard Identification Before Incidents Occur</h3>
      <p>Reactive organizations wait for incidents to reveal hazards. Proactive organizations systematically identify risks through workplace inspections, job safety analyses, and hazard identification and risk assessments (HIRA). Employees are trained to recognize hazards and encouraged to report them without fear of reprisal.</p>
      
      <h3>3. Employee Empowerment and Participation</h3>
      <p>Employees closest to the work often understand the risks best. Proactive safety cultures give workers a voice in safety decisions, involve them in risk assessments, and recognize their contributions to safer work practices.</p>
      
      <h3>4. Training That Goes Beyond Compliance</h3>
      <p>Effective safety training is practical, role-specific, and regularly refreshed. It equips employees not just with knowledge of rules but with the skills to identify hazards, assess risks, and make safer decisions in real time.</p>
      
      <h3>5. Measuring What Matters</h3>
      <p>Move beyond tracking incident rates alone. Measure leading indicators such as hazard reports submitted, safety observations conducted, training completion rates, and safety meeting participation. These indicators reveal whether your safety systems are strengthening before incidents occur.</p>
      
      <h2>The Long-Term View</h2>
      <p>Building a proactive safety culture is not a project with a completion date. It requires continuous commitment, regular assessment, and willingness to improve. Organizations that invest in this approach find that safety becomes not a burden but a source of organizational strength.</p>
      <p>The most successful organizations understand that protecting workers is not just a legal obligation — it is fundamental to sustainable business performance.</p>
    `,
    tags: ["Workplace Safety", "Safety Culture", "Risk Management"],
    relatedInsights: [
      "health-surveillance-protecting-workforce",
      "training-strengthening-safety-competence"
    ],
  },
  {
    slug: "health-surveillance-protecting-workforce",
    title: "Why Health Surveillance Matters: Protecting Your Workforce",
    subtitle: "Understanding the importance of systematic health monitoring for employees exposed to occupational hazards",
    description:
      "Understanding the importance of systematic health monitoring for employees exposed to occupational hazards and how to implement effective programs.",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=600&fit=crop",
    category: "Occupational Health",
    date: "[DATE]",
    author: "[AUTHOR NAME]",
    authorRole: "Medical Director",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">Many workplace health risks develop gradually and may not be immediately visible. An employee exposed to excessive noise, hazardous chemicals, or respiratory hazards may not show symptoms for months or years — by which time significant damage may have occurred. Health surveillance programs are designed to detect early signs of occupational illness so that interventions can be made before conditions become serious.</p>
      
      <h2>What Is Health Surveillance?</h2>
      <p>Health surveillance is the systematic monitoring of employee health where workplace exposures could cause occupational illness. It goes beyond general medical check-ups — it is targeted, risk-based, and designed around the specific hazards present in a particular workplace.</p>
      <p>Health surveillance programs typically include baseline health assessments when employees begin work in exposed roles, periodic follow-up assessments to monitor changes over time, and exit assessments to document health status when employment ends.</p>
      
      <h2>When Is Health Surveillance Required?</h2>
      <p>Health surveillance may be appropriate where employees are exposed to:</p>
      <ul>
        <li><strong>Excessive noise:</strong> Requiring regular audiometric testing to monitor hearing function.</li>
        <li><strong>Respiratory hazards:</strong> Including dust, fumes, chemicals, or biological agents that can affect lung function.</li>
        <li><strong>Chemical exposures:</strong> Where employees work with hazardous substances that can be absorbed through skin, inhaled, or ingested.</li>
        <li><strong>Vibration:</strong> From tools or machinery that can cause hand-arm vibration syndrome.</li>
        <li><strong>Biological hazards:</strong> In healthcare, laboratory, agricultural, or waste management settings.</li>
      </ul>
      
      <h2>Components of an Effective Health Surveillance Program</h2>
      
      <h3>1. Risk-Based Design</h3>
      <p>The program should be designed around the specific hazards identified in the organization's risk assessments. Generic programs that do not reflect actual workplace exposures provide limited value.</p>
      
      <h3>2. Qualified Occupational Health Professionals</h3>
      <p>Health surveillance should be conducted by qualified occupational health practitioners who understand both the medical and workplace dimensions of the assessment.</p>
      
      <h3>3. Clear Protocols and Documentation</h3>
      <p>Organizations need clear procedures for what assessments are conducted, at what frequency, by whom, and how results are recorded, stored, and acted upon.</p>
      
      <h3>4. Action on Findings</h3>
      <p>Health surveillance is not just about collecting data. When assessments reveal health concerns, organizations must be prepared to take action — adjusting work arrangements, improving controls, or providing medical follow-up.</p>
      
      <h2>Benefits Beyond Compliance</h2>
      <p>While health surveillance supports regulatory compliance, its value extends further. It provides early warning of exposure control failures, supports employee confidence that their health is being protected, and contributes to workforce health data that informs organizational decision-making.</p>
      <p>Investing in worker health is not just a regulatory requirement — it is a foundation for sustainable organizational performance.</p>
    `,
    tags: ["Occupational Health", "Health Surveillance", "Workplace Wellness"],
    relatedInsights: [
      "building-proactive-safety-culture",
      "fitness-to-work-assessments-guide"
    ],
  },
  {
    slug: "training-strengthening-safety-competence",
    title: "The Role of Training in Strengthening Workplace Safety Competence",
    subtitle: "How structured training programs equip employees with the knowledge and practical skills needed to work safely",
    description:
      "How structured training programs equip employees with the knowledge and practical skills needed to identify hazards and work safely.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    category: "Training & Development",
    date: "[DATE]",
    author: "[AUTHOR NAME]",
    authorRole: "Training Manager",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    content: `
      <p class="lead">Training is one of the most effective investments an organization can make in workplace safety. When employees understand hazards, know how to protect themselves, and have the practical skills to work safely, incidents decrease and safety culture strengthens. Yet many organizations treat safety training as a one-time onboarding activity rather than an ongoing capability-building process.</p>
      
      <h2>Why Safety Training Matters</h2>
      <p>Workplace incidents rarely occur because employees deliberately disregard safety rules. More commonly, they occur because hazards were not recognized, risks were underestimated, or employees lacked the specific knowledge to handle a situation safely. Effective training addresses all three of these factors.</p>
      
      <h2>Key Training Areas for Workplace Safety</h2>
      
      <h3>1. Hazard Identification and Risk Awareness</h3>
      <p>Employees at all levels should be trained to recognize common workplace hazards — from physical hazards like unguarded machinery to chemical, ergonomic, and psychosocial risks. The earlier hazards are identified, the sooner they can be controlled.</p>
      
      <h3>2. Emergency Response and First Aid</h3>
      <p>When incidents do occur, the first few minutes are critical. Employees trained in first aid, fire response, and emergency evacuation procedures can prevent minor incidents from becoming major tragedies.</p>
      
      <h3>3. Task-Specific Safety Procedures</h3>
      <p>Generic safety training provides a foundation, but task-specific training ensures employees know how to safely perform the actual work they do daily — whether that involves working at height, confined space entry, chemical handling, or manual handling.</p>
      
      <h3>4. Leadership Safety Skills</h3>
      <p>Supervisors, managers, and team leaders play a critical role in shaping safety culture. Leadership safety training equips them to model safe behavior, conduct effective safety conversations, and respond appropriately when safety concerns are raised.</p>
      
      <h2>Making Training Effective</h2>
      <p>Safety training is most effective when it is:</p>
      <ul>
        <li><strong>Practical:</strong> Hands-on exercises, simulations, and real workplace scenarios are more effective than lectures alone.</li>
        <li><strong>Role-specific:</strong> Training should reflect the actual hazards and tasks employees face in their specific roles.</li>
        <li><strong>Regularly refreshed:</strong> Skills fade over time. Regular refresher training maintains competence and addresses new risks.</li>
        <li><strong>Assessed:</strong> Organizations should verify that training has been understood and can be applied, not just delivered.</li>
      </ul>
      
      <h2>The NewMaster Training Academy Approach</h2>
      <p>Through the NewMaster Training Academy, organizations can access certified and customized training programs designed around their specific workforce, industry, operational risks, and regulatory requirements. From first aid and fire safety to leadership in safety and specialized technical training, the academy provides practical, evidence-based programs that build genuine workplace competence.</p>
      <p>Investing in training is investing in the capability of your workforce to protect themselves and each other — and that is one of the most valuable investments any organization can make.</p>
    `,
    tags: ["Training", "Capacity Building", "Safety Competence"],
    relatedInsights: [
      "building-proactive-safety-culture",
      "emergency-response-planning"
    ],
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  
  if (!insight) {
    return {
      title: "Insight Not Found | NewMaster Occupational Health & Safety",
      description: "The requested insight could not be found.",
    };
  }

  return {
    title: `${insight.title} | NewMaster Occupational Health & Safety Insights`,
    description: insight.description,
    openGraph: {
      title: insight.title,
      description: insight.description,
      images: [insight.heroImage],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  // Get related insights
  const relatedInsights = insights
    .filter((i) => i.slug !== slug && insight.relatedInsights.includes(i.slug))
    .slice(0, 2)
    .map((i) => ({
      slug: i.slug,
      title: i.title,
      excerpt: i.description,
      image: i.heroImage,
      category: i.category,
      date: i.date,
    }));

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <InsightDetails insight={insight} />
      {relatedInsights.length > 0 && (
        <RelatedInsights insights={relatedInsights} />
      )}
      <Newsletter />
      <Footer />
    </main>
  );
}