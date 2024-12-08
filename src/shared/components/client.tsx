import useClient from "@/shared/hooks/use-client";

const Client = ({ children }: { children: React.ReactNode }) => {
  const isClient = useClient();

  if (!isClient) {
    return;
  }
  return <>{children}</>;
};

export default Client;
