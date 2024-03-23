"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";

const ThemeImage = ({
  lightSrc,
  darkSrc,
  alt,
  ...rest
}: {
  lightSrc: string;
  darkSrc: string;
  alt: string;
} & Omit<ImageProps, "src">) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-12" />;
  }

  return <Image alt={alt} src={isLight ? lightSrc : darkSrc} {...rest} />;
};

export default ThemeImage;
