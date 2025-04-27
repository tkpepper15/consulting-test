'use client';

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import TeamShowcase from "@/components/TeamShowcase";
import LazyAnimation from "@/components/LazyAnimation";

const HomePage: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <div className="mb-0">
        <Hero />
      </div>
      
      {/* Team Showcase Section with white background */}
      <div className="bg-white py-12 shadow-sm border-b border-primary/5">
        <LazyAnimation delay={0.2} type="fade">
          <Container usePaper={false}>
            <Section
              id="team"
              title="Meet Our Ivy League+ Mentors"
              description="Expert guidance from students at the world's top universities with experience in the current admissions landscape"
            >
              <TeamShowcase />
            </Section>
          </Container>
        </LazyAnimation>
      </div>
      
      {/* Services Section */}
      <LazyAnimation delay={0.3} type="fade">
        <Container>
          <Section
            id="features"
            title="Our Services"
            description="Expert guidance throughout your application journey to the nation’s #1 public high school
(NCSSM) and Top 20 Universities. Get personalized support with monthly check-ins, SAT and
ACT prep, class selection, and more!"
          >
            <Benefits />
          </Section>
        </Container>
      </LazyAnimation>
      
      {/* Pricing Section with subtle primary background */}
      <div className="bg-primary/[0.03] py-12 border-t border-b border-primary/10 my-12">
        <LazyAnimation delay={0.2} type="fade">
          <Container usePaper={false}>
            <Section
              id="pricing"
              title="Simple, Transparent Pricing"
              description="Choose the package that fits your needs"
            >
              <Pricing />
            </Section>
          </Container>
        </LazyAnimation>
      </div>

      {/* Testimonials Section with white background */}
      <div className="bg-white py-12 border-b border-primary/5">
        <LazyAnimation delay={0.2} type="fade">
          <Container usePaper={false}>
            <Section
              id="testimonials"
              title="Success Stories"
              description="Real feedback from accepted students who worked with our mentors"
            >
              <Testimonials />
            </Section>
          </Container>
        </LazyAnimation>
      </div>
      
      {/* FAQ Section with subtle accent background */}
      <div className="bg-accent/[0.03] py-12 border-t border-b border-accent/10">
        <LazyAnimation delay={0.2} type="fade">
          <Container usePaper={false}>
            <Section
              id="faq"
              title="Frequently Asked Questions"
              description="Get answers to common questions"
            >
              <FAQ />
            </Section>
          </Container>
        </LazyAnimation>
      </div>
      
      {/* CTA Section */}
      <LazyAnimation delay={0.3} type="scale" yOffset={20}>
        <div className="mt-6">
          <CTA />
        </div>
      </LazyAnimation>
    </main>
  );
};

export default HomePage;
