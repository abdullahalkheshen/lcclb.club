import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Legacy from "./pages/Legacy";
import Team from "./pages/Team";
import Record from "./pages/Record";
import News from "./pages/News";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/legacy"} component={Legacy} />
      <Route path={"/team"} component={Team} />
      <Route path={"/record"} component={Record} />
      <Route path={"/news"} component={News} />
      <Route path={"/partners"} component={Partners} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/calendar"} component={Calendar} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
