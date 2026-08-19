const infoCards = [
  { icon: "icon-34", label: "Trusted Industry", title: "7+ Years Experience" },
  { icon: "icon-10", label: "Request a Quote", title: "ISO Certified" },
  { icon: "icon-12", label: "Quick Support", title: "24/7 Online Support" },
  { icon: "icon-13", label: "1000+ Hospitals Trust Us", title: "Trusted Nationwide" },
];

function InfoCardsRow() {
  return (
    <div className="row clearfix info-cards-row">
      {infoCards.map((card) => (
        <div key={card.title} className="col-lg-3 col-md-6 col-sm-12 info-block">
          <div className="info-block-one">
            <div className="inner-box">
              <div className="icon-box"><i className={card.icon}></i></div>
              <span>{card.label}</span>
              <h4>{card.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
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
