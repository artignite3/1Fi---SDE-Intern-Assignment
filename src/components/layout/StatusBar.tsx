"use client";

import React, { useEffect, useState } from "react";
import { Wifi, BatteryMedium, Signal } from "lucide-react";

export function StatusBar() {
  const [time, setTime] = useState("04:32");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#12141A] text-white px-5 py-2 flex items-center justify-between text-xs font-semibold select-none z-40">
      <div className="flex items-center gap-1.5">
        <span>{time}</span>
        <span className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-[9px] font-bold">
          M
        </span>
      </div>

      <div className="flex items-center gap-2 text-[11px]">
        <span className="text-[10px] tracking-tight opacity-90">194 KB/S</span>
        <span className="text-[9px] px-1 py-0.5 rounded bg-white/20 font-bold">5G</span>
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <div className="flex items-center gap-0.5">
          <BatteryMedium className="w-4 h-4" />
          <span className="text-[10px]">23%</span>
        </div>
      </div>
    </div>
  );
}
