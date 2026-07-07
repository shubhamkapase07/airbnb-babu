"use client";

import * as React from "react";
import { UIProvider } from "./ui-context";
import Header from "./Header";
import SubNav from "./SubNav";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Sleep from "./Sleep";
import Amenities from "./Amenities";
import Calendar from "./Calendar";
import BookingCard from "./BookingCard";
import Reviews from "./Reviews";
import LocationMap from "./LocationMap";
import MeetHost from "./MeetHost";
import ThingsToKnow from "./ThingsToKnow";
import Footer from "./Footer";
import PhotoTour from "./PhotoTour";
import Lightbox from "./Lightbox";
import AmenitiesModal from "./AmenitiesModal";
import ReviewsModal from "./ReviewsModal";

export default function ListingPage() {
  const [checkIn, setCheckIn] = React.useState<Date | null>(new Date(2026, 9, 18));
  const [checkOut, setCheckOut] = React.useState<Date | null>(new Date(2026, 9, 23));
  const [guests, setGuests] = React.useState(2);
  const calendarRef = React.useRef<HTMLDivElement>(null);

  const scrollToCalendar = () => {
    const el = document.getElementById("calendar");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <UIProvider>
      <Header />
      <SubNav />

      <main className="mx-auto max-w-[1128px] px-6" id="photos">
        <Gallery />

        {/* Two-column region */}
        <div className="grid grid-cols-1 gap-x-24 lg:grid-cols-[minmax(0,1fr)_370px]">
          <div>
            <Overview />
            <Sleep />
            <Amenities />
            <div ref={calendarRef}>
              <Calendar
                checkIn={checkIn}
                checkOut={checkOut}
                onChange={(ci, co) => {
                  setCheckIn(ci);
                  setCheckOut(co);
                }}
              />
            </div>
          </div>

          {/* Sticky booking column */}
          <aside className="relative hidden lg:block">
            <div className="sticky top-28 pt-8">
              <BookingCard
                checkIn={checkIn}
                checkOut={checkOut}
                guests={guests}
                setGuests={setGuests}
                onEditDates={scrollToCalendar}
              />
            </div>
          </aside>
        </div>

        {/* Full-width sections */}
        <Reviews />
        <LocationMap />
        <MeetHost />
        <ThingsToKnow />
      </main>

      <Footer />

      {/* Overlays */}
      <PhotoTour />
      <Lightbox />
      <AmenitiesModal />
      <ReviewsModal />
    </UIProvider>
  );
}
