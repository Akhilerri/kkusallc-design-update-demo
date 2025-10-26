#!/usr/bin/env tsx

import Database from "better-sqlite3";

function checkSchema() {
  console.log("🔍 Checking database schema...\n");

  try {
    const db = new Database('./dev.db');

    // Get all tables
    const tables = db.prepare(`
      SELECT name FROM sqlite_master 
      WHERE type='table' 
      ORDER BY name
    `).all();

    console.log("📋 Tables in database:");
    tables.forEach((table: any) => {
      console.log(`  - ${table.name}`);
    });

    console.log("\n🔍 Checking for new tables:");

    // Check for hotel_brands table
    const hotelBrandsExists = tables.some((t: any) => t.name === 'hotel_brands');
    console.log(`  hotel_brands: ${hotelBrandsExists ? '✅ EXISTS' : '❌ MISSING'}`);

    // Check for hero_images table
    const heroImagesExists = tables.some((t: any) => t.name === 'hero_images');
    console.log(`  hero_images: ${heroImagesExists ? '✅ EXISTS' : '❌ MISSING'}`);

    // Check for company_profile table
    const companyProfileExists = tables.some((t: any) => t.name === 'company_profile');
    console.log(`  company_profile: ${companyProfileExists ? '✅ EXISTS' : '❌ MISSING'}`);

    // Check contact_submissions columns
    console.log("\n🔍 Checking contact_submissions columns:");
    const contactColumns = db.prepare(`PRAGMA table_info(contact_submissions)`).all();
    const columnNames = contactColumns.map((col: any) => col.name);

    console.log(`  number: ${columnNames.includes('number') ? '✅ EXISTS' : '❌ MISSING'}`);
    console.log(`  subject: ${columnNames.includes('subject') ? '✅ EXISTS' : '❌ MISSING'}`);
    console.log(`  phone: ${columnNames.includes('phone') ? '⚠️  OLD FIELD' : '✅ REMOVED'}`);
    console.log(`  message: ${columnNames.includes('message') ? '⚠️  OLD FIELD' : '✅ REMOVED'}`);
    console.log(`  project_type: ${columnNames.includes('project_type') ? '⚠️  OLD FIELD' : '✅ REMOVED'}`);

    // Check projects columns
    console.log("\n🔍 Checking projects columns:");
    const projectColumns = db.prepare(`PRAGMA table_info(projects)`).all();
    const projectColumnNames = projectColumns.map((col: any) => col.name);

    console.log(`  hotel_brand_id: ${projectColumnNames.includes('hotel_brand_id') ? '✅ EXISTS' : '❌ MISSING'}`);
    console.log(`  ffe_scope: ${projectColumnNames.includes('ffe_scope') ? '✅ EXISTS' : '❌ MISSING'}`);

    db.close();

  } catch (error) {
    console.error("❌ Error checking schema:", error);
    throw error;
  }
}

checkSchema();
