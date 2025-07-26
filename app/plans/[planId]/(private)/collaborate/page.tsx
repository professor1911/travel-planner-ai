import Collaborator from "@/components/settings/Collaborator";

interface PageProps {
  params: Promise<{
    planId: string;
  }>;
}

export default async function Collaborate({ params }: PageProps) {
  const { planId } = await params;
  return <Collaborator />;
}
