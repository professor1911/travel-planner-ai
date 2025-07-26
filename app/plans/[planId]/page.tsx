"use client";

import Plan from "@/components/plan/Plan";
import { useParams } from "next/navigation";

export default function PlanPage() {
  const params = useParams();
  const planId = params.planId as string;
  
  return <Plan planId={planId} isNewPlan={false} isPublic={false} />;
}
