import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // استلام الاسم
    const name = searchParams.get('name')?.slice(0, 100) || 'ضيف كريم';
    
    // تحميل الخط
    const fontData = await fetch(
      new URL('https://fonts.gstatic.com/s/tajawal/v9/Iura6YBj_oCad4k1nzSBC45I.woff2', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%', width: '100%', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#047857',
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex',
          }} />

          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            border: '4px solid #FFD700', borderRadius: 20, padding: '40px 60px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 0 50px rgba(0,0,0,0.5)', zIndex: 10,
          }}>
             <div style={{ fontSize: 30, color: '#047857', marginBottom: 20, fontFamily: 'Tajawal' }}>
               تهنئة خاصة بحلول شهر رمضان
             </div>
             <div style={{ fontSize: 80, fontWeight: 'bold', color: '#1e293b', fontFamily: 'Tajawal', textAlign: 'center' }}>
               {name}
             </div>
             <div style={{ fontSize: 24, color: '#d97706', marginTop: 20, fontFamily: 'Tajawal' }}>
               رمضان مبارك
             </div>
          </div>
        </div>
      ),
      {
        width: 1200, height: 630,
        fonts: [{ name: 'Tajawal', data: fontData, style: 'normal' }],
      },
    );
  } catch (e: any) {
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
