"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Lightbulb, Sparkles, Target } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Clients",
          id: "#clients",
        },
        {
          name: "Team",
          id: "#team",
        },
        {
          name: "FAQs",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Apex Advertising Group"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      title="Elevate Your Brand with Apex Advertising"
      description="We craft compelling narratives and innovative campaigns that drive measurable results for luxury businesses. Partner with a team dedicated to excellence."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@MarketingExec",
          testimonial: "Apex transformed our brand's presence. Their strategic approach and creative execution exceeded all expectations. Truly exceptional!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-businesswoman-black-suit-going-up-escalator-talking-mobile-phone-saleswoman-wal_1258-123502.jpg",
          imageAlt: "Sarah J.",
        },
        {
          name: "David L.",
          handle: "@CEOInnovate",
          testimonial: "The team at Apex provided unparalleled insight and delivered a campaign that significantly boosted our market share. A game-changer.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",
          imageAlt: "David L.",
        },
        {
          name: "Emily R.",
          handle: "@BrandVision",
          testimonial: "Their dedication to understanding our vision was remarkable. Apex's work is not just advertising, it's artistry that delivers results.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-labor-union-member_23-2150969905.jpg",
          imageAlt: "Emily R.",
        },
        {
          name: "Michael S.",
          handle: "@TechGrowth",
          testimonial: "Working with Apex was a seamless experience. They are professional, responsive, and brilliantly creative. Highly recommended!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-business-man-working-computer-office_1303-22662.jpg",
          imageAlt: "Michael S.",
        },
        {
          name: "Jessica B.",
          handle: "@LuxuryMarket",
          testimonial: "Apex Advertising truly understands the luxury market. Their campaigns are sophisticated, effective, and consistently capture our brand's essence.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-attractive-businesswoman-crossing-arms_1262-4724.jpg",
          imageAlt: "Jessica B.",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-professional-business-woman-smiling-outdoor_1391-4.jpg",
          alt: "Client Avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-confident-manager-cafeteria_1098-20954.jpg",
          alt: "Client Avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-beautiful-strict-woman-glasses_1262-1732.jpg",
          alt: "Client Avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/mature-posing-with-blue-jacket_150588-81.jpg",
          alt: "Client Avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-green-suit-using-phone-outside-street_1303-29546.jpg",
          alt: "Client Avatar 5",
        },
      ]}
      avatarText="Join over 100+ satisfied clients"
      imageSrc="http://img.b2bpic.net/free-photo/workplace-with-laptop_23-2147651756.jpg"
      imageAlt="Luxury modern office interior with panoramic view"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Innovation",
          icon: Lightbulb,
        },
        {
          type: "text-icon",
          text: "Strategy",
          icon: Lightbulb,
        },
        {
          type: "text-icon",
          text: "Results",
          icon: Target,
        },
        {
          type: "text-icon",
          text: "Excellence",
          icon: Award,
        },
        {
          type: "text-icon",
          text: "Creativity",
          icon: Sparkles,
        },
      ]}
      marqueeSpeed={40}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      title="Defining the Future of Advertising"
      description="Apex Advertising Group is a full-service agency dedicated to transforming brands through strategic creativity. Our expertise spans digital, print, and experiential marketing, ensuring a cohesive and impactful presence for our clients across all touchpoints."
      bulletPoints={[
        {
          title: "Strategic Vision",
          description: "We develop data-driven strategies that align with your business objectives and market insights.",
        },
        {
          title: "Creative Excellence",
          description: "Our award-winning team crafts captivating campaigns that resonate with your target audience.",
        },
        {
          title: "Measurable Impact",
          description: "We focus on tangible results, providing transparent reporting and continuous optimization.",
        },
        {
          title: "Integrated Solutions",
          description: "From digital to traditional, we offer holistic marketing strategies for maximum reach.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/education-student-lifestyle-career-concept-portrait-young-smart-girl-working-project-sit-coworking-space-college-lounge-floor-reading-book-type-report-laptop_197531-30578.jpg"
      imageAlt="Sleek, modern advertising agency office interior"
      mediaAnimation="opacity"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Strategic Brand Development",
          description: "Crafting compelling brand identities and narratives that resonate with your luxury target audience.",
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-present-boxes-white-background_181624-23440.jpg",
          imageAlt: "Luxury brand identity design",
        },
        {
          title: "Integrated Campaign Management",
          description: "Seamlessly managing multi-channel campaigns from ideation to launch and optimization.",
          imageSrc: "http://img.b2bpic.net/free-photo/online-search-tablet_53876-94844.jpg",
          imageAlt: "Digital marketing campaign on laptop screen",
        },
        {
          title: "Performance Marketing",
          description: "Driving measurable results through data-driven SEO, SEM, and social media advertising strategies.",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-discussing-new-ideas-office_176420-1711.jpg",
          imageAlt: "Brainstorming session for marketing strategy",
        },
      ]}
      title="Our Comprehensive Advertising Solutions"
      description="From initial concept to final execution, we offer a full spectrum of services designed to amplify your brand's voice and reach across all platforms."
    />
  </div>

  <div id="clients" data-section="clients">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Luxury Estates Group",
        "Prestige Motors",
        "Haute Couture Collective",
        "Finest Wines & Spirits",
        "Elite Travel Experiences",
        "Opulent Jewels Co.",
        "Summit Financial Advisors",
      ]}
      title="Trusted by Industry Leaders"
      description="Our portfolio boasts collaborations with distinguished brands across various luxury sectors. We're proud to build lasting partnerships that drive mutual success."
      speed={40}
      showCard={true}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "Eleanor Vance",
          role: "Marketing Director",
          company: "Vance & Co. Luxury Goods",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mature-businessman-using-digital-tablet-caf_23-2147955292.jpg",
          imageAlt: "Eleanor Vance",
        },
        {
          id: "2",
          name: "Marcus Thorne",
          role: "CEO",
          company: "Thorne Capital",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-looking-away_23-2148308568.jpg",
          imageAlt: "Marcus Thorne",
        },
        {
          id: "3",
          name: "Isabella Rossi",
          role: "Brand Manager",
          company: "Rossi Fashion House",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/feedback-comment-survey-support-response-bar-word_53876-133786.jpg",
          imageAlt: "Isabella Rossi",
        },
        {
          id: "4",
          name: "Julian Hayes",
          role: "Founder",
          company: "Hayes Art Gallery",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/serious-young-businessman-pointing-camera_1262-3837.jpg",
          imageAlt: "Julian Hayes",
        },
        {
          id: "5",
          name: "Olivia Chen",
          role: "Chief Experience Officer",
          company: "Elysian Resorts",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/financial-planner-helping-senior-couple-with-various-retirement-strategy_482257-106845.jpg",
          imageAlt: "Olivia Chen",
        },
        {
          id: "6",
          name: "Ethan Stone",
          role: "Head of Digital Strategy",
          company: "Stone & Partners Law",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-attractive-woman-showing-thumb-up-outdoors_1262-12526.jpg",
          imageAlt: "Ethan Stone",
        },
      ]}
      title="What Our Clients Say"
      description="Hear directly from the businesses we've helped achieve their advertising goals and elevate their market standing."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      members={[
        {
          id: "1",
          name: "Victoria Sterling",
          role: "CEO & Lead Strategist",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-cozy-office_23-2149739353.jpg",
          imageAlt: "Victoria Sterling, CEO",
        },
        {
          id: "2",
          name: "Daniel Hayes",
          role: "Chief Creative Officer",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",
          imageAlt: "Daniel Hayes, Chief Creative Officer",
        },
        {
          id: "3",
          name: "Sophia Rodriguez",
          role: "Head of Digital Marketing",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-office_23-2148452664.jpg",
          imageAlt: "Sophia Rodriguez, Head of Digital Marketing",
        },
        {
          id: "4",
          name: "Oliver Vance",
          role: "Client Relations Director",
          imageSrc: "http://img.b2bpic.net/free-photo/pensive-business-man-looking-through-window_1262-3801.jpg",
          imageAlt: "Oliver Vance, Client Relations Director",
        },
      ]}
      title="Meet the Visionaries Behind Apex"
      description="Our diverse team of strategists, creatives, and digital experts are passionate about delivering unparalleled advertising solutions and client success."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "What types of businesses do you work with?",
          content: "We specialize in working with luxury businesses across various sectors, including real estate, automotive, fashion, hospitality, and finance. Our expertise is tailored to clients seeking a premium brand presence.",
        },
        {
          id: "faq-2",
          title: "How do you measure campaign success?",
          content: "We employ a comprehensive approach to track key performance indicators (KPIs) relevant to your objectives. This includes brand awareness, engagement rates, lead generation, conversion rates, and ROI, with transparent reporting.",
        },
        {
          id: "faq-3",
          title: "What is your process for new clients?",
          content: "Our process begins with an in-depth discovery session to understand your brand, goals, and target audience. We then develop a bespoke strategy, followed by creative development, execution, and continuous optimization.",
        },
        {
          id: "faq-4",
          title: "Can you handle both digital and traditional advertising?",
          content: "Yes, we offer integrated solutions covering a full spectrum of channels, including digital marketing (SEO, SEM, social media, content marketing) and traditional advertising (print, OOH, experiential marketing).",
        },
        {
          id: "faq-5",
          title: "What sets Apex Advertising apart?",
          content: "Our commitment to unparalleled creativity, data-driven strategy, and a deep understanding of the luxury market sets us apart. We pride ourselves on crafting bespoke campaigns that deliver exceptional, measurable results.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common inquiries about our services, process, and partnership model. If you don't see your question, feel free to contact us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Get in Touch"
      title="Ready to Transform Your Brand?"
      description="Let's discuss how Apex Advertising Group can elevate your presence and drive exceptional results. Reach out to schedule a consultation."
      inputPlaceholder="Your Business Email"
      buttonText="Start the Conversation"
      termsText="By submitting, you agree to our Privacy Policy and Terms of Service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-vector/illustration-creative-ideas-concept-icon_53876-7957.jpg"
      logoAlt="Apex Advertising Group Logo"
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Clients",
              href: "#clients",
            },
            {
              label: "Team",
              href: "#team",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Apex Advertising Group"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
