import { NextResponse } from "next/server";
import { prisma } from "../lib/prisma";

// GET /api/shops - List all shops


export async function GET() {
  try {
    const shops = await prisma.shop.findMany({
      include: {
        ratings: {
          select: { rating: true },
        },
        _count: {
          select: { ratings: true },
        },
      },
    });
    const shopsWithRatings = shops.map(shop => {
      const totalRating = shop.ratings.reduce((sum, r) => sum + r.rating, 0);
      const averageRating = shop.ratings.length > 0 
        ? totalRating / shop.ratings.length 
        : 0;

      return {
        id: shop.id,
        name: shop.name,
        address: shop.address,
        city: shop.city,
        state: shop.state,
        latitude: shop.latitude,
        longitude: shop.longitude,
        phone: shop.phone,
        description: shop.description,
        imageUrl: shop.imageUrl,
        averageRating: Math.round(averageRating * 10) / 10,
        totalRatings: shop._count.ratings,
      };
    });

    return NextResponse.json(shopsWithRatings);
  } catch (error) {
    console.error("Error fetching shops:", error);
    return NextResponse.json(
      { error: "Failed to fetch shops" },
      { status: 500 }
    );
  }
}

// POST /api/shops - Create new shop
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const shop = await prisma.shop.create({
      data: {
        name: body.name,
        address: body.address,
        city: body.city,
        state: body.state,
        zipCode: body.zipCode,
        latitude: body.latitude,
        longitude: body.longitude,
        phone: body.phone,
        website: body.website,
        description: body.description,
        imageUrl: body.imageUrl,
      },
    });
    
    return NextResponse.json(shop, { status: 201 });
  } catch (error) {
    console.error("Error creating shop:", error);
    return NextResponse.json(
      { error: "Failed to create shop" },
      { status: 500 }
    );
  }
}