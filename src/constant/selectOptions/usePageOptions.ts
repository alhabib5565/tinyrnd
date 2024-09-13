import { useGetAllPagesQuery } from "@/redux/api/pages.api";

const usePageOptions = () => {
  const { data, isLoading } = useGetAllPagesQuery({});

  const pageOptions = data?.data.map((page: any) => ({
    label: page?.pageName,
    url: page?.url,
  }));

  return { pageOptions, pageIsLoading: isLoading };
};

export default usePageOptions;
