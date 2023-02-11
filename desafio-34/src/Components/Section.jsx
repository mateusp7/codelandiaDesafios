const Section = () => {
  return (
    <div className="pb-20 max-w-[1200px]" style={{ margin: "0 auto" }}>
      <div className="section-info flex justify-center">
        <ul className="container-info flex flex-row items-center justify-evenly gap-28">
          <li className="flex flex-col items-center gap-4 justify-center">
            <h2 className="text-5xl font-bold text-white">300</h2>
            <p className="text-xl font-semibold text-white">COLEÇÕES</p>
          </li>
          <li className="flex flex-col items-center gap-4 justify-center">
            <h2 className="text-5xl font-bold text-white">+100K</h2>
            <p className="text-xl font-semibold text-white">USUÁRIOS</p>
          </li>
          <li className="flex flex-col items-center gap-4 justify-center">
            <h2 className="text-5xl font-bold text-white">+30K</h2>
            <p className="text-xl font-semibold text-white">NEGOCIAÇÕES</p>
          </li>
          <li className="flex flex-col items-center gap-4 justify-center">
            <h2 className="text-5xl font-bold text-white">+1M</h2>
            <p className="text-xl font-semibold text-white">VISUALIZAÇÕES</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section;
