import Image from "next/image";
import styles from "./Offices.module.css";

const offices = [
  {
    id: "office-austin",
    city: "Austin",
    address: "500 W 5th St, Suite 1200",
    phone: "(512) 445-0220",
    img: "/office-1.png",
  },
  {
    id: "office-dallas",
    city: "Dallas",
    address: "1717 Main St, Suite 3400",
    phone: "(214) 882-1190",
    img: "/office-2.png",
  },
  {
    id: "office-houston",
    city: "Houston",
    address: "811 Main St, Suite 2200",
    phone: "(713) 523-4401",
    img: "/office-1.png",
  },
  {
    id: "office-san-antonio",
    city: "San Antonio",
    address: "112 E Pecan St, Suite 800",
    phone: "(210) 361-7730",
    img: "/office-2.png",
  },
];

export default function Offices() {
  return (
    <section className={styles.section} id="offices">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Find Us</p>
          <div className="divider-gold" style={{ margin: "0 auto 24px" }} />
          <h2 className={`section-title section-title--dark ${styles.title}`}>
            Our <em>Office Locations</em>
          </h2>
          <p className={styles.subtitle}>
            Four convenient offices across Texas — always close when you need us most.
          </p>
        </div>

        <div className={styles.grid}>
          {offices.map((office) => (
            <div key={office.id} className={styles.card} id={office.id}>
              <div className={styles.imgWrap}>
                <Image
                  src={office.img}
                  alt={`Elis Family Law ${office.city} office`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className={styles.imgOverlay} />
                <span className={styles.cityLabel}>{office.city}</span>
              </div>
              <div className={styles.details}>
                <div className={styles.detailRow}>
                  <span className={styles.icon}>📍</span>
                  <span>{office.address}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.icon}>📞</span>
                  <span>{office.phone}</span>
                </div>
                <a href="#contact" className={styles.dirLink} id={`${office.id}-directions`}>
                  Get Directions →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
