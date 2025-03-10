import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  detail?: string;
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-bd-black" id="dashboards">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight text-bd-text">
          The AI-native Business Intelligence Platform
        </h1>
        <p className="mt-6 text-xl text-bd-text-secondary max-w-2xl mx-auto">
          Generate beautiful charts and dashboards to understand your customers and business using natural language.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="/signup" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
            Sign up
          </a>
          <a href="#demo" className="border border-bd-border px-6 py-3 rounded-md font-medium hover:border-gray-500 transition-colors">
            Request a demo
          </a>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <MetricCard title="Conversions" value="4.2k" change="+15%" detail="(125)" />
          <MetricCard title="Active users" value="890" />
          <MetricCard title="Transactions" value="120k" change="+13%" detail="(12h)" />
        </div>
      </div>
    </section>
  );
}

function MetricCard({ title, value, change, detail }: MetricCardProps) {
  return (
    <div className="bg-bd-card/60 rounded-lg p-6 flex flex-col items-center border border-bd-border/50">
      <p className="text-sm text-bd-text-secondary">{title}</p>
      <p className="text-4xl font-bold mt-2 text-bd-text">{value}</p>
      {change && (
        <div className="flex items-center mt-1">
          <p className="text-sm text-bd-green">{change}</p>
          {detail && <p className="text-xs text-bd-text-tertiary ml-1">{detail}</p>}
        </div>
      )}
    </div>
  );
}