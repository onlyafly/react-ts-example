.PHONY: install watch builddev buildprod

install: 
	npm install

watch:
	webpack --mode=development --watch

builddev:
	webpack --mode=development

buildprod:
	webpack --mode=production