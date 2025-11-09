"use client";

import { useState } from "react";
import { SearchIcon } from "../icons";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  onSearch: (value: string) => void;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
};

export function SearchInput({
  onSearch,
  label,
  placeholder = "Search",
  defaultValue = "",
  className,
}: SearchInputProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <form
      role="search"
      aria-label={label}
      className={cn(
        "flex items-center gap-2 rounded-full border border-[#2A2A2A]/15 bg-white px-4 py-2 shadow-sm focus-within:border-[#006E7F]",
        className,
      )}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(value.trim());
      }}
    >
      <SearchIcon className="h-4 w-4 text-[#006E7F]" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(event) => {
          const next = event.target.value;
          setValue(next);
          if (next === "") {
            onSearch("");
          }
        }}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm text-[#2A2A2A] placeholder:text-[#2A2A2A]/50 focus:outline-none"
      />
      {value && (
        <button
          type="button"
          className="rounded-full px-2 text-xs font-semibold text-[#006E7F] hover:text-[#005563] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F]"
          onClick={() => {
            setValue("");
            onSearch("");
          }}
        >
          Clear
        </button>
      )}
      <button
        type="submit"
        className="hidden rounded-full bg-[#006E7F] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#005563] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006E7F] sm:inline-flex"
      >
        Search
      </button>
    </form>
  );
}

