import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Shane-IL/sveletekit-test.git', // Update to point to your repository
  user: {
   name: 'Shane Goodson', // update to use your name
   email: 'shanegoodson101@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);