import type { Metadata } from 'next'
import Script from 'next/script'
import ScholarshipCta from '@/components/ScholarshipCta'

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
  .scholarship-landing .flag-strip{
    font-size:26px;
    letter-spacing:8px;
    margin-bottom:18px;
  }

  .scholarship-landing .stamp-btn{
    position:relative;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    width:100%;
    max-width:340px;
    padding:22px 24px;
    margin-top:8px;
    background:var(--stamp);
    color:#fff;
    border:3px solid var(--ink);
    border-radius:3px;
    font-family:'Courier New', monospace;
    font-size:16px;
    font-weight:700;
    letter-spacing:1.5px;
    text-transform:uppercase;
    cursor:pointer;
    box-shadow:5px 5px 0 var(--ink);
    transition:transform 0.08s ease, box-shadow 0.08s ease;
  }
  .scholarship-landing .stamp-btn:active{
    transform:translate(5px, 5px);
    box-shadow:0 0 0 var(--ink);
  }
  .scholarship-landing .stamp-btn-arrow{font-size:20px;}
  .scholarship-landing .stamp-btn.stamped{
    animation:scholarshipStampPress 0.25s ease;
  }
  @keyframes scholarshipStampPress{
    0%{transform:scale(1) rotate(0deg);}
    40%{transform:scale(0.92) rotate(-2deg);}
    100%{transform:scale(1) rotate(0deg);}
  }
  .scholarship-landing .fine-print{
    text-align:center;
    font-size:11px;
    color:rgba(15,27,43,0.5);
    margin-top:12px;
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
          <div className="eyebrow">Fully Funded · No IELTS Required</div>
          <div className="flag-strip">🇺🇸 🇨🇦 🇬🇧 🇩🇪</div>
          <h1>
            Your dream country is one <em>stamp</em> away.
          </h1>
          <p className="sub">
            10 fully funded scholarships open right now for Nigerians. No agents. No hidden fees.
          </p>

          <ScholarshipCta />
        </div>
      </div>

      <footer>
        <div className="wrap">SCHOLARSHIP DESK · NO AGENTS · NO HIDDEN FEES</div>
      </footer>
    </div>
  )
}
