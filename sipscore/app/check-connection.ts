import 'dotenv/config';
import { PrismaClient } from '../prisma/generated/client'; // adjust path if needed
import fs from 'fs';
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient(
  {
    accelerateUrl: process.env.DATABASE_URL!,
    log: ['query', 'warn', 'error'],
  }
).$extends(withAccelerate())

type CurrentDatabaseResult = { current_database: string }[];
type TablesResult = { table_name: string }[];

async function main() {
  console.log('📍 Checking DATABASE_URL from .env...');

  // Load .env manually since we're using ES modules
  try {
    const envFile = fs.readFileSync('.env', 'utf-8');
    const dbUrl = envFile.match(/DATABASE_URL="?([^"\n]+)"?/)?.[1];

    if (dbUrl) {
      console.log('✅ DATABASE_URL found');
      console.log('📍 Connecting to:', dbUrl.replace(/:[^@]+@/, ':****@'), '\n');
    } else {
      console.log('❌ DATABASE_URL not found in .env\n');
      return;
    }
  } catch {
    console.log('❌ Could not read .env file\n');
    return;
  }

  try {
    console.log('🔍 Testing connection...');
    await prisma.$connect();
    console.log('✅ Connected successfully!\n');

    const result = await prisma.$queryRaw`SELECT current_database()`;
    console.log('Current database:', result);

    const schemas = await prisma.$queryRaw`SELECT schema_name FROM information_schema.schemata`;
    console.log(schemas);

    const shops = await prisma.shop.findMany();
    console.log(shops);

    // Get current database
    const dbName = await prisma.$queryRaw<CurrentDatabaseResult>`SELECT current_database()`;
    console.log('📊 Database:', dbName[0].current_database);

    // List tables
    console.log('\n📋 Checking for tables...');
    const tables = await prisma.$queryRaw<TablesResult>`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `;
    

    if (tables.length === 0) {
      console.log('❌ NO TABLES FOUND');
      console.log('\n💡 Next step: Run this command:');
      console.log('   npx prisma db push\n');
    } else {
      console.log('✅ Found', tables.length, 'tables:');
      tables.forEach((t) => console.log('   -', t.table_name));
      console.log('\n💡 Tables exist! Now seed the database:');
      console.log('   npx prisma db seed\n');
    }
  } catch (error: unknown) {
    const err = error as Error;
    console.error('\n❌ ERROR:', err.message);
    console.error('\n🔧 Possible fixes:');
    console.error('1. Check your .env file has correct DATABASE_URL');
    console.error('2. Verify password is correct (no typos)');
    console.error('3. Check Supabase project is not paused');
    console.error('4. Try resetting your Supabase password\n');
  } finally {
    await prisma.$disconnect();
  }
}

main();
