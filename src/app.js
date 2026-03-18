import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  ChevronRight,
  Globe2,
  Menu,
  ShieldCheck,
  Sparkles,
  Users2,
  X,
} from "lucide-react";
import { useState } from "react";

const founderImage = "/images/founder.png";
const officeImage = "/images/office.png";
const bookDisplayImage = "/images/bookDisplay.png";
const bookQuoteImage = "/images/bookQuote.jpg";

const navItems = [
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Founder", href: "#founder" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "20+", label: "Years of global business leadership" },
  { value: "33K+", label: "Senior professionals following insights" },
  { value: "6", label: "Leaders supported at a time" },
  { value: "1,000+", label: "Professionals influenced through mentoring" },
];

const pillars = [
  {
    icon: BrainCircuit,
    title: "Strategic clarity",
    text: "Cut through political noise, competing priorities, and pressure-heavy decisions with direct, senior-level thinking support.",
  },
  {
    icon: Users2,
    title: "Executive influence",
    text: "Increase leadership visibility, stakeholder alignment, and decision credibility across high-stakes organizational environments.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted discretion",
    text: "Confidential, practical, outcome-driven advisory for leaders carrying consequence, ambiguity, and organizational responsibility.",
  },
];

const programs = [
  {
    name: "Global Executive Advisory",
    label: "Ongoing Strategic Partnership",
    price: "$7,500 / quarter",
    description:
      "For CEOs, VPs, and senior leaders who want an elite advisory relationship for high-stakes decisions, organizational dynamics, and strategic clarity.",
    bullets: [
      "Limited to six leaders per quarter",
      "4–6 deep sessions per quarter",
      "Flexible urgent check-ins",
      "Personalized roadmap and influence diagnostic",
    ],
  },
  {
    name: "Executive Transformation",
    label: "Rapid Acceleration",
    price: "$12,000–21,000 total",
    description:
      "A 90–120 day, high-touch transformation sprint for leaders aiming to elevate influence, visibility, and executive impact quickly.",
    bullets: [
      "Weekly or bi-weekly intensive sessions",
      "Transformation roadmap with milestones",
      "Outcome-focused leadership elevation",
      "Built for measurable short-term momentum",
    ],
    featured: true,
  },
];

const outcomes = [
  "Sharper decision-making under pressure",
  "Clearer organizational alignment",
  "Improved executive presence and visibility",
  "Leadership systems that scale with growth",
  "Practical AI and innovation adoption",
  "Feedback beyond office politics",
];

const testimonials = [
  {
    quote:
      "A powerful resource for those seeking to lead through challenging times with vision, integrity, and adaptability.",
    author: "Gen. David Petraeus",
    role: "Former Commander, US Central Command & former Director of the CIA",
  },
  {
    quote:
      "A must-read for anyone serious about developing bold, forward-thinking leaders.",
    author: "Michelle Drolet",
    role: "CEO, Towerwall, Inc.",
  },
  {
    quote:
      "A master class in mentorship, innovation, and transformation that distills real-world experiences into practical wisdom.",
    author: "Vincent Hennequin",
    role: "Associate Director, GoGlobal",
  },
];

const links = {
  assessment: "https://tally.so/r/6876Go",
  bulkOrders: "https://tally.so/r/68daKe",
  amazonBook: "https://www.amazon.com/dp/B0F4MGZZ5T",
  linkedin: "https://www.linkedin.com/company/18078413/",
  email: "mailto:contact@amaringlobal.com",
};

function runDataChecks() {
  console.assert(Array.isArray(navItems) && navItems.length > 0, "navItems must not be empty");
  console.assert(Array.isArray(stats) && stats.length === 4, "stats should contain 4 items");
  console.assert(Array.isArray(programs) && programs.length === 2, "programs should contain 2 items");
  console.assert(typeof links.assessment === "string" && links.assessment.startsWith("https://"), "assessment link must be valid");
  console.assert(typeof founderImage === "string" && founderImage.length > 0, "founderImage is required");
}

runDataChecks();

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/90">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  );
}

function openExternal(url) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

function scrollToSection(targetId, setMobileOpen) {
  if (typeof document === "undefined") return;
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (typeof setMobileOpen === "function") {
    setMobileOpen(false);
  }
}

function ExternalLink({ href, className, children }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        if (typeof window !== "undefined") {
          window.open(href, "_blank", "noopener,noreferrer");
        }
      }}
      className={className + " cursor-pointer"}
    >
      {children}
    </button>
  );
}

export default function AmarinGlobalRedesign() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen scroll-smooth bg-[#07111f] text-white selection:bg-cyan-300/30 selection:text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(67,166,255,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(44,208,196,0.10),_transparent_20%),linear-gradient(180deg,_#091222_0%,_#07111f_40%,_#050b16_100%)]" />
        <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-8%] top-[28rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-300/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("#top")}
            className="flex items-center gap-3 text-left"
          >
            <div>
              <div className="text-base font-semibold tracking-[0.24em] text-white">AMARIN GLOBAL</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-cyan-100/70">
                Executive Leadership Advisory
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-white/72 transition hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ExternalLink
              href={links.assessment}
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 md:inline-flex"
            >
              Book Assessment
            </ExternalLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex rounded-full border border-white/12 bg-white/[0.03] p-2.5 text-white md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#07111f]/95 px-6 py-4 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToSection(item.href, setMobileOpen)}
                  className="text-left text-sm text-white/78"
                >
                  {item.label}
                </button>
              ))}
              <ExternalLink
                href={links.assessment}
                className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Book Assessment
              </ExternalLink>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn>
              <div>
                <SectionEyebrow>Trusted strategic thinking partner</SectionEyebrow>
                <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-7xl">
                  Executive advisory for leaders navigating
                  <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-300 bg-clip-text text-transparent">
                    {" "}
                    complexity, consequence, and scale
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  A production-level premium homepage concept built from the real AmarinGlobal brand assets and messaging, with stronger hierarchy, cleaner storytelling, and a higher-trust executive feel.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <ExternalLink
                    href={links.assessment}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    Schedule Initial Assessment
                    <ArrowRight className="h-4 w-4" />
                  </ExternalLink>
                  <button
                    type="button"
                    onClick={() => scrollToSection("#programs")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
                  >
                    Explore Programs
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.08 * index }}
                      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur-xl"
                    >
                      <div className="text-3xl font-semibold text-white">{stat.value}</div>
                      <div className="mt-2 text-sm leading-6 text-white/58">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="relative">
                <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl lg:block" />
                <div className="absolute -right-5 bottom-8 hidden h-32 w-32 rounded-full border border-cyan-300/15 bg-cyan-300/10 blur-2xl lg:block" />

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
                    <img
                      src={founderImage}
                      alt="Meir Amarin portrait"
                      className="h-[600px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-[#081221]/70 p-5 backdrop-blur-xl">
                          <div className="text-xs uppercase tracking-[0.24em] text-cyan-100/75">Founder & CEO</div>
                          <div className="mt-2 text-2xl font-semibold">Meir Amarin</div>
                          <p className="mt-3 text-sm leading-6 text-white/65">
                            Executive mentoring, leadership system design, and strategic advisory for senior leaders facing consequential decisions.
                          </p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-[#081221]/70 p-5 backdrop-blur-xl">
                          <div className="text-xs uppercase tracking-[0.24em] text-cyan-100/75">Trusted by leaders who value</div>
                          <div className="mt-3 space-y-2 text-sm text-white/72">
                            <div>• Clarity over noise</div>
                            <div>• Measurable executive progress</div>
                            <div>• Discretion and practical thinking</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8" id="impact">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={index * 0.08}>
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur-xl">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/63">{pillar.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="programs">
          <FadeIn>
            <div className="max-w-3xl">
              <SectionEyebrow>Premium advisory programs</SectionEyebrow>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Two clear paths for executive growth and strategic acceleration
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/68">
                The offers are restructured into a cleaner premium architecture so senior decision-makers can understand the distinction, value, and fit in seconds.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 xl:grid-cols-[1.05fr_1.15fr]">
            {programs.map((program, index) => (
              <FadeIn key={program.name} delay={0.08 * index}>
                <div
                  className={`group h-full rounded-[2rem] border p-8 transition duration-300 hover:-translate-y-1 ${
                    program.featured
                      ? "border-cyan-300/20 bg-[linear-gradient(180deg,rgba(99,190,255,0.12),rgba(255,255,255,0.04))]"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.26em] text-white/45">
                        {program.label}
                      </div>
                      <h3 className="mt-3 text-3xl font-semibold tracking-tight">{program.name}</h3>
                    </div>
                    {program.featured && (
                      <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                        Most intensive
                      </div>
                    )}
                  </div>

                  <div className="mt-8 text-4xl font-semibold tracking-tight">{program.price}</div>
                  <p className="mt-5 max-w-xl text-base leading-7 text-white/67">{program.description}</p>

                  <div className="mt-8 space-y-3">
                    {program.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan-200" />
                        <p className="text-sm leading-6 text-white/74">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  <ExternalLink
                    href={links.assessment}
                    className={`mt-10 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                      program.featured
                        ? "bg-white text-slate-950 hover:-translate-y-0.5"
                        : "border border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    Apply for this program
                    <ArrowRight className="h-4 w-4" />
                  </ExternalLink>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8" id="founder">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <FadeIn>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
                  <img
                    src={officeImage}
                    alt="AmarinGlobal office environment"
                    className="h-full min-h-[420px] w-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <SectionEyebrow>Founder positioning</SectionEyebrow>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Positioning Meir Amarin as a world-class strategic counterpart
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/68">
                  This section reframes the founder with stronger authority, a more editorial layout, and a premium business aesthetic built around the real brand imagery.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Experience across corporations, startups, and transformation initiatives",
                    "Trusted for confidential, practical, outcome-driven advisory",
                    "Blends strategic thinking, behavioral insight, and disciplined execution",
                    "Author, mentor, and advisor to senior professionals worldwide",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-white/74"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/60">
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">3M</div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Unilever</div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">AMEX GBT</div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Executive mentoring</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
                <div>
                  <SectionEyebrow>Executive outcomes</SectionEyebrow>
                  <h2 className="mt-5 text-4xl font-semibold tracking-tight">
                    What the brand should communicate instantly
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-white/68">
                    The original website has strong substance. This production-level redesign turns that substance into scannable, high-conviction UI and a more premium conversion flow.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-2xl border border-white/10 bg-[#081221]/80 p-5 text-sm leading-6 text-white/78"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8" id="book">
          <div className="grid items-center gap-10 xl:grid-cols-[1.02fr_0.98fr]">
            <FadeIn>
              <div>
                <SectionEyebrow>Leadership playbook</SectionEyebrow>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Turn the book into a refined credibility engine
                </h2>
                <p className="mt-6 text-lg leading-8 text-white/68">
                  Instead of feeling like a separate block, the book now supports the premium advisory brand and reinforces methodology, authority, and real-world organizational value.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Frame the book as proof of methodology, not just a product",
                    "Use real endorsements in a stronger editorial testimonial system",
                    "Connect the playbook to mentoring architecture and leadership development",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <BookOpen className="mt-0.5 h-5 w-5 text-cyan-100" />
                      <p className="text-base leading-7 text-white/74">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ExternalLink
                    href={links.amazonBook}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    Get the book
                    <ArrowRight className="h-4 w-4" />
                  </ExternalLink>
                  <ExternalLink
                    href={links.bulkOrders}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
                  >
                    Bulk orders
                    <Globe2 className="h-4 w-4" />
                  </ExternalLink>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="grid gap-6">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
                  <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
                    <img
                      src={bookDisplayImage}
                      alt="Mentoring Winners display graphic"
                      className="h-[320px] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
                    <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
                      <img
                        src={bookQuoteImage}
                        alt="Book quote graphic"
                        className="h-full min-h-[300px] w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                    <div className="text-xs uppercase tracking-[0.26em] text-white/45">Selected endorsements</div>
                    <div className="mt-5 space-y-4">
                      {testimonials.map((testimonial) => (
                        <div key={testimonial.author} className="rounded-2xl border border-white/10 bg-[#081221]/75 p-4">
                          <p className="text-sm leading-6 text-white/78">“{testimonial.quote}”</p>
                          <div className="mt-3 text-sm font-semibold text-white">{testimonial.author}</div>
                          <div className="text-xs leading-5 text-white/48">{testimonial.role}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8" id="contact">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 lg:p-14">
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                <div>
                  <SectionEyebrow>Premium conversion section</SectionEyebrow>
                  <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                    Clear, decisive call-to-action for high-quality executive leads
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                    Replace repeated low-impact footer content with one confident closing moment that emphasizes selectivity, relevance, and direct next-step clarity.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <ExternalLink
                    href={links.assessment}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    Schedule Initial Assessment
                    <ArrowRight className="h-4 w-4" />
                  </ExternalLink>
                  <button
                    type="button"
                    onClick={() => openExternal(links.email)}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                  >
                    contact@amaringlobal.com
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-white/48 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© {year} AmarinGlobal. Production-style redesign using real site imagery.</div>
          <div className="flex flex-wrap items-center gap-5">
            <ExternalLink href={links.linkedin} className="transition hover:text-white/80">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={links.amazonBook} className="transition hover:text-white/80">
              Book
            </ExternalLink>
            <button type="button" onClick={() => openExternal(links.email)} className="transition hover:text-white/80">
              Email
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
