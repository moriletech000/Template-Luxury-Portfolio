import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Cursor } from './components/Cursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';

// Lazy load ProjectDetail page
const ProjectDetail = lazy(() =>
  import('./pages/ProjectDetail').then((module) => ({
    default: module.ProjectDetail,
  }))
);

const About = lazy(() =>
  import('./pages/About').then((module) => ({
    default: module.About,
  }))
);

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="font-display text-2xl text-accent animate-pulse">
      Loading...
    </div>
  </div>
);

// Animated Routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/project/:id"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg text-text">
        <LoadingScreen />
        <Cursor />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
