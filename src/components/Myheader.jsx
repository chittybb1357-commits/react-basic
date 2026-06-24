// Myheader 컴포넌트
function Myheader({ title, desc, onChangeMode }) {
  console.log("Myheader render");

  {
    /*
      <header>
        <h1
          className="logo"
          onClick={() => {
            setMode("welcome");
          }}
        >
          {subject.title}
        </h1>
        <p>{subject.desc}</p>
      </header>; 
    */
  }

  return (
    <header>
      <h1
        className="logo"
        onClick={() => {
          onChangeMode();
        }}
      >
        {title}
      </h1>
      <p>{desc}</p>
    </header>
  );
}

export default Myheader;
