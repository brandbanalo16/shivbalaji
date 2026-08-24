'use client';
import { useRef, useEffect } from 'react';

const infoCards = [
  { icon: "icon-34", label: "Trusted Industry", title: "7+ Years Experience" },
  { icon: "icon-10", label: "Request a Quote", title: "ISO Certified" },
  { icon: "icon-12", label: "Quick Support", title: "24/7 Online Support" },
  { icon: "icon-13", label: "1000+ Hospitals Trust Us", title: "Trusted Nationwide" },
];

function InfoCardsRow() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (window.innerWidth > 767) return; // Only on mobile
      
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScrollLeft - 5) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .info-cards-slider-mobile {
            display: flex;
            flex-wrap: nowrap !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 15px;
            padding-bottom: 10px;
            margin-left: -15px;
            margin-right: -15px;
            padding-left: 15px;
            padding-right: 15px;
            scrollbar-width: none; /* Firefox */
          }
          .info-cards-slider-mobile::-webkit-scrollbar {
            display: none; /* Chrome, Safari */
          }
          .info-cards-slider-mobile .info-block {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            scroll-snap-align: center;
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
      <div ref={sliderRef} className="row clearfix info-cards-row info-cards-slider-mobile">
        {infoCards.map((card) => (
          <div key={card.title} className="col-lg-3 col-md-6 col-12 info-block">
            <div className="info-block-one" style={{ height: "100%" }}>
              <div className="inner-box" style={{ height: "100%" }}>
                <div className="icon-box"><i className={card.icon}></i></div>
                <span>{card.label}</span>
                <h4>{card.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Contact_Info({ embedded = false }: { embedded?: boolean }) {
  if (embedded) {
    return <InfoCardsRow />;
  }

  return (
    <section className="contact-info-section">
      <div className="auto-container">
        <InfoCardsRow />
      </div>
    </section>
  );
}
