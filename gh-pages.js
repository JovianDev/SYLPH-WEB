import { publish } from 'gh-pages';

publish(
	'./build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/JovianDev/SYLPH-WEB.git', // Update to point to your repository
		user: {
			name: 'Nick Andreala',
			email: 'nandreala@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
