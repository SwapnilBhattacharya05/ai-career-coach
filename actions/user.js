"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import {generateAIInsights} from "@/actions/dashboard";

export async function updateUser(data) {
  // CHECK USER LOGGED IN OR NOT BEFORE UPDATING
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    // START A TRANSACTION TO HANDLE BOTH OPERATIONS
    const result = await db.$transaction(
      async (tx) => {
        // FIND IF THE INDUSTRY EXISTS
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        // TODO: IF INDUSTRY DOESN'T EXIST, CREATE IT WITH DEFAULT VALUES - WILL REPLACE WITH AI LATER
        if (!industryInsight) {
          const insights = await generateAIInsights(data.industry);
          industryInsight = await db.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
          // industryInsight = await db.industryInsight.create({
          //   data: {
          //     industry: data.industry,
          //     salaryRanges: [],
          //     growthRate: 0,
          //     demandLevel: "MEDIUM",
          //     topSkills: [],
          //     marketOutlook: "NEUTRAL",
          //     keyTrends: [],
          //     recommendedSkills: [],
          //     nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
          //   },
          // });
        }

        // Now update the user
        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updatedUser, industryInsight };
      },
      {
        timeout: 10000, // default: 5000
      },
    );

    return { success: true, ...result };
  } catch (error) {
    console.log({
      status: "error",
      message: "Error updating user/industry. Failed to update Profile",
      error: error.message,
    });
  }
}

export async function getUserOnboardingStatus() {
  // CHECK USER LOGGED IN OR NOT BEFORE ONBOARDING STATUS
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (e) {
    console.log({
      status: "error",
      message:
        "Error getting user onboarding status. Failed to check onboarding status",
      error: e.message,
    });
  }
}
