import MusicPlayerModal from "@/features/players/components/music-player/music-player";
import WithModalWrapper from "@/shared/ui/@core/with-modal-wrapper";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WithModalWrapper>
      {children}
      <MusicPlayerModal />
    </WithModalWrapper>
  );
}
