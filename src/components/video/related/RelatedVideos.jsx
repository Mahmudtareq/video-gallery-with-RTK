/* eslint-disable react/prop-types */
import { useGetRelatedVideosQuery } from "../../../features/api/apiSlice";
import RelatedVideo from "./RelatedVideo";

import Error from "../../ui/Error";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";

const RelatedVideos = ({ id, title }) => {
  const {
    data: realatedVideos,
    isLoading,
    isError,
  } = useGetRelatedVideosQuery({ id, title });

  let content = null;
  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    );
  }
  if (!isLoading && !isError) {
    content = <Error message="There was an error" />;
  }
  if (!isLoading && !isError && realatedVideos?.length === 0) {
    content = <Error message="No related video found" />;
  }
  if (!isLoading && !isError && realatedVideos?.length > 0) {
    content = realatedVideos.map((video) => (
      <RelatedVideo key={video.id} video={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideos;
