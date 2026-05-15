import { getDictionary, type Locale } from "@/lib/getDictionary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={resolvedParams.lang as Locale} dict={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer lang={resolvedParams.lang as Locale} dict={dict.footer} nav={dict.nav} />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}
