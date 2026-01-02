import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "../../lib/prisma";
import { authOptions } from "../../auth/route";

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

    const rating = await prisma.shopRating.upsert({
      where: {
        userId_shopId: {
          userId: user.id,
          shopId: body.shopId,
        },
      },
      update: {
        rating: body.rating,
        review: body.review,
        serviceRating: body.serviceRating,
        ambianceRating: body.ambianceRating,
        valueRating: body.valueRating,
      },
      create: {
        userId: user.id,
        shopId: body.shopId,
        rating: body.rating,
        review: body.review,
        serviceRating: body.serviceRating,
        ambianceRating: body.ambianceRating,
        valueRating: body.valueRating,
      },
    });

    return NextResponse.json(rating, { status: 201 });
  } catch (error) {
    console.error("Error creating rating:", error);
    return NextResponse.json(
      { error: "Failed to create rating" },
      { status: 500 }
    );
  }
}