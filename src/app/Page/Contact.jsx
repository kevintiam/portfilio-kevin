"use client";

import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import SocialLinks from "../components/SocialLinks";
import Icon from "../components/Icon";
import { contactInfo } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Copie l'adresse courriel dans le presse-papiers
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  }

  // Le formulaire ouvre la messagerie du visiteur avec le message pré-rempli.
  // (Avant, il faisait seulement console.log : le message n'arrivait jamais.)
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const subject = formData.get("subject") || "Contact depuis ton portfolio";
    const message = formData.get("message");
    const body = `${message}\n\n— ${name}`;
    window.location.href =
      `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <SectionHeader number="05" label="Contact" title="Construisons la suite." />

        <div className="contact-grid">
          <div className="contact-left" data-aos="fade-right">
            <p className="contact-lead">
              Je cherche un poste de <strong>développeur junior</strong> (full-stack, frontend ou backend)
              partout au Canada, en télétravail ou à Ottawa. Une question, une offre ? Écrivez-moi.
            </p>

            <button className="email-big" onClick={copyEmail}>
              <span className="email-big-text">{contactInfo.email}</span>
              <span className="email-big-action">
                <Icon name={copied ? "check" : "copy"} />
                {copied ? "Copié !" : "Copier"}
              </span>
            </button>

            <ul className="contact-list">
              <li>
                <Icon name="phone" />
                <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              </li>
              <li>
                <Icon name="location" />
                <a href={contactInfo.mapHref} target="_blank" rel="noopener noreferrer">
                  {contactInfo.city}
                </a>
              </li>
            </ul>

            <SocialLinks variant="contact" />
          </div>

          <form className="contact-form" data-aos="fade-left" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <input type="text" id="name" name="name" placeholder=" " required autoComplete="name" />
                <label htmlFor="name">Nom complet</label>
              </div>
              <div className="field">
                <input type="email" id="email" name="email" placeholder=" " required autoComplete="email" />
                <label htmlFor="email">Courriel</label>
              </div>
            </div>
            <div className="field">
              <input type="text" id="subject" name="subject" placeholder=" " />
              <label htmlFor="subject">Sujet</label>
            </div>
            <div className="field">
              <textarea id="message" name="message" placeholder=" " required rows={5} maxLength={1000}></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Envoyer le message <Icon name="arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
