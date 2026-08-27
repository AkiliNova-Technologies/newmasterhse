"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/site";

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Specialised Services", href: "/specialised-services" },
  { name: "Institute", href: "/institute" },
  {
    name: "Insights",
    href: "/insights",
    children: [
      { name: "News", href: "/news" },
      { name: "Podcasts", href: "/podcasts" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen && isMobile ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMobile]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isItemActive = (item: NavItem) =>
    isActive(item.href) || Boolean(item.children?.some((child) => isActive(child.href)));

  const isConfirmed = (value: string) => Boolean(value && !value.startsWith("[Insert"));

  const linkClass = (scrolled: boolean, active: boolean) =>
    cn(
      "font-medium transition-colors relative group text-sm xl:text-base whitespace-nowrap",
      active
        ? "text-orange-500"
        : scrolled
          ? "text-navy hover:text-orange-500"
          : "text-white/90 hover:text-white",
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-60 transition-all duration-500",
        isScrolled ? "bg-white shadow-lg py-0" : "bg-navy shadow-lg py-0",
      )}
    >
      <nav className="relative" aria-label="Main">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div
                className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0",
                  isScrolled
                    ? "bg-navy"
                    : "bg-white/10 backdrop-blur-sm border border-white/30",
                )}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-sm transform rotate-12" />
              </div>
              <span
                className={cn(
                  "text-xl sm:text-2xl font-bold transition-colors whitespace-nowrap",
                  isScrolled ? "text-navy" : "text-white",
                )}
              >
                New<span className="text-orange-500">Master</span>
              </span>
              <span className="sr-only">NewMaster Health and Safety home</span>
            </Link>

            <div className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={linkClass(isScrolled, isItemActive(item))}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      <span className="inline-flex items-center gap-1">
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5" aria-hidden />
                      </span>
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-0.5 transition-all group-hover:w-full",
                          isItemActive(item) ? "w-full bg-orange-500" : "w-0",
                          !isItemActive(item) && (isScrolled ? "bg-orange-500" : "bg-white"),
                        )}
                      />
                    </Link>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all absolute left-0 top-full pt-3">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[10rem]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block border-l-2 px-4 py-2 text-sm transition-colors",
                              isActive(child.href)
                                ? "border-orange-500 bg-orange-50 text-orange-600"
                                : "border-transparent text-navy hover:bg-gray-50 hover:text-orange-500",
                            )}
                            aria-current={isActive(child.href) ? "page" : undefined}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={linkClass(isScrolled, isItemActive(item))}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 transition-all group-hover:w-full",
                        isItemActive(item) ? "w-full bg-orange-500" : "w-0",
                        !isItemActive(item) && (isScrolled ? "bg-orange-500" : "bg-white"),
                      )}
                    />
                  </Link>
                ),
              )}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center px-5 xl:px-6 py-2.5 xl:py-3 font-semibold rounded-full transition-all text-sm xl:text-base whitespace-nowrap",
                  isScrolled
                    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30"
                    : "bg-white text-navy hover:bg-orange-500 hover:text-white shadow-lg",
                )}
              >
                Talk to Our Team
              </Link>
            </div>

            <button
              className={cn(
                "lg:hidden p-1.5 sm:p-2 rounded-md transition-colors",
                isScrolled
                  ? "text-navy hover:bg-gray-100"
                  : "text-white hover:bg-white/10",
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-16 sm:top-20 transition-all duration-300 ease-in-out z-50",
            isScrolled ? "bg-white  shadow-lg" : "bg-navy ",
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none",
          )}
        >
          <div className="max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-5 sm:space-y-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          className={cn(
                            "w-full flex items-center justify-between border-l-2 font-medium py-2.5 sm:py-3 px-3 rounded-r-md text-base sm:text-lg",
                            isItemActive(item)
                              ? "border-orange-500 bg-orange-500/10 text-orange-500"
                              : isScrolled
                                ? "border-transparent text-navy hover:text-orange-500 hover:bg-gray-50"
                                : "border-transparent text-white/90 hover:text-white hover:bg-white/10",
                          )}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          aria-expanded={openSubmenu === item.name}
                          onClick={() =>
                            setOpenSubmenu(
                              openSubmenu === item.name ? null : item.name,
                            )
                          }
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              openSubmenu === item.name && "rotate-180",
                            )}
                          />
                        </button>
                        {openSubmenu === item.name && (
                          <div className="pl-4 pb-2 space-y-1">
                            <Link
                              href={item.href}
                              className={cn(
                                "block border-l-2 py-2 px-3 rounded-r-md text-sm",
                                isActive(item.href)
                                  ? "border-orange-500 bg-orange-500/10 text-orange-500"
                                  : isScrolled
                                    ? "border-transparent text-navy/80 hover:text-orange-500"
                                    : "border-transparent text-white/80 hover:text-white",
                              )}
                              aria-current={isActive(item.href) ? "page" : undefined}
                              onClick={() => setIsOpen(false)}
                            >
                              Overview
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={cn(
                                  "block border-l-2 py-2 px-3 rounded-r-md text-sm",
                                  isActive(child.href)
                                    ? "border-orange-500 bg-orange-500/10 text-orange-500"
                                    : isScrolled
                                      ? "border-transparent text-navy/80 hover:text-orange-500"
                                      : "border-transparent text-white/80 hover:text-white",
                                )}
                                aria-current={isActive(child.href) ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block border-l-2 font-medium transition-colors py-2.5 sm:py-3 px-3 rounded-r-md text-base sm:text-lg",
                          isItemActive(item)
                            ? "border-orange-500 bg-orange-500/10 text-orange-500"
                            : isScrolled
                              ? "border-transparent text-navy hover:text-orange-500 hover:bg-gray-50"
                              : "border-transparent text-white/90 hover:text-white hover:bg-white/10",
                        )}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={cn(
                  "block w-full text-center px-6 py-3.5 sm:py-4 font-semibold rounded-full transition-colors text-base sm:text-lg",
                  isScrolled
                    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30"
                    : "bg-white text-navy hover:bg-orange-500 hover:text-white shadow-lg",
                )}
                onClick={() => setIsOpen(false)}
              >
                Talk to Our Team
              </Link>

              <div
                className={cn(
                  "pt-4 mt-4 border-t",
                  isScrolled ? "border-gray-200" : "border-white/20",
                )}
              >
                {(isConfirmed(CONTACT.phone) || isConfirmed(CONTACT.email)) && <div className="flex flex-col space-y-3">
                  {isConfirmed(CONTACT.phone) && (
                  <p
                    className={cn(
                      "flex items-center gap-3 py-2 px-2 text-sm sm:text-base",
                      isScrolled ? "text-navy/70" : "text-white/70",
                    )}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{CONTACT.phone}</span>
                  </p>
                  )}
                  {isConfirmed(CONTACT.email) && (
                  <p
                    className={cn(
                      "flex items-center gap-3 py-2 px-2 rounded-md text-sm sm:text-base break-all",
                      isScrolled ? "text-navy/70" : "text-white/70",
                    )}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{CONTACT.email}</span>
                  </p>
                  )}
                </div>
                }

              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
