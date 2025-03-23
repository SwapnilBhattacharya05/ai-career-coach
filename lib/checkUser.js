import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

// CHECK IF USER IS LOGGED IN OR NOT
export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    // CREATE A NEW USER
    const name = `${user.firstName} ${user.lastName}`;
    return await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  } catch (error) {
    console.log({
      status: "error",
      message: error,
    });
  }
};
