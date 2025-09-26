// server-side API route (App Router)
export async function GET() {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      content: 'This is dummy content for the first post.',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'Second dummy post content.',
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: 'Third Post',
      content: 'More dummy content to show lists.',
      updatedAt: new Date().toISOString(),
    },
  ];

  // Simulate small delay (optional)
  // await new Promise(r => setTimeout(r, 300));

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
