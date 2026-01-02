import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

// GET /api/shops/[id] - Get shop by ID

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params; // <-- await it
    const shopId = resolvedParams.id;

     if (!shopId) {
      return NextResponse.json(
        { error: "Missing shop id" },
        { status: 400 }
      );
    }
    const shop = await prisma.shop.findUnique({
      where: { id: shopId },
      include: {
        drinks: {
          include: {
            ratings: {
              select: { rating: true },
            },
            toppings: {
              include: {
                topping: true,
              },
            },
          },
        },
        ratings: {
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!shop) {
      return NextResponse.json(
        { error: "Shop not found" },
        { status: 404 }
      );
    }

    // Calculate average ratings
    const totalRating = shop.ratings.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = shop.ratings.length > 0 
      ? totalRating / shop.ratings.length 
      : 0;

    // Calculate average for each drink
    const drinksWithRatings = shop.drinks.map(drink => {
      const drinkTotal = drink.ratings.reduce((sum, r) => sum + r.rating, 0);
      const drinkAverage = drink.ratings.length > 0
        ? drinkTotal / drink.ratings.length
        : 0;

      return {
        ...drink,
        averageRating: Math.round(drinkAverage * 10) / 10,
        totalRatings: drink.ratings.length,
      };
    });

    return NextResponse.json({
      ...shop,
      averageRating: Math.round(averageRating * 10) / 10,
      totalRatings: shop.ratings.length,
      drinks: drinksWithRatings,
    });
  } catch (error) {
    console.error("Error fetching shop:", error);
    return NextResponse.json(
      { error: "Failed to fetch shop" },
      { status: 500 }
    );
  }
}