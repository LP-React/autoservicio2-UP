export const HomeContent = ({ title, content }) => {
  return (
    <div className="w-full">
      <h1 className="text-UP-COLOR2 text-[26px] border-b border-UP-COLOR2 mb-4 w-full">
        {title.toUpperCase()}
      </h1>
      <p className="text-[#666666] text-[14px]">{content}</p>
    </div>
  );
};
