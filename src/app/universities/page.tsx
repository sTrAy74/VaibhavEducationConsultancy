import type { Metadata } from "next";
import { GuidePageLayout } from "@/components/GuidePageLayout";
import { UniversityCatalog } from "@/components/UniversityCatalog";
import { universitiesPage } from "@/content/resource-pages";

export const metadata: Metadata = {
  title: universitiesPage.metaTitle,
  description: universitiesPage.metaDescription,
};

export default function UniversitiesPage() {
  return (
    <GuidePageLayout content={universitiesPage} appendix={<UniversityCatalog />} />
  );
}
