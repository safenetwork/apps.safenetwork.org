.DEFAULT_GOAL := start
start:
	@make install
	@make serve

install: test-bundler
	@git submodule update --init --recursive
	@bundle install

serve: test-jekyll
	@bundle exec jekyll serve

build: test-jekyll
	@bundle exec jekyll build

###
# Misc stuff:
###

BUNDLE_EXISTS := $(shell command -v bundle 2> /dev/null)
JEKYLL_EXISTS := $(shell command -v jekyll 2> /dev/null)

test-bundler:
ifndef BUNDLE_EXISTS
	$(error bundler is not installed. Run `gem install bundler`)
endif

test-jekyll:
ifndef JEKYLL_EXISTS
	$(error Jekyll is not installed. Run `make install`)
endif
