import Profile from "./components/Profile.tsx";
import Sidebar from "./components/Sidebar.tsx";
import ThemeProvider from "./context/ThemeProvider";

export default function App() {
  console.log("App render");
  return (
    <div className="App">
      <ThemeProvider>
        <Sidebar />
        <Profile />
      </ThemeProvider>
    </div>
  );
}
