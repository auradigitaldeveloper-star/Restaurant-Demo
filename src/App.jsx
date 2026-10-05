import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import AmbientSoundPlayer from './components/AmbientSoundPlayer';
import DishModal from './components/DishModal';
import ReservationModal from './components/ReservationModal';

// Pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import ExperiencesPage from './pages/ExperiencesPage';
import GalleryPage from './pages/GalleryPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [selectedDish, setSelectedDish] = useState(null);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [preselectedReservationDish, setPreselectedReservationDish] = useState(null);
  const [preselectedExperience, setPreselectedExperience] = useState(null);

  // Custom cursor hover states
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add hover listeners to clickable elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, select, textarea, [data-cursor]');
      if (target) {
        setIsHovering(true);
        if (target.getAttribute('data-cursor')) {
          setCursorText(target.getAttribute('data-cursor'));
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('button, a, input, select, textarea, [data-cursor]');
      if (target) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handleOpenReservation = (params = {}) => {
    if (params.experience) {
      setPreselectedExperience(params.experience);
    } else {
      setPreselectedExperience(null);
    }
    setPreselectedReservationDish(null);
    setReservationModalOpen(true);
  };

  const handleReserveForDish = (dish) => {
    setPreselectedReservationDish(dish);
    setPreselectedExperience(null);
    setReservationModalOpen(true);
  };

  const handleSelectExperience = (exp) => {
    setPreselectedExperience(exp);
    setPreselectedReservationDish(null);
    setReservationModalOpen(true);
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#070707] text-[#f4efe6] min-h-screen selection:bg-[#d4af37]/30 selection:text-white overflow-x-hidden">
      {/* 1. Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* 2. Custom Minimalist Luxury Cursor */}
      <CustomCursor cursorText={cursorText} isHovering={isHovering} />

      {/* 3. Ambient Lounge Audio Generator */}
      <AmbientSoundPlayer />

      {/* 4. Global Floating Glass Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* 5. Main Content with Cinematic Page Fade Transition */}
      <main className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {activePage === 'home' && (
              <HomePage
                setActivePage={handleNavigate}
                onSelectDish={(dish) => setSelectedDish(dish)}
                onSelectExperience={handleSelectExperience}
                onOpenReservation={handleOpenReservation}
              />
            )}

            {activePage === 'menu' && (
              <MenuPage
                onSelectDish={(dish) => setSelectedDish(dish)}
                onOpenReservation={handleOpenReservation}
              />
            )}

            {activePage === 'story' && (
              <StoryPage
                onOpenReservation={handleOpenReservation}
                onExploreMenu={() => handleNavigate('menu')}
              />
            )}

            {activePage === 'experiences' && (
              <ExperiencesPage
                onSelectExperience={handleSelectExperience}
                onOpenReservation={handleOpenReservation}
              />
            )}

            {activePage === 'gallery' && (
              <GalleryPage />
            )}

            {activePage === 'reservations' && (
              <ReservationPage />
            )}

            {activePage === 'contact' && (
              <ContactPage />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 6. Master Glass Footer */}
      <Footer
        setActivePage={handleNavigate}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* 7. Full Dish Details Modal */}
      <DishModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveForDish={handleReserveForDish}
      />

      {/* 8. Table Reservation Wizard Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
        preselectedDish={preselectedReservationDish}
        preselectedExperience={preselectedExperience}
      />
    </div>
  );
}
