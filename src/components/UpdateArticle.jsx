import { useState } from "react";

function UpdateArticle({ title, desc, Difficulty, onSubmit }) {
  console.log("UpdateArticle render");

  // const [newTitle, setNewTitle] = useState(title);
  // const [newDesc, setNewDesc] = useState(desc);

  // const handleTitleChange = e => {
  //   setNewTitle(e.target.value);
  // };
  // const handleDescChange = e => {
  //   setNewDesc(e.target.value);
  // };

  const [content, setContent] = useState({
    title: title,
    desc: desc,
    Difficulty: Difficulty || 0,
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(content.title, content.desc, content.Difficulty);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={content.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="Difficulty">난이도</label>
          <input
            type="number"
            name="Difficulty"
            id="Difficulty"
            value={content.Difficulty}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default UpdateArticle;
