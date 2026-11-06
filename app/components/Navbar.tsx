"use client";
import { useEffect, useState } from "react";
export default function Navbar() {
 const [open,setOpen]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>12);f();window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f)},[]);
 const links=[["#fonctionnalites","Fonctionnalités"],["#pour-qui","Pour qui ?"],["#offres","Offres"],["#questions","Questions"],["#contact","Contact"]];
 return <nav className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled||open?"bg-bg-deep/95 backdrop-blur border-white/10":"bg-bg-deep/75 backdrop-blur-sm border-transparent"}`} aria-label="Navigation principale">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
   <a href="#hero" aria-label="Accueil Scolaris"><img src="/logo.svg" alt="Scolaris" className="h-9"/></a>
   <div className="hidden lg:flex items-center gap-6 text-sm text-ink-mute">{links.map(([href,text])=><a key={href} href={href} className="hover:text-white transition">{text}</a>)}</div>
   <div className="hidden sm:flex items-center gap-3"><a href="https://app.scolaris.sn/login/" className="text-sm text-ink-mute hover:text-white">Connexion</a><a href="#contact" className="px-4 py-2 rounded-lg bg-brand hover:bg-brand-light text-sm font-semibold transition">Demander une démo</a></div>
   <button onClick={()=>setOpen(!open)} aria-label={open?"Fermer le menu":"Ouvrir le menu"} aria-expanded={open} className="lg:hidden border border-white/20 rounded-lg px-3 py-2">☰</button>
  </div>
  {open&&<div className="lg:hidden bg-bg-deep border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">{links.map(([href,text])=><a key={href} href={href} onClick={()=>setOpen(false)}>{text}</a>)}<a href="https://app.scolaris.sn/login/">Connexion à Scolaris</a></div>}
 </nav>;
}
