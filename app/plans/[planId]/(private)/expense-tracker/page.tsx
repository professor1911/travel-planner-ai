import ExpenseSection from "@/components/expenseTracker/ExpenseSection";

interface PageProps {
  params: Promise<{
    planId: string;
  }>;
}

export default async function ExpenseTracker({ params }: PageProps) {
  const { planId } = await params;

  return <ExpenseSection planId={planId} />;
}
