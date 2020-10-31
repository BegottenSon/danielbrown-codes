import posts from './_posts.js';

const blog = posts.map(post => {
	return {
		html: post.html,
		title: post.metadata.title,
		slug: post.metadata.slug,
		picture: post.metadata.picture,
		summary: post.metadata.summary,
		date: post.metadata.date,
		tags: post.metadata.tags,
	}
})

const lookup = new Map();
blog.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

export function get(req, res, next) {

	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}