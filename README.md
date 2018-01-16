# Gitter
Tweet git commit messages, with every push to remote repository.

### Prerequisites:
1. git
2. NPM
3. URL you wish to tweet, when the code is pushed.

### Installation instructions:
1: `git init`

2: `npm inst`

3: When npm prompts you for the URL of your repo, you have so input it. If you do not, Gitter will not work.

4: `mv gitter.js .git/hooks/pre-push` Or, manually change the name of gitter.js to pre-push and copy it to `.git/hooks/`. 
<ul>A. It is also important to note that it should **not** have a file extension.</ul>

5: Change the apply the appropriate keys and tokens to `pre-push`.

6: `chmod u+x .git/hooks/pre-push` to make is executable.

7: `npm install`

If each step was followed correctly, every `git push` should now be accompanied by a tweet containing the most recent commit message and a URL.