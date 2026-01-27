export const config = { runtime: 'edge' };

export default async function handler(request) {
    const auth = request.headers.get('authorization');

    if (auth) {
        const [scheme, encoded] = auth.split(' ');
        if (scheme === 'Basic') {
            const decoded = atob(encoded);
            const [user, pass] = decoded.split(':');

            if (user === 'steve' && pass === 'portfolio2025') {
                const url = new URL(request.url);
                const res = await fetch(new URL('/_work.html', url.origin));
                return new Response(res.body, {
                    headers: { 'content-type': 'text/html; charset=utf-8' }
                });
            }
        }
    }

    return new Response('Authentication required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Portfolio"',
            'Content-Type': 'text/plain'
        }
    });
}
