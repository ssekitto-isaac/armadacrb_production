import TopBar from "@/components/TopBar";
import Header from "@/components/Header2";
import Footer from "@/components/Footer";

const NewsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[360px] flex items-center justify-center bg-[#0b2c3d]">
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative text-5xl md:text-6xl font-heading font-bold text-white">
            News & Insights
          </h1>
        </section>

        {/* News Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <article
                  key={i}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-48 bg-muted" />

                  <div className="p-6">
                    <span className="text-sm text-muted-foreground">
                      September 12, 2024
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      Understanding Credit Scores in Uganda
                    </h3>

                    <p className="mt-3 text-muted-foreground text-sm">
                      Learn how credit scores work and why they matter for your
                      financial future.
                    </p>

                    <a
                      href="#"
                      className="inline-block mt-4 text-secondary font-semibold"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
