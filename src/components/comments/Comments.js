'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchComments(postId) {
  const res = await axios.get(`/api/posts/${postId}/comments`);
  return res.data;
}

export default function Comments({ postId }) {
  const { data, isLoading } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId),
  });

  if (isLoading) return <p>Loading comments...</p>;

  return (
    <ul className="space-y-2">
      {data.map((c) => (
        <li key={c.id}>{c.text}</li>
      ))}
    </ul>
  );
}
