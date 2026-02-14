const blogPosts = [
    {
        id: 'testing-mal',
        title: 'Por qué la mayoría de equipos testea mal',
        excerpt: 'El error común de buscar cobertura del 100% en lugar de riesgo del 0%. Una crítica al vanity metric y la obsesión por los números sin contexto.',
        date: 'Oct 2025',
        url: 'blog/testing-mal.html'
    },
    {
        id: 'qa-no-pulsar',
        title: 'QA no es pulsar botones',
        excerpt: 'La evolución del rol: de encontrar bugs a diseñar sistemas que impiden que los bugs existan. El cambio de mentalidad de tester a ingeniero de calidad.',
        date: 'Sep 2025',
        url: 'blog/qa-no-pulsar.html'
    },
    {
        id: 'automatizar-inutil',
        title: 'Automatizar sin estrategia es inútil',
        excerpt: 'Cómo evitar la paradoja de la automatización: mantener tests frágiles que consumen más tiempo del que ahorran. La importancia del ROI en el test automation.',
        date: 'Ago 2025',
        url: 'blog/automatizar-inutil.html'
    }
];

function loadBlogPosts() {
    const container = document.getElementById('blog-container');
    if (!container) return;

    // Clear existing content (if any placeholder exists)
    container.innerHTML = '';

    // Take the first 3 posts
    const recentPosts = blogPosts.slice(0, 3);

    recentPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-card';
        // Check if we are in a subdirectory (like /blog/) or root to adjust relative paths if needed. 
        // For simplicity, we assume this runs on index.html where path is relative base.
        // If run on /blog/index.html, we might need adjustments, but we'll handle that there separately or use absolute paths.
        // Using straightforward logic for Home Page injection.

        article.innerHTML = `
            <div class="blog-date">${post.date}</div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="${post.url}" class="read-more">Leer artículo →</a>
        `;
        container.appendChild(article);
    });
}

// Export for usage if using modules, but for simple script inclusion:
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadBlogPosts);
} else {
    loadBlogPosts();
}
