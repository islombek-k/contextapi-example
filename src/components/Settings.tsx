import { useTheme } from "../hooks/useTheme";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  console.log("Settings render");
  return (
    <div>
      <p>{theme}</p>
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ cursor: "pointer" }}
      >
        Change theme
      </div>
      {/* Muhammadamin aka uchun easter egg :D (div with onClick)  */}
    </div>
  );
};

export default Settings;
