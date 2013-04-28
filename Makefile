JS_IN=lib/translate.js
JS_OUT=build/translate.min.js

${JS_OUT}: ${JS_IN}
	@mkdir -p build
	@echo "(function() {\nvar module = {};" > ${JS_OUT}
	@cat ${JS_IN} >> ${JS_OUT}
	@echo "self.translate = module.exports;\n}());" >> ${JS_OUT}
	@curl --data-urlencode "js_code@${JS_OUT}" --data "compilation_level=SIMPLE_OPTIMIZATIONS&output_info=compiled_code&output_format=text" http://closure-compiler.appspot.com/compile -o ${JS_OUT} --progress-bar

clean:
	rm -rf build

.PHONY: clean
