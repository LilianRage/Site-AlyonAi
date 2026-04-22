import React from 'react';
import { FadeIn } from '../ui/Animations';
import { useLanguage } from '../../contexts/LanguageContext';

const VisionSection = () => {
  const { t } = useLanguage();
  const v = t.vision;

  return (
    <section id="vision" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xl font-medium text-gray-500 uppercase tracking-wider mb-4 block">
              {v.label}
            </span>
          </div>
        </FadeIn>

        {/* Vision Story + Stats */}
        <div
          className="vision-content-wrapper"
          style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'flex-start',
            marginTop: '50px',
            position: 'relative',
            flexDirection: 'row',
          }}
        >
          {/* Text left */}
          <div className="vision-text-left" style={{ flex: '0 0 65%', paddingRight: '20px' }}>
            <FadeIn>
              <div className="space-y-6 text-left">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  {v.p1}
                </p>
                <p
                  className="text-base md:text-lg text-gray-700 leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: v.p2 }}
                />
                <p
                  className="text-base md:text-lg text-gray-700 leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: v.p3 }}
                />
                <p
                  className="text-base md:text-lg text-gray-700 leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: v.p4 }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Vertical separator */}
          <div
            className="vision-separator"
            style={{
              position: 'absolute',
              left: 'calc(70% - 30px)',
              top: 0,
              bottom: 0,
              width: '1px',
              background:
                'linear-gradient(to bottom, transparent 0%, #d1d5db 10%, #d1d5db 90%, transparent 100%)',
            }}
          >
            {[20, 50, 80].map((top) => (
              <div
                key={top}
                style={{
                  position: 'absolute',
                  top: `${top}%`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#000',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                }}
              />
            ))}
          </div>

          {/* Stats right */}
          <div className="vision-stats-right" style={{ flex: '0 0 25%', paddingLeft: '20px' }}>
            <FadeIn delay={200}>
              <div className="flex flex-col gap-8">
                <StatBlock title={v.stat1Title} sub={v.stat1Sub} desc={v.stat1Desc} />
                <StatBlock title={v.stat2Title} sub={v.stat2Sub} desc={v.stat2Desc} />
                <StatBlock title={v.stat3Title} sub={v.stat3Sub} desc={v.stat3Desc} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBlock = ({ title, sub, desc }) => (
  <div className="group">
    <div className="text-2xl md:text-3xl font-bold text-black mb-1 inline-block relative tracking-tighter">
      {title}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
    </div>
    <div className="text-xs text-gray-500 uppercase tracking-wider mt-2 mb-1">{sub}</div>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default VisionSection;
