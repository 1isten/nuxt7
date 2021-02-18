# <%= name %>

> <%= description %>

## Development

``` bash
# Install dependencies
<% if (context.npmClient === 'yarn') { %>yarn install<% } else { %>npm install<% } %>

# Serve with hot-reload at localhost:3000
<%= context.npmClient %> run dev

# Build for production and launch server
<%= context.npmClient %> run build
<%= context.npmClient %> start

# Generate static project
<%= context.npmClient %> run generate
<% if (context.npmClient === 'yarn') { %>yarn start --target static<% } else { %>npm start -- --target static<% } %>
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
