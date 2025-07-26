import {auth} from "@clerk/nextjs/server";

export async function getAuthToken() {
  const authObj = await auth();
  return (await authObj.getToken({template: "convex"})) ?? undefined;
}
