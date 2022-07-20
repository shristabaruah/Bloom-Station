const filterOptions = (posts, filterType) => {
  switch (filterType) {
    case "noFilter":
      return [...posts];
    case "Popular":
      return [...posts].sort((a, b) => {
        const popularA = a.likes?.likeCount + a.comments?.length;
        const popularB = b.likes?.likeCount + b.comments?.length;
        return popularB - popularA;
      });
    case "Oldest_First":
      return [...posts].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "Newest_First":
      return [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    default:
      return [...posts];
  }
};
export { filterOptions };
