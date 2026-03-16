export default function Footer() {
  return (
    <footer className="bg-[#030f26] pt-24 pb-12 px-6 md:px-12 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-white mb-2"><span className="text-[#D4AF37]">K</span>eaver</h2>
          <p className="text-sm font-light uppercase tracking-widest text-[#D4AF37]">Foundation</p>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-light hover:text-slate-300 transition-colors">
           <p>© {new Date().getFullYear()} Keaver Foundation. All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}