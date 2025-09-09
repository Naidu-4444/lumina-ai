"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundImage() {
  const { theme } = useTheme();
  const [background, setBackground] = useState("/dark-lumina.png");

  useEffect(() => {
    setBackground(theme == "dark" ? "/dark-lumina.png" : "/light-lumina.png");
  }, [theme]);

  return (
    <Image
      src={background}
      alt=""
      width={500}
      height={1000}
      className="absolute object-cover inset-0 size-full opacity-40 -z-50 h-screen"
      priority
    />
  );
}
