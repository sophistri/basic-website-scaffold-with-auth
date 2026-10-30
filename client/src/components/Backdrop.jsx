import PixelSprite, { CLOUD_PINK, CLOUD_BLUE, STAR, HEART } from './PixelSprite';

// Fixed decorative layer behind every page: drifting clouds + twinkling stars.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <span className="bd bd-cloud-a"><PixelSprite {...CLOUD_PINK} px={8} /></span>
      <span className="bd bd-cloud-b"><PixelSprite {...CLOUD_BLUE} px={6} /></span>
      <span className="bd bd-cloud-c"><PixelSprite {...CLOUD_BLUE} px={10} /></span>
      <span className="bd bd-star-a"><PixelSprite {...STAR} px={4} /></span>
      <span className="bd bd-star-b"><PixelSprite {...STAR} px={3} /></span>
      <span className="bd bd-star-c"><PixelSprite {...STAR} px={5} /></span>
      <span className="bd bd-heart"><PixelSprite {...HEART} px={4} /></span>
    </div>
  );
}
