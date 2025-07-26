import Plan from "@/components/plan/Plan";

interface PageProps {
  params: Promise<{
    planId: string;
  }>;
  searchParams?: Promise<{
    isNewPlan?: string;
  }>;
}

export default async function PlanPage({
  params,
  searchParams,
}: PageProps) {
  const { planId } = await params;
  const resolvedSearchParams = await searchParams;
  
  const isNewPlan = resolvedSearchParams?.isNewPlan
    ? Boolean(resolvedSearchParams.isNewPlan)
    : false;
    
  return <Plan planId={planId} isNewPlan={isNewPlan} isPublic={false} />;
}
