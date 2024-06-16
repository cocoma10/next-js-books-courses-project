import Editform_course from './../../_comps/Editform_course'
const getBookByid = async (id) => {
  console.log(id);

  try {
    const res = await fetch(`http://localhost:3000/api/formations/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Course");
    }
    const data = await res.json();
    const course = data.course;
    return course;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default async function EditBook({ params }) {
  const { id } = params;
  const course = await getBookByid(id);

  if (!course) {
    return <div>Course not found</div>;
  }

  const {
    title,
    time,
    category,
    price,
    formatteur,
    date,
    description,
    banner,
    video,
  } = course;

  return (
    <Editform_course
      id={id}
      title={title}
      time={time}
      category={category}
      price={price}
      formatteur={formatteur}
      date={date}
      banner={banner}
      video={video}
      description={description}
    />
  );
}