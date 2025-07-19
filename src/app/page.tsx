import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Stack from "@/components/landing/stack";
import Projects from "@/components/landing/projects";
import About from "@/components/landing/about";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";
import PersonalizedGreeting from "@/components/landing/personalized-greeting";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stack />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <PersonalizedGreeting />
    </div>
  );
}
