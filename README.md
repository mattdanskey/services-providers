# Services/Providers in AngularJS
They can be confusing. Hopefully this makes them less so. Apparently officially they are known as `services` but are often referenced as `providers` (even in the official AngularJS developer guide's header).

`Note: Yes, we have called one of our service recipes 'Service'. We regret this and know that we'll be somehow punished for our misdeed. It's like we named one of our offspring 'Child'. Boy, that would mess with the teachers.` --from the below-linked providers documentation

#### [Click Here](http://mattdanskey.github.io/services-providers) to see the presentation

#### Official Documentation:
[The Developer Guide](https://docs.angularjs.org/guide/providers)

#### What about Angular 2.0?
See [this helpful blog post](http://geek.bluemangointeractive.com/where-have-my-factories-services-constants-and-values-gone-in-angular-2/). Basically, all these different `service/provider/value/factory/constant` concepts get replaced by just using a plain old ES6 class directly.

#### Technologies used to build this presentation:
* [impress.js](https://github.com/bartaz/impress.js) as the presentation framework
* [highlight.js](https://highlightjs.org/) for code highlighting
* [webpack](http://webpack.github.io/) for compiling sass and bundling with livereload-like capabilities while developing
* [Sass](http://sass-lang.com/) because it is awesomeness
* [Autoprefixer](https://github.com/postcss/autoprefixer) so that vendor prefixes don't have to be worried about


Props to [adc](https://github.com/andrewdc) for turning me on to webpack
