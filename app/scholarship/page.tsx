import type { Metadata } from 'next'
import Script from 'next/script'
import ScholarshipPicker from '@/components/ScholarshipPicker'

export const metadata: Metadata = {
  title: 'Pick Your Country. Start Your Scholarship.',
  description:
    'Watch the video. Pick where you want to study. We’ll send you the exact scholarships open right now.',
  alternates: { canonical: '/scholarship/' },
  robots: { index: false, follow: false },
}

const css = `
  .scholarship-landing{
    --ink:#0F1B2B;
    --paper:#F7F4EC;
    --stamp:#B23A2E;
    --stamp-ink:#8A2B22;
    --gold:#C79A3C;
    --line:rgba(15,27,43,0.15);
    background:var(--paper);
    color:var(--ink);
    font-family:'Georgia', 'Iowan Old Style', serif;
    line-height:1.4;
    -webkit-font-smoothing:antialiased;
  }
  .scholarship-landing *{box-sizing:border-box;}
  .scholarship-landing .wrap{max-width:480px; margin:0 auto; padding:0 20px;}

  .scholarship-landing .hero{
    padding:48px 20px 32px;
    text-align:center;
    border-bottom:2px solid var(--ink);
    background:
      radial-gradient(circle at 85% 10%, rgba(178,58,46,0.06), transparent 40%),
      var(--paper);
  }
  .scholarship-landing .eyebrow{
    font-family:'Courier New', monospace;
    font-size:12px;
    letter-spacing:3px;
    text-transform:uppercase;
    color:var(--stamp-ink);
    margin-bottom:14px;
  }
  .scholarship-landing h1{
    font-size:30px;
    line-height:1.15;
    font-weight:700;
    letter-spacing:-0.3px;
    margin-bottom:14px;
  }
  .scholarship-landing h1 em{
    font-style:italic;
    color:var(--stamp);
  }
  .scholarship-landing .sub{
    font-size:15px;
    color:rgba(15,27,43,0.72);
    max-width:340px;
    margin:0 auto 22px;
  }
  .scholarship-landing .stat-row{
    display:flex;
    justify-content:center;
    gap:22px;
    font-family:'Courier New', monospace;
    font-size:11px;
    letter-spacing:0.5px;
    color:var(--ink);
    border-top:1px dashed var(--line);
    border-bottom:1px dashed var(--line);
    padding:10px 0;
  }
  .scholarship-landing .stat-row b{display:block; font-size:16px; font-family:Georgia, serif;}

  .scholarship-landing .picker{padding:32px 20px 8px;}
  .scholarship-landing .picker h2{
    font-size:14px;
    text-transform:uppercase;
    letter-spacing:2px;
    text-align:center;
    color:rgba(15,27,43,0.55);
    margin-bottom:18px;
    font-family:'Courier New', monospace;
  }
  .scholarship-landing .countries{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
  }
  .scholarship-landing .country-btn{
    display:flex;
    align-items:center;
    gap:10px;
    padding:16px 14px;
    background:var(--paper);
    border:2px solid var(--ink);
    border-radius:2px;
    font-family:Georgia, serif;
    font-size:15px;
    font-weight:700;
    color:var(--ink);
    cursor:pointer;
    text-align:left;
    transition:transform 0.12s ease, background 0.12s ease;
    position:relative;
  }
  .scholarship-landing .country-btn .flag{font-size:20px;}
  .scholarship-landing .country-btn:active{transform:scale(0.97);}
  .scholarship-landing .country-btn.selected{
    background:var(--ink);
    color:var(--paper);
  }
  .scholarship-landing .country-btn.selected::after{
    content:"\\2713 STAMPED";
    position:absolute;
    bottom:-9px;
    right:8px;
    font-family:'Courier New', monospace;
    font-size:9px;
    letter-spacing:1px;
    background:var(--stamp);
    color:#fff;
    padding:2px 6px;
    transform:rotate(-4deg);
  }

  .scholarship-landing .form-section{
    padding:36px 20px 20px;
    display:none;
  }
  .scholarship-landing .form-section.active{display:block;}
  .scholarship-landing .form-section h3{
    font-size:18px;
    text-align:center;
    margin-bottom:6px;
  }
  .scholarship-landing .form-section .picked{
    text-align:center;
    font-family:'Courier New', monospace;
    font-size:12px;
    color:var(--stamp-ink);
    margin-bottom:20px;
  }

  .scholarship-landing .cta-btn{
    width:100%;
    padding:17px;
    background:var(--stamp);
    color:#fff;
    border:none;
    border-radius:2px;
    font-family:Georgia, serif;
    font-size:16px;
    font-weight:700;
    letter-spacing:0.3px;
    cursor:pointer;
    margin-top:6px;
    transition:background 0.15s ease;
  }
  .scholarship-landing .cta-btn:active{background:var(--stamp-ink);}
  .scholarship-landing .fine-print{
    text-align:center;
    font-size:11px;
    color:rgba(15,27,43,0.5);
    margin-top:10px;
    font-family:'Courier New', monospace;
  }

  .scholarship-landing footer{
    padding:26px 20px 40px;
    text-align:center;
    font-family:'Courier New', monospace;
    font-size:10px;
    letter-spacing:1px;
    color:rgba(15,27,43,0.45);
    border-top:2px solid var(--ink);
    margin-top:20px;
  }

  @media (prefers-reduced-motion: reduce){
    .scholarship-landing *{transition:none !important;}
  }
`

export default function ScholarshipLandingPage() {
  return (
    <div className="scholarship-landing">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Script
        id="ms-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xrocnm32qw");
          `,
        }}
      />

      <div className="hero">
        <div className="wrap">
          <div className="eyebrow">Fully Funded · No Application Fee</div>
          <h1>
            Your dream country is one <em>stamp</em> away.
          </h1>
          <p className="sub">
            Watch the video. Pick where you want to study. We&apos;ll send you the exact
            scholarships open right now.
          </p>
          <div className="stat-row">
            <div>
              <b>2,400+</b>students placed
            </div>
            <div>
              <b>18</b>countries
            </div>
            <div>
              <b>0</b>application fee
            </div>
          </div>
        </div>
      </div>

      <ScholarshipPicker />

      <footer>
        <div className="wrap">SCHOLARSHIP DESK · NO AGENTS · NO HIDDEN FEES</div>
      </footer>
    </div>
  )
}
