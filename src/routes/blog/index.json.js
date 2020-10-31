import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.metadata.title,
		slug: post.metadata.slug,
		picture: post.metadata.picture,
		summary: post.metadata.summary,
		date: post.metadata.date,
		tags: post.metadata.tags,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}