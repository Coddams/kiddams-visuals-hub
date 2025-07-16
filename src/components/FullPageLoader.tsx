import Spinner from "@/components/Spinner";

const FullPageLoader = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
    <div className="flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
      <Spinner size="xl" />
    </div>
  </div>
);

export default FullPageLoader;
