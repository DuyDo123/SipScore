import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/route";
import { prisma } from "../../lib/prisma";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const rating = await prisma.drinkRating.upsert({
      where: {
        userId_drinkId: {
          userId: user.id,
          drinkId: body.drinkId,
        },
      },
      update: {
        rating: body.rating,
        review: body.review,
        sweetnessLevel: body.sweetnessLevel,
      },
      create: {
        userId: user.id,
        drinkId: body.drinkId,
        rating: body.rating,
        review: body.review,
        sweetnessLevel: body.sweetnessLevel,
      },
    });

    return NextResponse.json(rating, { status: 201 });
  } catch (error) {
    console.error("Error creating drink rating:", error);
    return NextResponse.json(
      { error: "Failed to create rating" },
      { status: 500 }
    );
  }
}