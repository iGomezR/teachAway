import axios from '.';

export const getGalleryImages = async ({section = 'hot', showViral=true, window = 'day', sort = 'viral'}) => {
    const response = await axios.get(`/3/gallery/${section}/${sort}/${window}?showViral=${showViral}`);
    const { status, data } = response;
    return status === 200 ? data.data : [];
  };