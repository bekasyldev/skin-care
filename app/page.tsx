import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import ProductList from "@/components/ProductList";
import Questions from "@/components/Questions";
export default function Home() {
  return (
    <>
      <Hero />
      <ProductList />
      <NewsLetter />
      <Questions />
      <Footer />
    </>
  );
}
