PUBLIC_PATH=public/

github-deploy:
	git subtree push --prefix $(PUBLIC_PATH) origin gh-pages
