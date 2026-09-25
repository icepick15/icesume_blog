import ReteraqAgeGate from "../../components/ReteraqAgeGate";
import ReteraqCta from "../../components/ReteraqCta";

export const metadata = {
  title: "Reteraq demo",
};

export default function Page() {
  const images = [
    {
      src: "https://eurousjobs.com/NG/images48.webp",
      alt: "thumbnail",
      title: "Horny Massive Breast Calabar Mama Fucking Her Young Boy Lover",
      meta: "4,205,889 views - 6 hours ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "6:18",
    },
    {
      src: "https://eurousjobs.com/NG/images62.webp",
      alt: "thumbnail",
      title: "Enugu Hot Babe Super Wet Romance With Calabar Strong Boy",
      meta: "3,447,069 views - 12 hours ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      badge: "Trending",
      duration: "10:38",
    },
    {
      src: "https://eurousjobs.com/NG/images95.webp",
      alt: "Forest path preview",
      title: "Big Nyash Lagos Babe Hard Fucked By Area Boy With Clean Pidgin Voice",
      meta: "2,918,402 views - 1 day ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "8:04",
    },
    {
      src: "https://eurousjobs.com/NG/images95.webp",
      alt: "River valley preview",
      title: "Busty Warri Mama Take Young Boy Cassava And Swallow Cum",
      meta: "1,842,020 views - 2 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      badge: "Trending",
      duration: "7:42",
    },
    {
      src: "https://eurousjobs.com/NG/images64.webp",
      alt: "Snow ridge preview",
      title: "Lagos Massive Booty Girl Hard Fucked By Yahoo Boy Deep Voice",
      meta: "986,331 views - 3 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "9:16",
    },
    {
      src: "https://eurousjobs.com/NG/images108.webp",
      alt: "City street preview",
      title: "Hot Step Mama Ogechi Catch Step Daughter With Boyfriend On Bed",
      meta: "738,099 views - 4 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "5:27",
    },
        {
      src: "https://eurousjobs.com/NG/images78.webp",
      alt: "River valley preview",
      title: "Amazing Hot Sex.. Hausa Babe Swapping With Delta Guy Hot Moan",
      meta: "1,842,020 views - 2 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      badge: "Trending",
      duration: "7:42",
    },
    {
      src: "https://eurousjobs.com/NG/images29.webp",
      alt: "Snow ridge preview",
      title: "Hot Step Mama Ada Catch Her Step Son Inside Bed Wahala HD",
      meta: "986,331 views - 3 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "9:16",
    },
    {
      src: "https://eurousjobs.com/NG/images65.webp",
      alt: "City street preview",
      title: "Hot Step Mama Nkechi Catch Step Son Fucking Her Best Friend HD",
      meta: "738,099 views - 4 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "5:27",
    },
    {
      src: "https://eurousjobs.com/NG/images129.webp",
      alt: "City street preview",
      title: "Horny Benin Mama With Massive Breast Fuck Her Small Houseboy",
      meta: "738,099 views - 4 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "5:27",
    },
    {
      src: "https://eurousjobs.com/NG/images13.webp",
      alt: "City street preview",
      title: "When Sexy Aunty Amaka Wan Nap For Step Son Bed Dick Rise",
      meta: "738,099 views - 4 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "5:27",
    },
    {
      src: "https://eurousjobs.com/NG/images21.webp",
      alt: "City street preview",
      title: "Amazing Hot Sex.. Igbo Hot Babe Swapping With Yoruba Guy Hot Pidgin",
      meta: "738,099 views - 4 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "5:27",
    },

    {
      src: "https://eurousjobs.com/NG/images57.webp",
      alt: "Snow ridge preview",
      title: "University Going Foreign Student Fucked By Landlord Wife",
      meta: "986,331 views - 3 days ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      duration: "9:16",
    },
    {
      src: "https://eurousjobs.com/NG/images94.webp",
      alt: "thumbnail",
      title: "Step Sister Adaeze Want Brother Friend Big Dick Inside Her",
      meta: "3,447,069 views - 12 hours ago",
      destinationUrl: "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/",
      badge: "Trending",
      duration: "10:38",
    },
  ];

  // Where the image CTA sends mobile clicks. Replace with the real destination.
  const destinationUrl = "https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/";

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "20px 14px",
        background: "#050505",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ReteraqAgeGate largeScreenRedirectUrl="https://icesume.com.ng/">
        <div style={{ width: "100%", maxWidth: 420 }}>
          <header
            style={{
              color: "#fff",
              padding: "8px 2px 18px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 900,
                lineHeight: 1,
              }}
            >
              Africa Viral Videos
            </h1>
            <p
              style={{
                margin: "8px 0 0",
                color: "#b8b8b8",
                fontSize: 14,
                lineHeight: 1.4,
              }}
            >
              <a href="https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/" target="_blank" rel="noopener noreferrer">Live Sex</a>  |  <a href="https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/" target="_blank" rel="noopener noreferrer">Audio Sex</a>   |  <a href="https://xplorer.ng/abroad/99000-high-paying-jobs-in-netherlands-with-visa-sponsorship-for-immigrants/" target="_blank" rel="noopener noreferrer">Whatsapp Sex</a>
            </p>
          </header>
          <ReteraqCta
            images={images}
            destinationUrl={destinationUrl}
            intervalMs={5000}
            cardsPerPage={3}
          />
        </div>
      </ReteraqAgeGate>
    </main>
  );
}
