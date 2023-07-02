import { IconDefinition, faCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleHalfStroke,
  faCircle as faCircleStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useGlobalStore } from "@/store";
import { ThemeMode } from "@/themes";

export function Switch({ isDarkMode }: { isDarkMode: boolean }): JSX.Element {
  const theme = useGlobalStore((state) => state.theme);
  const setTheme = useGlobalStore((state) => state.setTheme);

  const [themeIcon, setThemeIcon] = React.useState<IconDefinition>(faCircleHalfStroke);

  const updateIcon = (themeMode: ThemeMode) => {
    switch (themeMode) {
      case ThemeMode.AUTO: {
        setThemeIcon(faCircleHalfStroke);
        break;
      }
      case ThemeMode.DARK: {
        setThemeIcon(faCircleStroke);
        break;
      }
      case ThemeMode.LIGHT: {
        setThemeIcon(faCircle);
        break;
      }
    }
  };

  const onClick = () => {
    const themeValues = Object.values(ThemeMode);
    const currentThemeIndex = themeValues.indexOf(theme);
    const nextThemeIndex =
      currentThemeIndex < themeValues.length - 1 ? currentThemeIndex + 1 : 0;

    setTheme(themeValues[nextThemeIndex]);
  };

  React.useEffect(() => {
    updateIcon(theme);
  }, [theme]);

  return (
    <button className="switch-button" onClick={onClick}>
      <FontAwesomeIcon icon={themeIcon} inverse={isDarkMode} />
    </button>
  );
}
