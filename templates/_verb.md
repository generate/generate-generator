If you're not familiar with [generate][], it might help to take a look at the [getting started][] guide. 

## API

To use this generator in another generator, do the following:

```js
module.exports = function(gen, base) {
  gen.extendWith('<%= name %>');
  
};
```

## CLI

```sh
$ gen <%= alias %>
```