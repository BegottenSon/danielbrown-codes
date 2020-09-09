const posts = [
	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		picture: `<img src='./church.png' alt='The cover picture for the post' height="300px">`,
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Essential To Assemble',
		slug: 'essential-to-assemble',
		picture: `<img src='./' alt='The cover picture for the post' height="300px">`,
		html: `
		<p class="blogPara">
		Summertime, a nice normal sunny Sunday, I’m inside watching a tv program cause it’s 2020... you know, pandemic. 
		While checking out this docu-series of the big moments that shaped the 80’s, I saw this part where Michael Jackson and many all-star artists were in the studio recording “We Are the World”. 
		As I’m taking in how Michael Jackson stay on point with his vocals, I imagined how cool it would be to be in a room with other great artists and music creators. 
		That’s when the thunder struck and the brainstorm began.
		</p>
		<p class="blogPara">
			The immediate next thought was, “Why wait until you’re in the room with the greats when you can create the room?” 
			I thought about how many Creatives I knew and how exciting it would be to have all of us in one studio feeding off of each other’s energy. 
			How about artists who never worked together? What would we create? What studio would we go to that would hold all of us?
		</p>
		<p class="blogPara">
			Immediately I thought about Sheffield’s studio. My excitement level was high at this point. 
			I could imagine the magic happening between the Creatives in the room and the growing collaboration that could lead to a community of artists and producers supporting one another. 
			I called Ty and broke down the idea and without hesitation he said “Let’s put it on the books immediately! I’m ready to do this like yesterday!” 
			We didn’t even have a name for it yet but we ran with the idea right away. Only after booking the studio I came up with the name, Creative Discourse.
		</p>
		<p class="blogPara">
			Creative Discourse is the event where a discussion is taking place in the language of music. 
			As Music Creatives, music is our native tongue and after the first event, I felt the energy in the room and knew that this has a chance to be something great in the music community. 
			Collaboration that normally wouldn’t have happened and exercises in creativity that normally wouldn’t have taken place. I’m excited to see where this goes as the community grows.
		</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
