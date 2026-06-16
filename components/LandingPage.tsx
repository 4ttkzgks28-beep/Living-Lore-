"use client";

import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  ["Player", "Explores, builds, and makes choices that matter."],
  ["Director", "Reads the world state like a cinematic game master."],
  ["AI", "Spawns quests, dialogue, omens, factions, and consequences."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 72, filter: "blur(14px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

function Atmosphere() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [1, 0.9, 0.75, 0.25]);
  return (
    <motion.div style={{ opacity }} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div style={{ y }} className="cinematic-grid absolute inset-x-[-20%] top-0 h-[220vh] opacity-40" />
      <div className="noise absolute inset-0 opacity-[0.07] mix-blend-screen" />
      <div className="absolute left-1/2 top-[-18rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-cyanLore/20 blur-[140px]" />
      <div className="absolute bottom-1/4 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-violetLore/20 blur-[120px]" />
      <div className="absolute bottom-[-14rem] left-[-10rem] h-[36rem] w-[36rem] rounded-full bg-ember/15 blur-[130px]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 animate-fog bg-[radial-gradient(ellipse_at_center,rgba(210,240,255,0.12),transparent_58%)] blur-3xl" />
      {Array.from({ length: 34 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-cyanLore/70 shadow-neon"
          style={{ left: `${(index * 29) % 100}%`, top: `${(index * 47) % 100}%`, opacity: 0.25 + ((index % 5) * 0.1) }}
        />
      ))}
    </motion.div>
  );
}

function Section({ eyebrow, title, children, className = "" }: { eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.45 }} className={`relative z-10 flex min-h-screen items-center px-6 py-28 ${className}`}>
      <motion.div variants={fadeUp} className="mx-auto max-w-6xl">
        <p className="mb-5 font-display text-xs uppercase tracking-[0.55em] text-cyanLore/80">{eyebrow}</p>
        <h2 className="max-w-5xl font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">{title}</h2>
        <div className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl">{children}</div>
      </motion.div>
    </motion.section>
  );
}

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.82]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -260]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-void font-body text-white">
      <Atmosphere />
      <motion.section style={{ scale: heroScale, opacity: heroOpacity }} className="sticky top-0 z-10 flex h-screen items-center justify-center px-6 text-center">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }} className="max-w-6xl">
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="mb-8 font-display text-xs uppercase tracking-[0.65em] text-cyanLore">Living Lore</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50, filter: "blur(20px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.7, duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] md:text-8xl lg:text-9xl">
            Minecraft is empty.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanLore via-white to-ember">Until someone decides to tell a story.</span>
          </motion.h1>
        </motion.div>
      </motion.section>

      <div className="relative z-10 -mt-screen">
        <div className="h-screen" />
        <Section eyebrow="The silence" title="Every block waits. Most worlds never answer.">
          Infinite terrain can still feel lifeless: villages loop, caves forget you, and your greatest builds become monuments in a world that never reacts.
        </Section>
        <Section eyebrow="The reveal" title="Living Lore changes everything" className="bg-gradient-to-b from-transparent via-cyanLore/[0.06] to-transparent">
          It turns a Minecraft server into a living campaign where the world watches, remembers, escalates, and frames your choices like scenes in a trailer.
        </Section>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.35 }} className="relative z-10 min-h-screen px-6 py-28">
          <motion.div style={{ y: parallax }} className="mx-auto max-w-6xl pt-20">
            <motion.p variants={fadeUp} className="mb-5 font-display text-xs uppercase tracking-[0.55em] text-ember">How it works</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl font-black uppercase tracking-[-0.06em] md:text-7xl">Three forces. One unfolding legend.</motion.h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map(([name, text], index) => (
                <motion.article key={name} variants={fadeUp} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 shadow-neon backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyanLore/10 via-transparent to-ember/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="font-display text-sm text-cyanLore">0{index + 1}</span>
                  <h3 className="mt-16 font-display text-3xl font-black uppercase">{name}</h3>
                  <p className="mt-4 text-slate-300">{text}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.section>
        <Section eyebrow="Experience" title="Quests ignite from footprints. Myths grow from your mistakes.">
          Discover ruins that remember your name, enemies that adapt to your alliances, and server-wide events staged with fog, thunder, whispers, and consequences.
        </Section>
        <Section eyebrow="AI assistant" title="The ghost in the server speaks">
          <span className="glitch block font-display text-4xl font-black uppercase text-white md:text-6xl" data-text="/DIRECTOR ONLINE">/DIRECTOR ONLINE</span>
          <span className="mt-8 block">A glitch-styled assistant briefs players, seeds mysteries, generates dialogue, and keeps the lore moving without breaking immersion.</span>
        </Section>
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp} className="max-w-5xl">
            <p className="mb-6 font-display text-xs uppercase tracking-[0.55em] text-cyanLore">Final call</p>
            <h2 className="font-display text-5xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">Stop hosting maps. Start launching legends.</h2>
            <button className="mt-12 rounded-full border border-cyanLore/50 bg-cyanLore/10 px-9 py-4 font-display text-sm uppercase tracking-[0.32em] text-cyanLore shadow-neon transition hover:bg-cyanLore hover:text-void">Enter the lore</button>
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black" />
        </motion.section>
      </div>
    </main>
  );
}
