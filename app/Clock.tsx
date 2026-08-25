'use client';
import { useEffect, useState } from 'react';

function formatLocal(date: Date) {
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  const offsetMinutes = -date.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? '+' : '-';
  const offH = String(Math.floor(Math.abs(offsetMinutes) / 60)).padStart(2, '0');
  const offM = String(Math.abs(offsetMinutes) % 60).padStart(2, '0');
  const tz = offM === '00' ? `GMT${sign}${offH}` : `GMT${sign}${offH}:${offM}`;
  return `${hh}:${mm}:${ss} ${tz}`;
}

export default function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return <div>{formatLocal(now)}</div>;
}
