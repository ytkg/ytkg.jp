# ytkg.jp

```bash
$ curl -s https://ytkg.jp | jq
{
  "site": "https://takagi.dev",
  "blog": "https://takagi.blog",
  "github": "https://github.com/ytkg",
  "mail": "takagi@ytkg.jp"
}
```

## Redirect by path
- Pattern: `/:service`
- Supported: `site` / `blog` / `github`
- Examples:
  - `https://ytkg.jp/github` → `https://github.com/ytkg`
  - `https://ytkg.jp/site` → `https://takagi.dev`
  - `https://ytkg.jp/blog` → `https://takagi.blog`
- Others: unknown service → redirect to `/`

## Development
```bash
$ yarn start
```

## Deployment
```bash
$ yarn deploy
```
