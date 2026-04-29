"use client";
import { useState } from "react";
import styles from "./AboutForm.module.css";

export default function AboutForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.inner}`}>
        {/* Left: About text */}
        <div className={styles.textCol}>
          <p className="section-label">Why Elis Family Law</p>
          <div className="divider-gold" />
          <h2 className={`section-title section-title--dark ${styles.heading}`}>
            We Put Your <em>Family First</em>
          </h2>
          <p className={styles.body}>
            For over two decades, Elis Family Law has been a trusted pillar of
            compassionate legal advocacy. We understand that no two families are
            alike — which is why every case receives a personalised strategy
            crafted around your unique circumstances and goals.
          </p>
          <p className={styles.body}>
            Our partners bring a combined 60+ years of courtroom experience,
            combining sharp legal acumen with genuine empathy for every client
            we serve. From navigating complex divorce proceedings to protecting
            your children's futures, we are steadfast advocates in your corner.
          </p>
          <ul className={styles.pillars}>
            {[
              "Personalised legal strategy for every case",
              "Transparent communication & honest counsel",
              "Dedicated to protecting your family's future",
            ].map((item) => (
              <li key={item} className={styles.pillarItem}>
                <span className={styles.checkIcon}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Lead Form */}
        <div className={styles.formCol} id="contact">
          {submitted ? (
            <div className={styles.successMsg}>
              <span className={styles.successIcon}>✓</span>
              <h3>Thank You!</h3>
              <p>We&apos;ve received your enquiry and will be in touch within one business day.</p>
            </div>
          ) : (
            <>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Get Your Free Consultation</h3>
                <p className={styles.formSub}>Confidential · No Obligation · Respond Within 24 Hours</p>
              </div>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.fieldGroup}>
                  <input
                    id="form-name"
                    type="text"
                    placeholder="Full Name *"
                    required
                    className={styles.input}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <input
                    id="form-email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    className={styles.input}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <input
                    id="form-phone"
                    type="tel"
                    placeholder="Phone Number"
                    className={styles.input}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <textarea
                    id="form-message"
                    placeholder="Briefly describe your situation..."
                    rows={4}
                    className={`${styles.input} ${styles.textarea}`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className={`btn-gold ${styles.submitBtn}`} id="form-submit">
                  Request Consultation →
                </button>
                <p className={styles.privacy}>
                  🔒 Your information is kept strictly confidential.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
