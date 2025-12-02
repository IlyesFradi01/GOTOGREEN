"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import type { Dispatch, ReactNode, SetStateAction } from "react";

const heroStats = [
  { label: "Projects delivered", value: "120+" },
  { label: "Client satisfaction", value: "98%" },
  { label: "Avg. CO₂ savings", value: "34%" },
];

const serviceGroups = [
  {
    category: "Custom Software Products",
    accent: "from-emerald-400/80 to-lime-300/70",
    items: [
      {
        title: "Web Design & Development",
        description: "Modern, responsive websites tailored to your brand.",
      },
      {
        title: "CMS Solutions",
        description: "Easy-to-manage websites with flexible content control.",
      },
      {
        title: "Digital Tools & Software Solutions",
        description:
          "Full-cycle software development built around your workflows.",
      },
    ],
  },
  {
    category: "Mobile Development",
    accent: "from-lime-300/60 to-emerald-500/60",
    items: [
      {
        title: "Mobile Apps & Experiences",
        description:
          "Custom iOS and Android apps designed for performance, usability, and scale.",
      },
      {
        title: "Cross-Platform Efficiency",
        description:
          "Native or cross-platform builds that integrate seamlessly with your systems.",
      },
    ],
  },
  {
    category: "Intelligent Solutions",
    accent: "from-emerald-400/70 to-lime-300/60",
    items: [
      {
        title: "AI-Powered Solutions",
        description:
          "Automation, predictive analytics, and AI-driven tools to enhance your business.",
      },
    ],
  },
  {
    category: "Education & Empowerment",
    accent: "from-emerald-400/40 to-lime-300/30",
    items: [
      {
        title: "Training & Capacity Building",
        description:
          "Expert-led sessions covering sustainability, compliance, and digital best practices.",
      },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    accent: "from-slate-900/80 to-emerald-500/60",
    items: [
      {
        title: "DevOps & Deployment",
        description:
          "Streamlined deployment, CI/CD, and efficient cloud infrastructure management.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Automated provisioning with Terraform, CloudFormation, and modern IaC patterns.",
      },
    ],
  },
  {
    category: "Growth & Optimization",
    accent: "from-emerald-400/70 to-lime-300/50",
    items: [
      {
        title: "SEO & GEO Optimization",
        description: "Improve visibility and reach the right audience.",
      },
      {
        title: "Maintenance & Support",
        description: "Keep your digital presence secure, updated, and smooth.",
      },
    ],
  },
];

const whyChoose = [
  {
    title: "End-to-End Expertise",
    description:
      "From idea to deployment—and long after launch—we support every phase with clear processes and continuous improvement.",
    accent: "from-emerald-400/25 via-transparent to-transparent",
  },
  {
    title: "Advanced Technology, Built to Last",
    description:
      "Modern frameworks, automation, and scalable architectures for fast performance and effortless growth.",
    accent: "from-lime-400/25 via-transparent to-transparent",
  },
  {
    title: "Sustainability by Design",
    description:
      "Eco-efficient development practices reduce digital waste and minimize carbon impact.",
    accent: "from-emerald-500/30 via-transparent to-transparent",
  },
  {
    title: "Client-First Mindset",
    description:
      "Every product is shaped around your goals so the solution truly supports your business.",
    accent: "from-lime-300/30 via-transparent to-transparent",
  },
];

const keyDifferentiators = [
  {
    title: "Proven Delivery",
    description:
      "12+ successful projects across tech, education, sustainability, and digital services.",
    accent: "from-slate-900/20 via-transparent to-transparent",
  },
  {
    title: "Experienced Team",
    description:
      "Combined experience in development, product strategy, and digital innovation.",
    accent: "from-emerald-400/25 via-transparent to-transparent",
  },
  {
    title: "Trusted Results",
    description:
      "A 99% client satisfaction rate backed by long-term partnerships and repeat collaborations.",
    accent: "from-lime-300/25 via-transparent to-transparent",
  },
  {
    title: "Innovation at Our Core",
    description:
      "Active R&D on AI, sustainability, and EU regulatory tech keeps your solutions ahead.",
    accent: "from-emerald-400/30 via-transparent to-transparent",
  },
];



type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
  metric?: string;
  metricLabel?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "soumaya-elkamel",
    quote:
      "Excellent technical expertise, great attention to detail, and truly pleasant collaboration. The project ran smoothly thanks to your professionalism. I look forward to future projects together.",
    author: "Soumaya Elkamel",
    role: "Manager",
    company: "Fondasolution",
    image: "/fondasolution%20logo.png",
  },
  {
    id: "jihen-ben-jrad",
    quote:
      "Your work on our GEO & AI Optimization project has been outstanding. High quality, responsive, and impactful. We value your partnership and look forward to the next phases.",
    author: "Jihen Ben Jrad",
    role: "Communication & Marketing Responsible",
    company: "Amphenol Automotive",
    image: "/Logo_Amphenol.png",
  },
  {
    id: "rima-fathallah",
    quote:
      "Professional, efficient, and reliable. Your team delivered clear, structured, and high-quality results during the SDC Congress challenge. Excellent collaboration.",
    author: "Rima Fathallah",
    role: "Executive Member",
    company: "IEEE SIGHT",
    image: "/IEEE-SIGHT-.jpg",
  },
];

type SocialIconProps = { className?: string };

const LinkedInIcon = ({ className }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.116 20.452H3.554V9h3.562v11.452z" />
  </svg>
);



const SunIcon = ({ className }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 6.07-1.41-1.41M8.34 8.34 6.93 6.93m0 10.14 1.41-1.41m9.33-9.33 1.41-1.41" />
  </svg>
);

const MoonIcon = ({ className }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

const StarIcon = ({ className }: SocialIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="m12 3.25 2.59 5.25 5.91.86-4.25 4.14 1 5.86L12 16.98l-5.25 2.77 1-5.86-4.25-4.14 5.91-.86L12 3.25Z" />
  </svg>
);

type Theme = "dark" | "light";

type SocialLink = {
  label: string;
  href: string;
  icon: (props: SocialIconProps) => ReactNode;
};

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gotoogreen/posts/?feedView=all", icon: LinkedInIcon },

];
const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};


const defaultRecipientEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL ?? "info@pass2green.com";


const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const contactInfo = {
  email: "info@pass2green.com",
  phone: "+216 52 373 375",
  address: "Immeuble Alya Médicale, rue des Olivier · 4001 Khzema, Sousse",
};

export default function Home() {
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("dark");
  const logoSrc = theme === "dark" ? "/Frame.png" : "/Frames.png";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = theme;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div id="home" className="relative min-h-screen overflow-hidden bg-app text-foreground transition-colors duration-300">
      <div className="absolute inset-x-0 -top-80 h-[32rem] bg-emerald-500/20 blur-[160px]" />
      <div className="absolute inset-x-0 top-32 h-[26rem] bg-lime-300/10 blur-[180px]" />

      <header className="section-wrapper relative flex flex-col gap-6 pb-0 pt-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <Image
            src={logoSrc}
            alt="GoToGreen logo"
            width={220}
            height={80}
            priority
            className="h-auto w-40 md:w-60"
          />
          <p className="text-lg font-semibold text-foreground md:text-xl">
            Building smarter, greener digital experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-lg font-semibold text-muted md:flex-row md:items-center">
          <nav className="flex flex-wrap gap-4">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-emerald-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-ghost inline-flex items-center gap-4 text-lg font-bold md:text-base"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? (
              <>
                <SunIcon className="h-4 w-4" />
               
              </>
            ) : (
              <>
                <MoonIcon className="h-4 w-4" />
                
              </>
            )}
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section id="about" className="section-wrapper pt-0">
          <div className="glass-card flex flex-col gap-10 p-10 md:flex-row">
            <div className="flex-1">
              
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Digital Solutions with Purpose
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-muted">
                At GoToGreen, we combine creativity, technology, and responsibility to
                deliver digital experiences that matter. From AI-powered tools to custom
                web applications, every build is efficient, sustainable, and designed to
                help your business thrive responsibly.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary text-base font-semibold">
                  Start Your Project →
                </Link>
                <Link href="#services" className="btn-ghost text-base font-semibold">
                  Explore Our Services
                </Link>
              </div>
            </div>
           
          </div>
        </section>

        <section id="services" className="section-wrapper">
          <div className="mb-8 text-center">
            <p className="tag">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Specialist teams for every layer of your digital stack.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <div key={group.category} className="glass-card relative overflow-hidden p-8">
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-500">
                  {group.category}
                </p>
                <div className="mt-6 space-y-6">
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-soft bg-panel p-5 transition duration-200 hover:-translate-y-1 hover:border-emerald-300/60"
                    >
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-base text-muted">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrapper" id="why">
          <div className="glass-card p-10 text-center">
            <p className="tag">Why Choose Us & Key Differentiators</p>
            <h3 className="mt-3 text-3xl font-semibold text-foreground">
              Responsible innovation, measurable impact.
            </h3>
            <p className="mt-4 text-lg text-muted">
              We blend strategic guidance, sustainable engineering, and proven delivery
              so you can ship purposeful products with confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="glass-card p-8">
              <p className="tag mb-4">Why Choose Us</p>
              <div className="space-y-6">
                {whyChoose.map((item) => (
                  <div
                    key={item.title}
                    className="relative overflow-hidden rounded-2xl border border-soft bg-panel p-5"
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br ${item.accent} opacity-80`}
                    />
                    <div className="relative">
                      <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-2 text-base text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="tag mb-4">Key Differentiators</p>
              <div className="space-y-6">
                {keyDifferentiators.map((item) => (
                  <div
                    key={item.title}
                    className="relative overflow-hidden rounded-2xl border border-soft bg-panel p-5"
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br ${item.accent} opacity-80`}
                    />
                    <div className="relative">
                      <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-2 text-base text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        

        <section id="testimonials" className="section-wrapper">
          <div className="mb-8 text-center">
            <p className="tag">Client Testimonials</p>
            <h3 className="mt-3 text-3xl font-semibold text-foreground">
              Trusted by teams who value responsibility.
            </h3>
          </div>
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group flex flex-col rounded-[28px] border border-soft bg-panel p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_20px_35px_rgba(15,23,42,0.45)]"
              >
                <div className="mb-4 flex gap-1 text-emerald-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon
                      key={`${testimonial.id}-star-${index}`}
                      className="h-4 w-4 opacity-80"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-base leading-relaxed text-soft">
                  “{testimonial.quote}”
                </p>
                {testimonial.metric && (
                  <div className="mb-6 rounded-2xl border border-soft/60 bg-panel/60 p-4">
                    <div className="text-2xl font-bold text-foreground">
                      {testimonial.metric}
                    </div>
                    {testimonial.metricLabel && (
                      <div className="text-xs text-muted">
                        {testimonial.metricLabel}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex items-center gap-3 border-t border-soft/60 pt-4">
                  {testimonial.image && (
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-soft bg-panel">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {testimonial.role}
                    </p>
                    {testimonial.company && (
                      <p className="text-xs font-medium text-emerald-400">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrapper">
          <div className="cta-card relative overflow-hidden rounded-[32px] p-10 shadow-[0_40px_70px_rgba(15,23,42,0.35)]">
            <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:text-left">
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-subtle">
                  Get a Quote
                </p>
                <h3 className="text-3xl font-semibold">
                  Ready to Build Your Digital Solution?
                </h3>
                <p className="mt-3 text-lg text-faint">
                  Let’s create smarter, greener tech together.
                </p>
              </div>
              <Link href="#contact" className="cta-action text-base font-semibold">
                Request a Quote →
              </Link>
            </div>
            <span className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-strong" />
          </div>
        </section>

        <section id="contact" className="section-wrapper">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="glass-card relative overflow-hidden p-8">
              <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-400/30" />
              <p className="tag mb-3">Contact Us</p>
              <h3 className="text-3xl font-semibold text-foreground">Let’s build responsibly.</h3>
              <div className="mt-6 space-y-3 text-muted">
                <p>
                  Email:{" "}
                  <a href="mailto:info@pass2green.com" className="text-emerald-500">
                    info@pass2green.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+21652373375" className="text-emerald-500">
                    +216 52 373 375
                  </a>
                </p>
                <p>{contactInfo.address}</p>
               
                <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <SocialIconButton key={social.label} social={social} />
                ))}
              </div>
              </div>
             
              <MapEmbed />
            </div>
            <ContactForm formMessage={formMessage} setFormMessage={setFormMessage} />
          </div>
        </section>
      </main>

      <Footer theme={theme} />
      <ScrollToTopButton />
    </div>
  );
}

type ContactFormProps = {
  formMessage: string | null;
  setFormMessage: Dispatch<SetStateAction<string | null>>;
};

function ContactForm({ formMessage, setFormMessage }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    const formElement = formRef.current;

    setFormError(null);

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setFormError("Email service is not configured yet. Please try again later.");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(emailJsConfig.serviceId, emailJsConfig.templateId, formElement, {
        publicKey: emailJsConfig.publicKey,
      });
      formElement.reset();
      setFormMessage("Thanks for reaching out. We'll respond within one business day.");
      setTimeout(() => setFormMessage(null), 5000);
    } catch (error) {
      console.error("EmailJS submission failed", error);
      setFormError("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
      <input type="hidden" name="to_email" value={defaultRecipientEmail} />
      <h4 className="text-2xl font-semibold text-foreground">Tell us more about your project</h4>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted">
          Name
        </label>
        <input
          required
          id="name"
          name="name"
          className="input-field mt-2 w-full rounded-xl px-4 py-3 text-base shadow-sm focus:border-emerald-300 focus:outline-none"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted">
          Email
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          className="input-field mt-2 w-full rounded-xl px-4 py-3 text-base shadow-sm focus:border-emerald-300 focus:outline-none"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="project" className="block text-sm font-medium text-muted">
          Project Details
        </label>
        <input
          required
          id="project"
          name="project"
          className="input-field mt-2 w-full rounded-xl px-4 py-3 text-base shadow-sm focus:border-emerald-300 focus:outline-none"
          placeholder="Website, AI tool, platform..."
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted">
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          className="input-field mt-2 w-full rounded-xl px-4 py-3 text-base shadow-sm focus:border-emerald-300 focus:outline-none"
          placeholder="Is there anything else you want to mention ? "
        />
      </div>
      <button type="submit" className="btn-primary w-full text-base font-semibold" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit →"}
      </button>
      {formError && (
        <p className="text-sm font-medium text-red-400" role="alert">
          {formError}
        </p>
      )}
      {formMessage && (
        <p className="text-sm font-medium text-emerald-300" role="status">
          {formMessage}
        </p>
      )}
    </form>
  );
}

function MapEmbed() {
  const mapSrc =
    "https://www.google.com/maps?q=Immeuble+Alya+M%C3%A9dicale,+rue+des+Olivier,+4001+Khzema,+Sousse&output=embed";

  return (
    <div className="mt-8 rounded-[28px] border border-soft bg-panel-strong p-2 shadow-inner">
      <iframe
        title="GoToGreen HQ Map"
        src={mapSrc}
        width="100%"
        height="260"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full rounded-[24px] border-0"
      />
    </div>
  );
}

function SocialIconButton({ social }: { social: SocialLink }) {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 text-emerald-500 transition hover:border-emerald-300 hover:bg-emerald-300/10"
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function SocialLinksRow() {
  return (
    <div className="flex gap-3 text-xs uppercase tracking-[0.2em] text-tertiary">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            className="flex items-center gap-2 hover:text-emerald-500"
            target="_blank"
            rel="noreferrer"
          >
            <Icon className="h-4 w-4" />
            <span>{social.label}</span>
          </a>
        );
      })}
    </div>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 rounded-full border border-emerald-500/40 bg-panel/90 p-3 text-emerald-100 shadow-lg backdrop-blur transition hover:border-emerald-500 hover:text-emerald-500 text-emerald-500 text-xl font-bold"
      aria-label="Scroll back to top"
    >
      ↑
    </button>
  );
}

type FooterProps = {
  theme: Theme;
};

function Footer({ theme }: FooterProps) {
  const footerLogoSrc = theme === "dark" ? "/Frame.png" : "/Frames.png";

  return (
    <footer className="section-wrapper border-t border-soft pt-8 text-sm text-tertiary">
      <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Image
            src={footerLogoSrc}
            alt="GoToGreen logo"
            width={180}
            height={60}
            className="h-auto w-36 md:w-48"
          />
          <p className="font-semibold text-foreground">GoToGreen</p>
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">
            Built responsibly with GoToGreen
          </p>
          <SocialLinksRow />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-emerald-300">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-contrast">
        © {new Date().getFullYear()} GoToGreen. All Rights Reserved.
      </p>
    </footer>
  );
}

