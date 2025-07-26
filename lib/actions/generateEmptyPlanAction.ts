"use server";
import { formSchemaType } from "@/components/NewPlanForm";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { getAuthToken } from "@/app/auth";
import { redirect } from "next/navigation";
import { differenceInDays } from "date-fns";

export async function generateEmptyPlanAction(formData: formSchemaType) {
    const token = await getAuthToken();
    const { placeName, activityPreferences, datesOfTravel, companion } = formData;

    const planId = await fetchMutation(api.plan.createEmptyPlan,
        {
            placeName,
            noOfDays: datesOfTravel.from && datesOfTravel.to ? differenceInDays(datesOfTravel.to, datesOfTravel.from).toString() : "1",
            activityPreferences,
            fromDate: datesOfTravel.from?.getTime() || Date.now(),
            toDate: datesOfTravel.to?.getTime() || Date.now(),
            companion,
            isGeneratedUsingAI: false
        },
        { token });

    if (planId === null)
        return null;

    fetchMutation(api.retrier.runAction, {
        action: "images:generateAndStore",
        actionArgs: {
            prompt: placeName,
            planId: planId
        }
    }, { token: token });

    redirect(`/plans/${planId}?isNewPlan=true`);
}