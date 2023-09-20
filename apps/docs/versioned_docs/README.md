## Docusaurus Versioning

### Generate new version
1. Go to the root of Docusaurus and run: 

`pnpm run docusaurus docs:version 1.1.0`

2. Adjust version `Next` to a different  name at `apps/docs/docusaurus.config.js`

```
    ...
    docs: {
        //////////// here
        lastVersion: 'current',
        versions: {
            current: {
                label: '0.0.1',
                path: '',
            },
        },
    }
    ...
```


### Deleting an existing version
You can delete/remove versions as well.

1. Remove the version from versions.json.
Example:

```
[
  "2.0.0",
  "1.9.0",
- "1.8.0" // remove this line
]
```

2. Delete the versioned docs directory. Example: versioned_docs/version-1.8.0.
3. Delete the versioned sidebars file. Example: versioned_sidebars/version-1.8.0-sidebars.json.

### Refs: https://docusaurus.io/docs/versioning#deleting-an-existing-version