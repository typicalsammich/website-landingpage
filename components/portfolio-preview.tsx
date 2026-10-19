'use client';

import {useEffect, useRef, useState} from 'react';
import type {PortfolioProject} from '@/lib/portfolio';

export default function PortfolioPreview({project, mobile}: {project: PortfolioProject; mobile: boolean}) {
  const viewport = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const frameWidth = mobile ? 390 : 1440;
  const frameHeight = mobile ? 844 : 900;

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => setLoaded(false), [project.url, mobile]);

  return <div className={'portfolio-browser' + (mobile ? ' portfolio-mobile' : '')}>
    <div className="browser-chrome" aria-hidden="true"><i/><i/><i/><span>{project.host}</span></div>
    <div ref={viewport} className="portfolio-viewport" style={{aspectRatio: `${frameWidth} / ${frameHeight}`}}>
      {!loaded && <div className="portfolio-loading" role="status">Loading project preview…</div>}
      {width > 0 && <iframe
        key={project.url + mobile}
        src={project.url}
        title={`${project.name} - ${mobile ? 'mobile' : 'desktop'} preview`}
        width={frameWidth}
        height={frameHeight}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
        referrerPolicy="no-referrer"
        tabIndex={-1}
        onLoad={() => setLoaded(true)}
        style={{transform: `scale(${width / frameWidth})`, opacity: loaded ? 1 : 0}}
      />}
    </div>
    <p className="portfolio-preview-hint">Live {mobile ? 'mobile' : 'desktop'} preview. Open “Visit Website” to explore.</p>
  </div>;
}
