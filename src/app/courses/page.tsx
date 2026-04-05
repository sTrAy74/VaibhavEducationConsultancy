import type { Metadata } from "next";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { coursesPage } from "@/content/resource-pages";

export const metadata: Metadata = {
  title: coursesPage.metaTitle,
  description: coursesPage.metaDescription,
};

export default function CoursesPage() {
  return <GuidePageLayout content={coursesPage} />;
}
