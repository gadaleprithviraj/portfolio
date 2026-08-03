import React from 'react';
import { ExternalLink, Database, FolderGit2, AlertTriangle, Eye, ShieldAlert } from 'lucide-react';
import { projects } from '../data/projects';

export const Projects = () => {
  // Check if URL can be embedded (needs to be publish to web /view?, /embed?, or reportEmbed)
  const checkEmbeddable = (url) => {
    if (!url) return false;
    return url.includes('/view?') || url.includes('/embed?') || url.includes('reportEmbed');
  };

  // Render a clean fallback preview instructions card
  const renderEmbedPlaceholder = (url, isLarge = false) => {
    return (
      <div className={`flex flex-col items-center justify-center bg-brand-bg/40 border border-dashed border-brand-border rounded p-6 text-center ${isLarge ? 'min-h-[350px] lg:h-full' : 'h-44'} gap-3`}>
        <ShieldAlert className="text-brand-gold stroke-1" size={isLarge ? 40 : 28} />
        <div>
          <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-text-dark mb-1">
            Live Preview Unavailable
          </h4>
          <p className="text-[10px] text-brand-text-muted leading-relaxed max-w-sm mx-auto font-serif">
            This dashboard uses a private sharing link which requires authentication. Open it externally or publish it to web to enable the preview.
          </p>
        </div>
        
        {isLarge && (
          <div className="bg-white border border-brand-border/60 p-3 rounded text-[9px] text-left text-brand-text-muted max-w-md font-sans">
            <span className="font-bold text-brand-text-dark block mb-1">How to enable public embedding:</span>
            1. Open the report in your Power BI Service workspace.<br />
            2. Click on **File &gt; Embed report &gt; Publish to web (public)**.<br />
            3. Copy the URL from the first box and paste it into the `dashboardUrl` property in `src/data/projects.js`.
          </div>
        )}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/20 transition-all text-[10px] font-bold uppercase tracking-wider rounded cursor-pointer mt-1"
        >
          Open Full Dashboard ↗
        </a>
      </div>
    );
  };

  // Render dynamic Power BI report iframe or instruction card
  const renderLivePreview = (url, isLarge = false) => {
    if (!url) return null;
    const isEmbeddable = checkEmbeddable(url);

    if (isEmbeddable) {
      return (
        <div className={`w-full relative overflow-hidden bg-brand-bg rounded border border-brand-border ${isLarge ? 'min-h-[350px] lg:h-full aspect-video' : 'h-44 aspect-video'}`}>
          <iframe
            src={url}
            className="absolute top-0 left-0 w-full h-full border-0"
            title="Interactive Power BI Dashboard"
            allowFullScreen={true}
          ></iframe>
        </div>
      );
    }

    return renderEmbedPlaceholder(url, isLarge);
  };

  // Filter projects by type for distinct layouts
  const featuredProjects = projects.filter(p => p.category === "Data Analytics");
  const biDashboards = projects.filter(p => p.category === "Business Intelligence");
  const techSystems = projects.filter(p => p.category !== "Data Analytics" && p.category !== "Business Intelligence");

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Banner Header */}
      <section 
        className="relative h-[220px] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 38, 30, 0.6), rgba(42, 38, 30, 0.6)), url('https://lh3.googleusercontent.com/sitesv/AG8ngQUrx1Dlq6uEBdxwhkTW-f7L6L0Wrq-cvOmvpMq9QWwgzZudsMMwSPQQBbNmR_QqT46_OwdtnV4tPY7whJCjymDHWl3ROz9a0rJZ4mu5n7F0153s37p2Z1GYNGeN1ZfL78Nj07SNWyXKXeU3NSDT1xaBOi1ZVwWVYARDK9DG1PAbiILIco0NGQcM4X8dod8reb1ztRlbI8qyO1ZoRNI2WuXlRSrgC9CxclDpPCh5uAk=w1280')`
        }}
      >
        <div className="text-center px-4 reveal active">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
            My Projects
          </h1>
          <p className="text-xs sm:text-base font-heading font-medium tracking-widest text-[#cea964] uppercase">
            Data Analytics, Web Apps & Business Intelligence Dashboards
          </p>
        </div>
      </section>

      {/* Main Analytics Dashboards (Prominent Layouts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-heading font-bold text-brand-text-dark mb-3 gold-line">
            Featured Analytics Dashboards
          </h2>
          <p className="text-xs text-brand-text-muted font-sans tracking-wide uppercase">
            Deep dive data modeling & performance reporting
          </p>
        </div>

        {featuredProjects.map((p, idx) => (
          <div key={idx} className="gold-card bg-white p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal active">
            {/* Project Details (Left column on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left h-full">
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Database size={12} className="text-brand-gold" />
                    {p.category}
                  </span>
                  <span>{p.year}</span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-text-dark mb-4 leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-serif mb-6">
                  {p.description}
                </p>

                {/* Bullet Accomplishments */}
                {p.accomplishments && p.accomplishments.length > 0 && (
                  <div className="mb-6 bg-brand-bg/50 border border-brand-border/60 rounded p-4">
                    <h4 className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-text-muted mb-2.5">
                      Key Accomplishments
                    </h4>
                    <ul className="space-y-2">
                      {p.accomplishments.map((insight, insIdx) => (
                        <li key={insIdx} className="text-[11px] text-brand-text leading-relaxed flex items-start gap-2 font-serif">
                          <span className="text-brand-gold mt-0.5">•</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies & CTA Buttons */}
              <div className="pt-4 border-t border-brand-border/40">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="text-[9px] font-semibold text-brand-gold bg-brand-bg border border-brand-border/60 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {p.dashboardUrl && (
                    <a
                      href={p.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-brand-gold hover:bg-brand-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer text-center inline-flex items-center gap-1.5 shadow"
                    >
                      Open Full Dashboard
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border border-brand-border text-brand-text-muted hover:border-brand-gold hover:text-brand-gold transition-all text-xs font-bold uppercase tracking-wider rounded cursor-pointer text-center inline-flex items-center gap-1.5"
                    >
                      <FolderGit2 size={13} />
                      Code Source
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Live Interactive Embed (Right column on desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {renderLivePreview(p.dashboardUrl, true)}
            </div>
          </div>
        ))}
      </section>

      {/* Standard BI Dashboards Grid (Small Interactive Previews inside Cards) */}
      <section className="border-t border-brand-border bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-brand-text-dark mb-3 gold-line">
              Power BI Dashboards
            </h2>
            <p className="text-xs text-brand-text-muted font-sans tracking-wide uppercase">
              Interactive reports & analytical snapshots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {biDashboards.map((p, idx) => (
              <div key={idx} className="gold-card bg-brand-bg/10 p-6 flex flex-col justify-between h-full reveal active">
                <div>
                  {/* Preview Header Block */}
                  <div className="mb-4">
                    {renderLivePreview(p.dashboardUrl, false)}
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-brand-text-muted mb-2">
                    <span className="flex items-center gap-1">
                      <Database size={11} className="text-brand-gold" />
                      {p.category}
                    </span>
                    <span>{p.year}</span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-brand-text-dark mb-3 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs text-brand-text leading-relaxed font-serif mb-4">
                    {p.description}
                  </p>

                  {/* Bullet Accomplishments */}
                  {p.accomplishments && p.accomplishments.length > 0 && (
                    <div className="mb-4 bg-white border border-brand-border/60 rounded p-3">
                      <ul className="space-y-1.5">
                        {p.accomplishments.map((insight, insIdx) => (
                          <li key={insIdx} className="text-[10px] text-brand-text leading-relaxed flex items-start gap-1.5 font-serif">
                            <span className="text-brand-gold mt-0.5">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-brand-border/40">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="text-[8px] font-semibold text-brand-gold bg-white border border-brand-border/60 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.dashboardUrl && (
                    <a
                      href={p.dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1.5 px-4 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all text-xs font-bold uppercase tracking-wider rounded cursor-pointer text-center"
                    >
                      View Interactive Dashboard
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Systems Section (Food Waste & Project Manager) */}
      <section className="border-t border-brand-border py-16 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-brand-text-dark mb-3 gold-line">
              Technical & Software Projects
            </h2>
            <p className="text-xs text-brand-text-muted font-sans tracking-wide uppercase">
              Web & Mobile Application Architectures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {techSystems.map((p, idx) => (
              <div key={idx} className="gold-card bg-white overflow-hidden flex flex-col justify-between h-full reveal active">
                {/* Visual Thumbnail */}
                {p.image && (
                  <div className="w-full h-44 overflow-hidden border-b border-brand-border bg-brand-bg flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-brand-text-muted mb-2">
                      <span className="flex items-center gap-1">
                        <FolderGit2 size={11} className="text-brand-gold" />
                        {p.category}
                      </span>
                      <span>{p.year}</span>
                    </div>

                    <h3 className="font-heading font-bold text-sm sm:text-base text-brand-text-dark mb-3 leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-xs text-brand-text leading-relaxed font-serif mb-4">
                      {p.description}
                    </p>

                    {/* Features list */}
                    {p.accomplishments && p.accomplishments.length > 0 && (
                      <div className="mb-4 bg-brand-bg/50 border border-brand-border/60 rounded p-3">
                        <h4 className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-text-muted mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {p.accomplishments.map((insight, insIdx) => (
                            <li key={insIdx} className="text-[10px] text-brand-text leading-relaxed flex items-start gap-1.5 font-serif">
                              <span className="text-brand-gold mt-0.5">•</span>
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-brand-border/40">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.technologies.map((t, tIdx) => (
                        <span key={tIdx} className="text-[8px] font-semibold text-brand-gold bg-brand-bg border border-brand-border/60 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    {/* No Power BI links or liveDemo since they do not have them */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
