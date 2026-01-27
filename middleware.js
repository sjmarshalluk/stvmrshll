export function middleware(request) {
    const url = new URL(request.url);

    // Only protect work.html
    if (url.pathname !== '/work.html') {
        return;
    }

    const auth = request.headers.get('authorization');

    if (auth) {
        const [scheme, encoded] = auth.split(' ');
        if (scheme === 'Basic') {
            const decoded = atob(encoded);
            const [user, pass] = decoded.split(':');

            // Change these credentials
            if (user === 'steve' && pass === 'portfolio2025') {
                return;
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

export const config = {
    matcher: '/work.html'
};
