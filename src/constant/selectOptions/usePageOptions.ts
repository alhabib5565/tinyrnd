import { useGetAllPagesQuery } from "@/redux/api/pages.api";

const usePageOptions = () => {
  const { data, isLoading } = useGetAllPagesQuery({});

  const pageOptions = data?.data.map((page: any) => ({
    label: page?.pageName,
    value: page?.path,
  }));

  return { pageOptions, pageIsLoading: isLoading };
};

export default usePageOptions;
