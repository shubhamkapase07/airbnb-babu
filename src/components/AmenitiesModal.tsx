"use client";

import { amenityGroups } from "@/data/listing";
import { Icon } from "./icons";
import { Modal } from "./Modal";
import { useUI } from "./ui-context";

export default function AmenitiesModal() {
  const { overlay, close } = useUI();
  return (
    <Modal open={overlay === "amenities"} onClose={close} title="What this place offers">
      <div className="space-y-8">
        {amenityGroups.map((g) => (
          <div key={g.group}>
            <h3 className="mb-2 text-lg font-semibold">{g.group}</h3>
            <ul>
              {g.items.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center gap-4 border-b border-line-2 py-4 last:border-b-0"
                >
                  <Icon
                    name={a.icon}
                    size={24}
                    stroke={1.5}
                    className={a.unavailable ? "text-muted-2" : "text-fg"}
                  />
                  <span className={`text-base ${a.unavailable ? "text-muted-2 line-through" : ""}`}>
                    {a.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Modal>
  );
}
