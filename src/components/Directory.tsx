"use client";

import { useMemo, useState } from "react";
import { directory, telHref } from "@/content/site";
import { Phone, Search } from "./icons";

export function Directory() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return directory;
    return directory.filter((d) => `${d.name} ${d.role} ${d.detail} ${d.phone}`.toLowerCase().includes(t));
  }, [q]);

  return (
    <div className="directory">
      <label className="search">
        <Search size={20} />
        <span className="sr">Search the directory by name or role</span>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name or role, for example “nurse” or “Susan”" />
      </label>
      <p className="directory__count" aria-live="polite">
        {list.length === directory.length ? `${directory.length} people` : `${list.length} of ${directory.length} people`}
      </p>
      <ul className="directory__list">
        {list.map((d) => (
          <li key={d.name + d.role} className="person">
            <div>
              <h3>{d.name}</h3>
              <p className="person__role">{d.role}</p>
              {d.detail && <p className="person__detail">{d.detail}</p>}
            </div>
            <a className="person__phone" href={telHref(d.phone)}>
              <Phone size={16} /> {d.phone}
            </a>
          </li>
        ))}
      </ul>
      {list.length === 0 && <p className="directory__empty">No one matches that search. Call Reception at (306) 986-1460 and we will help.</p>}
    </div>
  );
}
