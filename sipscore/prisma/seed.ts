import { PrismaClient } from '../prisma/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});

const prisma = new PrismaClient({adapter})

async function main() {
  console.log('🌱 Starting seed...');

  // Create test user
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const testUser = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      password: hashedPassword,
    },
  });
  
  console.log('✅ User created:', { id: testUser.id, email: testUser.email });

  // Create toppings
  const boba = await prisma.topping.upsert({
    where: { name: 'Boba' },
    update: {},
    create: { 
      name: 'Boba', 
      description: 'Classic tapioca pearls' 
    },
  });

  const lycheeJelly = await prisma.topping.upsert({
    where: { name: 'Lychee Jelly' },
    update: {},
    create: { 
      name: 'Lychee Jelly', 
      description: 'Sweet lychee jelly cubes' 
    },
  });

  const pudding = await prisma.topping.upsert({
    where: { name: 'Pudding' },
    update: {},
    create: { 
      name: 'Pudding', 
      description: 'Creamy egg pudding' 
    },
  });

  const grassJelly = await prisma.topping.upsert({
    where: { name: 'Grass Jelly' },
    update: {},
    create: { 
      name: 'Grass Jelly', 
      description: 'Herbal grass jelly' 
    },
  });

  console.log('✅ Toppings created:', { boba: boba.name, lycheeJelly: lycheeJelly.name });

  // Create Shop 1: Boba Bliss with drinks
  const bobaBliss = await prisma.shop.upsert({
    where: { id: 'shop-boba-bliss' },
    update: {},
    create: {
      id: 'shop-boba-bliss',
      name: 'Boba Bliss',
      address: '123 Campbell Ave',
      city: 'Campbell',
      state: 'CA',
      zipCode: '95008',
      latitude: 37.2872,
      longitude: -121.9500,
      phone: '(408) 555-0100',
      description: 'Premium boba tea with fresh ingredients',
      drinks: {
        create: [
          {
            name: 'Classic Milk Tea',
            description: 'Traditional black milk tea',
            price: 5.50,
            category: 'Milk Tea',
            toppings: {
              create: [
                { toppingId: boba.id },
                { toppingId: pudding.id },
              ],
            },
          },
          {
            name: 'Mango Green Tea',
            description: 'Fresh mango with green tea',
            price: 6.00,
            category: 'Fruit Tea',
            toppings: {
              create: [
                { toppingId: lycheeJelly.id },
              ],
            },
          },
          {
            name: 'Taro Smoothie',
            description: 'Creamy taro blended drink',
            price: 6.50,
            category: 'Smoothie',
            toppings: {
              create: [
                { toppingId: boba.id },
              ],
            },
          },
        ],
      },
    },
  });

  // Create Shop 2: Tea Haven with drinks
  const teaHaven = await prisma.shop.upsert({
    where: { id: 'shop-tea-haven' },
    update: {},
    create: {
      id: 'shop-tea-haven',
      name: 'Tea Haven',
      address: '456 Winchester Blvd',
      city: 'Campbell',
      state: 'CA',
      zipCode: '95008',
      latitude: 37.2910,
      longitude: -121.9510,
      phone: '(408) 555-0200',
      description: 'Traditional tea house specializing in authentic flavors',
      drinks: {
        create: [
          {
            name: 'Honey Milk Tea',
            description: 'Sweet honey-infused milk tea',
            price: 5.75,
            category: 'Milk Tea',
            toppings: {
              create: [
                { toppingId: boba.id },
                { toppingId: grassJelly.id },
              ],
            },
          },
          {
            name: 'Passion Fruit Tea',
            description: 'Tangy passion fruit with green tea',
            price: 5.50,
            category: 'Fruit Tea',
          },
        ],
      },
    },
  });

  // Create Shop 3: Bubble Paradise with drinks
  const bubbleParadise = await prisma.shop.upsert({
    where: { id: 'shop-bubble-paradise' },
    update: {},
    create: {
      id: 'shop-bubble-paradise',
      name: 'Bubble Paradise',
      address: '789 Bascom Ave',
      city: 'Campbell',
      state: 'CA',
      zipCode: '95008',
      latitude: 37.2850,
      longitude: -121.9320,
      phone: '(408) 555-0300',
      description: 'Creative bubble tea creations and unique flavors',
      drinks: {
        create: [
          {
            name: 'Brown Sugar Boba',
            description: 'Fresh milk with caramelized brown sugar',
            price: 6.25,
            category: 'Milk Tea',
            toppings: {
              create: [
                { toppingId: boba.id },
              ],
            },
          },
          {
            name: 'Strawberry Matcha',
            description: 'Sweet strawberry blended with premium matcha',
            price: 6.75,
            category: 'Specialty',
          },
        ],
      },
    },
  });

  console.log('✅ Shops created:', { 
    bobaBliss: bobaBliss.name, 
    teaHaven: teaHaven.name, 
    bubbleParadise: bubbleParadise.name 
  });

  // Get the first drink to create a sample rating
  const firstDrink = await prisma.drink.findFirst({
    where: { shopId: bobaBliss.id },
  });

  // Create sample shop rating
  const shopRating = await prisma.shopRating.upsert({
    where: {
      userId_shopId: {
        userId: testUser.id,
        shopId: bobaBliss.id,
      },
    },
    update: {},
    create: {
      userId: testUser.id,
      shopId: bobaBliss.id,
      rating: 5,
      review: 'Amazing boba! Fresh ingredients and excellent service. Highly recommend!',
      serviceRating: 5,
      ambianceRating: 4,
      valueRating: 5,
    },
  });

  // Create sample drink rating (if we found a drink)
  let drinkRating;
  if (firstDrink) {
    drinkRating = await prisma.drinkRating.upsert({
      where: {
        userId_drinkId: {
          userId: testUser.id,
          drinkId: firstDrink.id,
        },
      },
      update: {},
      create: {
        userId: testUser.id,
        drinkId: firstDrink.id,
        rating: 5,
        review: 'Perfect sweetness level! The boba is chewy and fresh.',
        sweetnessLevel: 4,
      },
    });
  }

  console.log('✅ Ratings created:', { 
    shopRating: shopRating.id, 
    drinkRating: drinkRating?.id 
  });

  console.log('🎉 Seed completed successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seed failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });