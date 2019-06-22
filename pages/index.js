import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default () => (
  <main>
    <Header />
    <section>
      I'm Rocco, Technology addicted and CTO at <a href="https://www.voxnest.com">Voxnest</a>.
      <br />
      You can find me <a href="https://twitter.com/roccozanni">@roccozanni</a> on Twitter.
    </section>
    <Footer />
  </main>
);
