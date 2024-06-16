import Editform from "../../_comps/Editform";

const getBookByid = async (id) => {
  console.log(id);

  try {
    const res = await fetch(`http://localhost:3000/api/livres/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Book");
    }
    const data = await res.json();
    const livre = data.livre;
    return livre;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default async function EditBook({ params }) {
  const { id } = params;
  const book = await getBookByid(id);

  if (!book) {
    return <div>Book not found</div>;
  }

  const {
    title,
    pages,
    category,
    price,
    author,
    date,
    isbn,
    description,
    pdf,
    banner,
  } = book;

  return (
    <Editform
      id={id}
      title={title}
      pages={pages}
      category={category}
      price={price}
      author={author}
      date={date}
      isbn={isbn}
      pdf={pdf}
      banner={banner}
      description={description}
    />
  );
}