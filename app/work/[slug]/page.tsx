import { notFound } from "next/navigation";

const CASE_STUDIES = {
  paddlewave: {
    title: "PaddleWave – Sports Arena Growth",
    problem:
      "Low awareness and inconsistent walk-ins despite good infrastructure.",
    solution:
      "Built a conversion-first website, launched Meta + Google Ads, optimized Google Business profile, and created local creatives.",
    outcome:
      "Stronger brand recall, improved footfall, consistent inbound inquiries.",
  },

  "holistic-physio": {
    title: "Holistic Physio Clinic – Lead System",
    problem:
      "Over-reliance on referrals, no predictable appointment flow.",
    solution:
      "Designed landing pages, ran Google Search Ads, implemented local SEO.",
    outcome:
      "Steady appointment leads and improved local visibility.",
  },

  "obey-fitness": {
    title: "Obey Fitness Club – Community & Ads",
    problem:
      "Low engagement and poor ad performance.",
    solution:
      "Content strategy, influencer collaboration, paid ad amplification.",
    outcome:
      "Higher engagement, better lead quality, improved reach.",
  },

  "avinash-salon": {
    title: "Avinash Salon – Brand & Local SEO",
    problem:
      "Brand inconsistency and weak Google visibility.",
    solution:
      "Website redesign, GMB optimization, local SEO and creatives.",
    outcome:
      "Improved search visibility and brand trust.",
  },
};

export default function CaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const data = CASE_STUDIES[params.slug as keyof typeof CASE_STUDIES];

  if (!data) notFound();

  return (
    <section className="min-h-screen px-6 py-24 bg-black text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">{data.title}</h1>

        <div>
          <h2 className="font-semibold text-lg mb-2">Problem</h2>
          <p className="text-gray-400">{data.problem}</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Solution</h2>
          <p className="text-gray-400">{data.solution}</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Outcome</h2>
          <p className="text-gray-300">{data.outcome}</p>
        </div>
      </div>
    </section>
  );
}
