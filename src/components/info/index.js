import React from 'react';
import InfoSection from './info-section';
import { Section, Link } from './info.style';

export default function Info() {
  return (
    <Section>
      <InfoSection id="how-it-works" headline="How it works">
        • We find the 500 top posts from the past year for a subreddit.
        <br />
        • The data is visualized in a heatmap grouped by weekday and hour of the day.
        <br />
        • See immediately when to submit your reddit post.
        <br />
      </InfoSection>
      <InfoSection id="about" headline="About">
        This app was created during a course on
        {' '}
        <Link href="https://profy.dev">profy.dev</Link>
        {' '}
        with the goal to implement a pixel&#x2011;perfect real-world application with professional
        workflows and tools like Kanban, Asana, Zeplin, GitHub, pull requests and code reviews.
        {' '}
        <Link href="https://profy.dev/employers">Click here for more information.</Link>
      </InfoSection>
    </Section>
  );
}
