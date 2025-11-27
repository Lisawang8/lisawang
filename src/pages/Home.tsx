/**
 * Home page for Lisa Wang's professional resume landing site.
 * Composes all high-level sections into a single scrolling experience.
 */

import React from 'react'
import { NavigationBar } from '../sections/lisa/NavigationBar'
import { HeroSection } from '../sections/lisa/HeroSection'
import { AboutSection } from '../sections/lisa/AboutSection'
import { StrengthsSection } from '../sections/lisa/StrengthsSection'
import { ExperienceSection } from '../sections/lisa/ExperienceSection'
import { AchievementsSection } from '../sections/lisa/AchievementsSection'
import { VolunteeringSection } from '../sections/lisa/VolunteeringSection'
import { EducationSection } from '../sections/lisa/EducationSection'
import { ContactSection } from '../sections/lisa/ContactSection'

/**
 * HomePage renders the full single-page resume layout for Lisa Wang.
 */
/**
 * Home page for Lisa Wang's professional resume landing site.
 * Composes all high-level sections into a single scrolling experience.
 */

import React, { useEffect } from 'react'
import { NavigationBar } from '../sections/lisa/NavigationBar'
import { HeroSection } from '../sections/lisa/HeroSection'
import { AboutSection } from '../sections/lisa/AboutSection'
import { StrengthsSection } from '../sections/lisa/StrengthsSection'
import { ExperienceSection } from '../sections/lisa/ExperienceSection'
import { AchievementsSection } from '../sections/lisa/AchievementsSection'
import { VolunteeringSection } from '../sections/lisa/VolunteeringSection'
import { EducationSection } from '../sections/lisa/EducationSection'
import { ContactSection } from '../sections/lisa/ContactSection'

/**
 * HomePage renders the full single-page resume layout for Lisa.
 * Version: Bright / Modern theme (light gray background, deep-blue text).
 */
export default function HomePage() {
  /**
   * Set the browser tab title for the site.
   */
  useEffect(() => {
    document.title = 'Lisa Wang - Financial Analyst'
  }, [])

  /**
   * Page root: use a bright, airy background (light gray) with deep-sea-blue text.
   * Inner content sections are white cards for clear contrast and readability.
   */
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <NavigationBar />
      <main>
        <HeroSection />
        <div className="bg-gray-50 text-slate-900">
          <AboutSection />
          <StrengthsSection />
          <ExperienceSection />
          <AchievementsSection />
          <VolunteeringSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>
    </div>
  )
}