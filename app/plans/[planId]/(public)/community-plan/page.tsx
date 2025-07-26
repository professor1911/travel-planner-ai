import CommunityPlan from "@/components/plan/CommunityPlan";

interface PageProps {
  params: Promise<{
    planId: string;
  }>;
}

export default async function PlanPage({ params }: PageProps) {
  const { planId } = await params;
  return <CommunityPlan planId={planId} />;
}
