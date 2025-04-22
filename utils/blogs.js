import { personalData } from "@/utils/data/personal-data";

async function getBlogs() {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: {
        revalidate: 60 
      },
    //   cache: 'force-cache'
    })
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    const data = await res.json();
    const filtered = data.sort((b, a) => new Date(b.published_at) - new Date(a.published_at));
    return filtered;
  };

  export default getBlogs;

