install:
	bower install
	npm install

update:
	bower update
	npm update

test:
	mocha

build:
	grunt build

dev:
	grunt dev

prod:
	grunt prod