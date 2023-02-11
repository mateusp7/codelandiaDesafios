const Button = ({ text }) => {
  return (
    <button className="font-semibold tracking-wider pt-2 pb-2 px-10 box-border rounded-md bg-gradient-to-r from-[#FF8D8D] to-[#F7FC0E] text-[#030303] text-xl max-w-max">
      {text}
    </button>
  );
}

export default Button