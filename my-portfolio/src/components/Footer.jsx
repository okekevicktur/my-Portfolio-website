const Footer = () => {
  const dt = new Date();
  let year = dt.getFullYear();
  return (
    <div className="text-[0.875] font-medium flex justify-center items-center">
      <span>© Victor Okeke. {year} All rigths reserved</span>
    </div>
  );
};

export default Footer;
