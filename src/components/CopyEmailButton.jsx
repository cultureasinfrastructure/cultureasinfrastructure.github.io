"use client";

import { useState } from "react";

const EMAIL = "cultureasinfrastructure@gmail.com";

export default function CopyEmailButton({ className = "" }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy email address:", EMAIL);
    }
  }

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={copyEmail}
        aria-label={
          copied
            ? "Email copied to clipboard"
            : `Copy email ${EMAIL} to clipboard`
        }
        className={`inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-[#450508] transition-colors hover:text-[#2788A7] ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </button>
      {copied ? (
        <span
          role="status"
          className="absolute -bottom-6 left-0 whitespace-nowrap text-xs font-semibold text-[#3e693f]"
        >
          Copied!
        </span>
      ) : null}
    </div>
  );
}
