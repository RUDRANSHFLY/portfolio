import { PageInfo } from "../typings";

const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/hella/page-info`
  );

  const data = await res.json();

  const pageInfo: PageInfo[] = data.pageInfo;

  return pageInfo;
};
export { fetchPageInfo };
