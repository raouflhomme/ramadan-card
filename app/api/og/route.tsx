import { ImageResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'Hello';

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        👋 {name}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
