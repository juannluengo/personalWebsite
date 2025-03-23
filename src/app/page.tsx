import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import ContentRow from '@/components/ContentRow';
import FreePreviews from '@/components/FreePreviews';
import PromotionalBanner from '@/components/PromotionalBanner';
import Footer from '@/components/Footer';

// Sample data for content rows
const latestReleases = [
  {
    id: 'physical',
    title: 'Physical',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/19/12/7c/19127c34-2f94-f628-4601-61b3ccfa6ec5/U0YtVFZBLVdXLUdhcnZleXNfUGh5c2ljYWxfTGF1bmNoLWJ2LWlkcGwtVmVydGljYWxfTGF1bmNoLlRWQQ.lsr/738x416.webp'
  },
  {
    id: 'home-before-dark',
    title: 'Home Before Dark',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/83/99/ae/8399ae7e-fe05-cb4a-00de-57e33e422843/U0YtVFZBLVdXLUhvbWVfQmVmb3JlX0RhcmtfUzItQlZfSURQTC5wbmc.png/738x416.webp'
  },
  {
    id: 'lisey-story',
    title: 'Lisey\'s Story',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/18/f9/d1/18f9d156-2e05-d156-c2c9-723fec7392ce/U0YtVFZBLVdXLUxpc2V5c19TdG9yeV9MYXVuY2gtQlZfSURQTC5wbmc.png/738x416.webp'
  },
  {
    id: 'trying',
    title: 'Trying',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/fa/bf/a2/fabfa2e1-50e3-fdf3-a975-80f21458397d/U0YtVFZBLVdXLVRyeWluZ19TMy1CaWxsYm9hcmQtQlZfSURQTC5wbmc.png/738x416.webp'
  },
  {
    id: 'schmigadoon',
    title: 'Schmigadoon!',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/52/8a/73/528a7345-4a3f-d46c-288a-bbd0f2a564f8/U0YtVFZBLVdXLVNjaG1pZ2Fkb29uX0xhdW5jaC1CaWxsYm9hcmQtQlZfSURQTC5wbmc.png/738x416.webp'
  }
];

const entireSeasons = [
  {
    id: 'foundation',
    title: 'Foundation',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/79/f5/d5/79f5d5b6-7525-0c68-3ff5-27a16558665e/U0YtVFZBLVdXLUZvdW5kYXRpb25fQnVuZGxlLUJWX0lEUEwucG5n.png/738x416.webp'
  },
  {
    id: 'shrink-next-door',
    title: 'The Shrink Next Door',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/_eDA09NXind71urFUHYUDw/738x416.webp'
  },
  {
    id: 'after-party',
    title: 'The After Party',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/87/fa/3d/87fa3d22-a8a9-7a2e-3a96-f8ba6921fa3f/U0YtVFZBLVdXLVRoZV9BZnRlcnBhcnR5X0xhdW5jaC1CaWxsYm9hcmQtQlZfSURQTC5wbmc.png/738x416.webp'
  },
  {
    id: 'see',
    title: 'See',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/9b/61/45/9b6145e7-dc9a-c1b9-4fc8-db686b453ffd/U0YtVFZBLVdXLVNlZV9TZWFzb24yX0xhdW5jaC1CVl9JRFBMLnBuZw.png/738x416.webp'
  },
  {
    id: 'for-all-mankind',
    title: 'For All Mankind',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/a1/de/02/a1de0276-4469-8dda-c6f2-4a70e62a6512/U0YtVFZBLVdXLUZvckFsbE1hbmtpbmRfUzNfQlZfRlJUVlBMVVMtQlZfSURQTC5wbmc.png/738x416.webp'
  }
];

const upcomingReleases = [
  {
    id: 'wolf-boy',
    title: 'Wolfwalkers',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/32/1e/39/321e395d-2a80-9cf9-3200-7068bea40d2a/U0YtVFZBLVdXLVdvbGZ3YWxrZXJzX0xhdW5jaC1CaWxsYm9hcmQtQlZfSURQTC5wbmc.png/738x416.webp',
    status: 'New Trailer'
  },
  {
    id: 'tehran',
    title: 'Tehran',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/58/57/e1/5857e153-598d-00a4-1ef3-d9b6b79ee7ef/U0YtVFZBLVdXLVRlaHJhbl9MYXVuY2gtQmlsbGJvYXJkLUJWX0lEUEwucG5n.png/738x416.webp',
    status: 'Latest Episode Friday'
  },
  {
    id: 'central-park',
    title: 'Central Park',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/9c/69/62/9c696283-fff2-0839-b06f-e4636d8f8917/U0YtVFZBLVdXLUNlbnRyYWxfUGFya19TMl9MYXVuY2gtQmlsbGJvYXJkLUJWX0lEUEwucG5n.png/738x416.webp',
    status: 'New Episodes Fridays'
  },
  {
    id: 'mosquito-coast',
    title: 'The Mosquito Coast',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/05/f8/30/05f83066-67fb-2a28-e607-a14839dbc6c6/U0YtVFZBLVdXLU1vc3F1aXRvX0NvYXN0X0xhdW5jaC1CaWxsYm9hcmQtQlZfSURQTC5wbmc.png/738x416.webp',
    status: 'Season Finale Now Streaming'
  },
  {
    id: 'mythic-quest',
    title: 'Mythic Quest',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/b8/fa/a3/b8faa37e-329f-2f95-068c-bcb7daa902c1/U0YtVFZBLVdXLU15dGhpY19RdWVzdF9TMl9MYXVuY2gtQlZfSURQTC5wbmc.png/738x416.webp',
    status: 'New Episode Friday'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroCarousel />

      <FreePreviews />

      <ContentRow
        title="Latest Releases"
        seeAllLink="/latest"
        contents={latestReleases}
      />

      <ContentRow
        title="Watch Entire Seasons"
        seeAllLink="/seasons"
        contents={entireSeasons}
      />

      <ContentRow
        title="Coming Soon"
        contents={upcomingReleases}
      />

      <PromotionalBanner />

      <Footer />
    </main>
  );
}
