// Nav 컴포넌트
import { memo } from "react";

// list에 출력할 코드 생성
const Nav = memo(function Nav({ data, onChangeMode }) {
  console.log("Nav render");

  const lists = data.map(d => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        data-id={d.id}
        onClick={e => {
          // console.log(e.target.dataset.id)

          e.preventDefault();
          onChangeMode(Number(e.target.dataset.id));
        }}
      >
        {d.title}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
});

export default Nav;
