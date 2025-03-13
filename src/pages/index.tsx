import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ChatToChart from '../components/ChatToChart';
import DatabaseContext from '../components/DatabaseContext';
import Pricing from '../components/Pricing';
import SqlEditor from '../components/SqlEditor';
import TableExplorer from '../components/TableExplorer';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Basedash | The AI-native Business Intelligence Platform</title>
        <meta name="description" content="Basedash is the AI-native Business Intelligence Platform. Generate beautiful charts and dashboards using natural language." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Sidebar />
        
        <main>
          <section id="dashboards">
            <Hero />
          </section>
          
          <section id="chat-to-chart">
            <ChatToChart />
          </section>
          
          <section id="context">
            <DatabaseContext />
          </section>
          
          <section id="integrations" className="py-20 bg-bd-black">
            <div className="container mx-auto px-6 text-center">
              <div className="mb-10">
                <div className="inline-flex bg-bd-black rounded-full px-4 py-1 border border-bd-border">
                  <div className="text-xs flex items-center">
                    <span className="text-bd-text">AICPA</span>
                    <div className="mx-2 h-4 w-px bg-bd-border"></div>
                    <span className="text-bd-text">SOC 2</span>
                    <div className="mx-2 h-4 w-px bg-bd-border"></div>
                    <span className="text-bd-text">TYPE 2</span>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight mb-4 text-bd-text">Visualize data from<br />600+ products</h2>
              <p className="text-xl text-bd-text-secondary mb-8 max-w-2xl mx-auto">
                Make dashboards for analytics, sales, marketing, database,<br />
                finance or operations data. All in one place.
              </p>
              <a href="#" className="text-sm text-bd-blue inline-flex items-center hover:underline">
                Explore 600+ integrations
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              {/* Integration logos */}
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                {['Snowflake', 'Google', 'Stripe', 'Box', 'Auth0'].map((name) => (
                  <div key={name} className="w-16 h-16 bg-bd-card border border-bd-border rounded-lg flex items-center justify-center">
                    <div className="text-xs text-bd-text-secondary">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section id="pricing">
            <Pricing />
          </section>
          
          <section id="features">
            <SqlEditor />
            <TableExplorer />
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}