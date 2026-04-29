import Image from "next/image";
import styles from "./Partners.module.css";

const partners = [
  {
    id: "partner-1",
    name: "Margaret A. Elis",
    title: "Founding Partner & Senior Counsel",
    bio: "With over 28 years of family law practice, Margaret founded Elis Family Law on the belief that every client deserves fierce, compassionate representation. She is Board Certified in Family Law and recognised annually in the Top 100 Trial Lawyers.",
    img: "/partner-1.png",
    specialties: ["Complex Divorce", "High-Asset Division", "Mediation"],
  },
  {
    id: "partner-2",
    name: "Daniel R. Whitmore",
    title: "Managing Partner",
    bio: "Daniel brings 22 years of litigation experience with a particular focus on child custody and parental rights. A former judicial clerk, his insight into courtroom dynamics gives clients a decisive strategic advantage.",
    img: "/partner-2.png",
    specialties: ["Child Custody", "Parental Rights", "Domestic Violence"],
  },
  {
    id: "partner-3",
    name: "Sofia M. Reyes",
    title: "Partner, Estate & Family Planning",
    bio: "Sofia's dual expertise in family law and estate planning makes her uniquely positioned to help families plan holistically. She has helped thousands of clients protect their legacies and secure their children's futures.",
    img: "/partner-3.png",
    specialties: ["Estate Planning", "Prenuptial Agreements", "Adoption"],
  },
];

export default function Partners() {
  return (
    <section className={styles.section} id="partners">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Our Team</p>
          <div className="divider-gold" style={{ margin: "0 auto 24px" }} />
          <h2 className={`section-title section-title--dark ${styles.title}`}>
            Meet Our <em>Partners</em>
          </h2>
          <p className={styles.subtitle}>
            Seasoned advocates dedicated to protecting what matters most — your family.
          </p>
        </div>

        <div className={styles.grid}>
          {partners.map((p) => (
            <div key={p.id} className={styles.card} id={p.id}>
              <div className={styles.imgWrap}>
                <Image
                  src={p.img}
                  alt={`Portrait of ${p.name}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top", filter: "grayscale(100%)" }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.partnerTitle}>{p.title}</p>
                <div className={styles.titleDivider} />
                <p className={styles.bio}>{p.bio}</p>
                <div className={styles.specialties}>
                  {p.specialties.map((s) => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className="btn-gold" id="partners-cta">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
