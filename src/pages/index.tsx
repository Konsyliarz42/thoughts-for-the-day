import { GetStaticPropsResult } from "next";
import React from "react";
import { useMediaPredicate } from "react-media-hook";

import { Switch } from "@/components/Switch";
import { Thought } from "@/components/Thought";
import { useGlobalStore } from "@/store";
import { ThemeMode, ThemeStyle, darkStyle, lightStyle } from "@/themes";

import { staticProps } from "./_app";

export async function getStaticProps(): Promise<GetStaticPropsResult<staticProps>> {
  return {
    props: {
      title: "Thoughts for the day",
    },
  };
}

export default function Home() {
  const theme = useGlobalStore((state) => state.theme);
  const browserHasDarkMode = useMediaPredicate("(prefers-color-scheme: dark)");

  const [pageMode, setPageMode] = React.useState<ThemeStyle>(lightStyle);

  React.useEffect(() => {
    if ((theme === ThemeMode.AUTO && browserHasDarkMode) || theme === ThemeMode.DARK)
      setPageMode(darkStyle);
    else setPageMode(lightStyle);
  }, [browserHasDarkMode, theme]);

  return (
    <div className="page-box" style={pageMode}>
      <Thought />
      <Switch isDarkMode={pageMode === darkStyle} />
    </div>
  );
}
