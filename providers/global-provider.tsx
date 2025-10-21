import ModalProvider from "./modal-provider";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div>
        <ModalProvider />
      </div>
    </>
  );
};

export default GlobalProvider;
