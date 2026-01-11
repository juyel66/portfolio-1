import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("banner");

  // Scroll effect (navbar style)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id); // set active on click
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: "banner", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // 🔥 Scroll-spy (detect active section)
  useEffect(() => {
    const sections = menuItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% visible হলে active
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed container mx-auto top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#000022]/90 backdrop-blur-md shadow-lg py-3"
          : "bg-[#000022] py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("banner")}
          className="font-bold select-none"
        >
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-3xl">
            MD. JUYEL RANA
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium text-lg transition ${
                    isActive
                      ? "text-green-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}

                  {/* underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-green-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Resume */}
          <a
            href="https://drive.google.com/uc?export=download&id=1xg-IaIbevVHy-NZEPNk8odRc-uo04Ez9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-5 py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition">
              Resume
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="md:hidden p-2 rounded-lg text-gray-200 hover:text-white hover:bg-gray-800"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#000022] z-[100] transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-bold">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition ${
                activeSection === item.id
                  ? "text-green-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://drive.google.com/uc?export=download&id=1JO2XZZ4wocv5SC5CtjYhSHVJ4DFSIDJo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-7 py-3 rounded-md bg-gradient-to-r from-green-500 to-blue-600 text-white text-lg shadow-lg">
              Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
