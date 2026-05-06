import { getDictionary, type Locale } from "@/lib/getDictionary";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={params.lang} dict={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer lang={params.lang} dict={dict.footer} nav={dict.nav} />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}
