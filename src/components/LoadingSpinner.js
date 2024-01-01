function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border-4 border-[#000000] border-t-[#3498db] rounded-[50%] w-10 h-10 animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
