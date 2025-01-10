import BannerActionsDropdown from "@/components/dashboard/banner/BannerActionsDropdown";
import CreateBannerButton from "@/components/dashboard/banner/CreateBannerButton";
import { fetchBanners } from "@/services/banner.api";

const BannerPage = async () => {
  const banners = await fetchBanners();
  return (
    <div className="space-y-6">
      <CreateBannerButton />

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {banners?.map((item) => (
          <div
            key={item._id}
            className="relative aspect-[3/2] bg-cover bg-center w-full rounded-md overflow-hidden"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            {/* Apply the gradient overlay here */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-center items-center p-4 text-white text-lg">
              <div className="absolute top-5 right-5">
                <BannerActionsDropdown bannerData={item} />
              </div>
              <h3 className="text-xl font-bold uppercase text-center w-[80%]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerPage;
