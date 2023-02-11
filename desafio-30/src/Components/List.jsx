import styles from "../styles/List.module.css";

const List = ({ list }) => {
  return (
    <ul className={`flex flex-row gap-9 justify-center`}>
      {list &&
        list.map((item, index) => (
          <li
            className={`${styles.li} ${
              item == "LOJA" || item == "NOVIDADES E TENDÊNCIAS"
                ? styles.active
                : ""
            }`}
            key={index}
          >
            <a className={`text-white text-base uppercase`} href="#loja">
              {item}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default List;
