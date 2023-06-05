const PokeCard = (props: any) => {
  const { sprite } = props;

  return (
    <div className="bg-[#2B2835] w-72 h-96 rounded-2xl p-2 flex flex-col items-center relative">
      <h2 className="text-white mt-2 text-xl absolute h-10">Ditto</h2>
      <img src={sprite} alt="" className="w-full top-10 bottom-14 absolute" />
      <ul className="h-14 bottom-0 absolute">
        <li>Hello World</li>
      </ul>
    </div>
  );
};

export default PokeCard;
