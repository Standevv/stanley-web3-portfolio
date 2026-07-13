export function RwaVisual() {
  return (
    <div className="visual visual-rwa" aria-hidden="true">
      <div className="rwa-ledger">
        <span>ORIGIN</span>
        <span>ISSUE</span>
        <span>MOVE</span>
      </div>
      <div className="rwa-orbit orbit-one" />
      <div className="rwa-orbit orbit-two" />
      <div className="rwa-core"><span>RWA</span></div>
      <div className="rwa-node node-a" />
      <div className="rwa-node node-b" />
      <div className="rwa-node node-c" />
    </div>
  );
}

export function StablecoinVisual() {
  return (
    <div className="visual visual-stablecoin" aria-hidden="true">
      <div className="stable-topline"><span>RESERVE</span><span>RAIL</span><span>REACH</span></div>
      <div className="stable-coin coin-back">$</div>
      <div className="stable-coin coin-front"><span>01</span><b>$</b><small>SETTLEMENT</small></div>
      <div className="stable-wave wave-a" />
      <div className="stable-wave wave-b" />
      <div className="stable-ticker">VALUE / INTERNET SPEED / 24—7</div>
    </div>
  );
}

export function CampaignVisual() {
  return (
    <div className="visual visual-campaign" aria-hidden="true">
      <div className="campaign-label">VISUAL SYSTEM / 02</div>
      <div className="poster poster-a"><span>PHYSICAL</span><b>↘</b><span>ONCHAIN</span></div>
      <div className="poster poster-b"><small>FROM ASSETS</small><strong>TO<br />INFORMATION</strong><i>XBIT</i></div>
      <div className="poster poster-c"><span>SKEY</span><strong>ACCESS<br />IS AN ASSET</strong></div>
    </div>
  );
}

export function AcademicVisual() {
  return (
    <div className="visual visual-academic" aria-hidden="true">
      <div className="academic-grid" />
      <div className="atom atom-sn"><span>Sn</span><small>2+</small></div>
      <div className="atom atom-i atom-i-a">I</div>
      <div className="atom atom-i atom-i-b">I</div>
      <div className="atom atom-i atom-i-c">I</div>
      <div className="bond bond-a" />
      <div className="bond bond-b" />
      <div className="bond bond-c" />
      <div className="academic-readout"><span>α-FASnI₃</span><b>OXIDATION PATHWAY</b></div>
    </div>
  );
}
