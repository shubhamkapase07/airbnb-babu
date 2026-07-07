import { Icon } from "./icons";

const COLS = [
  {
    title: "Support",
    links: ["Help Centre", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighbourhood concern"],
  },
  {
    title: "Hosting",
    links: ["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly", "Join a free Hosting class"],
  },
  {
    title: "Airbnb",
    links: ["Newsroom", "New features", "Careers", "Investors", "Gift cards", "Airbnb.org emergency stays"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-2 bg-hover">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-8 border-b border-line py-12 sm:grid-cols-3">
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-fg link-underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <div className="flex flex-wrap items-center gap-1.5 text-sm">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="link-underline">Terms</a>
            <span>·</span>
            <a href="#" className="link-underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="link-underline">Privacy</a>
            <span>·</span>
            <a href="#" className="link-underline">Your Privacy Choices</a>
          </div>
          <div className="flex items-center gap-5 text-sm font-semibold">
            <button className="flex items-center gap-2 link-underline">
              <Icon name="globe" size={16} stroke={2} />
              English (IN)
            </button>
            <button className="link-underline">₹ INR</button>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100">f</a>
              <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100">X</a>
              <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100">◎</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
