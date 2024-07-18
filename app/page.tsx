import Header from "../components/Header";
import CardDetailsForm from "../components/CardDetialsForm";
import { CardProvider } from "@/contexts/CardContext";

export default function Home() {
  return (
    <CardProvider>
      <Header />
      <main className=" ">
        <CardDetailsForm />
      </main>
    </CardProvider>
  );
}
