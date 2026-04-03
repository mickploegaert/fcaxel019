"use client";

import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type NavMenuProps = {
  items: NavItem[];
};

export default function NavMenu({ items }: NavMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-shell">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        FC Axel JO19-1
      </a>
      <button
        className="burger"
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
