import React from "react";

/**
 * The iridescent sweep from the Summit artwork, rebuilt in CSS so it can
 * breathe behind the hero. Kept soft and to the edges so the centre of the
 * page stays white. Purely decorative.
 */
const Aurora: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
  >
    <div className="absolute -right-[24%] -top-[52%] h-[72vw] w-[72vw] animate-drift-slow rounded-full bg-[radial-gradient(closest-side,rgba(112,204,186,0.5),rgba(112,204,186,0.16)_55%,rgba(112,204,186,0)_100%)] blur-[70px]" />
    <div className="absolute -bottom-[56%] -left-[28%] h-[80vw] w-[80vw] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(147,137,209,0.5),rgba(147,137,209,0.16)_55%,rgba(147,137,209,0)_100%)] blur-[70px]" />
    <div className="absolute -bottom-[46%] -right-[14%] h-[58vw] w-[58vw] animate-drift-slow rounded-full bg-[radial-gradient(closest-side,rgba(93,79,183,0.36),rgba(93,79,183,0.1)_58%,rgba(93,79,183,0)_100%)] blur-[70px]" />
    <div className="absolute -left-[10%] -top-[22%] h-[38vw] w-[38vw] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(10,174,120,0.2),rgba(10,174,120,0)_100%)] blur-[70px]" />
  </div>
);

export default Aurora;
