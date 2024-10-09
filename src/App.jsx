import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./styles/globals.css";
import Navbar from "./components/ui/Navbar";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
               <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
