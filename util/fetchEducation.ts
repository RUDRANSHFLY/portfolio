import { Education } from "../typings";

const fetchEducation = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/hella/education`
  );

  const data = await res.json();

  const education: Education[] = data.education;

  return education;
};
export { fetchEducation };
