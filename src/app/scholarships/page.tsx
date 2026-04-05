import type { Metadata } from "next";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { scholarshipsPage } from "@/content/resource-pages";

export const metadata: Metadata = {
  title: scholarshipsPage.metaTitle,
  description: scholarshipsPage.metaDescription,
};

export default function ScholarshipsPage() {
  return <GuidePageLayout content={scholarshipsPage} />;
}
