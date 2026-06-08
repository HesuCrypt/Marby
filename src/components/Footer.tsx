import { navLinks } from '../data';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center justify-center bg-red-600 px-6 py-2 rounded-[50%_40%_50%_40%] mb-6">
              <span className="text-white font-bold text-2xl lowercase tracking-tighter">marby</span>
            </div>
            <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm mb-6">
              Quality baking traditions delivered to every home. A proud Filipino heritage brand dedicated to excellence.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:border-red-600 hover:text-white transition">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current" style={{ maskImage: 'url(https://unpkg.com/lucide-static@0.292.0/icons/link.svg)', WebkitMaskImage: 'url(https://unpkg.com/lucide-static@0.292.0/icons/link.svg)' }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white mb-6 uppercase tracking-[0.25em] text-[10px] font-bold">Company</h4>
            <ul className="space-y-4">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6 uppercase tracking-[0.25em] text-[10px] font-bold">Support</h4>
            <ul className="space-y-4">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6 uppercase tracking-[0.25em] text-[10px] font-bold">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest product releases and industry news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-3 w-full focus:outline-none focus:border-slate-500 text-sm"
              />
              <button type="submit" className="bg-red-600 text-white px-6 py-3 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-red-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-[10px] tracking-[0.2em] uppercase text-center md:text-left">
          <p>© {new Date().getFullYear()} MARBY FOOD VENTURES</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
