import React from 'react';
import HeroSection from '../sections/HeroSection';
import ReservationBar from '../sections/ReservationBar';
import StoryTeaserSection from '../sections/StoryTeaserSection';
import SignatureDishSection from '../sections/SignatureDishSection';
import MenuPreviewSection from '../sections/MenuPreviewSection';
import ExperiencesSection from '../sections/ExperiencesSection';
import ChefSection from '../sections/ChefSection';
import TestimonialsSection from '../sections/TestimonialsSection';

export default function HomePage({
  setActivePage,
  onSelectDish,
  onSelectExperience,
  onOpenReservation
}) {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero */}
      <HeroSection
        onExploreMenu={() => setActivePage('menu')}
        onOpenReservation={() => onOpenReservation()}
      />

      {/* 2. Floating Reservation Quick Bar */}
      <ReservationBar
        onOpenReservation={(bookingParams) => onOpenReservation(bookingParams)}
      />

      {/* 3. Editorial Story Teaser */}
      <StoryTeaserSection
        onLearnStory={() => setActivePage('story')}
        onExploreMenu={() => setActivePage('menu')}
      />

      {/* 4. Full-screen Cinematic Signature Dish */}
      <SignatureDishSection
        onSelectDish={onSelectDish}
        onOpenReservation={() => onOpenReservation()}
      />

      {/* 5. Menu Highlights & Category Preview */}
      <MenuPreviewSection
        onSelectDish={onSelectDish}
        onExploreFullMenu={() => setActivePage('menu')}
      />

      {/* 6. Curated Gastronomic Experiences */}
      <ExperiencesSection
        onSelectExperience={onSelectExperience}
        onExploreExperiences={() => setActivePage('experiences')}
      />

      {/* 7. Executive Chef & Master Brigade */}
      <ChefSection
        onDiscoverStory={() => setActivePage('story')}
        onOpenReservation={() => onOpenReservation()}
      />

      {/* 8. Patron Testimonials & Michelin Acclaim */}
      <TestimonialsSection />
    </div>
  );
}
