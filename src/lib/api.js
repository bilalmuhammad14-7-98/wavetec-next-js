'use server';
import axios from 'axios';

let baseURL = 'https://staging.wavetec.com/wp-json/headless/v1/page';

export async function fetchPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}

export async function fetchPlatformDetails(paramId, lang) {
  const res = await axios.get(`${baseURL}/?id=${paramId}&lang=${lang}`);
  console.log('Platform Details Response:', res.data);
  return res.data;
}

// export default function Comments({ postId }) {
//   const { data, isLoading } = useQuery({
//     queryKey: ['comments', postId],
//     queryFn: () => fetchComments(postId),
//   });
