import BannerPage from "@/components/Banner/Page";
import Categories from "@/components/Categoris/Categoris";
import HandPickedPage from "@/components/Hand-Picked/page";
import InboxPage from "@/components/Inbox/page";
import LatestPage from "@/components/Latest/page";
import PopularPage from "@/components/Popular/page";

export default function HomePage() {
  return (
    <>
      <BannerPage />
      <PopularPage />
      <Categories />
      <InboxPage />
      <HandPickedPage />
      <LatestPage />
    </>
  );
}
