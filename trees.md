The following files trees are automatically generated by a task in [verbfile.js](verbfile.js).

- [dest files](#generated-files): trees representing the actual generated "dest" files for each task
- [source files](#source-files): trees representing the source files and templates used by each task

_(See Generate's [customization documentation][docs]{customization.md} to learn how to override individual templates.)_

### Generated files

> Files generated by each task

Diffs are base on files generated by the `default` task. Note that some tasks generate files that have different contents but the file path is unchanged (for example, the contents of `index.js` differs based on the task). These files won't show in the diff.

#### default

Files generated by the [default task](#default):

```diff
 .
 ├─┬ test
 │ ├── test.js
 │ └── plugin.js
 ├── .editorconfig
 ├── .eslintrc.json
 ├── .gitattributes
 ├── .gitignore
 ├── .travis.yml
 ├── generator.js
 ├── index.js
 ├── LICENSE
 ├── package.json
 └── README.md
```

#### micro

Files generated by the [micro task](#micro):

```diff
 .
 ├─┬ test
 │ ├── test.js
 │ └── plugin.js
 ├── .editorconfig
 ├── .eslintrc.json
 ├── .gitattributes
 ├── .gitignore
 ├── .travis.yml
 ├── generator.js
 ├── index.js
 ├── LICENSE
 ├── package.json
 └── README.md
```

#### minimal

Files generated by the [minimal task](#minimal):

```diff
 .
-├─┬ test
-│ ├── test.js
-│ └── plugin.js
-├── .editorconfig
-├── .eslintrc.json
-├── .gitattributes
 ├── .gitignore
-├── .travis.yml
 ├── generator.js
 ├── index.js
 ├── LICENSE
 ├── package.json
 └── README.md
```

#### files

Files generated by the [files task](#files):

```diff
 .
-├─┬ test
-│ ├── test.js
-│ └── plugin.js
 ├── .editorconfig
 ├── .eslintrc.json
 ├── .gitattributes
 ├── .gitignore
 ├── .travis.yml
-├── generator.js
-├── index.js
 ├── LICENSE
 ├── package.json
 └── README.md
```

#### rootfiles

Files generated by the [rootfiles task](#rootfiles):

```diff
 .
-├─┬ test
-│ ├── test.js
-│ └── plugin.js
-├── .editorconfig
-├── .eslintrc.json
-├── .gitattributes
-├── .gitignore
-├── .travis.yml
-├── generator.js
-├── index.js
 ├── LICENSE
 ├── package.json
 └── README.md
```

#### dotfiles

Files generated by the [dotfiles task](#dotfiles):

```diff
 .
-├─┬ test
-│ ├── test.js
-│ └── plugin.js
 ├── .editorconfig
 ├── .eslintrc.json
 ├── .gitattributes
 ├── .gitignore
 └── .travis.yml
-├── generator.js
-├── index.js
-├── LICENSE
-├── package.json
-└── README.md
```

#### index

Files generated by the [index task](#index):

```diff
 .
-├─┬ test
-│ ├── test.js
-│ └── plugin.js
-├── .editorconfig
-├── .eslintrc.json
-├── .gitattributes
-├── .gitignore
-├── .travis.yml
-├── generator.js
 └── index.js
-├── LICENSE
-├── package.json
-└── README.md
```

### Source files

> Source files or templates that are used by each task

#### default

Source files and/or libraries used by the [default task](#default):

```diff
 .
 ├─┬ templates
 │ ├─┬ tests
 │ │ ├── test.js
 │ │ └── plugin.js
 │ ├── generator.js
 │ └── index.js
 └─┬ node_modules
   ├─┬ generate-editorconfig
   │ └─┬ templates
   │   └── _editorconfig
   ├─┬ generate-eslint
   │ └─┬ templates
   │   └── _eslintrc.json
   ├─┬ generate-gitattributes
   │ └─┬ templates
   │   └── _gitattributes
   ├─┬ generate-gitignore
   │ └─┬ templates
   │   └── Minimal.gitignore
   ├─┬ generate-travis
   │ └─┬ templates
   │   └── _travis.yml
   ├─┬ generate-license
   │ └─┬ templates
   │   └── mit.tmpl
   ├─┬ generate-package
   │ └─┬ templates
   │   └── $package.json
   └─┬ generate-readme
     └─┬ templates
       └── node.md
```

#### micro

Source files and/or libraries used by the [micro task](#micro):

```diff
 .
 ├─┬ templates
 │ ├─┬ tests
 │ │ ├── test.js
 │ │ └── plugin.js
 │ ├── generator-micro.js
 │ └── index.js
 └─┬ node_modules
   ├─┬ generate-editorconfig
   │ └─┬ templates
   │   └── _editorconfig
   ├─┬ generate-eslint
   │ └─┬ templates
   │   └── _eslintrc.json
   ├─┬ generate-gitattributes
   │ └─┬ templates
   │   └── _gitattributes
   ├─┬ generate-gitignore
   │ └─┬ templates
   │   └── Minimal.gitignore
   ├─┬ generate-travis
   │ └─┬ templates
   │   └── _travis.yml
   ├─┬ generate-license
   │ └─┬ templates
   │   └── mit.tmpl
   ├─┬ generate-package
   │ └─┬ templates
   │   └── $package.json
   └─┬ generate-readme
     └─┬ templates
       └── node.md
```

#### minimal

Source files and/or libraries used by the [minimal task](#minimal):

```diff
 .
 ├─┬ node_modules
 │ ├─┬ generate-gitignore
 │ │ └─┬ templates
 │ │   └── Node.gitignore
 │ ├─┬ generate-license
 │ │ └─┬ templates
 │ │   └── mit.tmpl
 │ ├─┬ generate-package
 │ │ └─┬ templates
 │ │   └── $package.json
 │ └─┬ generate-readme
 │   └─┬ templates
 │     └── node.md
 └─┬ templates
   ├── generator.js
   └── index.js
```

#### files

Source files and/or libraries used by the [files task](#files):

```diff
 .
 └─┬ node_modules
   ├─┬ generate-editorconfig
   │ └─┬ templates
   │   └── _editorconfig
   ├─┬ generate-eslint
   │ └─┬ templates
   │   └── _eslintrc.json
   ├─┬ generate-gitattributes
   │ └─┬ templates
   │   └── _gitattributes
   ├─┬ generate-gitignore
   │ └─┬ templates
   │   └── Minimal.gitignore
   ├─┬ generate-travis
   │ └─┬ templates
   │   └── _travis.yml
   ├─┬ generate-license
   │ └─┬ templates
   │   └── mit.tmpl
   ├─┬ generate-package
   │ └─┬ templates
   │   └── $package.json
   └─┬ generate-readme
     └─┬ templates
       └── node.md
```

#### rootfiles

Source files and/or libraries used by the [rootfiles task](#rootfiles):

```diff
 .
 └─┬ node_modules
   ├─┬ generate-license
   │ └─┬ templates
   │   └── mit.tmpl
   ├─┬ generate-package
   │ └─┬ templates
   │   └── $package.json
   └─┬ generate-readme
     └─┬ templates
       └── node.md
```

#### dotfiles

Source files and/or libraries used by the [dotfiles task](#dotfiles):

```diff
 .
 └─┬ node_modules
   ├─┬ generate-editorconfig
   │ └─┬ templates
   │   └── _editorconfig
   ├─┬ generate-eslint
   │ └─┬ templates
   │   └── _eslintrc.json
   ├─┬ generate-gitattributes
   │ └─┬ templates
   │   └── _gitattributes
   ├─┬ generate-gitignore
   │ └─┬ templates
   │   └── Minimal.gitignore
   └─┬ generate-travis
     └─┬ templates
       └── _travis.yml
```

#### index

Source files and/or libraries used by the [index task](#index):

```diff
 .
 └─┬ node_modules
   └─┬ generate-project
     └─┬ templates
       └── index.js
```

[docs]: https://github.com/generate/generate/blob/master/docs/
