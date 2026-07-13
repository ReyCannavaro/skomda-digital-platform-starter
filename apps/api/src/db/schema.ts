import { pgTable, serial, text, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";

export const majors = pgTable("majors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  studyDuration: text("study_duration"),
  focusArea: text("focus_area"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const talents = pgTable("talents", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  major: text("major").notNull(),
  graduationYear: integer("graduation_year"),
  dtpProgram: text("dtp_program"),
  status: text("status"),
  summary: text("summary"),
  photoUrl: text("photo_url"),
  currentInstitution: text("current_institution"),
  educationHistory: text("education_history"),
  experienceSummary: text("experience_summary"),
  portfolioUrl: text("portfolio_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const alumni = pgTable("alumni", {
  id: serial("id").primaryKey(),
  talentId: integer("talent_id").references(() => talents.id),
  name: text("name").notNull(),
  major: text("major").notNull(),
  graduationYear: integer("graduation_year"),
  locationCity: text("location_city"),
  locationProvince: text("location_province"),
  latitude: text("latitude"),
  longitude: text("longitude"),
  currentActivity: text("current_activity"),
  institution: text("institution"),
  socialLink: text("social_link"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  level: text("level").notNull(),
  category: text("category"),
  date: timestamp("date"),
  description: text("description"),
  imageUrl: text("image_url"),
  talentId: integer("talent_id").references(() => talents.id),
  isHighlighted: boolean("is_highlighted").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category"),
  description: text("description"),
  imageUrl: text("image_url"),
  demoUrl: text("demo_url"),
  talentId: integer("talent_id").references(() => talents.id),
  isDtpProject: boolean("is_dtp_project").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content"),
  thumbnailUrl: text("thumbnail_url"),
  category: text("category"),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const tourLocations = pgTable("tour_locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  panoramaUrl: text("panorama_url"),
  hotspots: jsonb("hotspots"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"),
  quote: text("quote"),
  videoUrl: text("video_url"),
  photoUrl: text("photo_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category"),
  sourceUrl: text("source_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
