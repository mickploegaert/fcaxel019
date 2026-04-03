"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  nextMatchISO: string;
};

function getRemaining(target: string) {
  const now = new Date().getTime();
  const eventTime = new Date(target).getTime();
  const delta = Math.max(eventTime - now, 0);

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((delta / (1000 * 60)) % 60);

  return { days, hours, minutes, finished: delta === 0 };
}

export default function SeasonCountdown({ nextMatchISO }: CountdownProps) {
  const [remaining, setRemaining] = useState(() => getRemaining(nextMatchISO));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(getRemaining(nextMatchISO));
    }, 30000);

    return () => clearInterval(timer);
  }, [nextMatchISO]);

  const label = useMemo(() => {
    if (remaining.finished) {
      return "Aftrap is begonnen";
    }

    return `${remaining.days}d ${remaining.hours}u ${remaining.minutes}m`;
  }, [remaining]);

  return (
    <div className="countdown" role="status" aria-live="polite">
      <p>Countdown naar volgende wedstrijd</p>
      <strong>{label}</strong>
    </div>
  );
}
